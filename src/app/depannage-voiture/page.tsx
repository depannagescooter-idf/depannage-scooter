import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/metadata";
import { carBatteryServiceSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Dépannage voiture : batterie et pneu 24h/24",
  description:
    "Dépannage voiture : batterie et pneu crevé sur place, 24h/24. Changement de roue, devis ferme avant le déplacement. Pas de remorquage automobile.",
  path: "/depannage-voiture/",
});

export default function DepannageVoitureHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Dépannage voiture DépannageScooter",
            description:
              "Dépannage voiture sur place : batterie et pneu. Pas de remorquage automobile.",
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
            Deux prestations, sur place, sans remorquage automobile. La batterie : démarrage au
            booster ou remplacement. Le pneu : pneu crevé, roue à plat ou pneu à plat, réparé par
            une mèche quand c&apos;est possible, ou par un changement de roue et un montage sur
            place. Devis ferme par téléphone avant le déplacement, 24h/24.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>
        <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-asphalte">
          <p>
            La batterie et le pneu sont les deux pannes voiture traitées ici. Un tableau de bord
            éteint ou un démarreur qui claque relève de la batterie. Une roue à plat, un pneu crevé
            ou un pneu à plat relèvent de l&apos;autre page : localisation de la perforation, mèche
            ou changement de pneu, puis contrôle de la pression.
          </p>
          <p>
            Dans les deux cas le véhicule reste sur place. Le technicien confirme le devis avant de
            partir, et n&apos;intervient pas sans accord. Le paiement se fait sur place, par carte
            ou en espèces.
          </p>
        </div>
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href="/depannage-voiture/batterie/" className="card block px-6 py-5 hover:shadow-card">
            <h2 className="font-display text-xl font-bold text-asphalte">Batterie voiture</h2>
            <p className="mt-2 text-sm text-beton">
              Booster, test et remplacement — citadines, berlines, SUV.
            </p>
          </Link>
          <Link href="/depannage-voiture/pneu/" className="card block px-6 py-5 hover:shadow-card">
            <h2 className="font-display text-xl font-bold text-asphalte">Pneu crevé, roue à plat</h2>
            <p className="mt-2 text-sm text-beton">
              Mèche ou changement de roue, montage sur place, contrôle de pression.
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
