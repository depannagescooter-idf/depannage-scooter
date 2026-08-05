"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DeferredVitals = dynamic(
  () => import("@/components/DeferredVitals").then((m) => m.DeferredVitals),
  { ssr: false },
);

const GeolocationPrompt = dynamic(
  () => import("@/components/GeolocationProvider").then((m) => m.GeolocationPrompt),
  { ssr: false },
);

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

function DeferredConsent() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = window;
    if (typeof win.requestIdleCallback === "function") {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => win.cancelIdleCallback(id);
    }
    const timer = win.setTimeout(() => setReady(true), 800);
    return () => win.clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <GeolocationPrompt />
      <CookieConsent />
      <AnalyticsProvider />
      <GoogleAnalyticsScript />
    </>
  );
}

export function DeferredClientShell() {
  return (
    <>
      <DeferredConsent />
      <DeferredVitals />
    </>
  );
}
