import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { formatPrice, pricing } from "@/data/pricing";
import type { Service } from "@/data/types";
import { getServiceBySlug } from "@/data/services";
import { getZoneBySlug } from "@/data/zones";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

const majorZoneSlugs = ["paris-11e", "paris-20e", "boulogne-billancourt", "montreuil", "nanterre"];

function getPriceLabel(priceKey: string): string {
  if (priceKey in pricing.dsp) {
    const tier = pricing.dsp[priceKey as keyof typeof pricing.dsp];
    return `Forfait ${formatPrice(tier.baseFee)} + ${tier.perKm} €/km`;
  }
  if (priceKey in pricing.towing) {
    const tier = pricing.towing[priceKey as keyof typeof pricing.towing];
    return formatPrice(tier.amount);
  }
  return "Sur devis";
}

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

  const majorZones = majorZoneSlugs
    .map((slug) => getZoneBySlug(slug))
    .filter(Boolean);

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
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: hubLabel, path: hubPath },
            { name: service.name },
          ]),
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
                  <span className="font-data text-sm font-semibold text-signal">
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
            <p className="mt-2 text-beton">
              Tarif de référence pour cette prestation :{" "}
              <span className="font-data font-semibold tabular-nums text-signal">
                {getPriceLabel(service.priceKey)}
              </span>
              . Majorations nuit et week-end applicables.
            </p>
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

          {service.category === "remorquage" && (
            <section className="mt-10">
              <h2 className="section-title">Où emmenons-nous votre véhicule ?</h2>
              <p className="mt-2 text-beton">
                Domicile, garage, concession, fourrière ou expert d&apos;assurance — indiquez la
                destination lors de l&apos;appel. Le tarif dépend de la distance totale parcourue.
              </p>
            </section>
          )}

          <section className="mt-10">
            <h2 className="section-title">Où intervenez-vous ?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {majorZones.map((zone) =>
                zone ? (
                  <li key={zone.slug}>
                    <Link
                      href={`/zones-intervention/${zone.slug}/`}
                      className="rounded-full border border-border px-3 py-1 text-sm text-asphalte transition-colors hover:border-signal hover:text-signal"
                    >
                      {zone.name}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
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
