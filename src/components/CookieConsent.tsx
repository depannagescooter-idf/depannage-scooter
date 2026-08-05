"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredConsent, setStoredConsent } from "@/lib/analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-24 z-[60] px-4 sm:bottom-28"
      role="dialog"
      aria-modal="true"
      aria-label="Consentement cookies"
    >
      <div className="mx-auto flex max-w-xl flex-col gap-3 rounded-2xl border border-border-soft bg-surface/95 p-4 shadow-float backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-beton">
          Nous utilisons des cookies analytics pour mesurer l&apos;audience du site. Aucune
          publicité.{" "}
          <Link href="/confidentialite/" className="font-medium text-gyro hover:underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => {
              setStoredConsent("denied");
              setVisible(false);
            }}
            className="min-h-11 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-beton"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => {
              setStoredConsent("granted");
              setVisible(false);
            }}
            className="min-h-11 rounded-full bg-gyro px-4 py-2.5 text-sm font-semibold text-white"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
