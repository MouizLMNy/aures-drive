"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/**
 * Bouton WhatsApp flottant, présent sur toutes les pages (coin bas-droite).
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-premium-lg transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Réserver</span>
    </a>
  );
}
