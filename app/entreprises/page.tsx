import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/content";

const service = getService("entreprises")!;

export const metadata: Metadata = {
  title: "Transport d'affaires & VTC entreprise Marseille",
  description:
    "Solutions de transport pour entreprises à Marseille : transferts dirigeants, clients VIP, séminaires. Chauffeur professionnel, discrétion et facturation adaptée. Aures Drive.",
  alternates: { canonical: "/entreprises" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
