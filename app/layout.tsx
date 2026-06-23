import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Chauffeur privé VTC à Marseille`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "chauffeur VTC Marseille",
    "VTC Marseille",
    "taxi privé Marseille",
    "transfert aéroport Marseille",
    "chauffeur privé Marseille",
    "transport gare Marseille",
    "VTC aéroport Marseille-Provence",
    "Aures Drive",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Chauffeur privé VTC à Marseille`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Chauffeur privé VTC à Marseille`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Données structurées Schema.org pour le référencement local. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  areaServed: [
    "Marseille",
    "Aix-en-Provence",
    "Aubagne",
    "Cassis",
    "La Ciotat",
    "Vitrolles",
    "Marignane",
  ],
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE.url}/og-image.jpg`,
    telephone: SITE.phoneDisplay,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marseille",
      addressRegion: SITE.region,
      addressCountry: "FR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
