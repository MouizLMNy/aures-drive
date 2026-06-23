import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Car } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import { ZONES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Réservez votre VTC à Marseille",
  description:
    "Contactez Aures Drive pour réserver votre chauffeur privé à Marseille. Réservation rapide sur WhatsApp, disponible 24h/24 et 7j/7. Devis transparent et sans engagement.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Réservez votre trajet en un instant"
        subtitle="La façon la plus simple de réserver : écrivez-nous sur WhatsApp. Réponse rapide, devis clair, chauffeur premium à votre service."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Coordonnées */}
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-navy">
                Nos coordonnées
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Disponibles {SITE.availability.toLowerCase()} pour répondre à
                toutes vos demandes de transport.
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-shadow hover:shadow-premium"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                      <Phone className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-navy-500">
                        Téléphone
                      </span>
                      <span className="block font-display text-lg font-bold text-navy">
                        {SITE.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-shadow hover:shadow-premium"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                      <Mail className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-navy-500">
                        Email
                      </span>
                      <span className="block font-display text-lg font-bold text-navy">
                        {SITE.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-navy-500">
                      Zone d'intervention
                    </span>
                    <span className="block font-display text-lg font-bold text-navy">
                      Marseille &amp; alentours
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                    <Clock className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-navy-500">
                      Disponibilité
                    </span>
                    <span className="block font-display text-lg font-bold text-navy">
                      {SITE.availability}
                    </span>
                  </span>
                </li>
              </ul>
            </Reveal>

            {/* Encart WhatsApp */}
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-8 shadow-premium-lg sm:p-10">
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                    <MessageCircle className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    Réservation par WhatsApp
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-azur-100/80">
                    Indiquez-nous votre point de départ, votre destination, la
                    date et l'heure souhaitées. Nous vous confirmons votre course
                    avec un devis transparent.
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "Réponse rapide",
                      "Devis sans engagement",
                      "Aucune application à installer",
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2.5 text-sm font-medium text-azur-100"
                      >
                        <Car className="h-4 w-4 text-azur-400" />
                        {t}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <WhatsAppButton size="lg" className="w-full">
                      Démarrer sur WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Zones */}
          <Reveal>
            <div className="mt-16 rounded-3xl border border-navy-100 bg-navy-50/60 p-8 sm:p-10">
              <h3 className="font-display text-xl font-bold text-navy">
                Zones desservies
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {ZONES.map((zone) => (
                  <span
                    key={zone}
                    className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700"
                  >
                    <MapPin className="h-4 w-4 text-azur-500" />
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
