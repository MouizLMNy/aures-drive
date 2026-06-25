import { MapPin } from "lucide-react";
import { type Destination } from "@/lib/content";

/**
 * Carte destination avec emplacement photo.
 * Si l'image n'existe pas encore dans /public/images, un dégradé bleu
 * s'affiche à la place (aucune image cassée). Le nom reste toujours lisible.
 */
export function DestinationCard({
  destination,
  served = "Desservi",
  className = "",
}: {
  destination: Destination;
  served?: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-navy shadow-premium ${className}`}
    >
      {/* Photo (apparaît automatiquement quand le fichier est ajouté) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${destination.image})` }}
        aria-hidden="true"
      />
      {/* Voile dégradé pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent" />

      <div className="relative flex h-full min-h-[200px] flex-col justify-end p-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <MapPin className="h-3.5 w-3.5 text-azur-300" />
          {served}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold text-white">
          {destination.name}
        </h3>
      </div>
    </div>
  );
}
