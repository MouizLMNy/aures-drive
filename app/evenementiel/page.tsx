import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("evenementiel")!;

export const metadata: Metadata = {
  title: "Transport événementiel & mariage VTC Marseille",
  description:
    "Chauffeur privé pour vos mariages, soirées et événements à Marseille. Véhicules Mercedes élégants, service ponctuel et attentionné. Aures Drive, réservation sur WhatsApp.",
  alternates: { canonical: "/evenementiel" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
