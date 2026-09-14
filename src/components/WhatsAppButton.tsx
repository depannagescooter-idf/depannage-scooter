"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import type { CallOrigin } from "./CallButton";

export type WhatsAppOrigin = CallOrigin;

const CAR_BATTERY_PATH = "/depannage-sur-place/batterie-voiture";

function getWhatsAppMessage(pathname: string): string {
  const isCarPage = pathname.includes(CAR_BATTERY_PATH);
  const vehicle = isCarPage ? "ma voiture" : "mon deux-roues";
  return `Bonjour, je suis en panne avec ${vehicle} en Île-de-France. Pouvez-vous m'aider ?`;
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
