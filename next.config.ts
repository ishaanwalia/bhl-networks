import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // ← ADD THIS
  images: {
    unoptimized: true,
  },
};

export default nextConfig;