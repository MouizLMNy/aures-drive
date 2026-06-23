import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Aures Drive — chauffeur privé VTC à Marseille.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-navy-700">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
              ⚠️ <strong>À compléter avant la mise en ligne.</strong> Les
              informations entre crochets doivent être renseignées avec vos
              données réelles (éditez le fichier <code>lib/site.ts</code>).
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                1. Éditeur du site
              </h2>
              <p className="mt-3 leading-relaxed">
                Le présent site est édité par {SITE.legal.companyName}.
                <br />
                Forme juridique : {SITE.legal.legalForm}
                <br />
                Adresse : {SITE.legal.address}
                <br />
                SIRET : {SITE.legal.siret}
                <br />
                Numéro d'inscription au registre VTC : {SITE.legal.evtc}
                <br />
                Téléphone : {SITE.phoneDisplay}
                <br />
                Email : {SITE.email}
                <br />
                Responsable de la publication : {SITE.legal.director}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                2. Hébergement
              </h2>
              <p className="mt-3 leading-relaxed">
                Le site est hébergé par Hostinger International Ltd, 61 Lordou
                Vironos Street, 6023 Larnaca, Chypre.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                3. Propriété intellectuelle
              </h2>
              <p className="mt-3 leading-relaxed">
                L'ensemble des éléments de ce site (textes, logo, graphismes,
                structure) est la propriété de {SITE.legal.companyName} et est
                protégé par le droit de la propriété intellectuelle. Toute
                reproduction non autorisée est interdite.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                4. Données personnelles
              </h2>
              <p className="mt-3 leading-relaxed">
                Les informations communiquées via WhatsApp ou par téléphone sont
                utilisées uniquement dans le cadre du traitement de votre demande
                de réservation. Conformément au RGPD, vous disposez d'un droit
                d'accès, de rectification et de suppression de vos données en
                nous contactant à l'adresse {SITE.email}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                5. Cookies
              </h2>
              <p className="mt-3 leading-relaxed">
                Ce site ne dépose pas de cookie publicitaire ni de traceur
                tiers. Seuls des éléments techniques nécessaires à son
                fonctionnement peuvent être utilisés.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
