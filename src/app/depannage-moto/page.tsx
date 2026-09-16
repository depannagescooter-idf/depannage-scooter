import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { remorquageServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { itemListSchema, webPageSchema } from "@/lib/schema";

const motoDepannageLinks = [
  { slug: "crevaison", label: "Crevaison moto" },
  { slug: "batterie", label: "Batterie moto à plat" },
  { slug: "demarrage-booster", label: "Démarrage moto au booster" },
  { slug: "panne-essence", label: "Panne essence moto" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage moto Paris et Île-de-France 24h/24",
  description:
    `Dépannage moto en panne en Île-de-France : crevaison, batterie, booster, remorquage plateau. Intervention ${company.defaultEtaMinutes[0]}–${company.defaultEtaMinutes[1]} min. Devis ferme au ${company.phoneDisplay}.`,
  path: "/depannage-moto/",
});

export default function DepannageMotoPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Dépannage moto DépannageScooter",
            description: "Dépannage et remorquage moto 24h/24 en Île-de-France.",
            path: "/depannage-moto/",
          }),
          itemListSchema({
            name: "Prestations dépannage moto",
            items: motoDepannageLinks.map((l) => ({
              name: l.label,
              url: `/depannage-sur-place/${l.slug}/`,
            })),
          }),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Dépannage moto" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Dépannage moto 24h/24 en Île-de-France
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            {company.name} dépanne et remorque les motos en panne en Île-de-France, 24h/24.
            Crevaison, batterie à plat, panne sèche ou remorquage vers garage : délai{" "}
            {company.defaultEtaMinutes[0]}–{company.defaultEtaMinutes[1]} min, devis ferme au{" "}
            {company.phoneDisplay} avant départ.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>

        <section className="mt-10">
          <h2 className="section-title">Quels dépannages moto sur place ?</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {motoDepannageLinks.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/depannage-sur-place/${l.slug}/`}
                  className="card block px-5 py-4 hover:shadow-card"
                >
                  <span className="font-display font-semibold text-asphalte">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="section-title">Remorquage moto en Île-de-France</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {remorquageServices
              .filter((s) => s.slug.includes("moto") || s.slug.includes("3-roues"))
              .map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/remorquage/${s.slug}/`}
                    className="card block px-5 py-4 hover:shadow-card"
                  >
                    <span className="font-display font-semibold text-asphalte">{s.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <p className="mt-8 text-sm text-beton">
          <Link href="/zones-intervention/" className="text-gyro hover:underline">
            Zones d&apos;intervention
          </Link>{" "}
          ·{" "}
          <Link href="/tarifs/" className="text-gyro hover:underline">
            Tarifs
          </Link>{" "}
          ·{" "}
          <Link href="/guides/apres-chute-moto-demarches/" className="text-gyro hover:underline">
            Guide après accident moto
          </Link>
        </p>
      </main>
    </PageShell>
  );
}
