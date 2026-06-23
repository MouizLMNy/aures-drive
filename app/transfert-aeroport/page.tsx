import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("transfert-aeroport")!;

export const metadata: Metadata = {
  title: "Transfert aéroport Marseille-Provence | VTC privé",
  description:
    "Transfert aéroport Marseille-Provence (Marignane) avec chauffeur privé Aures Drive. Suivi de vol, accueil personnalisé, ponctualité garantie. Réservation WhatsApp 24h/24.",
  alternates: { canonical: "/transfert-aeroport" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
