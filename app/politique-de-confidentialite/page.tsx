import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Aures Drive — chauffeur privé VTC à Marseille. Traitement de vos données personnelles et respect du RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    title: "1. Responsable du traitement",
    body: `Les données personnelles collectées sur ce site sont traitées par ${SITE.legal.companyName}, joignable à l'adresse ${SITE.email}.`,
  },
  {
    title: "2. Données collectées",
    body: "Nous collectons uniquement les informations que vous nous communiquez volontairement lors d'une demande de réservation (nom, point de départ et d'arrivée, date, heure, nombre de passagers) via WhatsApp, téléphone ou le formulaire du site.",
  },
  {
    title: "3. Finalité",
    body: "Ces données sont utilisées exclusivement pour traiter votre demande de transport, établir un devis et assurer la prestation. Elles ne sont jamais revendues ni cédées à des tiers.",
  },
  {
    title: "4. Formulaire de réservation",
    body: "Le formulaire de réservation du site ne stocke aucune donnée sur un serveur : les informations saisies servent uniquement à pré-remplir un message WhatsApp que vous choisissez d'envoyer ou non.",
  },
  {
    title: "5. Durée de conservation",
    body: "Vos données sont conservées le temps nécessaire au traitement de votre demande et au respect de nos obligations légales et comptables.",
  },
  {
    title: "6. Vos droits",
    body: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition concernant vos données. Pour l'exercer, contactez-nous à ${SITE.email}.`,
  },
  {
    title: "7. Cookies",
    body: "Ce site ne dépose aucun cookie publicitaire ni traceur tiers. Seuls des éléments techniques strictement nécessaires à son bon fonctionnement peuvent être utilisés.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-navy-700">
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
