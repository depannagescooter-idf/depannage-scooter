import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { DepartmentHubContent } from "@/components/DepartmentHubContent";
import { ZonePageContent } from "@/components/ZonePageContent";
import { departments, getDepartmentBySlug } from "@/data/departments";
import { getPublishedZoneSlugs, getZoneBySlug } from "@/data/zones";
import { createPageMetadata } from "@/lib/metadata";
import { getDepartmentPageTitle, getZonePageDescription, getZonePageTitle } from "@/lib/zone-metadata";

type Props = { params: Promise<{ zone: string }> };

export function generateStaticParams() {
  return [
    ...getPublishedZoneSlugs().map((zone) => ({ zone })),
    ...departments.map((d) => ({ zone: d.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zone: slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (department) {
    return createPageMetadata({
      title: getDepartmentPageTitle(department.name, department.code),
      description: department.intro.slice(0, 158),
      path: `/zones-intervention/${department.slug}/`,
      useRouteOg: true,
    });
  }
  const zone = getZoneBySlug(slug);
  if (!zone || zone.draft) return {};
  return createPageMetadata({
    title: getZonePageTitle(zone),
    description: getZonePageDescription(zone),
    path: `/zones-intervention/${zone.slug}/`,
    useRouteOg: true,
  });
}

export default async function ZonePage({ params }: Props) {
  const { zone: slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (department) {
    return (
      <PageShell>
        <DepartmentHubContent department={department} />
      </PageShell>
    );
  }
  const zone = getZoneBySlug(slug);
  if (!zone || zone.draft) notFound();

  return (
    <PageShell>
      <ZonePageContent zone={zone} />
    </PageShell>
  );
}
