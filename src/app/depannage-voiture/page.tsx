import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";
import { carBatteryServiceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage voiture batterie Paris et Île-de-France",
  description:
    `Batterie voiture à plat en Île-de-France : booster ou remplacement à domicile, 24h/24. Devis ferme au ${company.phoneDisplay} avant déplacement.`,
  path: "/depannage-voiture/",
});

export default function DepannageVoitureHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Dépannage voiture DépannageScooter",
            description: "Dépannage batterie voiture à domicile en Île-de-France.",
            path: "/depannage-voiture/",
          }),
          carBatteryServiceSchema(),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Dépannage voiture" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Dépannage voiture en Île-de-France
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            {company.name} intervient pour la batterie voiture à plat en Île-de-France : démarrage
            au booster ou remplacement à domicile, 24h/24. Service distinct du dépannage scooter et
            moto.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>
        <section className="mt-10">
          <Link
            href="/depannage-voiture/batterie/"
            className="card block px-6 py-5 hover:shadow-card"
          >
            <h2 className="font-display text-xl font-bold text-asphalte">
              Dépannage batterie voiture à domicile
            </h2>
            <p className="mt-2 text-sm text-beton">
              Booster, test batterie et remplacement — citadines, berlines, SUV.
            </p>
          </Link>
        </section>
        <p className="mt-8 text-sm text-beton">
          <Link href="/tarifs/#tarifs-voiture" className="text-gyro hover:underline">
            Tarifs batterie voiture
          </Link>{" "}
          ·{" "}
          <Link href="/depannage-sur-place/" className="text-gyro hover:underline">
            Dépannage scooter et moto
          </Link>
        </p>
      </main>
    </PageShell>
  );
}
