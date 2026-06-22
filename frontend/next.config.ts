import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      // Fix Windows ENOENT race condition with webpack pack file cache
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
