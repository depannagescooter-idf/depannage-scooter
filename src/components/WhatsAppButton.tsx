"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import type { CallOrigin } from "./CallButton";

export type WhatsAppOrigin = CallOrigin;

const CAR_BATTERY_PATH = "/depannage-sur-place/batterie-voiture";

/** Pages mixtes 2-roues + voiture : message neutre. */
const NEUTRAL_PATHS = new Set(["/", "/contact", "/tarifs"]);

function normalizePath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/";
}

function getWhatsAppMessage(pathname: string): string {
  const path = normalizePath(pathname);

  if (NEUTRAL_PATHS.has(path)) {
    return "Bonjour, je suis en panne en Île-de-France. Pouvez-vous m'aider ?";
  }

  if (path.includes(CAR_BATTERY_PATH)) {
    return "Bonjour, je suis en panne avec ma voiture en Île-de-France. Pouvez-vous m'aider ?";
  }

  return "Bonjour, je suis en panne avec mon deux-roues en Île-de-France. Pouvez-vous m'aider ?";
}

export interface WhatsAppButtonProps {
  origin: WhatsAppOrigin;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  origin,
  message,
  className = "",
}: WhatsAppButtonProps) {
  const pathname = usePathname();
  const text = message ?? getWhatsAppMessage(pathname);
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track-origin={origin}
      data-track-event="whatsapp_click"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-asphalte shadow-soft transition-all duration-150 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 hover:text-[#128C7E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gyro ${className}`}
      aria-label={`Contacter ${company.name} via WhatsApp`}
    >
      <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
      WhatsApp
    </a>
  );
}
