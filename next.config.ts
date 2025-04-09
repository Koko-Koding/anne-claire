import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Other config options
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX()

export default withMDX(withNextIntl(nextConfig));
