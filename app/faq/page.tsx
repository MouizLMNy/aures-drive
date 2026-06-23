import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | Aures Drive",
  description:
    "Toutes les réponses à vos questions sur le service de chauffeur privé VTC Aures Drive à Marseille : réservation, tarifs, zones desservies, véhicules et disponibilité.",
  alternates: { canonical: "/faq" },
};

// Données structurées FAQ pour le référencement (rich snippets Google).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        subtitle="Vous avez une question ? Retrouvez ici l'essentiel. Pour tout le reste, contactez-nous directement sur WhatsApp."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <FaqAccordion items={FAQ} />
        </Container>
      </section>

      <CTASection
        title="Vous n'avez pas trouvé votre réponse ?"
        subtitle="Écrivez-nous sur WhatsApp, nous vous répondons rapidement et avec plaisir."
      />
    </>
  );
}
