import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { pricing } from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Conditions générales de vente",
  description: "CGV DépannageScooter — dépannage et remorquage scooter moto en Île-de-France.",
  path: "/cgv/",
  index: false,
});

export default function CgvPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "CGV" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">
          Conditions générales de vente
        </h1>
        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-sm text-beton">
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Prestations</h2>
            <p>
              {company.name} propose des prestations de dépannage sur place et de remorquage de
              scooters et motos en Île-de-France, 24h/24 et 7j/7.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Devis et commande</h2>
            <p>
              Un devis ferme est communiqué par téléphone ou WhatsApp avant tout déplacement. Aucune
              intervention n&apos;est réalisée sans accord préalable du client sur le montant et le
              délai estimé.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Tarifs</h2>
            <p>
              Les tarifs applicables sont ceux de la grille en vigueur sur le site au moment de
              l&apos;intervention. Majorations nuit, week-end et jours fériés selon barème affiché.
              Supplément pénibilité : +{pricing.difficultySurcharge.amount} € ({pricing.difficultySurcharge.label}).
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Paiement</h2>
            <p>
              Paiement sur place à l&apos;issue de la prestation par carte bancaire ou espèces, sauf
              accord contraire pour les professionnels.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Annulation</h2>
            <p>
              En cas d&apos;annulation après départ du dépanneur, des frais de déplacement peuvent
              être facturés si le véhicule n&apos;est plus sur place ou inaccessible.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Responsabilité</h2>
            <p>
              {company.name} est couvert par une assurance responsabilité civile professionnelle
              pour les prestations réalisées. Le client reste responsable de la conformité du
              véhicule et de l&apos;accès au lieu d&apos;intervention.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Contact</h2>
            <p>
              {company.email} — {company.phoneDisplay}
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
