import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { CarBatteryPriceTable } from "@/components/CarBatteryPriceTable";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { depannageServices, remorquageServices } from "@/data/services";
import {
  formatPrice,
  getCarBatteryBoostTotal,
  getTowingPriceRangeLabel,
  pricing,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { offerCatalogSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Tarifs dépannage, remorquage & batterie voiture",
  description:
    `Tarifs dépannage scooter, moto et batterie voiture en IDF : 50 € + déplacement, remorquage par paliers km. Devis ferme au ${company.phoneDisplay}.`,
  path: "/tarifs/",
  useRouteOg: true,
});

export default function TarifsPage() {
  return (
    <PageShell>
      <JsonLd data={offerCatalogSchema()} />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Tarifs dépannage, remorquage et batterie voiture
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            {company.name} applique des tarifs jour TTC en Île-de-France : batterie voiture dès{" "}
            {formatPrice(getCarBatteryBoostTotal("PARIS"))} (booster, Paris, déplacement inclus),
            dépannage deux-roues à {formatPrice(pricing.dsp.baseFee)} + déplacement, remorquage de{" "}
            {getTowingPriceRangeLabel()}. Majorations nuit, week-end et jours fériés. Devis ferme au{" "}
            {company.phoneDisplay} avant toute intervention.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>

        <section id="tarifs-voiture" className="mt-10 scroll-mt-24">
          <h2 className="section-title">Tarifs batterie voiture</h2>
          <p className="mt-2 max-w-2xl text-sm text-beton">
            Démarrage au booster ou remplacement de batterie à domicile — citadines, berlines, SUV.
            Détail sur la{" "}
            <Link
              href="/depannage-voiture/batterie/"
              className="font-medium text-gyro hover:underline"
            >
              page batterie voiture
            </Link>
            .
          </p>
          <div className="mt-4">
            <CarBatteryPriceTable />
          </div>
        </section>

        <section id="tarifs-deux-roues" className="mt-10 scroll-mt-24">
          <h2 className="section-title">Tarifs dépannage et remorquage deux-roues</h2>
          <p className="mt-2 max-w-2xl text-sm text-beton">
            Scooters, motos et trois-roues — forfait dépannage sur place, paliers remorquage et
            majorations horaires.
          </p>
          <div className="mt-4">
            <PriceTable />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="section-title">Pages prestations</h2>
          <h3 className="mt-4 font-display text-sm font-semibold text-asphalte">Dépannage sur place</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {depannageServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/depannage-sur-place/${s.slug}/`}
                  className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-asphalte hover:border-signal hover:text-signal"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 font-display text-sm font-semibold text-asphalte">Remorquage</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {remorquageServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/remorquage/${s.slug}/`}
                  className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-asphalte hover:border-signal hover:text-signal"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 card px-5 py-4 text-sm text-beton">
          <h2 className="font-display font-semibold text-asphalte">Mentions tarifaires</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Tarifs TTC, jour (8h–20h) sauf majorations indiquées.</li>
            <li>
              Supplément pénibilité (+{pricing.difficultySurcharge.amount} €) : sous-sol, Neiman
              bloqué, véhicule accidenté.
            </li>
            <li>Distance = lieu de panne → destination (remorquage).</li>
            <li>Aucune intervention sans accord préalable sur le montant.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
