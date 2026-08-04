import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "À propos – DépannageScooter IDF",
  description:
    "DépannageScooter : dépanneur scooter et moto en Île-de-France, 24h/24. Équipe, matériel et zone d'intervention.",
  path: "/a-propos/",
});

export default function AProposPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Qui sommes-nous</h1>
        <div className="prose prose-stone mt-6 max-w-none space-y-4 text-beton">
          <p>
            <strong className="text-asphalte">{company.name}</strong> est un service de dépannage
            et remorquage dédié aux scooters et motos en Île-de-France. Nous intervenons sur place
            (crevaison, batterie, démarrage, essence, selle) ou en remorquage sur plateau sécurisé.
          </p>
          <p>
            Notre priorité : vous remettre en route rapidement, avec un devis ferme annoncé au
            téléphone avant le départ du dépanneur. Disponibilité {company.openingHours}.
          </p>
          <h2 className="font-display text-xl font-bold text-asphalte">Matériel</h2>
          <p>
            Plateau hydraulique, outillage dépannage, booster professionnel, compresseur et stock de
            pièces courantes (batteries, rustines). TODO-PHOTO-REELLE : photos plateau et
            interventions à intégrer.
          </p>
          <h2 className="font-display text-xl font-bold text-asphalte">Zone couverte</h2>
          <p>{company.serviceAreas.join(" · ")}</p>
        </div>
        <div className="mt-10">
          <CallButton origin="inline" />
        </div>
      </main>
    </PageShell>
  );
}
