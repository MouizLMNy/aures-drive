import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Star,
  Car,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";
import { SERVICES, ZONES, ADVANTAGES } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-navy pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-azur-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-azur-400/10 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-azur-100 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azur-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-azur-400" />
              </span>
              Disponible {SITE.availability}
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Votre chauffeur privé{" "}
              <span className="text-gradient">VTC à Marseille</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-azur-100/90">
              Transferts aéroport et gare, mise à disposition et longue distance.
              Un service premium, ponctuel et discret, à bord de véhicules
              Mercedes. Réservation simple via WhatsApp.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton size="lg">Réserver sur WhatsApp</WhatsAppButton>
              <Link
                href="/nos-services"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
              >
                Découvrir nos services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Indicateurs de confiance */}
            <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {[
                { icon: Clock, label: "24h/24 · 7j/7" },
                { icon: Car, label: "Mercedes premium" },
                { icon: Users, label: "Jusqu'à 7 passagers" },
                { icon: ShieldCheck, label: "Chauffeur agréé" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Icon className="h-6 w-6 text-azur-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-azur-100/90">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────── PRÉSENTATION ───────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-azur-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-azur-700">
                Aures Drive
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
                Le transport premium qui inspire confiance
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
                Aures Drive est votre partenaire de confiance pour tous vos
                déplacements à Marseille et dans toute la région. Nous mettons à
                votre disposition un service de chauffeur privé haut de gamme,
                pensé pour votre confort, votre ponctualité et votre sérénité.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Que ce soit pour un transfert vers l'aéroport, un rendez-vous
                d'affaires ou un long trajet, nous vous accompagnons avec
                professionnalisme et discrétion, à bord de véhicules Mercedes
                impeccablement entretenus.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Ponctualité garantie",
                  "Véhicules haut de gamme",
                  "Chauffeur expérimenté",
                  "Devis transparent",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-navy-700"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-azur-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <WhatsAppButton>Demander un devis</WhatsAppButton>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-azur opacity-10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-8 shadow-premium-lg sm:p-10">
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <div className="relative">
                    <Car className="h-12 w-12 text-azur-400" />
                    <p className="mt-6 font-display text-2xl font-bold text-white">
                      Une flotte à la hauteur de vos attentes
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-azur-100/80">
                      Berlines élégantes et Mercedes V-Class spacieuse pour vos
                      déplacements en famille, entre collègues ou avec vos
                      clients.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                      {[
                        { value: "24/7", label: "Disponibilité" },
                        { value: "7", label: "Passagers max" },
                        { value: "100%", label: "Sur devis" },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="font-display text-2xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-xs text-azur-100/70">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────── SERVICES ───────────────── */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nos services"
              title="Un service adapté à chaque trajet"
              subtitle="De l'aéroport au transport d'affaires, Aures Drive répond à tous vos besoins de mobilité premium."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────── POURQUOI NOUS CHOISIR ───────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pourquoi nous choisir"
              title="L'excellence à chaque kilomètre"
              subtitle="Six raisons de faire confiance à Aures Drive pour vos déplacements."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-shadow duration-300 hover:shadow-premium">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azur-50 text-azur-600">
                    <Star className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">
                    {adv.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────── ZONES DESSERVIES ───────────────── */}
      <section className="relative overflow-hidden bg-gradient-navy py-20 sm:py-28">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Zones desservies"
              title={<span className="text-white">Marseille &amp; toute la région</span>}
              subtitle={
                <span className="text-azur-100">
                  Nous intervenons dans tout le bassin marseillais et assurons les
                  trajets longue distance vers toute la France.
                </span>
              }
              variant="light"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
              {ZONES.map((zone) => (
                <span
                  key={zone}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-azur-400/50 hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4 text-azur-400" />
                  {zone}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────────── AVIS / CONFIANCE ───────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="La confiance de nos clients"
              title="Un service pensé pour vous satisfaire"
              subtitle="Notre priorité : votre satisfaction à chaque trajet. Voici ce qui fait la différence Aures Drive."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Ponctualité sans faille",
                text: "Nous anticipons chaque trajet pour que vous soyez toujours à l'heure, sans stress ni imprévu.",
              },
              {
                title: "Confort & élégance",
                text: "Des véhicules Mercedes haut de gamme, propres et confortables, pour voyager dans les meilleures conditions.",
              },
              {
                title: "Écoute & disponibilité",
                text: "Un interlocuteur unique, joignable facilement sur WhatsApp, à l'écoute de vos besoins 24h/24.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
                  <Quote className="h-9 w-9 text-azur-200" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                    {card.text}
                  </p>
                  <div className="mt-5 flex gap-1 text-azur-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-center text-sm text-navy-500">
              Vous avez voyagé avec Aures Drive ? Partagez votre expérience —
              vos avis Google apparaîtront bientôt ici.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ───────────────── CTA FINAL ───────────────── */}
      <CTASection />
    </>
  );
}
