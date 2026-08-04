import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { depannageServices, remorquageServices } from "@/data/services";
import { getPublishedZoneSlugs } from "@/data/zones";
import { getSiteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPages = [
    "",
    "/depannage-sur-place/",
    "/remorquage/",
    "/tarifs/",
    "/zones-intervention/",
    "/guides/",
    "/faq/",
    "/avis/",
    "/a-propos/",
    "/contact/",
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("tarifs") ? 0.9 : 0.8,
  }));

  for (const s of depannageServices) {
    entries.push({
      url: `${base}/depannage-sur-place/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  for (const s of remorquageServices) {
    entries.push({
      url: `${base}/remorquage/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  for (const slug of getPublishedZoneSlugs()) {
    entries.push({
      url: `${base}/zones-intervention/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const g of guides) {
    entries.push({
      url: `${base}/guides/${g.slug}/`,
      lastModified: new Date(g.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
