import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Phone, Shield, Wrench } from "lucide-react";
import { GoogleReviewsSummary } from "@/components/GoogleReviewsSummary";
import { PageShell } from "@/components/PageShell";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ReassuranceStrip } from "@/components/ReassuranceStrip";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { globalFaqs } from "@/data/faqs";
import { guides } from "@/data/guides";
import { formatPrice, getDspTotal, pricing } from "@/data/pricing";
import { depannageServices, remorquageServices } from "@/data/services";
import { publishedZones } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";
import {
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage scooter & moto Île-de-France 24/7",
  description:
    `Dépannage et remorquage scooter et moto en Île-de-France, 24h/24. Intervention en 25–40 min. Appelez le ${company.phoneDisplay} — devis ferme avant déplacement.`,
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
          faqPageSchema(globalFaqs),
        ]}
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgb(249_115_22/0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center rounded-sm bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-950">
            ● Équipes disponibles — {company.openingHours}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-asphalte sm:text-5xl lg:text-6xl">
            Dépannage scooter
            <span className="block text-signal"> & moto en Île-de-France</span>
          </h1>
          <div className="mt-6 max-w-2xl">
            <ShortAnswer>
              {company.name} dépanne et remorque scooters et motos, et intervient pour la
              batterie voiture à plat, 24h/24 en Île-de-France. Crevaison, batterie, panne sèche
              ou remorquage : appelez le{" "}
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

          <ReassuranceStrip />

          <section className="mt-8 card px-5 py-5 sm:px-6" aria-labelledby="urgence-title">
            <h2 id="urgence-title" className="font-display text-lg font-bold text-asphalte">
              En panne ? 3 étapes
            </h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { step: "1", title: "Appelez", detail: `${company.phoneDisplay} — 24h/24` },
                { step: "2", title: "Devis ferme", detail: "Tarif et délai confirmés avant départ" },
                { step: "3", title: "Intervention", detail: "Dépannage sur place ou remorquage plateau" },
              ].map(({ step, title, detail }) => (
                <li key={step} className="flex gap-3">
                  <span className="font-data text-lg font-bold text-signal">{step}</span>
                  <div>
                    <p className="font-display font-semibold text-asphalte">{title}</p>
                    <p className="text-sm text-beton">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock,
                label: "Délai moyen",
                value: `${company.defaultEtaMinutes[0]}–${company.defaultEtaMinutes[1]} min`,
              },
              { icon: Shield, label: "Disponibilité", value: company.openingHours },
              {
                icon: Wrench,
                label: "Dépannage Paris",
                value: formatPrice(getDspTotal("PARIS")),
              },
              {
                icon: Phone,
                label: "Remorquage",
                value: `dès ${formatPrice(pricing.towing.KM_0_5.amount)}`,
              },
            ].map(({ icon: Icon, label, value }) => (
              <li key={label} className="card flex items-center gap-4 px-5 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-signal/10 text-signal">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-beton">{label}</p>
                  <p className="font-data font-semibold tabular-nums text-asphalte">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Quels dépannages sur place en Île-de-France ?</h2>
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
        <Link
          href="/depannage-sur-place/"
          className="mt-4 inline-block text-sm font-medium text-gyro hover:underline"
        >
          Tous les dépannages →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Quand faut-il un remorquage scooter ou moto ?</h2>
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
        <h2 className="section-title">Où intervenons-nous en Île-de-France ?</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {previewZones.map((z) => (
            <li key={z.slug}>
              <Link
                href={`/zones-intervention/${z.slug}/`}
                className="rounded-sm border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-signal hover:text-signal"
              >
                {z.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/zones-intervention/"
          className="mt-4 inline-block text-sm font-medium text-gyro hover:underline"
        >
          {publishedZones.length} zones en Île-de-France →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Combien coûte un dépannage ou remorquage ?</h2>
        <div className="mt-6">
          <PriceTable showSurcharges={false} />
        </div>
        <Link href="/tarifs/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Grille complète et majorations →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Que disent nos clients ?</h2>
        <GoogleReviewsSummary />
        <Link href="/avis/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
          Page avis →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="section-title">Quels guides pour votre panne ?</h2>
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
        <h2 className="section-title">Questions fréquentes sur le dépannage 2-roues</h2>
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
