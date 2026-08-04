import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ServicePageContent } from "@/components/ServicePageContent";
import { getServiceBySlug, remorquageServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return remorquageServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/remorquage/${service.slug}/`,
  });
}

export default async function RemorquageServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.category !== "remorquage") notFound();

  return (
    <PageShell>
      <ServicePageContent service={service} hubLabel="Remorquage" hubPath="/remorquage/" />
    </PageShell>
  );
}
