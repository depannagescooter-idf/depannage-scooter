import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { ZonesByDepartment } from "@/components/ZonesByDepartment";
import { publishedZones } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";
import { itemListSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Zones d'intervention dépannage moto IDF",
  description:
    "Zones d'intervention DépannageScooter en Île-de-France : Paris, 77, 78, 91, 92, 93, 94, 95. Dépannage et remorquage scooter moto 24h/24.",
  path: "/zones-intervention/",
});

export default function ZonesHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Zones d'intervention DépannageScooter",
            description: "Île-de-France — dépannage et remorquage 24h/24.",
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
            DépannageScooter couvre Paris (20 arrondissements), la petite couronne (92, 93, 94)
            et la grande couronne (77, 78, 91, 95) : plus de 110 communes en Île-de-France.
            Intervention 24h/24, délai annoncé selon la zone.
          </ShortAnswer>
        </div>
        <ZonesByDepartment />
        <p className="mt-8 text-sm text-beton">{publishedZones.length} zones publiées.</p>
      </main>
    </PageShell>
  );
}
