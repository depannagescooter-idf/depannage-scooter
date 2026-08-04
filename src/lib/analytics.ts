export type AnalyticsConsent = "granted" | "denied";

const CONSENT_KEY = "cookie-consent";

export function getStoredConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function setStoredConsent(consent: AnalyticsConsent): void {
  localStorage.setItem(CONSENT_KEY, consent);
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: consent }));
}

export function gaId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  return id && id.length > 0 ? id : undefined;
}

export function initGtag(consent: AnalyticsConsent): void {
  const id = gaId();
  if (!id || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: consent,
  });

  if (consent === "granted") {
    window.gtag("config", id, { anonymize_ip: true });
  }
}

export function trackCallClick(origin: string | null): void {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "call_click", {
    event_category: "conversion",
    event_label: origin ?? "unknown",
    call_origin: origin ?? "unknown",
  });
}

export function trackWhatsAppClick(origin: string | null): void {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "whatsapp_click", {
    event_category: "conversion",
    event_label: origin ?? "unknown",
    whatsapp_origin: origin ?? "unknown",
  });
}

export function trackFormSubmit(): void {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", {
    event_category: "conversion",
    event_label: "contact_form",
  });
}
