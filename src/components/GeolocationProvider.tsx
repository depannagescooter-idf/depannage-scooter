"use client";

import { useCallback, useEffect, useState } from "react";

const PROMPT_KEY = "geo-prompt-dismissed";

function updateInterventionBar(zoneName: string, min: number, max: number) {
  const zoneEl = document.getElementById("intervention-zone-label");
  const etaEl = document.getElementById("intervention-eta-value");
  if (zoneEl) {
    zoneEl.textContent = `${zoneName} · `;
    zoneEl.classList.remove("hidden");
  }
  if (etaEl) etaEl.textContent = `${min}–${max} min`;
}

/** Prompt géolocalisation différé — zone-coords importé uniquement si l'utilisateur accepte. */
export function GeolocationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (!("geolocation" in navigator) || sessionStorage.getItem(PROMPT_KEY)) return;
    const timer = window.setTimeout(() => setShowPrompt(true), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  const dismissPrompt = useCallback(() => {
    setShowPrompt(false);
    sessionStorage.setItem(PROMPT_KEY, "1");
  }, []);

  const requestLocation = useCallback(() => {
    setShowPrompt(false);
    sessionStorage.setItem(PROMPT_KEY, "1");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { findNearestZone } = await import("@/lib/nearest-zone");
        const zone = findNearestZone(pos.coords.latitude, pos.coords.longitude);
        updateInterventionBar(zone.name, zone.etaMinutes[0], zone.etaMinutes[1]);
      },
      () => {
        /* Refus ou erreur */
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300_000 },
    );
  }, []);

  if (!showPrompt) return null;

  return (
    <div
      className="fixed inset-x-0 top-16 z-40 mx-auto max-w-lg px-4 sm:top-20"
      role="region"
      aria-label="Estimation de délai par géolocalisation"
    >
      <div className="card flex flex-wrap items-center justify-between gap-3 px-4 py-3 shadow-float">
        <p className="text-sm text-beton">
          Partager votre position pour estimer le délai d&apos;arrivée ?
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={requestLocation}
            className="rounded-full bg-gyro px-3 py-1.5 text-xs font-semibold text-white"
          >
            Oui
          </button>
          <button
            type="button"
            onClick={dismissPrompt}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-beton"
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}
