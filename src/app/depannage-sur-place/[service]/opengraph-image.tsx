import { getServiceBySlug } from "@/data/services";
import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

type Props = { params: Promise<{ service: string }> };

export default async function OgImage({ params }: Props) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return createOgImage("DépannageScooter", "Île-de-France 24h/24");
  return createOgImage(service.name, "Dépannage sur place · 24h/24");
}
