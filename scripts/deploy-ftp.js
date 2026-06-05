#!/usr/bin/env bun
// Build-and-deploy helper: mirrors the built `_site/` directory to the
// production web root over FTPS (falling back to plain FTP).
//
// Config comes from a local `.env` file (auto-loaded by Bun). See `.env.example`.
// Usage:
//   bun run scripts/deploy-ftp.js            # upload + prune (true mirror)
//   bun run scripts/deploy-ftp.js --dry-run  # show what would change, touch nothing
//
// The repo's package.json wraps this as:
//   bun run deploy       # build, then deploy
//   bun run deploy:ftp   # deploy existing _site/ without rebuilding

import { Client } from "basic-ftp";
import { readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const LOCAL_DIR = "_site";
const DRY_RUN = process.argv.includes("--dry-run");

// --- Config & validation -------------------------------------------------

function loadConfig() {
  const required = ["FTP_HOST", "FTP_USER", "FTP_PASSWORD", "FTP_REMOTE_DIR"];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length) {
    fail(
      `Missing required env var(s): ${missing.join(", ")}\n` +
        `Copy .env.example to .env and fill it in.`
    );
  }

  const remoteDir = process.env.FTP_REMOTE_DIR.trim();
  // Guard: never let mirror-with-delete loose on the server root.
  if (remoteDir === "" || remoteDir === "/" || remoteDir === ".") {
    fail(
      `FTP_REMOTE_DIR is "${remoteDir}", which is the server root. ` +
        `Refusing to run so we don't prune the whole server. ` +
        `Set it to the site's web root, e.g. /httpdocs`
    );
  }

  // FTP_SECURE: auto (FTPS then FTP) | true (FTPS required) | false (plain FTP)
  const secure = (process.env.FTP_SECURE || "auto").trim().toLowerCase();

  // FTP_TLS_INSECURE=true skips TLS certificate verification. Only enable this
  // for hosts whose FTPS cert is self-signed or has a hostname mismatch (common
  // on shared hosting). It weakens protection against MITM, so it's opt-in.
  const tlsInsecure = (process.env.FTP_TLS_INSECURE || "").trim().toLowerCase() === "true";

  return {
    host: process.env.FTP_HOST.trim(),
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: process.env.FTP_PORT ? Number(process.env.FTP_PORT) : 21,
    remoteDir,
    secure,
    tlsInsecure,
  };
}

// --- Local file walking --------------------------------------------------

// Returns a Set of POSIX-style relative paths (files and dirs) under root.
async function walkLocal(root) {
  const entries = new Set();
  async function recurse(dir) {
    for (const name of await readdir(dir)) {
      const abs = join(dir, name);
      const rel = relative(root, abs).split("\\").join("/");
      const info = await stat(abs);
      entries.add(rel + (info.isDirectory() ? "/" : ""));
      if (info.isDirectory()) await recurse(abs);
    }
  }
  await recurse(root);
  return entries;
}

// --- Remote prune --------------------------------------------------------

// Recursively delete remote files/dirs that don't exist in `localEntries`.
// `relBase` is the path relative to remoteDir (POSIX), "" at the top.
async function pruneRemote(client, remoteDir, relBase, localEntries, stats) {
  const absDir = relBase ? `${remoteDir}/${relBase}` : remoteDir;
  const list = await client.list(absDir);
  for (const item of list) {
    if (item.name === "." || item.name === "..") continue;
    const rel = relBase ? `${relBase}/${item.name}` : item.name;
    const isDir = item.isDirectory;
    const key = rel + (isDir ? "/" : "");

    if (localEntries.has(key)) {
      if (isDir) await pruneRemote(client, remoteDir, rel, localEntries, stats);
      continue;
    }

    // Not present locally -> remove it.
    if (isDir) {
      console.log(`  ${DRY_RUN ? "[dry-run] would remove dir " : "- removing dir  "}${rel}/`);
      stats.removedDirs++;
      if (!DRY_RUN) await client.removeDir(`${remoteDir}/${rel}`);
    } else {
      console.log(`  ${DRY_RUN ? "[dry-run] would remove    " : "- removing      "}${rel}`);
      stats.removedFiles++;
      if (!DRY_RUN) await client.remove(`${remoteDir}/${rel}`);
    }
  }
}

// --- Connection ----------------------------------------------------------

async function connect(client, cfg) {
  const base = { host: cfg.host, user: cfg.user, password: cfg.password, port: cfg.port };

  if (cfg.secure === "false") {
    await client.access({ ...base, secure: false });
    return "FTP (plain)";
  }

  // Verify TLS certs by default; only skip when explicitly opted in.
  const secureOptions = cfg.tlsInsecure ? { rejectUnauthorized: false } : undefined;
  if (cfg.tlsInsecure) {
    console.log("  ⚠ FTP_TLS_INSECURE=true: skipping TLS certificate verification.");
  }

  try {
    await client.access({ ...base, secure: true, secureOptions });
    return cfg.tlsInsecure ? "FTPS (TLS, cert unverified)" : "FTPS (TLS)";
  } catch (err) {
    if (cfg.secure === "true") {
      throw new Error(`FTPS required but the server rejected TLS: ${err.message}`);
    }
    // auto: fall back to plain FTP
    console.log(`  FTPS failed (${err.message}); falling back to plain FTP...`);
    await client.access({ ...base, secure: false });
    return "FTP (plain, fell back from FTPS)";
  }
}

// --- Main ----------------------------------------------------------------

function fail(msg) {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  const cfg = loadConfig();

  // Confirm the build output exists before we touch the network.
  try {
    const s = await stat(LOCAL_DIR);
    if (!s.isDirectory()) throw new Error("not a directory");
  } catch {
    fail(`Local build dir "${LOCAL_DIR}" not found. Run \`bun run build\` first.`);
  }

  const localEntries = await walkLocal(LOCAL_DIR);
  const fileCount = [...localEntries].filter((e) => !e.endsWith("/")).length;

  console.log(`\nDeploy target : ${cfg.host}:${cfg.remoteDir}`);
  console.log(`Source        : ${LOCAL_DIR}/ (${fileCount} files)`);
  console.log(`Mode          : ${DRY_RUN ? "DRY RUN (no changes)" : "mirror (upload + prune)"}\n`);

  const client = new Client(30_000);
  const stats = { removedFiles: 0, removedDirs: 0 };
  try {
    const how = await connect(client, cfg);
    console.log(`Connected via ${how}.`);

    await client.ensureDir(cfg.remoteDir);

    // 1) Upload everything (overwrites changed files, creates dirs).
    console.log(DRY_RUN ? "Skipping upload (dry run)." : "Uploading _site/ ...");
    if (!DRY_RUN) {
      await client.uploadFromDir(LOCAL_DIR, cfg.remoteDir);
    }

    // 2) Prune remote entries that no longer exist locally.
    console.log(DRY_RUN ? "Checking for files to prune:" : "Pruning removed files:");
    await pruneRemote(client, cfg.remoteDir, "", localEntries, stats);

    console.log(
      `\n✓ ${DRY_RUN ? "Dry run complete" : "Deploy complete"}. ` +
        `${fileCount} files ${DRY_RUN ? "would be uploaded" : "uploaded"}, ` +
        `${stats.removedFiles} file(s) + ${stats.removedDirs} dir(s) ` +
        `${DRY_RUN ? "would be pruned" : "pruned"}.\n`
    );
  } catch (err) {
    fail(`Deploy failed: ${err.message}`);
  } finally {
    client.close();
  }
}

main();
