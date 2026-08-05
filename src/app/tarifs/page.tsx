import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { formatPrice, getTowingPriceRangeLabel, pricing } from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { offerCatalogSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Tarifs dépannage & remorquage moto IDF",
  description:
    "Tarifs dépannage et remorquage scooter moto en Île-de-France : 50 € + déplacement, paliers km remorquage. Devis ferme au 07 72 12 53 11.",
  path: "/tarifs/",
});

export default function TarifsPage() {
  return (
    <PageShell>
      <JsonLd data={offerCatalogSchema()} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Tarifs de dépannage et de remorquage 2-roues
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            {company.name} applique des tarifs jour TTC : dépannage sur place à{" "}
            {formatPrice(pricing.dsp.baseFee)} + déplacement (Paris{" "}
            {formatPrice(pricing.travelFees.PARIS.amount)}, petite couronne{" "}
            {formatPrice(pricing.travelFees.PETITE_COURONNE.amount)}, grande couronne{" "}
            {formatPrice(pricing.travelFees.GRANDE_COURONNE.amount)}), remorquage de{" "}
            {getTowingPriceRangeLabel()}. Majorations nuit, week-end et jours fériés. Devis ferme
            au {company.phoneDisplay} avant toute intervention.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>
        <div className="mt-10">
          <PriceTable />
        </div>
        <section className="mt-10 card px-5 py-4 text-sm text-beton">
          <h2 className="font-display font-semibold text-asphalte">Mentions tarifaires</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Tarifs TTC, jour (8h–20h) sauf majorations indiquées.</li>
            <li>Supplément pénibilité (+{pricing.difficultySurcharge.amount} €) : sous-sol, Neiman bloqué, véhicule accidenté.</li>
            <li>Distance = lieu de panne → destination (remorquage).</li>
            <li>Aucune intervention sans accord préalable sur le montant.</li>
          </ul>
        </section>
      </main>
    </PageShell>
  );
}
