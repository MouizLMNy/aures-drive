"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { T, type Dict, type Lang } from "@/lib/i18n";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "aures-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  // Saute la toute première écriture : au montage, l'effet d'écriture tourne
  // avec lang="fr" et écraserait la langue mémorisée avant sa restauration.
  const firstWrite = useRef(true);

  // Au montage : restaure la langue mémorisée.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && (saved === "fr" || saved === "en" || saved === "zh")) {
      setLangState(saved);
    }
  }, []);

  // Mémorise + met à jour l'attribut lang du document (sauf au tout 1er rendu).
  useEffect(() => {
    if (firstWrite.current) {
      firstWrite.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang: setLangState, t: T[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Repli sûr (ne devrait pas arriver : tout est sous le provider).
    return { lang: "fr", setLang: () => {}, t: T.fr };
  }
  return ctx;
}
