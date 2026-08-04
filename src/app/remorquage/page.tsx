import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { remorquageServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

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
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Remorquage" },
        ])}
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
        <div className="mt-6">
          <CallButton origin="inline" />
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
          <h2 className="section-title">Grille tarifaire remorquage</h2>
          <div className="mt-4">
            <PriceTable showDsp={false} />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
