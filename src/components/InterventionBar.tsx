"use client";

import { Clock, Phone } from "lucide-react";
import { company } from "@/data/company";

export interface InterventionBarProps {
  etaMinutes?: [number, number];
}

export function InterventionBar({ etaMinutes = company.defaultEtaMinutes }: InterventionBarProps) {
  const [min, max] = etaMinutes;

  return (
    <aside
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4"
      aria-label="Bandeau d'intervention"
    >
      <div className="pointer-events-auto mx-auto flex max-w-lg items-center gap-3 rounded-2xl border border-border-soft bg-surface/95 p-3 shadow-float backdrop-blur-xl sm:max-w-xl sm:gap-4 sm:p-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-alerte/10">
            <span className="status-dot" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-alerte sm:text-sm">
              Équipes disponibles
            </p>
            <p className="flex items-center gap-1 truncate text-xs text-beton sm:text-sm">
              <Clock className="size-3 shrink-0" aria-hidden="true" />
              <span>
                Arrivée en{" "}
                <span className="font-data font-semibold tabular-nums text-asphalte">
                  {min}–{max} min
                </span>
              </span>
            </p>
          </div>
        </div>
        <a
          href={`tel:${company.phone}`}
          data-track-origin="intervention-bar"
          data-track-event="call_click"
          className="btn-primary flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 font-display text-sm font-semibold text-white sm:px-5"
          aria-label={`Appeler ${company.name}`}
        >
          <Phone className="size-4" strokeWidth={2.5} aria-hidden="true" />
          <span className="hidden font-data tabular-nums sm:inline">{company.phoneDisplay}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </aside>
  );
}
