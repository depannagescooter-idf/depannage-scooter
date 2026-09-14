import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

interface LogoProps {
  variant?: "default" | "light";
}

const LOGO_ALT =
  "DépannageScooter — dépannage batterie et remorquage 24h/24 en Île-de-France";

export function Logo({ variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center focus-visible:outline-offset-4 ${
        isLight ? "rounded-sm bg-marquage px-2 py-1" : ""
      }`}
      aria-label={`${company.name} — accueil`}
    >
      {/* Mobile : symbole seul (partie gauche du logo) */}
      <span className="relative block h-[52px] w-[52px] overflow-hidden lg:hidden">
        <Image
          src="/images/logo.png"
          alt={LOGO_ALT}
          width={280}
          height={80}
          priority
          className="h-[52px] w-auto max-w-none"
        />
      </span>
      {/* Desktop : symbole + texte */}
      <Image
        src="/images/logo.png"
        alt={LOGO_ALT}
        width={280}
        height={80}
        priority
        className="hidden h-[64px] w-auto lg:block"
      />
    </Link>
  );
}
