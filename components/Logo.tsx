import Link from "next/link";

type LogoProps = {
  /** Variante de couleur du texte selon le fond. */
  variant?: "light" | "dark";
  /** Affiche uniquement le monogramme (sans le texte). */
  iconOnly?: boolean;
  className?: string;
};

/**
 * Logo Aures Drive — monogramme "AD" stylisé (route + dégradé azur)
 * accompagné du nom. Créé en SVG : net sur tous les écrans, aucune image requise.
 */
export function Logo({ variant = "light", iconOnly = false, className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-azur-200" : "text-azur-600";

  return (
    <Link
      href="/"
      aria-label="Aures Drive — Accueil"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-azur shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          {/* Monogramme AD + symbole de route */}
          <path
            d="M9 35 L19 13 H23 L33 35 H28.5 L26.6 30.5 H15.4 L13.5 35 Z M17 26.5 H25 L21 16.8 Z"
            fill="white"
          />
          <path
            d="M30 13 H36 C41 13 44 17 44 24 C44 31 41 35 36 35 H30 Z M34 17 V31 H36 C38.6 31 40 28.7 40 24 C40 19.3 38.6 17 36 17 Z"
            fill="white"
            opacity="0.92"
          />
          <path
            d="M4 41 C16 36 32 36 44 41"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
            strokeDasharray="3 4"
          />
        </svg>
      </span>
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
            AURES <span className="font-semibold">DRIVE</span>
          </span>
          <span className={`mt-1 text-[10px] font-medium uppercase tracking-[0.25em] ${subColor}`}>
            Chauffeur privé · Marseille
          </span>
        </span>
      )}
    </Link>
  );
}
