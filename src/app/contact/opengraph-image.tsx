import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Contact DépannageScooter";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("Contact & rappel", "Intervention urgente 24h/24 en IDF");
}
