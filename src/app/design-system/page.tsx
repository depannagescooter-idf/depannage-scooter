import type { Metadata } from "next";
import { Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HazardRule } from "@/components/HazardRule";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { formatPrice, pricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Design system — usage interne",
  robots: { index: false, follow: false },
};

const sampleFaqs = [
  {
    question: "Intervenez-vous la nuit et le week-end ?",
    answer:
      "Oui, DépannageScooter est disponible 24h/24 et 7j/7 en Île-de-France. Les interventions de nuit et le week-end font l'objet d'une majoration indiquée sur la page tarifs.",
  },
  {
    question: "Combien de temps pour arriver sur place ?",
    answer:
      "En journée, comptez en moyenne 25 à 40 minutes selon votre zone. Le délai exact vous est confirmé par téléphone lors de votre appel.",
  },
  {
    question: "Quels deux-roues prenez-vous en charge ?",
    answer:
      "Scooters 50 à 125 cm³, maxi-scooters, motos et certains trois-roues. Précisez votre modèle lors de l'appel pour confirmer la faisabilité.",
  },
] as const;

const stats = [
  { icon: Clock, label: "Délai moyen", value: `${company.defaultEtaMinutes[0]}–${company.defaultEtaMinutes[1]} min` },
  { icon: Shield, label: "Disponibilité", value: "24h/24 · 7j/7" },
  { icon: Zap, label: "Paris intra-muros", value: formatPrice(pricing.towing.PARIS_INTRA_MUROS.amount) },
] as const;

export default function DesignSystemPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Design system — usage interne",
          isPartOf: { "@type": "WebSite", name: company.name, url: company.url },
        }}
      />
      <Header />

      {/* Hero preview */}
      <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgb(249_115_22/0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Design system" },
            ]}
          />
          <div className="mt-8 max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-alerte/10 px-3 py-1 text-xs font-semibold text-alerte">
              ● Équipes disponibles maintenant
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-asphalte sm:text-5xl">
              Dépannage scooter
              <span className="block text-signal">& moto 24h/24</span>
            </h1>
            <ShortAnswer>
              DépannageScooter intervient en Île-de-France pour le dépannage et le remorquage
              de scooters et motos. Appelez le{" "}
              <span className="font-data font-semibold tabular-nums text-signal">
                {company.phoneDisplay}
              </span>{" "}
              — un dépanneur confirme délai et tarif avant intervention.
            </ShortAnswer>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CallButton origin="hero" />
              <WhatsAppButton origin="hero" />
            </div>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card flex items-center gap-4 px-5 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium text-beton">{label}</dt>
                  <dd className="font-data text-lg font-semibold tabular-nums text-asphalte">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
        <section aria-labelledby="ds-buttons">
          <h2 id="ds-buttons" className="section-title">
            Boutons
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button variant="signal">Appeler maintenant</Button>
            <Button variant="outline">Voir les tarifs</Button>
            <Button variant="ghost">En savoir plus</Button>
            <CallButton origin="design-system" />
            <WhatsAppButton origin="design-system" />
          </div>
        </section>

        <HazardRule />

        <section aria-labelledby="ds-prices">
          <h2 id="ds-prices" className="section-title">
            Grille tarifaire
          </h2>
          <div className="mt-4">
            <PriceTable />
          </div>
        </section>

        <section aria-labelledby="ds-faq">
          <h2 id="ds-faq" className="section-title">
            Questions fréquentes
          </h2>
          <div className="mt-4">
            <FaqAccordion items={[...sampleFaqs]} id="design-system-faq" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
