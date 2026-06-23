import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-azur-200 hover:shadow-premium"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-azur-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-azur text-white shadow-glow">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="relative mt-6 font-display text-xl font-bold text-navy">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-navy-600">
        {service.short}
      </p>
      <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-azur-600 transition-colors group-hover:text-azur-700">
        En savoir plus
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
