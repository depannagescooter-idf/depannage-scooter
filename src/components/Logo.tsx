import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

interface LogoProps {
  compact?: boolean;
  variant?: "default" | "light";
}

const LOGO_ALT =
  "DépannageScooter — dépannage batterie et remorquage 24h/24 en Île-de-France";

export function Logo({ compact = false, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group flex items-center focus-visible:outline-offset-4 ${
        isLight ? "rounded-sm bg-marquage px-2 py-1" : ""
      }`}
      aria-label={`${company.name} — accueil`}
    >
      <Image
        src="/images/logo.png"
        alt={LOGO_ALT}
        width={compact ? 120 : 220}
        height={compact ? 40 : 64}
        priority
        className={`h-auto w-auto ${compact ? "max-h-9" : "max-h-11 sm:max-h-12"}`}
      />
    </Link>
  );
}
