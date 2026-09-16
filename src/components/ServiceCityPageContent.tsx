import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import type { Service } from "@/data/types";
import type { Zone } from "@/data/types";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export function ServiceCityPageContent({
  service,
  zone,
  hubPath,
  hubLabel,
}: {
  service: Service;
  zone: Zone;
  hubPath: string;
  hubLabel: string;
}) {
  const servicePath = `${hubPath}${service.slug}/`;
  const cityPath = `${servicePath}${zone.slug}/`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${service.name} à ${zone.name}`,
            description: `${service.shortAnswer} Intervention à ${zone.name}, ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min.`,
            url: cityPath,
            priceKey: service.priceKey,
            serviceType: service.name,
          }),
          faqPageSchema(service.faqs.slice(0, 3)),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: hubLabel, href: hubPath },
            { label: service.name, href: servicePath },
            { label: zone.name },
          ]}
        />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          {service.name} à {zone.name}
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            {company.name} intervient pour {service.name.toLowerCase()} à {zone.name} en{" "}
            {zone.etaMinutes[0]}–{zone.etaMinutes[1]} minutes, 24h/24. Devis ferme au{" "}
            {company.phoneDisplay} avant départ du dépanneur.
          </ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>

        <p className="mt-8 leading-relaxed text-beton">{service.intro}</p>

        <section className="mt-10">
          <h2 className="section-title">Liens utiles</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={servicePath} className="font-medium text-gyro hover:underline">
                {service.name} — page prestation complète
              </Link>
            </li>
            <li>
              <Link
                href={`/zones-intervention/${zone.slug}/`}
                className="font-medium text-gyro hover:underline"
              >
                Dépannage scooter et moto à {zone.name}
              </Link>
            </li>
            <li>
              <Link href="/tarifs/" className="font-medium text-gyro hover:underline">
                Grille tarifaire
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
