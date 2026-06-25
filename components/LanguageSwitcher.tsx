"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LANGS, type Lang } from "@/lib/i18n";
import { useI18n } from "./LanguageProvider";

/**
 * Sélecteur de langue (FR / EN / 中文) pour l'en-tête.
 */
export function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];
  const trigger =
    variant === "light"
      ? "border-white/25 bg-white/5 text-white hover:bg-white/10"
      : "border-navy-200 bg-white text-navy hover:bg-navy-50";

  const pick = (code: Lang) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.switchAria}
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium backdrop-blur transition-colors ${trigger}`}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {current.short}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-navy-100 bg-white py-1 shadow-premium-lg">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => pick(l.code)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-azur-50 ${
                  l.code === lang ? "font-semibold text-azur-700" : "text-navy"
                }`}
              >
                {l.label}
                {l.code === lang && <Check className="h-4 w-4 text-azur-600" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
