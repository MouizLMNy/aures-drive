import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos services de chauffeur privé VTC à Marseille",
  description:
    "Découvrez tous les services Aures Drive : transfert aéroport et gare, mise à disposition, longue distance, transport d'affaires et événementiel à Marseille. Réservation WhatsApp.",
  alternates: { canonical: "/nos-services" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Des solutions de transport premium pour chaque besoin"
        subtitle="Aures Drive vous accompagne dans tous vos déplacements à Marseille et au-delà, avec un service haut de gamme et une réservation simplifiée sur WhatsApp."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
