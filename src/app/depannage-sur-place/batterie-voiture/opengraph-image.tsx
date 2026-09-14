import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Dépannage batterie voiture DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("Batterie voiture à domicile", "Démarrage et remplacement — Paris & IDF 24h/24");
}
