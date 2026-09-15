import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { depannageServices } from "@/data/services";
import { formatPrice, pricing } from "@/data/pricing";
import { publishedZones } from "@/data/zones";
import { ZonesByDepartment } from "@/components/ZonesByDepartment";
import { createPageMetadata } from "@/lib/metadata";
import { itemListSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage scooter et moto sur place – IDF",
  description:
    "Dépannage sur place scooter, moto et batterie voiture en Île-de-France : crevaison, batterie, booster, essence, selle. 24h/24, devis avant intervention.",
  path: "/depannage-sur-place/",
});

export default function DepannageHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Dépannage scooter et moto sur place",
            description: "Dépannage sur place en Île-de-France, 24h/24.",
            path: "/depannage-sur-place/",
          }),
          itemListSchema({
            name: "Services de dépannage sur place",
            items: depannageServices.map((s) => ({
              name: s.name,
              url: `/depannage-sur-place/${s.slug}/`,
            })),
          }),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Dépannage sur place" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Dépannage scooter, moto et batterie voiture sur place en Île-de-France
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            Dépannage sur place de scooters, motos, trois-roues et batterie voiture là où le
            véhicule est immobilisé. Crevaison, batterie deux-roues, booster, panne d&apos;essence,
            selle bloquée et batterie voiture à domicile. Tarif deux-roues :{" "}
            {formatPrice(pricing.dsp.baseFee)} + déplacement. Disponible 24h/24.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <Link href="/tarifs/" className="text-sm font-medium text-gyro hover:underline">
            Voir les tarifs →
          </Link>
          <Link href="/zones-intervention/" className="text-sm font-medium text-gyro hover:underline">
            Zones couvertes →
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {depannageServices.map((s) => (
            <li key={s.slug}>
              <Link href={`/depannage-sur-place/${s.slug}/`} className="card block px-5 py-4 hover:shadow-card">
                <h2 className="font-display font-semibold text-asphalte">{s.name}</h2>
                <p className="mt-1 text-sm text-beton">{s.duration}</p>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/depannage-sur-place/batterie-voiture/"
              className="card block border-signal/30 px-5 py-4 hover:shadow-card"
            >
              <h2 className="font-display font-semibold text-asphalte">Batterie voiture à domicile</h2>
              <p className="mt-1 text-sm text-beton">Démarrage ou remplacement — citadines, berlines, SUV</p>
            </Link>
          </li>
        </ul>
        <section className="mt-10">
          <h2 className="section-title">Zones couvertes en Île-de-France</h2>
          <p className="mt-2 text-sm text-beton">
            {publishedZones.length} communes couvertes — Paris, petite et grande couronne.
          </p>
          <ZonesByDepartment />
        </section>
      </main>
    </PageShell>
  );
}
