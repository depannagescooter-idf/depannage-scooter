import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { depannageServices, getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return depannageServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/depannage-sur-place/${service.slug}/`,
    useRouteOg: true,
  });
}

export default async function DepannageServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.category !== "depannage") notFound();

  return (
    <PageShell>
      <ServicePageContent
        service={service}
        hubLabel="Dépannage sur place"
        hubPath="/depannage-sur-place/"
      />
    </PageShell>
  );
}
