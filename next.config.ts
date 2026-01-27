import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static export para Nginx
  images: {
    unoptimized: true,  // Necesario para export estático
  },
  trailingSlash: true,  // URLs limpias con /
};

export default nextConfig;
