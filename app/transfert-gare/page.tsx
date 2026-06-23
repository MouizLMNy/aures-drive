import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("transfert-gare")!;

export const metadata: Metadata = {
  title: "Transfert gare Saint-Charles Marseille | VTC privé",
  description:
    "Transport gare Marseille Saint-Charles avec chauffeur privé Aures Drive. Suivi des trains, ponctualité et confort premium. Réservation simple sur WhatsApp, 24h/24.",
  alternates: { canonical: "/transfert-gare" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
