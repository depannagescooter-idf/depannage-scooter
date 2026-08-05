import type { Metadata } from "next";
import { company } from "@/data/company";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? company.url;
  return url.replace(/\/$/, "");
}

export function isProduction(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENV === "production" ||
    process.env.VERCEL_ENV === "production"
  );
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export function defaultOgImageUrl(): string {
  return absoluteUrl("/opengraph-image");
}

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  /** true = laisser Next.js utiliser opengraph-image.tsx du dossier route */
  useRouteOg?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  index = isProduction(),
  useRouteOg = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = defaultOgImageUrl();
  const imageMeta = useRouteOg
    ? {}
    : {
        images: [{ url: ogImage, width: 1200, height: 630, alt: company.name }],
      };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "fr-FR": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "fr_FR",
      type: "website",
      ...imageMeta,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(useRouteOg ? {} : { images: [ogImage] }),
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
  };
}
