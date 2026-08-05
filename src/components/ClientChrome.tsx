"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
  const [deferSecondary, setDeferSecondary] = useState(false);

  useEffect(() => {
    const win = window;
    if (typeof win.requestIdleCallback === "function") {
      const id = win.requestIdleCallback(() => setDeferSecondary(true), { timeout: 2500 });
      return () => win.cancelIdleCallback(id);
    }
    const timer = win.setTimeout(() => setDeferSecondary(true), 800);
    return () => win.clearTimeout(timer);
  }, []);

  return (
    <>
      <GeolocationProvider>
        <InterventionBar />
      </GeolocationProvider>
      {deferSecondary ? (
        <>
          <CookieConsent />
          <AnalyticsProvider />
          <GoogleAnalyticsScript />
        </>
      ) : null}
    </>
  );
}
