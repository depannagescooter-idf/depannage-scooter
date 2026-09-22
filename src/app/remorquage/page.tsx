import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { RemorquageGallery } from "@/components/RemorquageGallery";
import { ServiceZonesCompact } from "@/components/ServiceZonesCompact";
import { remorquageServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { itemListSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Remorquage moto et scooter Île-de-France 24h/24",
  description:
    "Remorquage scooter et moto en Île-de-France, plateau sécurisé, 24h/24. Forfait Paris et paliers km. Appelez pour un devis immédiat.",
  path: "/remorquage/",
});

export default function RemorquageHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Remorquage scooter et moto",
            description: "Remorquage sur plateau en Île-de-France, 24h/24.",
            path: "/remorquage/",
          }),
          itemListSchema({
            name: "Services de remorquage",
            items: remorquageServices.map((s) => ({
              name: s.name,
              url: `/remorquage/${s.slug}/`,
            })),
          }),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Remorquage" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Remorquage de scooter et moto en Île-de-France
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            Nous remorquons scooters, motos et trois-roues sur plateau en Île-de-France. Forfait
            Paris intra-muros, puis paliers 0–15 km, 15–30 km et au-delà. Destination au choix :
            domicile, garage ou concession. Disponible 24h/24.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <Link href="/zones-intervention/" className="text-sm font-medium text-gyro hover:underline">
            Zones couvertes →
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {remorquageServices.map((s) => (
            <li key={s.slug}>
              <Link href={`/remorquage/${s.slug}/`} className="card block px-5 py-4 hover:shadow-card">
                <h2 className="font-display font-semibold text-asphalte">{s.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
        <section className="mt-12">
          <RemorquageGallery />
        </section>
        <section className="mt-12">
          <h2 className="section-title">Grille tarifaire remorquage</h2>
          <div className="mt-4">
            <PriceTable showDsp={false} />
          </div>
          <Link href="/tarifs/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
            Grille complète →
          </Link>
        </section>
        <section className="mt-12">
          <h2 className="section-title">Où intervenez-vous ?</h2>
          <p className="mt-2 text-sm text-beton">
            Intervention en Île-de-France — délais et tarifs selon la commune.
          </p>
          <ServiceZonesCompact />
          <p className="mt-3">
            <Link href="/zones-intervention/" className="text-sm font-medium text-gyro hover:underline">
              Toutes les zones →
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  );
}
