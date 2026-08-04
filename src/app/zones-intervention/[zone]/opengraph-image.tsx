import { getZoneBySlug } from "@/data/zones";
import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

type Props = { params: Promise<{ zone: string }> };

export default async function OgImage({ params }: Props) {
  const { zone: slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) return createOgImage("DépannageScooter", "Île-de-France 24h/24");
  return createOgImage(
    `Dépannage scooter moto ${zone.name}`,
    `Arrivée ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min · 24h/24`,
  );
}
