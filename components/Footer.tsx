import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { SITE, whatsappLink } from "@/lib/site";

const YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Avis clients", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-azur-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-azur-500/10 blur-3xl" />
      <Container className="relative py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-azur-100/80">
              Chauffeur privé VTC premium à Marseille et alentours. Transferts,
              déplacements pro et longue distance, 24h/24 et 7j/7.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Réserver sur WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-azur-100/80 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-azur-400" />
                <a href={SITE.phoneHref} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-azur-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azur-400" />
                <span>Marseille &amp; alentours</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-azur-400" />
                <span>{SITE.availability}</span>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Informations
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/mentions-legales" className="text-azur-100/80 hover:text-white">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-azur-100/80 hover:text-white"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-azur-100/80 hover:text-white">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-azur-100/60">
          <p>
            © {YEAR} {SITE.name}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
