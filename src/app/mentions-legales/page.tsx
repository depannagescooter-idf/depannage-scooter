import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site DépannageScooter — éditeur, hébergeur, contact.",
  path: "/mentions-legales/",
  index: false,
});

export default function MentionsLegalesPage() {
  const { address } = company;
  const legalName =
    company.legalName !== "TODO-RAISON-SOCIALE" ? company.legalName : company.name;
  const siren =
    company.siren !== "TODO-SIREN" ? company.siren : "En cours d'immatriculation";
  const street =
    address.street !== "TODO-adresse"
      ? `${address.street}, ${address.postalCode} ${address.city}`
      : `${address.postalCode} ${address.city}`;

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">Mentions légales</h1>
        <div className="prose prose-stone mt-8 max-w-none space-y-6 text-sm text-beton">
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Éditeur du site</h2>
            <p>
              {legalName}
              {company.legalForm !== "TODO-FORME-JURIDIQUE" ? ` — ${company.legalForm}` : ""}
              <br />
              {street}
              <br />
              Email : {company.email}
              <br />
              Téléphone : {company.phoneDisplay}
              <br />
              SIREN : {siren}
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Directeur de la publication</h2>
            <p>Le représentant légal de {company.name}.</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Hébergement</h2>
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
              <br />
              Site : vercel.com
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-asphalte">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, structure, marque {company.name}) est
              protégé. Toute reproduction sans autorisation est interdite.
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
