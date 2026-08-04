import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { depannageServices } from "@/data/services";
import { globalFaqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ dépannage et remorquage scooter moto",
  description:
    "Questions fréquentes sur le dépannage et remorquage scooter et moto en Île-de-France : tarifs, délais, assurance, zones.",
  path: "/faq/",
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
            Retrouvez ici les réponses sur les tarifs, délais, zones couvertes, assurance et
            fonctionnement d&apos;une intervention DépannageScooter en Île-de-France, 24h/24.
          </ShortAnswer>
        </div>
        <div className="mt-8">
          <FaqAccordion items={globalFaqs} id="global-faq" />
        </div>
        <section className="mt-10">
          <h2 className="section-title">Pages utiles</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              { href: "/tarifs/", label: "Tarifs" },
              { href: "/zones-intervention/", label: "Zones" },
              { href: "/contact/", label: "Contact" },
              ...depannageServices.slice(0, 3).map((s) => ({
                href: `/depannage-sur-place/${s.slug}/`,
                label: s.name,
              })),
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
