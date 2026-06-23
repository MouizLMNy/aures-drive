import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { WhatsAppButton } from "./WhatsAppButton";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";
import { SERVICES, type Service } from "@/lib/content";

/**
 * Gabarit réutilisable pour les pages de détail d'un service.
 */
export function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={service.title}
        subtitle={service.short}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/nos-services" },
          { label: service.title },
        ]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Contenu principal */}
            <Reveal>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-azur text-white shadow-glow">
                <Icon className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold text-navy">
                {service.title} à Marseille
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
                {service.description}
              </p>

              <h3 className="mt-10 font-display text-xl font-bold text-navy">
                Ce que nous vous garantissons
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 text-sm font-medium text-navy-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-azur-500" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton message={service.whatsappMessage}>
                  Réserver ce service
                </WhatsAppButton>
                <Link
                  href="/nos-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-azur-300 hover:text-azur-700"
                >
                  Tous nos services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Encart latéral */}
            <Reveal delay={120}>
              <div className="sticky top-28 rounded-3xl border border-navy-100 bg-navy-50/60 p-8">
                <h3 className="font-display text-xl font-bold text-navy">
                  Réservez en quelques secondes
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  Contactez-nous sur WhatsApp avec votre trajet, la date et
                  l'heure souhaitées. Nous vous confirmons votre course avec un
                  devis clair et sans surprise.
                </p>
                <ol className="mt-6 space-y-4">
                  {[
                    "Décrivez votre trajet sur WhatsApp",
                    "Recevez un devis transparent",
                    "Votre chauffeur arrive à l'heure",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-azur text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-navy-700">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-7">
                  <WhatsAppButton
                    message={service.whatsappMessage}
                    className="w-full"
                  >
                    Réserver maintenant
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Autres services */}
          <div className="mt-20 border-t border-navy-100 pt-14">
            <h3 className="font-display text-2xl font-bold text-navy">
              Découvrez aussi
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {others.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="group rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-premium"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                      <OtherIcon className="h-6 w-6" />
                    </span>
                    <h4 className="mt-4 font-display text-lg font-bold text-navy">
                      {s.title}
                    </h4>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-azur-600">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTASection message={service.whatsappMessage} />
    </>
  );
}
