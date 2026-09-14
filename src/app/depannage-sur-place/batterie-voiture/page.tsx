import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CarBatteryPageContent } from "@/components/CarBatteryPageContent";
import { carBatteryPage } from "@/data/car-battery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: carBatteryPage.metaTitle,
  description: carBatteryPage.metaDescription,
  path: carBatteryPage.path,
  useRouteOg: true,
});

export default function CarBatteryPage() {
  return (
    <PageShell>
      <CarBatteryPageContent />
    </PageShell>
  );
}
