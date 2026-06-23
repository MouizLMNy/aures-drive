"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/nos-services" },
  { label: "Aéroport", href: "/transfert-aeroport" },
  { label: "Gare", href: "/transfert-gare" },
  { label: "Entreprises", href: "/entreprises" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile lors d'un changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-white"
                  : "text-azur-100/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-azur-100 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <WhatsAppButton size="md">Réserver</WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden bg-navy-900/98 backdrop-blur transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem] border-t border-white/10" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-azur-100/90 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
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
              Réserver sur WhatsApp
            </WhatsAppButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
