import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { publishedZones, getZonesByDepartement } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";
import { itemListSchema, webPageSchema } from "@/lib/schema";

const deptLabels: Record<string, string> = {
  "75": "Paris",
  "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis",
  "94": "Val-de-Marne",
};

export const metadata: Metadata = createPageMetadata({
  title: "Zones d'intervention dépannage moto IDF",
  description:
    "Zones d'intervention DépannageScooter : Paris, 92, 93, 94. Dépannage et remorquage scooter moto 24h/24.",
  path: "/zones-intervention/",
});

export default function ZonesHubPage() {
  const departements = ["75", "92", "93", "94"];

  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Zones d'intervention DépannageScooter",
            description: "Paris et petite couronne — dépannage et remorquage 24h/24.",
            path: "/zones-intervention/",
          }),
          itemListSchema({
            name: "Zones d'intervention",
            items: publishedZones.map((z) => ({
              name: z.name,
              url: `/zones-intervention/${z.slug}/`,
            })),
          }),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Zones" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Nos zones d&apos;intervention en Île-de-France
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            DépannageScooter couvre Paris (20 arrondissements) et la petite couronne : Hauts-de-Seine,
            Seine-Saint-Denis et Val-de-Marne. Intervention 24h/24, délai annoncé selon la zone.
          </ShortAnswer>
        </div>
        {departements.map((dep) => {
          const zones = getZonesByDepartement(dep);
          if (zones.length === 0) return null;
          return (
            <section key={dep} className="mt-10">
              <h2 className="section-title">{deptLabels[dep] ?? dep}</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {zones.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zones-intervention/${z.slug}/`}
                      className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                    >
                      {z.name}
                      <span className="mt-0.5 block font-data text-xs tabular-nums text-beton">
                        {z.etaMinutes[0]}–{z.etaMinutes[1]} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
        <p className="mt-8 text-sm text-beton">{publishedZones.length} zones publiées.</p>
      </main>
    </PageShell>
  );
}
