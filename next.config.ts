import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Other config options
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withNextIntl(withMDX(nextConfig));
