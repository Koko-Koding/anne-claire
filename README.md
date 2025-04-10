# Anne-Claire Therapist Website

This is a static, multi-lingual website for a self-employed therapist, built using Eleventy with Tailwind CSS. The site is designed to be statically generated and hosted on an Apache server.

## Features

- **Multi-lingual Support**: The website supports Dutch and English, accessible via `/` (Dutch) and `/en` (English) routes.
- **Static Generation**: Optimized for fast loading and SEO.
- **Custom Fonts**: Fonts are stored in the `./public/fonts` directory.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive layout.

## Project Structure

- `public/`: Contains static assets like fonts and images.
- `content/`: Houses the content for the website, organized by language.
- `_includes/`: Contains reusable templates and components.
- `_site/`: The output directory for the generated static files.

## Installation

To install dependencies, use [Bun](https://bun.sh):

```bash
bun install
```

## Development

To start the development server:

```bash
bun run start
```

## Build

To generate the static files for production:

```bash
bun run build
```

## Deployment

The generated static files can be found in the `_site/` directory after running the build command. These files can be uploaded to an Apache server for hosting.

## Hosting on Apache

1. Ensure the `_site/` directory is uploaded to your Apache server.
2. Configure Apache to serve the static files.

## Fonts

Custom fonts are located in the `./public/fonts` directory. Ensure these are correctly referenced in your Tailwind CSS configuration.

## Additional Commands

### Tailwind CSS Build

To build the Tailwind CSS styles for production:

```bash
bun run tailwindcss:build
```

This command compiles the Tailwind CSS styles from `./src/css/styles.css` into a minified CSS file located at `./public/css/bundle.css`.

### Tailwind CSS Watch

To watch for changes in the Tailwind CSS files and automatically rebuild:

```bash
bun run tailwindcss:watch
```

This command watches the `./src/css/styles.css` file and updates the output CSS file in `./public/css/bundle.css` whenever changes are detected.

### Eleventy Build

To generate the static files for the website:

```bash
bun run eleventy:build
```

This command runs Eleventy to generate the static files and outputs them to the `_site/` directory.

### Eleventy Watch

To start a local development server with Eleventy:

```bash
bun run eleventy:watch
```

This command starts a local server and watches for changes in the content or templates, automatically regenerating the static files.

## License

This project is licensed under the MIT License.
