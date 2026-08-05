import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "FAQ DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("Questions fréquentes", "Dépannage scooter et moto 24h/24");
}
