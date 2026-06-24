"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Calendar, Clock, Users, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Formulaire de réservation. Aucune donnée n'est envoyée à un serveur :
 * les champs sont compilés en un message WhatsApp pré-rempli, puis WhatsApp
 * s'ouvre directement avec la demande de devis.
 */
export function ReservationForm() {
  const [form, setForm] = useState({
    depart: "",
    arrivee: "",
    date: "",
    heure: "",
    passagers: "1",
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      "Bonjour, je souhaite réserver un trajet avec Aures Drive.",
      "",
      form.depart && `📍 Départ : ${form.depart}`,
      form.arrivee && `🎯 Arrivée : ${form.arrivee}`,
      form.date && `📅 Date : ${form.date}`,
      form.heure && `🕐 Heure : ${form.heure}`,
      form.passagers && `👤 Passagers : ${form.passagers}`,
    ].filter(Boolean);

    const message = lines.join("\n");
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-xl border border-navy-200 bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy-400 transition-colors focus:border-azur-400 focus:outline-none focus:ring-2 focus:ring-azur-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
      aria-label="Formulaire de réservation"
    >
      {/* Départ */}
      <div className="relative sm:col-span-2">
        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="text"
          required
          value={form.depart}
          onChange={update("depart")}
          placeholder="Adresse de départ"
          className={fieldClass}
          aria-label="Adresse de départ"
        />
      </div>

      {/* Arrivée */}
      <div className="relative sm:col-span-2">
        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="text"
          required
          value={form.arrivee}
          onChange={update("arrivee")}
          placeholder="Adresse d'arrivée"
          className={fieldClass}
          aria-label="Adresse d'arrivée"
        />
      </div>

      {/* Date */}
      <div className="relative">
        <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="date"
          value={form.date}
          onChange={update("date")}
          className={fieldClass}
          aria-label="Date"
        />
      </div>

      {/* Heure */}
      <div className="relative">
        <Clock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="time"
          value={form.heure}
          onChange={update("heure")}
          className={fieldClass}
          aria-label="Heure"
        />
      </div>

      {/* Passagers */}
      <div className="relative sm:col-span-2">
        <Users className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <select
          value={form.passagers}
          onChange={update("passagers")}
          className={`${fieldClass} appearance-none`}
          aria-label="Nombre de passagers"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={String(n)}>
              {n} passager{n > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-premium transition-all hover:bg-[#1ebe5b] hover:shadow-premium-lg"
      >
        <MessageCircle className="h-5 w-5" />
        Obtenir un devis sur WhatsApp
      </button>

      <p className="sm:col-span-2 text-center text-xs text-navy-400">
        Réponse rapide · Devis sans engagement · Aucune application à installer
      </p>
    </form>
  );
}
