import Link from "next/link";
import { Bike } from "lucide-react";
import { company } from "@/data/company";

interface LogoProps {
  compact?: boolean;
  variant?: "default" | "light";
}

export function Logo({ compact = false, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 focus-visible:outline-offset-4"
      aria-label={`${company.name} — accueil`}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-signal-dark shadow-[0_2px_12px_rgb(249_115_22/0.35)] transition-transform duration-150 group-hover:scale-105">
        <Bike className="size-5 text-white" strokeWidth={2.25} aria-hidden="true" />
      </span>
      {!compact && (
        <span className="font-display text-lg font-bold tracking-tight">
          <span className={isLight ? "text-white" : "text-asphalte"}>Dépannage</span>
          <span className="text-signal">Scooter</span>
        </span>
      )}
    </Link>
  );
}
