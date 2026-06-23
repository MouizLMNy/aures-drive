/**
 * Configuration centrale du site Aures Drive.
 * Modifie ce fichier pour mettre à jour les coordonnées, services, zones, etc.
 * (un seul endroit à éditer pour tout le site).
 */

export const SITE = {
  name: "Aures Drive",
  tagline: "Votre chauffeur privé VTC à Marseille",
  description:
    "Aures Drive — service de chauffeur privé VTC premium à Marseille et alentours. Transferts aéroport et gare, mise à disposition, longue distance et transport d'affaires. Réservation simple via WhatsApp, 24h/24 et 7j/7.",
  // ⚠️ À remplacer par ton domaine définitif avant la mise en ligne.
  url: "https://www.auresdrive.fr",
  locale: "fr_FR",
  city: "Marseille",
  region: "Provence-Alpes-Côte d'Azur",

  // ── Contact ────────────────────────────────────────────────
  // Numéro WhatsApp au format international SANS espaces ni "+".
  whatsappNumber: "33641193950",
  // Affichage lisible du numéro.
  phoneDisplay: "+33 6 41 19 39 50",
  // Lien d'appel téléphonique.
  phoneHref: "tel:+33641193950",
  // ⚠️ À compléter plus tard.
  email: "contact@auresdrive.fr",

  // ── Disponibilité ──────────────────────────────────────────
  availability: "24h/24 — 7j/7",

  // ── Réseaux sociaux (à compléter plus tard) ────────────────
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    linkedin: "",
  },

  // ── Mentions légales (placeholders à compléter) ────────────
  legal: {
    companyName: "Aures Drive",
    legalForm: "[Forme juridique — à compléter]",
    director: "[Nom du responsable de publication — à compléter]",
    siret: "[SIRET — à compléter]",
    evtc: "[Numéro EVTC — à compléter]",
    address: "[Adresse du siège — à compléter], Marseille",
    capital: "",
  },
} as const;

/** Message WhatsApp pré-rempli par défaut. */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Bonjour, je souhaite réserver un trajet avec Aures Drive.";

/** Construit un lien wa.me avec message pré-rempli. */
export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
