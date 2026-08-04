import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { depannageServices, remorquageServices } from "@/data/services";
import type { Zone } from "@/data/types";
import { getZoneBySlug } from "@/data/zones";
import { autoRepairSchema, breadcrumbSchema } from "@/lib/schema";

export function ZonePageContent({ zone }: { zone: Zone }) {
  const neighbours = zone.neighbours
    .map((slug) => getZoneBySlug(slug))
    .filter((z): z is Zone => Boolean(z));

  const shortAnswer = `${company.name} intervient à ${zone.name} pour dépannage et remorquage scooter et moto, 24h/24. Délai habituel : ${zone.etaMinutes[0]} à ${zone.etaMinutes[1]} minutes. Appelez le ${company.phoneDisplay} pour un devis ferme avant déplacement.`;

  return (
    <>
      <JsonLd
        data={[
          autoRepairSchema(zone.name),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Zones", path: "/zones-intervention/" },
            { name: zone.name },
          ]),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Zones", href: "/zones-intervention/" },
            { label: zone.name },
          ]}
        />

        <article className="mt-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-asphalte sm:text-4xl">
            Dépannage et remorquage scooter et moto à {zone.name}
          </h1>
          <div className="mt-4">
            <ShortAnswer>{shortAnswer}</ShortAnswer>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton origin="inline" />
            <WhatsAppButton origin="inline" />
          </div>

          <p className="mt-8 leading-relaxed text-beton">{zone.intro}</p>

          <section className="mt-10">
            <h2 className="section-title">Combien de temps pour arriver à {zone.name} ?</h2>
            <p className="mt-2 text-beton">
              En journée, comptez{" "}
              <span className="font-data font-semibold tabular-nums text-asphalte">
                {zone.etaMinutes[0]}–{zone.etaMinutes[1]} minutes
              </span>{" "}
              selon le trafic et le point de panne exact. Le délai vous est confirmé par téléphone.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Quels dépannages sur place ?</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {depannageServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/depannage-sur-place/${s.slug}/`}
                    className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Quel tarif de remorquage depuis {zone.name} ?</h2>
            <div className="mt-4">
              <PriceTable showDsp={false} showSurcharges={false} />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Quelles interventions sont fréquentes ici ?</h2>
            <ul className="mt-4 list-inside list-disc space-y-1 text-beton">
              {zone.commonInterventions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-beton">
              Axes desservis : {zone.axes.join(", ")}.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Remorquage et dépannage moto</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {remorquageServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/remorquage/${s.slug}/`}
                    className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {neighbours.length > 0 && (
            <section className="mt-10">
              <h2 className="section-title">Zones voisines</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {neighbours.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/zones-intervention/${n.slug}/`}
                      className="rounded-full border border-border px-3 py-1 text-sm hover:border-signal hover:text-signal"
                    >
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
