"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { findNearestZone } from "@/lib/nearest-zone";

interface GeolocationState {
  zoneName: string | null;
  etaMinutes: [number, number] | null;
  requestLocation: () => void;
  dismissPrompt: () => void;
  showPrompt: boolean;
}

const GeolocationContext = createContext<GeolocationState | null>(null);

const PROMPT_KEY = "geo-prompt-dismissed";

export function GeolocationProvider({ children }: { children: ReactNode }) {
  const [zoneName, setZoneName] = useState<string | null>(null);
  const [etaMinutes, setEtaMinutes] = useState<[number, number] | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("geolocation" in navigator)) return;
    if (sessionStorage.getItem(PROMPT_KEY)) return;
    setShowPrompt(true);
  }, []);

  const applyPosition = useCallback((lat: number, lng: number) => {
    const zone = findNearestZone(lat, lng);
    setZoneName(zone.name);
    setEtaMinutes(zone.etaMinutes);
  }, []);

  const requestLocation = useCallback(() => {
    setShowPrompt(false);
    sessionStorage.setItem(PROMPT_KEY, "1");

    navigator.geolocation.getCurrentPosition(
      (pos) => applyPosition(pos.coords.latitude, pos.coords.longitude),
      () => {
        /* Refus ou erreur — aucun impact sur le parcours */
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300_000 },
    );
  }, [applyPosition]);

  const dismissPrompt = useCallback(() => {
    setShowPrompt(false);
    sessionStorage.setItem(PROMPT_KEY, "1");
  }, []);

  const value = useMemo(
    () => ({ zoneName, etaMinutes, requestLocation, dismissPrompt, showPrompt }),
    [zoneName, etaMinutes, requestLocation, dismissPrompt, showPrompt],
  );

  return (
    <GeolocationContext.Provider value={value}>
      {children}
      {showPrompt ? (
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
      ) : null}
    </GeolocationContext.Provider>
  );
}

export function useGeolocationHint(): GeolocationState {
  const ctx = useContext(GeolocationContext);
  if (!ctx) {
    return {
      zoneName: null,
      etaMinutes: null,
      requestLocation: () => {},
      dismissPrompt: () => {},
      showPrompt: false,
    };
  }
  return ctx;
}
