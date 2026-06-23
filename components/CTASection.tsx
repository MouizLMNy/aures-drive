import { Phone } from "lucide-react";
import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";

/**
 * Bandeau d'appel à l'action WhatsApp réutilisable en bas des pages.
 */
export function CTASection({
  title = "Prêt à réserver votre trajet ?",
  subtitle = "Contactez Aures Drive en un clic sur WhatsApp. Réponse rapide, devis transparent et chauffeur premium à votre service 24h/24.",
  message,
}: {
  title?: string;
  subtitle?: string;
  message?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-azur py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-azur-300/30 blur-3xl" />
      </div>
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-azur-50 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton variant="white" size="lg" message={message}>
            Réserver sur WhatsApp
          </WhatsAppButton>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
