"use client";

import { GeolocationProvider } from "@/components/GeolocationProvider";
import { InterventionBar } from "@/components/InterventionBar";

/** Bandeau d'intervention SSR — visible dès le premier rendu (Speed Index). */
export function SiteChrome() {
  return (
    <GeolocationProvider>
      <InterventionBar />
    </GeolocationProvider>
  );
}
