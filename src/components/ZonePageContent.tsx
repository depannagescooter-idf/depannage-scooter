import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ZoneFactSheet } from "@/components/ZoneFactSheet";
import { getDepartmentSlugByCode } from "@/data/departments";
import { depannageServices, remorquageServices } from "@/data/services";
import type { Zone } from "@/data/types";
import { limitrophesTitle, limitrophesWithPage } from "@/lib/zone-fact-sheet";
import { buildZoneShortAnswer } from "@/lib/zone-short-answer";
import { getZoneFaqs } from "@/lib/zone-faqs";
import { faqPageSchema, zoneServiceSchema } from "@/lib/schema";

const DEPT_LABELS: Record<string, string> = {
  "75": "Paris",
  "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis",
  "94": "Val-de-Marne",
  "77": "Seine-et-Marne",
  "78": "Yvelines",
  "91": "Essonne",
  "95": "Val-d'Oise",
};

export function ZonePageContent({ zone }: { zone: Zone }) {
  const limitrophes = limitrophesWithPage(zone);

  const shortAnswer = buildZoneShortAnswer(zone);
  const zoneFaqs = getZoneFaqs(zone);
  const deptSlug = getDepartmentSlugByCode(zone.departement);
  const deptLabel = DEPT_LABELS[zone.departement] ?? "Île-de-France";

  return (
    <>
      <JsonLd data={[zoneServiceSchema(zone), faqPageSchema(zoneFaqs)]} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Zones", href: "/zones-intervention/" },
            { label: zone.name },
          ]}
        />

        <article className="mt-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-asphalte sm:text-4xl">
            Dépannage et remorquage scooter et moto à {zone.name}
          </h1>
          <div className="mt-4">
            <ShortAnswer>{shortAnswer}</ShortAnswer>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>

          {zone.clientContent && (
            <div className="mt-8 space-y-4 leading-relaxed text-asphalte">
              {zone.clientContent.split(/\n\s*\n/).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <ZoneFactSheet zone={zone} />

          {deptSlug && (
            <p className="mt-4 text-sm text-beton">
              Voir aussi le{" "}
              <Link
                href={`/zones-intervention/${deptSlug}/`}
                className="font-medium text-gyro hover:underline"
              >
                dépannage scooter en {deptLabel} ({zone.departement})
              </Link>
              .
            </p>
          )}

          <section className="mt-10">
            <h2 className="section-title">Quels dépannages sur place à {zone.name} ?</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {depannageServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/depannage-sur-place/${s.slug}/`}
                    className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Dépannage batterie à {zone.name}</h2>
            <p className="mt-2 text-beton">
              Batterie scooter ou moto à plat : test sur place, booster ou remplacement selon le
              modèle.{" "}
              <Link
                href="/depannage-sur-place/batterie/"
                className="font-medium text-gyro hover:underline"
              >
                Dépannage batterie à {zone.name}
              </Link>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Remorquage moto à {zone.name}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {remorquageServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/remorquage/${s.slug}/`}
                    className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Quel tarif de remorquage depuis {zone.name} ?</h2>
            <div className="mt-4">
              <PriceTable showDsp={false} showSurcharges={false} />
            </div>
            <Link href="/tarifs/" className="mt-4 inline-block text-sm font-medium text-gyro hover:underline">
              Grille complète et majorations →
            </Link>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Questions fréquentes à {zone.name}</h2>
            <div className="mt-4">
              <FaqAccordion items={zoneFaqs} id={`faq-${zone.slug}`} />
            </div>
          </section>

          {limitrophes.length > 0 && (
            <section className="mt-10">
              <h2 className="section-title">{limitrophesTitle(zone)}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {limitrophes.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="rounded-full border border-border px-3 py-1 text-sm hover:border-signal hover:text-signal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <section className="card mt-12 bg-gradient-to-br from-signal/5 to-gyro/5 px-6 py-8 text-center">
          <h2 className="font-display text-xl font-bold text-asphalte">
            Panne à {zone.name} ?
          </h2>
          <p className="mt-2 text-beton">Devis confirmé au téléphone avant toute intervention.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>
        </section>
      </main>
    </>
  );
}
