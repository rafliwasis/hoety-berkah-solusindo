"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sun-500 text-brand-onyx shadow-[0_12px_28px_-8px_rgba(255,222,89,0.55)] transition-transform hover:scale-105 active:scale-[0.98]"
      aria-label="Chat dengan Hoety Berkah Solusindo di WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
