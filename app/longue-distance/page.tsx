import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("longue-distance")!;

export const metadata: Metadata = {
  title: "VTC longue distance au départ de Marseille",
  description:
    "Trajets longue distance avec chauffeur privé au départ de Marseille : Aix, Avignon, Nice, Lyon, Montpellier et toute la France. Confort premium Aures Drive, devis sur WhatsApp.",
  alternates: { canonical: "/longue-distance" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
