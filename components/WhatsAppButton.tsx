import { type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";

type Variant = "primary" | "white" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azur-400 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#25D366] text-white shadow-premium hover:bg-[#1ebe5b] hover:shadow-premium-lg hover:-translate-y-0.5",
  white:
    "bg-white text-navy shadow-premium hover:bg-azur-50 hover:-translate-y-0.5",
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:border-white/60 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Bouton de réservation WhatsApp. Ouvre WhatsApp avec un message pré-rempli.
 */
export function WhatsAppButton({
  children = "Réserver sur WhatsApp",
  message = DEFAULT_WHATSAPP_MESSAGE,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
}: {
  children?: ReactNode;
  message?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {showIcon && <MessageCircle className="h-5 w-5" aria-hidden="true" />}
      {children}
    </a>
  );
}
