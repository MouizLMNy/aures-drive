import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-gradient-navy py-32">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative text-center">
        <p className="font-display text-7xl font-bold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          Cette page n'existe pas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-azur-100/80">
          La page que vous cherchez est introuvable. Revenez à l'accueil ou
          réservez directement votre trajet.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            <Home className="h-5 w-5" />
            Retour à l'accueil
          </Link>
          <WhatsAppButton>Réserver sur WhatsApp</WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
