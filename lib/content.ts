/**
 * Contenu éditorial du site (services, zones, atouts, FAQ).
 * Centralisé pour faciliter les modifications de texte sans toucher au code des pages.
 */

import {
  Plane,
  TrainFront,
  Clock4,
  Route,
  Briefcase,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  /** Message WhatsApp spécifique pour ce service. */
  whatsappMessage: string;
};

export const SERVICES: Service[] = [
  {
    slug: "transfert-aeroport",
    title: "Transfert aéroport",
    short:
      "Vers et depuis l'aéroport Marseille-Provence (Marignane). Accueil, suivi de vol et ponctualité garantie.",
    description:
      "Voyagez l'esprit tranquille avec un transfert privé vers ou depuis l'aéroport Marseille-Provence. Votre chauffeur suit votre vol en temps réel, vous accueille en zone d'arrivée et vous accompagne jusqu'à votre destination dans un véhicule haut de gamme.",
    icon: Plane,
    points: [
      "Suivi des vols en temps réel",
      "Accueil personnalisé avec pancarte",
      "Aide aux bagages",
      "Aéroport Marseille-Provence & toute la région",
      "Disponible 24h/24, 7j/7",
    ],
    whatsappMessage:
      "Bonjour, je souhaite réserver un transfert aéroport avec Aures Drive.",
  },
  {
    slug: "transfert-gare",
    title: "Transfert gare",
    short:
      "Liaison fiable depuis et vers la gare Saint-Charles et les gares de la région.",
    description:
      "Un transfert ponctuel et confortable depuis ou vers la gare Marseille Saint-Charles. Votre chauffeur vous attend à l'heure, suit votre train et vous conduit en toute sérénité, sans stress de stationnement ni d'attente.",
    icon: TrainFront,
    points: [
      "Gare Saint-Charles & gares régionales",
      "Suivi des horaires de train",
      "Prise en charge à quai facilitée",
      "Véhicules spacieux pour vos bagages",
      "Ponctualité garantie",
    ],
    whatsappMessage:
      "Bonjour, je souhaite réserver un transfert gare avec Aures Drive.",
  },
  {
    slug: "mise-a-disposition",
    title: "Mise à disposition",
    short:
      "Un chauffeur dédié à l'heure ou à la journée pour tous vos déplacements.",
    description:
      "Profitez d'un chauffeur privé à votre entière disposition, à l'heure ou à la journée. Idéal pour vos rendez-vous professionnels, vos visites, vos sorties shopping ou vos événements : votre chauffeur vous attend et vous accompagne à chaque étape.",
    icon: Clock4,
    points: [
      "À l'heure ou à la journée",
      "Chauffeur dédié et discret",
      "Itinéraires flexibles et sur-mesure",
      "Idéal rendez-vous, shopping, tourisme",
      "Confidentialité assurée",
    ],
    whatsappMessage:
      "Bonjour, je souhaite réserver une mise à disposition avec Aures Drive.",
  },
  {
    slug: "longue-distance",
    title: "Longue distance",
    short:
      "Trajets confortables vers toute la France : Aix, Avignon, Nice, Lyon, Montpellier…",
    description:
      "Voyagez sur de longues distances dans un confort absolu. Aures Drive vous conduit où vous le souhaitez en France — Aix-en-Provence, Avignon, Nice, Lyon, Montpellier et au-delà — avec un véhicule premium et un chauffeur expérimenté.",
    icon: Route,
    points: [
      "Toute la France au départ de Marseille",
      "Confort premium pour les longs trajets",
      "Chauffeur expérimenté et reposé",
      "Tarif transparent sur devis",
      "Voyage porte-à-porte",
    ],
    whatsappMessage:
      "Bonjour, je souhaite réserver un trajet longue distance avec Aures Drive.",
  },
  {
    slug: "entreprises",
    title: "Transport d'affaires",
    short:
      "Solutions de transport pour professionnels, dirigeants et collaborateurs.",
    description:
      "Offrez à vos collaborateurs et clients un transport à la hauteur de votre image. Aures Drive accompagne les entreprises pour leurs rendez-vous, séminaires, transferts de clients VIP et déplacements professionnels, avec facturation simplifiée et discrétion garantie.",
    icon: Briefcase,
    points: [
      "Transferts dirigeants & clients VIP",
      "Séminaires et événements d'entreprise",
      "Chauffeur en tenue professionnelle",
      "Discrétion et confidentialité",
      "Facturation adaptée aux entreprises",
    ],
    whatsappMessage:
      "Bonjour, je représente une entreprise et souhaite un transport professionnel avec Aures Drive.",
  },
  {
    slug: "evenementiel",
    title: "Événementiel",
    short:
      "Mariages, soirées, événements privés : un service à la hauteur de l'occasion.",
    description:
      "Pour vos mariages, soirées de gala, événements privés ou grandes occasions, Aures Drive vous propose un service de chauffeur premium. Véhicules élégants, ponctualité et attention aux détails pour rendre votre journée parfaite.",
    icon: Sparkles,
    points: [
      "Mariages & grandes occasions",
      "Soirées et événements privés",
      "Véhicules élégants Mercedes",
      "Service attentionné et ponctuel",
      "Organisation sur-mesure",
    ],
    whatsappMessage:
      "Bonjour, je souhaite organiser un transport événementiel avec Aures Drive.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Zones et destinations desservies (SEO local). */
export const ZONES: string[] = [
  "Marseille",
  "Aéroport Marseille-Provence",
  "Gare Saint-Charles",
  "Aix-en-Provence",
  "Aubagne",
  "Cassis",
  "La Ciotat",
  "Vitrolles",
  "Marignane",
];

export type Faq = { question: string; answer: string };

export const FAQ: Faq[] = [
  {
    question: "Comment réserver un trajet avec Aures Drive ?",
    answer:
      "La réservation se fait simplement et rapidement via WhatsApp. Cliquez sur l'un des boutons « Réserver » du site : une conversation WhatsApp s'ouvre avec un message pré-rempli. Indiquez-nous votre trajet, la date et l'heure, et nous confirmons votre course.",
  },
  {
    question: "Quels sont vos horaires de disponibilité ?",
    answer:
      "Aures Drive est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés. Pour les courses tôt le matin ou tard le soir, nous vous recommandons de réserver à l'avance afin de garantir la disponibilité.",
  },
  {
    question: "Quelles zones desservez-vous ?",
    answer:
      "Nous desservons Marseille et toute sa région : aéroport Marseille-Provence, gare Saint-Charles, Aix-en-Provence, Aubagne, Cassis, La Ciotat, Vitrolles, Marignane. Nous assurons également les trajets longue distance vers toute la France.",
  },
  {
    question: "Quels véhicules proposez-vous ?",
    answer:
      "Notre flotte se compose de véhicules Mercedes haut de gamme : berlines élégantes et Mercedes V-Class spacieuse pouvant accueillir jusqu'à 7 passagers avec leurs bagages. Tous nos véhicules sont récents, climatisés et impeccablement entretenus.",
  },
  {
    question: "Combien de passagers pouvez-vous transporter ?",
    answer:
      "Selon le véhicule, nous transportons jusqu'à 7 passagers. Précisez-nous le nombre de passagers et de bagages lors de votre réservation pour que nous vous proposions le véhicule le mieux adapté.",
  },
  {
    question: "Comment connaître le tarif de ma course ?",
    answer:
      "Chaque trajet fait l'objet d'un devis transparent et sans surprise. Contactez-nous via WhatsApp en précisant votre point de départ, votre destination et la date : nous vous communiquons rapidement un tarif clair, tout compris.",
  },
  {
    question: "Suivez-vous les vols et les trains en cas de retard ?",
    answer:
      "Oui. Pour les transferts aéroport et gare, nous suivons votre vol ou votre train en temps réel et ajustons l'heure de prise en charge en cas de retard, sans frais supplémentaires.",
  },
  {
    question: "Proposez-vous un service pour les entreprises ?",
    answer:
      "Absolument. Nous accompagnons les professionnels et les entreprises pour leurs transferts de dirigeants, clients VIP, séminaires et déplacements d'affaires, avec une facturation adaptée et une discrétion totale.",
  },
];

/** Atouts « Pourquoi nous choisir ». */
export type Advantage = { title: string; description: string };

export const ADVANTAGES: Advantage[] = [
  {
    title: "Ponctualité garantie",
    description:
      "Nous sommes toujours à l'heure. Suivi des vols et trains, anticipation du trafic : vous partez et arrivez sereinement.",
  },
  {
    title: "Véhicules premium",
    description:
      "Berlines et Mercedes V-Class récentes, propres et confortables, pour un trajet à la hauteur de vos exigences.",
  },
  {
    title: "Chauffeur professionnel",
    description:
      "Un chauffeur expérimenté, courtois et discret, qui connaît parfaitement Marseille et sa région.",
  },
  {
    title: "Disponible 24h/24",
    description:
      "Jour et nuit, week-ends et jours fériés : Aures Drive répond présent pour tous vos déplacements.",
  },
  {
    title: "Réservation simple",
    description:
      "Réservez en quelques secondes via WhatsApp, sans application à installer ni création de compte.",
  },
  {
    title: "Tarif transparent",
    description:
      "Un devis clair et sans surprise avant chaque course. Le prix annoncé est le prix payé.",
  },
];
