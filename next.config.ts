import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "placeimg.com" },
      { protocol: "https", hostname: "pravatar.cc" },
      { protocol: "https", hostname: "sanbercode.com" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;