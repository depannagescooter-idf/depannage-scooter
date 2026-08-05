import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ZonePageContent } from "@/components/ZonePageContent";
import { getPublishedZoneSlugs, getZoneBySlug } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ zone: string }> };

export function generateStaticParams() {
  return getPublishedZoneSlugs().map((zone) => ({ zone }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zone: slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone || zone.draft) return {};
  const title = `Dépannage scooter ${zone.name} – 24h/24`;
  const description = `Dépannage et remorquage scooter et moto à ${zone.name}. Intervention ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min. Appelez DépannageScooter 24h/24.`;
  return createPageMetadata({
    title: title.length <= 60 ? title : `Dépannage ${zone.name} – DépannageScooter`,
    description: description.slice(0, 158),
    path: `/zones-intervention/${zone.slug}/`,
    useRouteOg: true,
  });
}

export default async function ZonePage({ params }: Props) {
  const { zone: slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone || zone.draft) notFound();

  return (
    <PageShell>
      <ZonePageContent zone={zone} />
    </PageShell>
  );
}
