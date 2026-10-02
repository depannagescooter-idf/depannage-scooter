import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

interface LogoProps {
  variant?: "default" | "light";
  /** Priority LCP — header uniquement. */
  priority?: boolean;
}

const LOGO_ALT = "DépannageScooter";

export function Logo({ variant = "default", priority = false }: LogoProps) {
  const isLight = variant === "light";
  const nameColor = isLight ? "text-stone-100" : "text-asphalte";
  const taglineColor = isLight ? "text-stone-400" : "text-beton";

  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-2.5 focus-visible:outline-offset-4 lg:gap-3"
      aria-label={`${company.name} — accueil`}
    >
      {/*
        Affiché à 52–64 px. Pas de sizes : une valeur fixe sans vw fait choisir à Next.js
        le plus grand deviceSize (w=3840) comme src. Sans sizes, le src est la largeur × 2.
      */}
      <Image
        src={company.logoPath}
        alt={LOGO_ALT}
        width={64}
        height={64}
        priority={priority}
        className="h-[52px] w-[52px] shrink-0 rounded-sm object-cover lg:h-16 lg:w-16"
      />
      <span className={`hidden min-w-0 flex-col lg:flex ${nameColor}`}>
        <span className="font-display text-lg font-bold leading-tight tracking-tight">
          Dépannage<span className="text-signal">Scooter</span>
        </span>
        <span className={`mt-0.5 text-[10px] font-medium tracking-wide ${taglineColor}`}>
          24h/24 · 7j/7 · Île-de-France
        </span>
      </span>
    </Link>
  );
}
