"use client";

import dynamic from "next/dynamic";
import { GeolocationProvider } from "@/components/GeolocationProvider";
import { InterventionBar } from "@/components/InterventionBar";

const CookieConsent = dynamic(
  () => import("@/components/CookieConsent").then((m) => m.CookieConsent),
  { ssr: false },
);

const AnalyticsProvider = dynamic(
  () => import("@/components/AnalyticsProvider").then((m) => m.AnalyticsProvider),
  { ssr: false },
);

const GoogleAnalyticsScript = dynamic(
  () => import("@/components/AnalyticsProvider").then((m) => m.GoogleAnalyticsScript),
  { ssr: false },
);

export function ClientChrome() {
  return (
    <>
      <GeolocationProvider>
        <InterventionBar />
      </GeolocationProvider>
      <CookieConsent />
      <AnalyticsProvider />
      <GoogleAnalyticsScript />
    </>
  );
}
