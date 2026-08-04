import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Phone, Shield, Wrench } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { globalFaqs } from "@/data/faqs";
import { formatPrice, pricing } from "@/data/pricing";
import { depannageServices, remorquageServices } from "@/data/services";
import { publishedZones } from "@/data/zones";
import { guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/metadata";
import {
  localBusinessSchema,
  faqPageSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage scooter & moto Île-de-France 24/7",
  description:
    "Dépannage et remorquage scooter et moto en Île-de-France, 24h/24. Intervention en 25–40 min. Appelez le 07 72 12 53 11 — devis ferme avant déplacement.",
  path: "/",
});

export default function HomePage() {
  const previewFaqs = globalFaqs.slice(0, 5);
  const previewZones = publishedZones.slice(0, 8);

  return (
    <PageShell>
      <JsonLd
        data={[
          organizationSchema(),
          webSiteSchema(),
          localBusinessSchema(),
          faqPageSchema(previewFaqs),
        ]}
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgb(249_115_22/0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center rounded-full bg-alerte/10 px-3 py-1 text-xs font-semibold text-alerte">
            ● Équipes disponibles — {company.openingHours}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-asphalte sm:text-5xl lg:text-6xl">
            Dépannage scooter
            <span className="block text-signal">& moto en Île-de-France</span>
          </h1>
          <div className="mt-6 max-w-2xl">
            <ShortAnswer>
              {company.name} dépanne et remorque scooters et motos 24h/24 en Île-de-France.
              Crevaison, batterie, panne sèche ou remorquage : appelez le{" "}
              <span className="font-data font-semibold tabular-nums text-signal">
                {company.phoneDisplay}
              </span>
              . Un dépanneur confirme délai et tarif avant de partir.
            </ShortAnswer>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton origin="hero" />
            <WhatsAppButton origin="hero" />
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, label: "Délai moyen", value: `${company.defaultEtaMinutes[0]}–${company.defaultEtaMinutes[1]} min` },
              { icon: Shield, label: "Disponibilité", value: company.openingHours },
              { icon: Wrench, label: "Paris intra-muros", value: formatPrice(pricing.towing.PARIS_INTRA_MUROS.amount) },
              { icon: Phone, label: "Devis", value: "Avant départ" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card flex items-center gap-4 px-5 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium text-beton">{label}</dt>
                  <dd className="font-data font-semibold tabular-nums text-asphalte">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Dépannage sur place</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {depannageServices.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/depannage-sur-place/${s.slug}/`}
                className="card block px-5 py-4 transition-shadow hover:shadow-card"
              >
                <span className="font-display font-semibold text-asphalte">{s.name}</span>
                <p className="mt-1 text-sm text-beton line-clamp-2">{s.symptoms[0]}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/depannage-sur-place/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Tous les dépannages →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Remorquage</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {remorquageServices.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/remorquage/${s.slug}/`}
                className="card block px-5 py-4 transition-shadow hover:shadow-card"
              >
                <span className="font-display font-semibold text-asphalte">{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/remorquage/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Tout le remorquage →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Zones d&apos;intervention</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {previewZones.map((z) => (
            <li key={z.slug}>
              <Link
                href={`/zones-intervention/${z.slug}/`}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-signal hover:text-signal"
              >
                {z.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/zones-intervention/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          {publishedZones.length} zones en Île-de-France →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Tarifs transparents</h2>
        <div className="mt-6">
          <PriceTable showSurcharges={false} />
        </div>
        <Link href="/tarifs/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Grille complète et majorations →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Guides pratiques</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {guides.slice(0, 4).map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}/`}
                className="card block px-5 py-4 transition-shadow hover:shadow-card"
              >
                <span className="font-display font-semibold text-asphalte">{g.title}</span>
                <p className="mt-1 text-sm text-beton line-clamp-2">{g.shortAnswer}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/guides/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Tous les guides →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="section-title">Questions fréquentes</h2>
        <div className="mt-6">
          <FaqAccordion items={previewFaqs} id="home-faq" />
        </div>
        <Link href="/faq/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Toutes les FAQ →
        </Link>
      </section>
    </PageShell>
  );
}
