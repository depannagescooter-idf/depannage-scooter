import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Tarifs DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("Grille tarifaire", "Dépannage et remorquage — Île-de-France");
}
