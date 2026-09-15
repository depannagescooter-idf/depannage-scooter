import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
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
      {
        source: "/zones-intervention/garges-les-gonneuse/",
        destination: "/zones-intervention/garges-les-gonesse/",
        permanent: true,
      },
      {
        source: "/zones-intervention/garges-les-gonneuse",
        destination: "/zones-intervention/garges-les-gonesse/",
        permanent: true,
      },
    ];
  },
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
      // HTML : pas de cache CDN longue durée — footer/NAP toujours à jour après déploiement
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
      { key: "CDN-Cache-Control", value: "public, max-age=0, must-revalidate" },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
      {
        source: "/images/logo-carre-orange.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
      {
        source: "/images/logo.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
