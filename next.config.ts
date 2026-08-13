import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.artstation.com",
      },
    ],
  },
};

export default nextConfig;
