import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { depannageServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage scooter et moto sur place – IDF",
  description:
    "Dépannage sur place de scooter et moto en Île-de-France : crevaison, batterie, booster, essence, selle. 24h/24, devis avant intervention.",
  path: "/depannage-sur-place/",
});

export default function DepannageHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Dépannage sur place" },
        ])}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Dépannage sur place" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Dépannage de scooter et moto sur place en Île-de-France
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            Le dépannage sur place consiste à réparer votre deux-roues là où il est immobilisé,
            sans remorquage. Nous traitons crevaison, batterie, démarrage, panne d&apos;essence et
            selle bloquée. Tarification : forfait + indemnité kilométrique. Disponible 24h/24.
          </ShortAnswer>
        </div>
        <div className="mt-6">
          <CallButton origin="inline" />
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
        </ul>
      </main>
    </PageShell>
  );
}
