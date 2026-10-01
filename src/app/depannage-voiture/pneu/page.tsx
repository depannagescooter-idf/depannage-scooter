import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CarTirePriceTable } from "@/components/CarTirePriceTable";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { carTirePage } from "@/data/car-tire";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: carTirePage.metaTitle,
  description: carTirePage.metaDescription,
  path: carTirePage.path,
});

export default function CarTirePage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: carTirePage.h1,
            description: carTirePage.metaDescription,
            path: carTirePage.path,
          }),
          faqPageSchema(carTirePage.faqs),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Dépannage voiture", href: "/depannage-voiture/" },
            { label: "Pneu" },
          ]}
        />
        <h1 className="mt-6 max-w-3xl font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          {carTirePage.h1}
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>{carTirePage.intro}</ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>

        <section className="mt-10 max-w-3xl">
          <h2 className="section-title">{carTirePage.symptomsTitle}</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-beton">
            {carTirePage.symptoms.map((symptom) => (
              <li key={symptom}>{symptom}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="section-title">{carTirePage.stepsTitle}</h2>
          <ol className="mt-4 space-y-4">
            {carTirePage.steps.map((step, index) => (
              <li key={step.title} className="card px-5 py-4">
                <span className="font-data text-sm font-semibold text-signal" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display font-semibold text-asphalte">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-beton">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 max-w-3xl space-y-4 leading-relaxed text-asphalte">
          {carTirePage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="section-title">{carTirePage.priceTitle}</h2>
          <p className="mt-4 leading-relaxed text-asphalte">{carTirePage.priceText}</p>
          <div className="mt-4">
            <CarTirePriceTable />
          </div>
          <p className="mt-3 text-sm">
            <Link href="/depannage-voiture/batterie/" className="font-medium text-gyro hover:underline">
              Dépannage batterie voiture
            </Link>
          </p>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="mt-4">
            <FaqAccordion items={carTirePage.faqs} id="faq-pneu-voiture" />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
