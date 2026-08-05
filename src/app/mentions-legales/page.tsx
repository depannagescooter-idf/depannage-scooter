import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
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
  title: "Mentions légales",
  description: "Mentions légales du site DépannageScooter — éditeur, hébergeur, contact.",
  path: "/mentions-legales/",
  index: false,
});

export default function MentionsLegalesPage() {
  const legalForm = getLegalForm();

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">Mentions légales</h1>
        <p className="mt-2 text-xs text-beton">Dernière mise à jour : {LEGAL_LAST_UPDATED}</p>

        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-sm text-beton">
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Éditeur du site</h2>
            <p>
              Le site {company.url.replace("https://", "")} est édité par :
            </p>
            <p>
              <strong>{getLegalName()}</strong>
              {legalForm ? (
                <>
                  <br />
                  Forme juridique : {legalForm}
                </>
              ) : null}
              <br />
              {getStreetAddress()}
              <br />
              Email :{" "}
              <a href={`mailto:${company.email}`} className="text-gyro hover:underline">
                {company.email}
              </a>
              <br />
              Téléphone :{" "}
              <a href={`tel:${company.phone}`} className="font-data text-gyro hover:underline">
                {company.phoneDisplay}
              </a>
              <br />
              SIREN : {getSirenDisplay()}
            </p>
            <p className="mt-2">
              Activité : dépannage sur place et remorquage de scooters, motos et deux-roues
              motorisés en Île-de-France, disponible 24h/24 et 7j/7.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              Directeur de la publication
            </h2>
            <p>Le représentant légal de {getLegalName()}.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Hébergement</h2>
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
              <br />
              Site :{" "}
              <a
                href="https://vercel.com"
                className="text-gyro hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, structure, graphismes, logo{" "}
              {company.name}) est protégé par le droit d&apos;auteur et le droit des marques. Toute
              reproduction, représentation ou exploitation non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              Limites de responsabilité
            </h2>
            <p>
              Les informations (tarifs indicatifs, délais moyens, zones couvertes) sont fournies à
              titre informatif. Seul le devis confirmé par téléphone ou WhatsApp avant
              intervention fait foi. {company.name} ne peut être tenu responsable des indisponibilités
              liées au trafic, à la météo, à l&apos;accès au véhicule ou à des cas de force majeure.
            </p>
            <p className="mt-2">
              Comme pour l&apos;ensemble des dépanneurs deux-roues privés en Île-de-France, nos
              interventions n&apos;incluent pas le boulevard périphérique, les autoroutes et voies
              rapides (dépanneurs agréés — numéro d&apos;urgence <strong>112</strong>).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              Données personnelles et cookies
            </h2>
            <p>
              Pour le traitement des données et l&apos;usage des cookies, consultez la{" "}
              <Link href="/confidentialite/" className="text-gyro hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Médiation</h2>
            <p>
              Conformément aux dispositions du Code de la consommation concernant le règlement
              amiable des litiges, le consommateur peut recourir gratuitement au service de
              médiation :{" "}
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
            <h2 className="font-display text-lg font-semibold text-asphalte">Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront compétents, sous réserve des règles impératives
              protectrices du consommateur.
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
