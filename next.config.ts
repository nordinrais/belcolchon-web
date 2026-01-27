import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modo servidor SSR para Dokploy
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
