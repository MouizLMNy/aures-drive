"use client";

import {
  Clock,
  Car,
  Users,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Quote,
  Camera,
  Check,
} from "lucide-react";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ReservationForm } from "@/components/ReservationForm";
import { DestinationCard } from "@/components/DestinationCard";
import { MarseilleBackdrop } from "@/components/MarseilleBackdrop";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/components/LanguageProvider";
import { SITE, whatsappLink } from "@/lib/site";
import { SERVICES, DESTINATIONS, TARIFS, TESTIMONIALS, AURES_TOUR } from "@/lib/content";

export default function HomePage() {
  const { t } = useI18n();

  const heroBadgeIcons = [Clock, Car, Users, ShieldCheck];

  return (
    <>
      {/* ════════════════ 1. HERO + RÉSERVATION ════════════════ */}
      <section
        id="accueil"
        className="relative isolate overflow-hidden bg-gradient-navy pt-28 pb-20 sm:pt-32 sm:pb-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
          aria-hidden="true"
        />
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-azur-500/20 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Texte */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-azur-100 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azur-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-azur-400" />
                </span>
                {t.hero.badge}
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t.hero.titleLead}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
                {t.hero.titleTail}
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-azur-100/90 lg:mx-0">
                {t.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#reservation"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-shine px-8 py-4 text-base font-semibold text-navy-950 shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  {t.hero.cta}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phoneDisplay}
                </a>
              </div>

              <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:mx-0">
                {t.hero.badges.map((label, i) => {
                  const Icon = heroBadgeIcons[i];
                  return (
                    <div key={label} className="flex flex-col items-center gap-2 lg:items-start">
                      <Icon className="h-6 w-6 text-azur-400" aria-hidden="true" />
                      <span className="text-sm font-medium text-azur-100/90">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carte formulaire */}
            <div id="reservation" className="scroll-mt-28">
              <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-premium-lg sm:p-8">
                <div className="mb-5 text-center">
                  <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {t.formCard.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-navy-500">{t.formCard.subtitle}</p>
                </div>
                <ReservationForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Bandeau illustration Notre-Dame de la Garde & Marseille ─── */}
      <div className="relative overflow-hidden bg-gradient-navy">
        <MarseilleBackdrop className="block w-full" />
      </div>

      {/* ════════════════ 2. SERVICES ════════════════ */}
      <section id="services" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, i) => {
              const Icon = SERVICES[i].icon;
              return (
                <Reveal key={service.title} delay={i * 80}>
                  <div className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-azur-200 hover:shadow-premium">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-azur text-white shadow-glow">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-bold text-navy">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{service.description}</p>
                    <a
                      href={whatsappLink(SERVICES[i].whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-azur-600 transition-colors hover:text-azur-700"
                    >
                      {t.services.reserve}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════ 3. POURQUOI NOUS CHOISIR ════════════════ */}
      <section id="pourquoi" className="scroll-mt-24 bg-navy-50/60 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 70}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-navy-100 bg-white p-7 text-center transition-shadow duration-300 hover:shadow-premium">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                    <Star className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-navy">{adv.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{adv.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <h3 className="font-display text-2xl font-bold text-navy">{t.destinations.title}</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-navy-600">{t.destinations.subtitle}</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.destinations.names.map((name, i) => (
              <Reveal key={name} delay={i * 60}>
                <DestinationCard
                  destination={{ name, image: DESTINATIONS[i].image }}
                  served={t.destinations.served}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════ 4. TARIFS ════════════════ */}
      <section id="tarifs" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t.tarifs.eyebrow} title={t.tarifs.title} subtitle={t.tarifs.subtitle} />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-navy-100 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-navy text-white">
                    <th className="px-5 py-4 text-sm font-semibold sm:px-7">{t.tarifs.colRoute}</th>
                    <th className="px-5 py-4 text-right text-sm font-semibold sm:px-7">{t.tarifs.colFrom}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 bg-white">
                  {t.tarifs.rows.map((row, i) => (
                    <tr key={`${row.to}-${i}`} className="transition-colors hover:bg-azur-50/50">
                      <td className="px-5 py-4 sm:px-7">
                        <span className="flex items-center gap-2 text-sm font-medium text-navy">
                          <span className="text-navy-500">{row.from}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-azur-500" />
                          <span>{row.to}</span>
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right sm:px-7">
                        <span className="font-display text-lg font-bold text-azur-600">{TARIFS[i].price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 text-center">
              <p className="text-sm text-navy-500">{t.tarifs.note}</p>
              <div className="mt-6">
                <WhatsAppButton>{t.tarifs.cta}</WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ════════════════ AURES TOUR ════════════════ */}
      <section id="aures-tour" className="relative scroll-mt-24 overflow-hidden bg-gradient-navy py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/notredame.jpg)" }}
          aria-hidden="true"
        />
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-azur-500/20 blur-3xl" aria-hidden="true" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-azur-100 backdrop-blur">
                <Camera className="h-4 w-4" />
                {t.tour.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.tour.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-azur-100/90 sm:text-lg">{t.tour.intro}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Clock, label: t.tour.duration },
                  { icon: Users, label: t.tour.capacity },
                  { icon: MapPin, label: t.tour.custom },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                  >
                    <Icon className="h-4 w-4 text-azur-400" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 backdrop-blur">
                  <span className="block text-xs uppercase tracking-wider text-azur-100/70">{t.tour.fromLabel}</span>
                  <span className="font-display text-2xl font-bold text-white">{AURES_TOUR.price}</span>
                </div>
                <WhatsAppButton message={AURES_TOUR.whatsappMessage} size="lg">
                  {t.tour.cta}
                </WhatsAppButton>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
                <h3 className="font-display text-xl font-bold text-white">{t.tour.itineraryTitle}</h3>
                <ol className="mt-6 space-y-4">
                  {t.tour.stops.map((stop, i) => (
                    <li key={stop} className="flex items-start gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-shine text-sm font-bold text-navy-950">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-sm font-medium text-azur-100">{stop}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-azur-100/80">
                  <Check className="h-4 w-4 text-azur-400" />
                  {t.tour.note}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ════════════════ 5. AVIS CLIENTS ════════════════ */}
      <section id="avis" className="relative scroll-mt-24 overflow-hidden bg-gradient-navy py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/images/lamajor.jpg)" }}
          aria-hidden="true"
        />
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle} variant="light" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.reviews.texts.map((text, i) => (
              <Reveal key={i} delay={i * 70}>
                <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <Quote className="h-8 w-8 text-azur-200" />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">« {text} »</blockquote>
                  <div className="mt-5 flex gap-1 text-azur-500">
                    {Array.from({ length: TESTIMONIALS[i].rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <figcaption className="mt-3 font-display text-sm font-bold text-navy">
                    {TESTIMONIALS[i].name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════ 6. CONTACT ════════════════ */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-gradient-azur py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/images/calanques.jpg)" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-azur-300/30 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{t.contact.title}</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-azur-50 sm:text-lg">{t.contact.subtitle}</p>

              <div className="mt-8 space-y-4">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-azur-100">{t.contact.whatsapp}</span>
                    <span className="font-semibold">{SITE.phoneDisplay}</span>
                  </span>
                </a>
                <a href={SITE.phoneHref} className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-azur-100">{t.contact.phone}</span>
                    <span className="font-semibold">{SITE.phoneDisplay}</span>
                  </span>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-azur-100">{t.contact.email}</span>
                    <span className="font-semibold">{SITE.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-azur-100">{t.contact.zone}</span>
                    <span className="font-semibold">{t.contact.zoneValue}</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl bg-white p-6 shadow-premium-lg sm:p-8">
                <h3 className="text-center font-display text-xl font-bold text-navy">{t.contact.formTitle}</h3>
                <p className="mt-1.5 text-center text-sm text-navy-500">{t.contact.formSubtitle}</p>
                <div className="mt-6">
                  <ReservationForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
