import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente et de service d'Aures Drive — chauffeur privé VTC à Marseille.",
  alternates: { canonical: "/cgv" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    title: "1. Objet",
    body: `Les présentes conditions générales régissent les prestations de transport de personnes avec chauffeur (VTC) proposées par ${SITE.legal.companyName}. Toute réservation implique l'acceptation pleine et entière des présentes conditions.`,
  },
  {
    title: "2. Réservation",
    body: "Les réservations s'effectuent principalement via WhatsApp ou par téléphone. Une réservation est considérée comme confirmée après accord explicite du chauffeur sur le trajet, la date, l'heure et le tarif communiqué.",
  },
  {
    title: "3. Tarifs et devis",
    body: "Chaque prestation fait l'objet d'un devis transparent communiqué avant la course. Le tarif annoncé est ferme et tient compte du trajet, de la durée et du type de véhicule. Aucun frais caché n'est appliqué.",
  },
  {
    title: "4. Paiement",
    body: "Le règlement s'effectue selon les modalités convenues lors de la réservation. Les moyens de paiement acceptés vous sont précisés au moment de la confirmation.",
  },
  {
    title: "5. Annulation",
    body: "Toute annulation doit être signalée dans les meilleurs délais. Les conditions d'annulation sont précisées lors de la confirmation de la réservation. Une annulation tardive peut donner lieu à des frais.",
  },
  {
    title: "6. Responsabilité",
    body: `${SITE.legal.companyName} s'engage à mettre en œuvre tous les moyens pour assurer une prestation ponctuelle et de qualité. Sa responsabilité ne saurait être engagée en cas de retard dû à un cas de force majeure (conditions météo, trafic exceptionnel, etc.).`,
  },
  {
    title: "7. Comportement à bord",
    body: "Pour la sécurité de tous, il est interdit de fumer et de consommer des produits illicites à bord. Le client est responsable des éventuels dommages causés au véhicule.",
  },
  {
    title: "8. Réclamations",
    body: `Toute réclamation peut être adressée par email à ${SITE.email}. Nous nous engageons à y répondre dans les meilleurs délais.`,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Conditions Générales de Vente"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "CGV" }]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-navy-700">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
              ⚠️ <strong>Modèle indicatif à valider.</strong> Ces CGV sont un
              modèle de départ : adaptez-les à votre activité et faites-les
              relire si nécessaire avant la mise en ligne.
            </div>

            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-bold text-navy">
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
