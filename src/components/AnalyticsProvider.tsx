"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  gaId,
  getStoredConsent,
  initGtag,
  trackCallClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

export function AnalyticsProvider() {
  const id = gaId();

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent) initGtag(consent);

    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<"granted" | "denied">).detail;
      initGtag(detail);
    };
    window.addEventListener("cookie-consent-change", onConsentChange);

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest("[data-track-event]");
      if (!target) return;

      const trackEvent = target.getAttribute("data-track-event");
      const origin = target.getAttribute("data-track-origin");

      if (trackEvent === "call_click") trackCallClick(origin);
      if (trackEvent === "whatsapp_click") trackWhatsAppClick(origin);
    };

    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("cookie-consent-change", onConsentChange);
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (!id) return null;

  return (
    <Script id="ga4-init" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
        gtag('js', new Date());
      `}
    </Script>
  );
}

export function GoogleAnalyticsScript() {
  const id = gaId();
  if (!id) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      strategy="lazyOnload"
    />
  );
}
