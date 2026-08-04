import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { company } from "@/data/company";
import { publishedZones } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";
import { localBusinessSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "À propos – dépanneur scooter moto IDF",
  description:
    "DépannageScooter : dépanneur scooter et moto en Île-de-France, 24h/24. Équipe mobile, matériel pro et intervention rapide sur place ou en remorquage.",
  path: "/a-propos/",
});

export default function AProposPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            name: "À propos de DépannageScooter",
            description: company.description,
            path: "/a-propos/",
          }),
        ]}
      />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Qui sommes-nous</h1>
        <div className="mt-4">
          <ShortAnswer>
            {company.name} est un service mobile de dépannage et remorquage dédié aux scooters et
            motos en Île-de-France. Nous intervenons 24h/24 avec un devis ferme annoncé au
            téléphone avant le départ du dépanneur.
          </ShortAnswer>
        </div>
        <div className="prose prose-stone mt-8 max-w-none space-y-4 text-beton">
          <p>
            <strong className="text-asphalte">{company.name}</strong> a été conçu pour répondre à
            un besoin précis : remettre en route rapidement les deux-roués immobilisés en panne,
            sans frais cachés ni mauvaise surprise à l&apos;arrivée. Que vous soyez coursier,
            livreur, motard du week-end ou utilisateur quotidien d&apos;un scooter 50 cm³, notre
            équipe se déplace avec l&apos;outillage adapté.
          </p>
          <h2 className="font-display text-xl font-bold text-asphalte">Nos interventions sur place</h2>
          <p>
            Le dépannage sur place couvre les pannes les plus fréquentes :{" "}
            <Link href="/depannage-sur-place/crevaison/" className="text-gyro hover:underline">
              crevaison
            </Link>
            ,{" "}
            <Link href="/depannage-sur-place/batterie/" className="text-gyro hover:underline">
              batterie
            </Link>
            ,{" "}
            <Link href="/depannage-sur-place/demarrage-booster/" className="text-gyro hover:underline">
              démarrage au booster
            </Link>
            ,{" "}
            <Link href="/depannage-sur-place/panne-essence/" className="text-gyro hover:underline">
              panne d&apos;essence
            </Link>{" "}
            et{" "}
            <Link href="/depannage-sur-place/ouverture-de-selle/" className="text-gyro hover:underline">
              selle bloquée
            </Link>
            . Si la réparation sur place n&apos;est pas possible, nous proposons un{" "}
            <Link href="/remorquage/" className="text-gyro hover:underline">
              remorquage sur plateau
            </Link>{" "}
            vers le garage de votre choix.
          </p>
          <h2 className="font-display text-xl font-bold text-asphalte">Matériel et méthode</h2>
          <p>
            Chaque dépanneur dispose d&apos;un plateau ou d&apos;un attelage sécurisé, d&apos;un
            booster professionnel, d&apos;un compresseur, d&apos;outillage de dépannage et d&apos;un
            stock de pièces courantes (batteries, rustines, câbles). Avant tout déplacement, nous
            confirmons le délai estimé et le tarif — consultez notre{" "}
            <Link href="/tarifs/" className="text-gyro hover:underline">
              grille tarifaire
            </Link>
            .
          </p>
          <h2 className="font-display text-xl font-bold text-asphalte">Zone d&apos;intervention</h2>
          <p>
            Nous couvrons l&apos;Île-de-France avec {publishedZones.length} zones
            référencées, de Paris 1er à Nanterre, Montreuil ou Boulogne-Billancourt. Retrouvez la
            liste complète sur la page{" "}
            <Link href="/zones-intervention/" className="text-gyro hover:underline">
              zones d&apos;intervention
            </Link>
            . Départements desservis : {company.serviceAreas.join(", ")}.
          </p>
          <h2 className="font-display text-xl font-bold text-asphalte">Disponibilité</h2>
          <p>
            Service {company.openingHours}. Appelez le{" "}
            <a href={`tel:${company.phone}`} className="font-data text-signal">
              {company.phoneDisplay}
            </a>{" "}
            ou utilisez le{" "}
            <Link href="/contact/" className="text-gyro hover:underline">
              formulaire de rappel
            </Link>
            .
          </p>
        </div>
        <div className="mt-10">
          <CallButton origin="inline" />
        </div>
      </main>
    </PageShell>
  );
}
