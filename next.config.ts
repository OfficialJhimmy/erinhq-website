import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

// Define the custom config with bundle analyzer
const nextConfig: NextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/portfolio/:id',
        destination: '/projects/:id',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
