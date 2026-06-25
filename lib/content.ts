/**
 * Contenu éditorial du site One-Page Aures Drive.
 * Centralisé pour faciliter les modifications de texte sans toucher au code.
 */

import {
  Plane,
  Briefcase,
  Clock4,
  Route,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────────── SERVICES ─────────────────────────── */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Message WhatsApp spécifique pour ce service. */
  whatsappMessage: string;
};

export const SERVICES: Service[] = [
  {
    title: "Transfert aéroport & gare",
    description:
      "Aéroport Marseille-Provence et gare Saint-Charles. Suivi de votre vol ou train en temps réel, accueil personnalisé et ponctualité garantie.",
    icon: Plane,
    whatsappMessage:
      "Bonjour, je souhaite réserver un transfert aéroport ou gare avec Aures Drive.",
  },
  {
    title: "Transport d'affaires",
    description:
      "Déplacements de dirigeants et clients VIP. Discrétion et silence garantis, chauffeur en tenue et facturation adaptée aux entreprises.",
    icon: Briefcase,
    whatsappMessage:
      "Bonjour, je souhaite réserver un transport d'affaires avec Aures Drive.",
  },
  {
    title: "Mise à disposition",
    description:
      "Un chauffeur privatisé à l'heure, à la demi-journée ou à la journée complète, pour tous vos déplacements en toute liberté.",
    icon: Clock4,
    whatsappMessage:
      "Bonjour, je souhaite réserver une mise à disposition avec Aures Drive.",
  },
  {
    title: "Longue distance",
    description:
      "Aix, Avignon, Nice, Lyon, Montpellier et toute la France au départ de Marseille, dans un confort premium et sur devis transparent.",
    icon: Route,
    whatsappMessage:
      "Bonjour, je souhaite réserver un trajet longue distance avec Aures Drive.",
  },
];

/* ─────────────────── LIEUX FRÉQUENTS (réservation) ───────────────── */
/**
 * Suggestions de lieux affichées sous les champs Départ / Arrivée du
 * formulaire de réservation. "short" = texte du bouton, "full" = adresse
 * enregistrée dans le message WhatsApp. Modifie librement cette liste.
 */
export type Place = { short: string; full: string };

export const POPULAR_PLACES: Place[] = [
  { short: "Aéroport", full: "Aéroport Marseille-Provence (Marignane)" },
  { short: "Gare St-Charles", full: "Gare Saint-Charles, Marseille" },
  { short: "Vieux-Port", full: "Vieux-Port, Marseille" },
  { short: "Notre-Dame de la Garde", full: "Notre-Dame de la Garde, Marseille" },
  { short: "Les Terrasses du Port", full: "Les Terrasses du Port, Marseille" },
  { short: "Grand Littoral", full: "Centre commercial Grand Littoral, Marseille" },
];

/* ───────────────────────── DESTINATIONS ───────────────────────── */
/**
 * Destinations mises en avant avec photo.
 * 📷 Pour afficher une photo : dépose le fichier dans /public/images/
 *    avec EXACTEMENT le nom indiqué dans "image". Tant qu'il est absent,
 *    un joli dégradé bleu s'affiche automatiquement à la place.
 */
export type Destination = { name: string; image: string };

export const DESTINATIONS: Destination[] = [
  { name: "Notre-Dame de la Garde", image: "/images/notredame.jpg" },
  { name: "Cathédrale La Major", image: "/images/lamajor.jpg" },
  { name: "Gare Saint-Charles", image: "/images/saint-charles.jpg" },
  { name: "Les Calanques", image: "/images/calanques.jpg" },
  { name: "Cassis", image: "/images/cassis.jpg" },
  { name: "La Ciotat", image: "/images/la-ciotat.jpg" },
];

/* ─────────────────────────── TARIFS ───────────────────────────── */
/**
 * ⚠️ TARIFS INDICATIFS À AJUSTER avec tes vrais prix.
 * Le devis exact reste communiqué via WhatsApp.
 */
export type Tarif = { from: string; to: string; price: string };

export const TARIFS: Tarif[] = [
  { from: "Marseille", to: "Aéroport Marseille-Provence", price: "70 €" },
  { from: "Marseille", to: "Aix-en-Provence", price: "65 €" },
  { from: "Marseille", to: "Cassis", price: "45 €" },
  { from: "Marseille", to: "La Ciotat", price: "55 €" },
  { from: "Marseille", to: "Aubagne", price: "38 €" },
  { from: "Marseille", to: "Martigues", price: "50 €" },
  { from: "Marseille", to: "Salon-de-Provence", price: "80 €" },
  { from: "Marseille", to: "Arles", price: "95 €" },
  { from: "Marseille", to: "Avignon", price: "150 €" },
  { from: "Marseille", to: "Nice / Cannes", price: "260 €" },
];

/* ─────────────────────── POURQUOI NOUS CHOISIR ─────────────────── */

export type Advantage = { title: string; description: string };

export const ADVANTAGES: Advantage[] = [
  {
    title: "Chauffeurs professionnels",
    description:
      "Chauffeur agréé, expérimenté et courtois, qui connaît parfaitement Marseille et sa région.",
  },
  {
    title: "Véhicules confortables",
    description:
      "Berlines et Mercedes V-Class récentes, propres et spacieuses, jusqu'à 8 passagers.",
  },
  {
    title: "Prix transparents",
    description:
      "Un devis clair et sans surprise avant chaque course. Le prix annoncé est le prix payé.",
  },
  {
    title: "Disponible 24h/24 et 7j/7",
    description:
      "Jour et nuit, week-ends et jours fériés : Aures Drive répond présent pour tous vos trajets.",
  },
];

/* ─────────────────────────── AVIS ─────────────────────────────── */
/**
 * ⚠️ TÉMOIGNAGES D'EXEMPLE — à remplacer par tes vrais avis clients.
 */
export type Testimonial = { name: string; text: string; rating: number };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Karim B.",
    text: "Chauffeur ponctuel et très professionnel. Véhicule impeccable pour mon transfert vers l'aéroport. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Sophie L.",
    text: "Réservation ultra simple par WhatsApp, réponse immédiate et trajet très agréable. Exactement ce que je cherchais.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    text: "Service haut de gamme pour mes déplacements professionnels à Marseille. Discrétion et ponctualité au rendez-vous.",
    rating: 5,
  },
];

/* ───────────────────────── AURES TOUR ─────────────────────────── */
/**
 * Circuit touristique premium de Marseille (équivalent du "Jibni Tour").
 * Prix indicatif à ajuster.
 */
export const AURES_TOUR = {
  duration: "2 heures de découverte",
  capacity: "Jusqu'à 8 passagers",
  price: "40 € / personne",
  intro:
    "Découvrez Marseille autrement. Aures Drive vous propose un circuit touristique premium à bord de notre Mercedes V-Class, avec un chauffeur privé attentionné. Monuments, histoire et panoramas : tout ce que la Cité Phocéenne a de plus beau, à votre rythme.",
  stops: [
    "Vieux-Port — point de départ emblématique",
    "Notre-Dame de la Garde — panorama 360° sur la ville",
    "Corniche Kennedy — promenade côtière face aux îles du Frioul",
    "Cathédrale de la Major — architecture romano-byzantine",
    "Palais Longchamp — chef-d'œuvre et jardins",
    "MuCEM & stade Vélodrome — culture et passion marseillaises",
  ],
  whatsappMessage:
    "Bonjour, je souhaite réserver le Aures Tour (circuit touristique de Marseille).",
};
