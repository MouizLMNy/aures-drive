/**
 * Contenu éditorial du site One-Page Aures Drive.
 * Centralisé pour faciliter les modifications de texte sans toucher au code.
 */

import {
  Plane,
  TrainFront,
  Briefcase,
  Sparkles,
  Users,
  Clock4,
  Camera,
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
    title: "Transfert aéroport",
    description:
      "Prise en charge au terminal, pancarte nominative et suivi de votre vol en temps réel. Aéroport Marseille-Provence et toute la région, 24h/24.",
    icon: Plane,
    whatsappMessage:
      "Bonjour, je souhaite réserver un transfert aéroport avec Aures Drive.",
  },
  {
    title: "Transfert gare",
    description:
      "Liaison ponctuelle depuis et vers la gare Saint-Charles. Suivi des horaires de train et prise en charge à quai facilitée.",
    icon: TrainFront,
    whatsappMessage:
      "Bonjour, je souhaite réserver un transfert gare avec Aures Drive.",
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
    title: "Événements & mariages",
    description:
      "Mariage, gala, soirée privée ou grande occasion. Véhicule élégant, chauffeur en tenue et service attentionné pour rendre votre journée parfaite.",
    icon: Sparkles,
    whatsappMessage:
      "Bonjour, je souhaite organiser un transport événementiel (mariage / soirée) avec Aures Drive.",
  },
  {
    title: "Transport de groupe",
    description:
      "Jusqu'à 7 passagers à bord de notre Mercedes V-Class spacieuse, avec grand coffre et climatisation. Idéal famille, collègues ou amis.",
    icon: Users,
    whatsappMessage:
      "Bonjour, je souhaite réserver un transport de groupe avec Aures Drive.",
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
    title: "Visite touristique",
    description:
      "Découvrez Marseille et ses environs avec un chauffeur attentionné : Vieux-Port, Calanques, Cassis… Un circuit sur-mesure, à votre rythme.",
    icon: Camera,
    whatsappMessage:
      "Bonjour, je souhaite réserver une visite touristique de Marseille avec Aures Drive.",
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

/* ───────────────────────── DESTINATIONS ───────────────────────── */
/**
 * Destinations mises en avant avec photo.
 * 📷 Pour afficher une photo : dépose le fichier dans /public/images/
 *    avec EXACTEMENT le nom indiqué dans "image". Tant qu'il est absent,
 *    un joli dégradé bleu s'affiche automatiquement à la place.
 */
export type Destination = { name: string; image: string };

export const DESTINATIONS: Destination[] = [
  { name: "Gare Saint-Charles", image: "/images/saint-charles.jpg" },
  { name: "Aéroport Marseille-Provence", image: "/images/aeroport.jpg" },
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
  { from: "Marseille centre", to: "Aéroport Marseille-Provence", price: "55 €" },
  { from: "Marseille centre", to: "Gare Saint-Charles", price: "25 €" },
  { from: "Marseille", to: "Aix-en-Provence", price: "60 €" },
  { from: "Marseille", to: "Aubagne", price: "45 €" },
  { from: "Marseille", to: "Cassis", price: "70 €" },
  { from: "Marseille", to: "La Ciotat", price: "90 €" },
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
      "Berlines et Mercedes V-Class récentes, propres et spacieuses, jusqu'à 7 passagers.",
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
  {
    name: "Nadia M.",
    text: "Un grand merci pour le trajet jusqu'à Cassis. Confort, sécurité et gentillesse. Je referai appel à Aures Drive.",
    rating: 5,
  },
];
