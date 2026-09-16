import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { depannageServices, remorquageServices } from "@/data/services";
import { globalFaqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ dépannage scooter moto voiture",
  description:
    "Questions fréquentes sur le dépannage et remorquage scooter, moto et batterie voiture en Île-de-France : tarifs, délais, assurance, zones.",
  path: "/faq/",
  useRouteOg: true,
});

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLd data={faqPageSchema(globalFaqs)} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Questions fréquentes</h1>
        <div className="mt-4">
          <ShortAnswer>
            Retrouvez ici les réponses sur le dépannage scooter, moto et batterie voiture : tarifs,
            délais, zones couvertes, assurance et fonctionnement d&apos;une intervention
            DépannageScooter en Île-de-France, 24h/24.
          </ShortAnswer>
        </div>
        <div className="mt-8">
          <FaqAccordion items={globalFaqs} id="global-faq" />
        </div>
        <section className="mt-10">
          <h2 className="section-title">Pages utiles</h2>
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
          <h3 className="mt-6 font-display text-sm font-semibold text-asphalte">Remorquage</h3>
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
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              { href: "/tarifs/", label: "Tarifs" },
              { href: "/zones-intervention/", label: "Zones" },
              { href: "/depannage-moto/", label: "Dépannage moto" },
              { href: "/depannage-voiture/batterie/", label: "Batterie voiture" },
              { href: "/contact/", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-asphalte hover:border-signal hover:text-signal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-10 text-center">
          <CallButton origin="inline" />
        </div>
      </main>
    </PageShell>
  );
}
