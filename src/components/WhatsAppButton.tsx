import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import type { CallOrigin } from "./CallButton";

export type WhatsAppOrigin = CallOrigin;

const defaultMessage =
  "Bonjour, je suis en panne avec mon deux-roues en Île-de-France. Pouvez-vous m'aider ?";

export interface WhatsAppButtonProps {
  origin: WhatsAppOrigin;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  origin,
  message = defaultMessage,
  className = "",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

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
