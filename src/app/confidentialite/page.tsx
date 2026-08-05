import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";
import { LEGAL_LAST_UPDATED, getLegalName } from "@/lib/legal";

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
        <p className="mt-2 text-xs text-beton">Dernière mise à jour : {LEGAL_LAST_UPDATED}</p>

        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-sm text-beton">
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              Responsable du traitement
            </h2>
            <p>
              {getLegalName()} ({company.name}) — {company.email} — {company.phoneDisplay}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Données collectées</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Formulaire de contact</strong> : téléphone, localisation, type de panne,
                marque/modèle du véhicule (optionnel).
              </li>
              <li>
                <strong>Appels téléphoniques / WhatsApp</strong> : numéro, contenu de la demande
                (non enregistré sur le site).
              </li>
              <li>
                <strong>Analytics</strong> (avec votre consentement) : pages visitées, clics
                d&apos;appel agrégés, type d&apos;appareil.
              </li>
              <li>
                <strong>Géolocalisation</strong> (optionnelle, avec votre accord) : position
                approximative pour estimer un délai d&apos;arrivée — non conservée sur nos serveurs
                au-delà de la session.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Finalités</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>Organiser une intervention ou un rappel téléphonique.</li>
              <li>Établir un devis et assurer le suivi de la prestation.</li>
              <li>Mesurer l&apos;audience du site et améliorer le service (analytics).</li>
            </ul>
            <p className="mt-2">Aucune revente de données à des tiers. Aucune publicité ciblée.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Base légale</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Exécution de mesures précontractuelles</strong> : demande de devis, rappel,
                organisation d&apos;intervention.
              </li>
              <li>
                <strong>Consentement</strong> : cookies analytics et géolocalisation optionnelle.
              </li>
              <li>
                <strong>Intérêt légitime</strong> : sécurité du site, lutte contre le spam
                (formulaire).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Sous-traitants</h2>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Vercel Inc.</strong> — hébergement du site (États-Unis, clauses
                contractuelles types).
              </li>
              <li>
                <strong>Google LLC</strong> — Google Analytics 4 (si consentement), mesure
                d&apos;audience.
              </li>
              <li>
                <strong>Vercel Inc.</strong> — Analytics et Speed Insights (métriques de
                performance agrégées).
              </li>
              <li>
                <strong>Fournisseur email / webhook</strong> — transmission des demandes de contact
                (serveur configuré par {company.name}).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">
              Durée de conservation
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>Demandes de contact : 12 mois maximum après le dernier échange.</li>
              <li>Données de facturation : durée légale comptable (10 ans).</li>
              <li>Cookies analytics : 13 mois maximum (selon configuration GA4).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de portabilité. Exercez vos
              droits à {company.email}. Réclamation possible auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                className="text-gyro hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Cookies</h2>
            <p>
              Des cookies analytics peuvent être déposés <strong>uniquement après acceptation</strong>{" "}
              via le bandeau affiché lors de votre première visite. Le refus n&apos;empêche pas
              l&apos;accès au site ni la prise de contact par téléphone ({company.phoneDisplay}).
            </p>
            <p className="mt-2">
              Vous pouvez à tout moment effacer les cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Contact</h2>
            <p>
              Questions sur vos données : {company.email}. Voir aussi les{" "}
              <Link href="/cgv/" className="text-gyro hover:underline">
                CGV
              </Link>{" "}
              et les{" "}
              <Link href="/mentions-legales/" className="text-gyro hover:underline">
                mentions légales
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
