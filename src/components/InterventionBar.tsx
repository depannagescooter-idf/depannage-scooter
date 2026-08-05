import { IconClock, IconPhone } from "@/components/icons";
import { company } from "@/data/company";

/** Bandeau fixe — composant serveur, zéro JS client requis. */
export function InterventionBar() {
  const [min, max] = company.defaultEtaMinutes;

  return (
    <aside
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-0 pb-0"
      aria-label="Bandeau d'intervention"
    >
      <div className="pointer-events-auto mx-auto flex max-w-2xl items-center gap-3 border-t border-white/10 bg-asphalte px-4 py-3 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="relative flex size-2.5 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-wide text-amber-200 sm:text-sm">
              Équipes disponibles
            </p>
            <p className="flex items-center gap-1 truncate text-xs text-stone-200 sm:text-sm">
              <IconClock className="size-3 shrink-0" />
              <span id="intervention-eta-line">
                <span id="intervention-zone-label" className="hidden font-semibold text-white" />
                Arrivée{" "}
                <span id="intervention-eta-value" className="font-data font-semibold tabular-nums text-white">
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
          className="btn-primary flex shrink-0 items-center gap-2 rounded-sm px-4 py-2.5 font-display text-sm font-semibold text-white sm:px-5"
          aria-label={`Appeler ${company.name}`}
        >
          <IconPhone className="size-4" />
          <span className="hidden font-data tabular-nums sm:inline">{company.phoneDisplay}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </aside>
  );
}
