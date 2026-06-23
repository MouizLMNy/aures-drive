import type { Metadata } from "next";
import { ShieldCheck, Clock, Heart, Award } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "À propos d'Aures Drive — Chauffeur VTC à Marseille",
  description:
    "Découvrez Aures Drive, votre service de chauffeur privé VTC à Marseille. Notre engagement : ponctualité, confort premium et discrétion pour tous vos déplacements.",
  alternates: { canonical: "/a-propos" },
};

const VALUES = [
  {
    icon: Clock,
    title: "Ponctualité",
    text: "Le temps est précieux. Nous sommes toujours à l'heure, à chaque rendez-vous.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    text: "Conduite prudente, véhicules entretenus et chauffeur agréé pour votre tranquillité.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Un service haut de gamme dans chaque détail, du véhicule à l'accueil.",
  },
  {
    icon: Heart,
    title: "Discrétion",
    text: "Confidentialité et respect de votre intimité à chaque trajet.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Aures Drive, le chauffeur privé en qui vous pouvez avoir confiance"
        subtitle="Une approche du transport pensée autour de vous : confort, ponctualité et sérénité, à Marseille et dans toute la région."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
                Notre histoire
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600 sm:text-lg">
                <p>
                  Aures Drive est né d'une conviction simple : le transport avec
                  chauffeur doit être une expérience à part entière, alliant
                  confort, fiabilité et professionnalisme.
                </p>
                <p>
                  Basés à Marseille, nous mettons notre connaissance du terrain
                  et notre exigence du service au profit de chacun de vos
                  déplacements — qu'il s'agisse d'un transfert vers l'aéroport,
                  d'un rendez-vous d'affaires ou d'un long trajet à travers la
                  France.
                </p>
                <p>
                  Notre flotte de véhicules Mercedes, berlines et V-Class, est
                  sélectionnée pour vous offrir le meilleur du confort et de
                  l'élégance. Et parce que votre temps compte, nous avons fait le
                  choix d'une réservation simple et directe, via WhatsApp.
                </p>
              </div>
              <div className="mt-8">
                <WhatsAppButton>Réserver un trajet</WhatsAppButton>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-5 sm:grid-cols-2">
                {VALUES.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-azur text-white shadow-glow">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-navy">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600">
                        {v.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bandeau chiffres */}
      <section className="bg-navy-50/60 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {[
              { value: "24/7", label: "Disponibilité" },
              { value: "7", label: "Passagers max" },
              { value: "Mercedes", label: "Flotte premium" },
              { value: "100%", label: "Sur devis" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-navy sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-navy-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
