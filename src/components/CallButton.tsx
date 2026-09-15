import { IconPhone } from "@/components/icons";
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
  /** Force le libellé « Appeler » sans numéro (toutes tailles d'écran). */
  labelOnly?: boolean;
  className?: string;
}

export function CallButton({ origin, labelOnly = false, className = "" }: CallButtonProps) {
  return (
    <a
      href={`tel:${company.phone}`}
      data-track-origin={origin}
      data-track-event="call_click"
      className={`btn-primary inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gyro ${className}`}
      aria-label={`Appeler ${company.name} au ${company.phoneDisplay}`}
    >
      <IconPhone className="size-4 shrink-0" />
      {labelOnly ? (
        <span>Appeler</span>
      ) : (
        <>
          <span className="hidden font-data tabular-nums sm:inline">{company.phoneDisplay}</span>
          <span className="sm:hidden">Appeler</span>
        </>
      )}
    </a>
  );
}
