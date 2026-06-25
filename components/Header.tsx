"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "./LanguageProvider";
import { SITE } from "@/lib/site";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV = [
    { label: t.nav.accueil, href: "/#accueil" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.tarifs, href: "/#tarifs" },
    { label: t.nav.auresTour, href: "/#aures-tour" },
    { label: t.nav.avis, href: "/#avis" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-premium backdrop-blur supports-[backdrop-filter]:bg-navy-900/80"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-azur-100/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher variant="light" />
          <WhatsAppButton size="md">{t.nav.reserver}</WhatsAppButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="light" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden bg-navy-900/98 backdrop-blur transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem] border-t border-white/10" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-azur-100/90 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 px-4 text-sm font-medium text-azur-100"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <WhatsAppButton size="lg" className="w-full">
              {t.nav.reserver}
            </WhatsAppButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
