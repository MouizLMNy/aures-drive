import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

type Crumb = { label: string; href?: string };

/**
 * En-tête standard des pages internes : fil d'Ariane, titre, sous-titre.
 */
export function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-navy pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-azur-500/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Fil d'Ariane"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-azur-100/70"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-azur-100">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-azur-100 backdrop-blur">
            {eyebrow}
          </span>
        )}

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-azur-100/90">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
