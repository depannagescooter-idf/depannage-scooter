"use client";

import { Phone } from "lucide-react";
import { company } from "@/data/company";

export type CallOrigin =
  | "header"
  | "hero"
  | "intervention-bar"
  | "footer"
  | "inline"
  | "design-system";

export interface CallButtonProps {
  origin: CallOrigin;
  showNumber?: boolean;
  className?: string;
}

export function CallButton({ origin, showNumber = true, className = "" }: CallButtonProps) {
  return (
    <a
      href={`tel:${company.phone}`}
      data-track-origin={origin}
      data-track-event="call_click"
      className={`btn-primary inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gyro ${className}`}
      aria-label={`Appeler ${company.name} au ${company.phoneDisplay}`}
    >
      <Phone className="size-4 shrink-0" aria-hidden="true" strokeWidth={2.5} />
      {showNumber ? (
        <span className="font-data tabular-nums">{company.phoneDisplay}</span>
      ) : (
        <span>Appeler</span>
      )}
    </a>
  );
}
