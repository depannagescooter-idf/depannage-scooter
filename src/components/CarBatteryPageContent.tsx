import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { CarBatteryPriceTable } from "@/components/CarBatteryPriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { carBatteryPage } from "@/data/car-battery";
import { company } from "@/data/company";
import { carBatteryServiceSchema, faqPageSchema } from "@/lib/schema";

export function CarBatteryPageContent() {
  const page = carBatteryPage;

  return (
    <>
      <JsonLd
        data={[carBatteryServiceSchema(), faqPageSchema([...page.faqs])]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Dépannage sur place", href: "/depannage-sur-place/" },
            { label: "Batterie voiture" },
          ]}
        />

        <article className="mt-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-asphalte sm:text-4xl">
            {page.h1}
          </h1>
          <div className="mt-4">
            <ShortAnswer>{page.shortAnswer}</ShortAnswer>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            <li className="flex items-start gap-2 text-sm text-beton">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
              Intervention en{" "}
              <span className="font-data tabular-nums text-asphalte">
                {company.defaultEtaMinutes[0]} à {company.defaultEtaMinutes[1]} min
              </span>{" "}
              en journée
            </li>
            {page.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-beton">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <section className="mt-10">
            <h2 className="section-title">Batterie à plat : les signes qui ne trompent pas</h2>
            <ul className="mt-4 space-y-4">
              {page.signs.map((sign) => (
                <li key={sign.title} className="card px-5 py-4">
                  <h3 className="font-display font-semibold text-asphalte">{sign.title}</h3>
                  <p className="mt-1 text-sm text-beton">{sign.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-beton">
              Un test de tension et de charge sur place permet de trancher en quelques minutes entre
              un simple démarrage et un remplacement.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Démarrage sur place ou remplacement : comment on décide</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="card px-5 py-4">
                <h3 className="font-display font-semibold text-asphalte">{page.decision.boost.title}</h3>
                <p className="mt-2 text-sm text-beton">{page.decision.boost.detail}</p>
              </div>
              <div className="card px-5 py-4">
                <h3 className="font-display font-semibold text-asphalte">
                  {page.decision.replacement.title}
                </h3>
                <p className="mt-2 text-sm text-beton">{page.decision.replacement.detail}</p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Remplacement de batterie voiture à domicile</h2>
            <p className="mt-2 text-beton">
              Le remplacement se fait là où vous êtes : rue, place de stationnement, parking
              souterrain, box. Comptez{" "}
              <span className="font-data tabular-nums text-asphalte">{page.durationMinutes} minutes</span>.
            </p>
            <h3 className="mt-6 font-display text-lg font-semibold text-asphalte">
              Ce que comprend l&apos;intervention
            </h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-beton">
              {page.replacementSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-lg font-semibold text-asphalte">
              Batteries standard, EFB et AGM start-stop
            </h3>
            <p className="mt-2 text-beton">{page.batteryTypes}</p>
            <p className="mt-3 rounded-sm border border-border bg-surface-muted px-4 py-3 text-sm text-beton">
              {page.ecuCoding}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Tarifs dépannage batterie voiture</h2>
            <div className="mt-4">
              <CarBatteryPriceTable />
            </div>
            <p className="mt-3 text-sm text-beton">
              Le tarif exact vous est confirmé par téléphone avant tout déplacement. Aucune surprise
              à l&apos;arrivée.{" "}
              <Link href="/tarifs/" className="font-medium text-gyro hover:underline">
                Grille complète →
              </Link>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Où intervenons-nous ?</h2>
            <p className="mt-2 text-beton">
              <Link href="/zones-intervention/" className="font-medium text-gyro hover:underline">
                {company.serviceAreas.length} départements couverts en Île-de-France
              </Link>{" "}
              — dépannage batterie voiture à domicile, en parking ou sur voie publique.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.topZones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/zones-intervention/${zone.slug}/`}
                    className="rounded-full bg-surface-muted px-3 py-1 text-sm text-asphalte hover:text-gyro"
                  >
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Combien de temps pour une intervention ?</h2>
            <p className="mt-2 text-beton">
              En journée, comptez{" "}
              <span className="font-data tabular-nums text-asphalte">
                {company.defaultEtaMinutes[0]} à {company.defaultEtaMinutes[1]} minutes
              </span>{" "}
              selon la zone et le trafic. Le délai réel vous est annoncé lors de l&apos;appel. La nuit
              et le week-end, le délai peut être légèrement plus long — nous intervenons 24h/24.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Sur quels véhicules ?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.vehicles.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-surface-muted px-3 py-1 text-sm text-asphalte"
                >
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-beton">
              Pour scooter et moto :{" "}
              <Link href="/depannage-sur-place/batterie/" className="text-gyro hover:underline">
                dépannage batterie deux-roues
              </Link>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Questions fréquentes</h2>
            <div className="mt-4">
              <FaqAccordion items={[...page.faqs]} id="faq-batterie-voiture" />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Services liés</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              <li>
                <Link
                  href="/depannage-sur-place/batterie/"
                  className="card block px-4 py-3 hover:shadow-card"
                >
                  <span className="font-display text-sm font-semibold text-asphalte">
                    Batterie scooter et moto
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="card block px-4 py-3 hover:shadow-card">
                  <span className="font-display text-sm font-semibold text-asphalte">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/tarifs/" className="card block px-4 py-3 hover:shadow-card">
                  <span className="font-display text-sm font-semibold text-asphalte">Tarifs</span>
                </Link>
              </li>
            </ul>
          </section>
        </article>

        <section className="card mt-12 bg-gradient-to-br from-signal/5 to-gyro/5 px-6 py-8 text-center">
          <h2 className="font-display text-xl font-bold text-asphalte">Batterie voiture à plat ?</h2>
          <p className="mt-2 text-beton">Devis ferme au {company.phoneDisplay} — départ après accord.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>
        </section>
      </div>
    </>
  );
}
