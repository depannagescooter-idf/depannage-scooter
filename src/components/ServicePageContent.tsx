import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { ServicePriceTable } from "@/components/ServicePriceTable";
import type { Service } from "@/data/types";
import { getServiceBySlug } from "@/data/services";
import { CrevaisonGallery } from "@/components/CrevaisonGallery";
import { RemorquageGallery } from "@/components/RemorquageGallery";
import { ServiceZonesCompact } from "@/components/ServiceZonesCompact";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export function ServicePageContent({
  service,
  hubLabel,
  hubPath,
}: {
  service: Service;
  hubLabel: string;
  hubPath: string;
}) {
  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  const remorquageSlug =
    service.category === "depannage"
      ? service.slug === "crevaison"
        ? "remorquage-scooter"
        : "remorquage-moto"
      : undefined;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.shortAnswer,
            url: `${hubPath}${service.slug}/`,
            priceKey: service.priceKey,
          }),
          faqPageSchema(service.faqs),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: hubLabel, href: hubPath },
            { label: service.name },
          ]}
        />

        <article className="mt-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-asphalte sm:text-4xl">
            {service.h1}
          </h1>
          <div className="mt-4">
            <ShortAnswer>{service.shortAnswer}</ShortAnswer>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>

          <p className="mt-8 leading-relaxed text-beton">{service.intro}</p>

          <section className="mt-10">
            <h2 className="section-title">Quels sont les symptômes ?</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-beton">
              {service.symptoms.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Comment se déroule l&apos;intervention ?</h2>
            <p className="mt-2 text-sm text-beton">
              Durée habituelle :{" "}
              <span className="font-data font-semibold tabular-nums text-asphalte">
                {service.duration}
              </span>
            </p>
            <ol className="mt-4 space-y-4">
              {service.interventionSteps.map((step, i) => (
                <li key={step.title} className="card px-5 py-4">
                  <span className="font-data text-sm font-semibold text-signal" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display font-semibold text-asphalte">{step.title}</h3>
                  <p className="mt-1 text-sm text-beton">{step.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Combien ça coûte ?</h2>
            <div className="mt-4">
              <ServicePriceTable priceKey={service.priceKey} />
            </div>
            <p className="mt-3 text-sm text-beton">Majorations nuit, week-end et jours fériés applicables.</p>
            <p className="mt-2">
              <Link href="/tarifs/" className="font-medium text-gyro hover:underline">
                Voir la grille tarifaire complète →
              </Link>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Sur quels véhicules ?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.vehicles.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-surface-muted px-3 py-1 text-sm text-asphalte"
                >
                  {v}
                </li>
              ))}
            </ul>
          </section>

          {service.category === "depannage" && remorquageSlug && (
            <section className="mt-10">
              <h2 className="section-title">Quand faut-il un remorquage plutôt ?</h2>
              <p className="mt-2 text-beton">
                Si la réparation sur place n&apos;est pas possible (pneu irrécupérable, panne
                mécanique lourde, jante voilée), nous organisons un{" "}
                <Link href={`/remorquage/${remorquageSlug}/`} className="text-gyro hover:underline">
                  remorquage vers un professionnel
                </Link>
                .
              </p>
            </section>
          )}

          {service.slug === "crevaison" && (
            <section className="mt-10">
              <CrevaisonGallery />
            </section>
          )}

          {service.category === "remorquage" && (
            <>
              <section className="mt-10">
                <RemorquageGallery />
              </section>
              <section className="mt-10">
                <h2 className="section-title">Où emmenons-nous votre véhicule ?</h2>
                <p className="mt-2 text-beton">
                  Domicile, garage, concession, fourrière ou expert d&apos;assurance — indiquez la
                  destination lors de l&apos;appel. Le tarif dépend de la distance totale parcourue.
                </p>
              </section>
            </>
          )}

          {service.slug === "batterie" && (
            <section className="mt-10">
              <h2 className="section-title">Batterie voiture à plat ?</h2>
              <p className="mt-2 text-beton">
                Pour une voiture qui ne démarre plus, consultez notre page dédiée :{" "}
                <Link
                  href="/depannage-voiture/batterie/"
                  className="font-medium text-gyro hover:underline"
                >
                  dépannage batterie voiture à domicile
                </Link>
                .
              </p>
            </section>
          )}

          {service.slug === "demarrage-booster" && (
            <section className="mt-10">
              <h2 className="section-title">Voiture immobilisée ?</h2>
              <p className="mt-2 text-beton">
                Cette page concerne les deux-roues. Pour une batterie de voiture à plat :{" "}
                <Link
                  href="/depannage-voiture/batterie/"
                  className="font-medium text-gyro hover:underline"
                >
                  dépannage batterie voiture Paris et Île-de-France
                </Link>
                .
              </p>
            </section>
          )}

          <section className="mt-10">
            <h2 className="section-title">Où intervenez-vous ?</h2>
            <p className="mt-2 text-sm text-beton">
              Intervention en Île-de-France — délais et tarifs selon la commune.
            </p>
            <ServiceZonesCompact />
            <p className="mt-3">
              <Link href="/zones-intervention/" className="text-sm font-medium text-gyro hover:underline">
                Toutes les zones →
              </Link>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Questions fréquentes</h2>
            <div className="mt-4">
              <FaqAccordion items={service.faqs} id={`faq-${service.slug}`} />
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-10">
              <h2 className="section-title">Services liés</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`${rel.category === "depannage" ? "/depannage-sur-place/" : "/remorquage/"}${rel.slug}/`}
                      className="card block px-4 py-3 transition-shadow hover:shadow-card"
                    >
                      <span className="font-display text-sm font-semibold text-asphalte">
                        {rel.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <section className="card mt-12 bg-gradient-to-br from-signal/5 to-gyro/5 px-6 py-8 text-center">
          <h2 className="font-display text-xl font-bold text-asphalte">Besoin d&apos;une intervention ?</h2>
          <p className="mt-2 text-beton">
            Appelez {company.name} — délai confirmé avant départ.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>
        </section>
      </main>
    </>
  );
}
