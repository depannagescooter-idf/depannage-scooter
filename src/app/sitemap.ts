import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { depannageServices, remorquageServices } from "@/data/services";
import { getPublishedZoneSlugs } from "@/data/zones";
import { getSiteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/depannage-sur-place/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/depannage-sur-place/batterie-voiture/", priority: 0.88, changeFrequency: "monthly" },
    { path: "/remorquage/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/tarifs/", priority: 0.95, changeFrequency: "monthly" },
    { path: "/zones-intervention/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/guides/", priority: 0.75, changeFrequency: "weekly" },
    { path: "/faq/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/a-propos/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/avis/", priority: 0.65, changeFrequency: "monthly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency,
    priority,
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
      priority: 0.8,
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
