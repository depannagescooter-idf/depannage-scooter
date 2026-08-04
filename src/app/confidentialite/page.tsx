import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et cookies — DépannageScooter.",
  path: "/confidentialite/",
  index: false,
});

export default function ConfidentialitePage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Confidentialité" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">
          Politique de confidentialité
        </h1>
        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-sm text-beton">
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Responsable du traitement</h2>
            <p>
              {company.name} — {company.email} — {company.phoneDisplay}
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Données collectées</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>Formulaire de contact : téléphone, localisation, type de panne</li>
              <li>Analytics (avec consentement) : pages visitées, clics d&apos;appel agrégés</li>
              <li>Géolocalisation (optionnelle) : position approximative pour estimer un délai</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Finalités</h2>
            <p>
              Organiser une intervention, rappeler le client, mesurer l&apos;audience du site et
              améliorer le service. Aucune revente de données à des tiers.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Base légale</h2>
            <p>
              Exécution de mesures précontractuelles (demande de devis / rappel) et intérêt légitime
              pour l&apos;analytics sous consentement cookies.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Durée de conservation</h2>
            <p>
              Demandes de contact : 12 mois maximum. Données analytics : selon durée de rétention
              Google Analytics (configurable).
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Vos droits</h2>
            <p>
              Accès, rectification, effacement, opposition : contactez {company.email}. Réclamation
              possible auprès de la CNIL (cnil.fr).
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Cookies</h2>
            <p>
              Cookies analytics déposés uniquement après acceptation via le bandeau. Refus possible
              sans impact sur l&apos;accès au site ou la prise d&apos;appel.
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
