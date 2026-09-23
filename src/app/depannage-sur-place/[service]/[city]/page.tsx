import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServiceCityPageContent } from "@/components/ServiceCityPageContent";
import { majorCitySlugs } from "@/data/major-cities";
import { depannageServices, getServiceBySlug } from "@/data/services";
import { getZoneBySlug } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ service: string; city: string }> };

export function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  for (const service of depannageServices) {
    for (const city of majorCitySlugs) {
      params.push({ service: service.slug, city });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const zone = getZoneBySlug(citySlug);
  if (!service || !zone || service.category !== "depannage") return {};
  const title = `${service.name} ${zone.name} – 24h/24`;
  return createPageMetadata({
    title: title.length <= 60 ? title : `${service.name} ${zone.name}`,
    description: `${service.name} à ${zone.name} en ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min, 24h/24. Devis ferme avant départ.`,
    path: `/depannage-sur-place/${service.slug}/${zone.slug}/`,
    index: false,
    follow: true,
    useRouteOg: true,
  });
}

export default async function DepannageServiceCityPage({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const zone = getZoneBySlug(citySlug);
  if (!service || !zone || service.category !== "depannage") notFound();

  return (
    <PageShell>
      <ServiceCityPageContent
        service={service}
        zone={zone}
        hubPath="/depannage-sur-place/"
        hubLabel="Dépannage sur place"
      />
    </PageShell>
  );
}
