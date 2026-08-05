"use client";

import dynamic from "next/dynamic";

const GeolocationPrompt = dynamic(
  () => import("@/components/GeolocationProvider").then((m) => m.GeolocationPrompt),
  { ssr: false },
);

/** Géolocalisation chargée après idle — n'alourdit pas le bundle layout. */
export function DeferredGeolocation() {
  return <GeolocationPrompt />;
}
