import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Guides DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("Guides pratiques", "Pannes scooter et moto — conseils IDF");
}
