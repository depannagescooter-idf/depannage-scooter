import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "depannagescooter.com" }],
        destination: "https://www.depannagescooter.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
