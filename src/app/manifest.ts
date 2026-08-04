import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "DépannageScooter",
    description: company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#f97316",
    lang: "fr",
  };
}
