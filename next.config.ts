import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the multiple lockfiles warning by setting turbopack root
  turbopack: {
    root: __dirname,
  },
  // Allow images from the EFS Solar WordPress CDN
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.efssolar.com.au",
      },
    ],
  },
  // Enable gzip compression
  compress: true,
  // Add security and caching headers
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
