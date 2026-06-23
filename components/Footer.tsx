import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { SITE, whatsappLink } from "@/lib/site";
import { SERVICES, ZONES } from "@/lib/content";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-azur-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-azur-500/10 blur-3xl" />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-azur-100/80">
              Chauffeur privé VTC premium à Marseille et alentours. Transferts,
              mise à disposition et longue distance, 24h/24 et 7j/7.
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

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Nos services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-azur-100/80 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Zones desservies
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm">
              {ZONES.map((z) => (
                <li key={z} className="text-azur-100/80">
                  {z}
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
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-azur-100/60 sm:flex-row">
          <p>
            © {YEAR} {SITE.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/cgv" className="hover:text-white">
              CGV
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
