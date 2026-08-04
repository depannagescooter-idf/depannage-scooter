import { company } from "@/data/company";
import { createOgImage, ogSize } from "@/lib/og-template";

export const runtime = "edge";
export const alt = company.name;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage(
    "Dépannage & remorquage scooter · moto",
    `${company.phoneDisplay} · Île-de-France 24h/24`,
  );
}
