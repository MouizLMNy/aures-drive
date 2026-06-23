import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("mise-a-disposition")!;

export const metadata: Metadata = {
  title: "Mise à disposition chauffeur privé Marseille",
  description:
    "Chauffeur privé à disposition à l'heure ou à la journée à Marseille avec Aures Drive. Idéal rendez-vous, shopping et tourisme. Réservation WhatsApp, discrétion garantie.",
  alternates: { canonical: "/mise-a-disposition" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
