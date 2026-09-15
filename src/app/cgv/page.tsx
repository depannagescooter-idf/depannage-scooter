import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { formatPrice, pricing } from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import {
  LEGAL_LAST_UPDATED,
  consumerMediator,
  getLegalForm,
  getLegalName,
  getSirenDisplay,
  getStreetAddress,
} from "@/lib/legal";

export const metadata: Metadata = createPageMetadata({
  title: "Conditions générales de vente",
  description: "CGV DépannageScooter — dépannage et remorquage scooter et moto en Île-de-France.",
  path: "/cgv/",
  index: false,
});

export default function CgvPage() {
  const legalForm = getLegalForm();

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "CGV" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">
          Conditions générales de vente
        </h1>
        <p className="mt-2 text-xs text-beton">Dernière mise à jour : {LEGAL_LAST_UPDATED}</p>

        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-sm text-beton">
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">1. Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les prestations de{" "}
              {getLegalName()}
              {legalForm ? ` (${legalForm})` : ""}, ci-après « le Prestataire », au titre de
              l&apos;activité {company.name} : dépannage sur place et remorquage de scooters, motos
              et deux-roues motorisés en Île-de-France, 24h/24 et 7j/7.
            </p>
            <p>
              Toute commande ou demande d&apos;intervention implique l&apos;acceptation sans réserve
              des présentes CGV par le client, consommateur ou professionnel.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              2. Prestations proposées
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Dépannage sur place deux-roues</strong> : crevaison, batterie, démarrage/booster,
                panne d&apos;essence, ouverture de selle bloquée.
              </li>
              <li>
                <strong>Batterie voiture</strong> : démarrage au booster ou remplacement de batterie à
                domicile (citadines, berlines, SUV, utilitaires légers).
              </li>
              <li>
                <strong>Remorquage sur plateau</strong> : transport sécurisé vers domicile, garage,
                concession, fourrière ou autre destination convenue.
              </li>
            </ul>
            <p className="mt-3">
              Véhicules pris en charge : scooters 50 à 125 cm³, maxi-scooters, motos, la plupart des
              trois-roues et batterie voiture (démarrage ou remplacement sur place), sous réserve de
              faisabilité technique annoncée au téléphone.
            </p>
            <p className="mt-3">
              <strong>Limites d&apos;intervention</strong> (pratique sectorielle dépannage deux-roues)
              : le Prestataire n&apos;intervient pas sur le boulevard périphérique parisien, les
              autoroutes, voies express ni voies rapides urbaines, réservées aux dépanneurs agréés
              par la préfecture. En cas de panne sur ces axes, composez le{" "}
              <strong>112</strong> ou utilisez une borne d&apos;appel d&apos;urgence.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              3. Devis, commande et exécution
            </h2>
            <p>
              Avant tout déplacement, un <strong>devis ferme</strong> est communiqué par téléphone
              ou WhatsApp ({company.phoneDisplay}, {company.email}). Il précise le type de
              prestation, le tarif TTC estimé, le délai d&apos;arrivée et les éventuelles
              majorations (nuit, week-end, jour férié, pénibilité d&apos;accès).
            </p>
            <p>
              Aucune intervention n&apos;est engagée sans accord exprès du client sur le montant et
              les conditions. Le dépanneur peut refuser ou adapter la prestation si le véhicule,
              l&apos;accès au lieu ou l&apos;état de la panne rend l&apos;intervention impossible ou
              dangereuse.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">4. Tarifs</h2>
            <p>
              Les tarifs applicables sont ceux de la{" "}
              <Link href="/tarifs/" className="text-gyro hover:underline">
                grille tarifaire
              </Link>{" "}
              en vigueur sur le site au moment de l&apos;intervention, sauf devis spécifique pour
              distances supérieures à 20 km ou cas complexes.
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Forfait dépannage sur place : {formatPrice(pricing.dsp.baseFee)} + déplacement.</li>
              <li>
                Majoration nuit (20h–8h) : +{pricing.surcharges.night.percent} %.
              </li>
              <li>
                Majoration samedi : +{pricing.surcharges.weekendSaturday.percent} % ; dimanche : +
                {pricing.surcharges.weekendSunday.percent} %.
              </li>
              <li>
                Majoration jour férié : +{pricing.surcharges.holiday.percent} %.
              </li>
              <li>
                Supplément pénibilité : +{formatPrice(pricing.difficultySurcharge.amount)} (
                {pricing.difficultySurcharge.label}).
              </li>
            </ul>
            <p className="mt-2">Tous les montants sont exprimés en euros TTC.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">5. Paiement</h2>
            <p>
              Le règlement s&apos;effectue <strong>sur place</strong>, à l&apos;issue de la
              prestation, par carte bancaire ou espèces, sauf accord écrit pour les clients
              professionnels (facturation différée).
            </p>
            <p>
              Une facture ou reçu détaillé peut être remis sur demande, notamment pour les dossiers
              d&apos;assurance ou d&apos;assistance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              6. Annulation et absence du client
            </h2>
            <p>
              En cas d&apos;annulation après le départ du dépanneur, ou si le véhicule n&apos;est
              plus sur place, inaccessible ou si le client est absent, des{" "}
              <strong>frais de déplacement</strong> correspondant au forfait zone applicable peuvent
              être facturés, conformément au devis annoncé.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              7. Droit de rétractation
            </h2>
            <p>
              Conformément à l&apos;article L221-28 du Code de la consommation, le droit de
              rétractation de 14 jours <strong>ne s&apos;applique pas</strong> aux prestations de
              dépannage ou de remorquage exécutées en urgence, à la demande expresse du client,
              dont l&apos;exécution a commencé avant la fin du délai de rétractation et qui ne
              peuvent être reproduites (intervention sur place ou remorquage immédiat).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              8. Responsabilité et assurance
            </h2>
            <p>
              Le Prestataire est couvert par une assurance responsabilité civile professionnelle
              pour les dommages causés dans le cadre de ses prestations. Le client demeure
              responsable de la conformité du véhicule, de l&apos;accès au lieu d&apos;intervention
              et des informations transmises (localisation, type de panne).
            </p>
            <p>
              Le remorquage est effectué sur plateau avec système de fixation adapté aux
              deux-roues (sangles, bloque-roue). Le client est invité à retirer les objets de valeur
              et à signaler tout antivol ou particularité du véhicule.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              9. Réclamations et médiation
            </h2>
            <p>
              Toute réclamation doit être adressée par email à {company.email} ou par courrier à{" "}
              {getStreetAddress()}, en indiquant la date d&apos;intervention et les éléments du
              dossier.
            </p>
            <p>
              À défaut de réponse satisfaisante sous 30 jours, le client consommateur peut saisir
              gratuitement le médiateur de la consommation :{" "}
              <a
                href={consumerMediator.url}
                className="text-gyro hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {consumerMediator.name}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              10. Données personnelles
            </h2>
            <p>
              Les données collectées dans le cadre des prestations et du site sont traitées
              conformément à la{" "}
              <Link href="/confidentialite/" className="text-gyro hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              11. Droit applicable et litiges
            </h2>
            <p>
              Les présentes CGV sont soumises au <strong>droit français</strong>. En cas de litige
              et à défaut de résolution amiable, compétence est attribuée aux tribunaux du ressort
              du siège social du Prestataire, sous réserve des règles impératives de compétence
              applicables aux consommateurs.
            </p>
            <p className="mt-2 text-xs text-beton">
              Éditeur : {getLegalName()} — SIREN : {getSirenDisplay()} — {getStreetAddress()}
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
