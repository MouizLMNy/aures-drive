import { type ReactNode } from "react";

/**
 * En-tête de section harmonisé : sur-titre, titre et sous-titre.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  variant?: "dark" | "light";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-azur-100" : "text-navy-600";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-azur-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-azur-700">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
