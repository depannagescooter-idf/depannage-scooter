import type { NextConfig } from "next";
import { retiredZoneSlugList } from "./src/data/retired-zone-slugs";
import { depannageServices, remorquageServices } from "./src/data/services";

const retiredDepartmentSlugs = ["seine-et-marne", "yvelines", "essonne", "val-doise"];
const retiredCitySlugs = ["versailles", "evry-courcouronnes", "argenteuil", "cergy"];

function permanentRedirect(source: string, destination: string) {
  return { source, destination, permanent: true as const };
}

function bothSlashes(source: string, destination: string) {
  const bare = source.endsWith("/") ? source.slice(0, -1) : source;
  const dest = destination.endsWith("/") ? destination : `${destination}/`;
  return [permanentRedirect(bare, dest), permanentRedirect(`${bare}/`, dest)];
}

const retiredRedirects = [
  ...retiredZoneSlugList.flatMap((slug) => bothSlashes(`/zones-intervention/${slug}/`, "/zones-intervention/")),
  ...retiredDepartmentSlugs.flatMap((slug) => bothSlashes(`/zones-intervention/${slug}/`, "/zones-intervention/")),
  ...retiredCitySlugs.flatMap((city) => [
    ...depannageServices.flatMap((service) =>
      bothSlashes(`/depannage-sur-place/${service.slug}/${city}/`, `/depannage-sur-place/${service.slug}/`),
    ),
    ...remorquageServices.flatMap((service) =>
      bothSlashes(`/remorquage/${service.slug}/${city}/`, `/remorquage/${service.slug}/`),
    ),
  ]),
];

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
      ...retiredRedirects,
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
      {
        source: "/depannage-sur-place/batterie-voiture",
        destination: "/depannage-voiture/batterie/",
        permanent: true,
      },
      {
        source: "/depannage-sur-place/batterie-voiture/",
        destination: "/depannage-voiture/batterie/",
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
      // HTML : pas de cache edge Vercel entre déploiements (CDN-Cache-Control seul ne suffit pas).
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
      { key: "CDN-Cache-Control", value: "public, max-age=0, must-revalidate" },
      { key: "Vercel-CDN-Cache-Control", value: "no-store" },
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
