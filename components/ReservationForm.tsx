"use client";

import { useState, type FormEvent } from "react";
import { User, Phone, Calendar, Clock, Users, MessageSquare, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { AddressAutocomplete } from "./AddressAutocomplete";

/**
 * Formulaire de réservation. Aucune donnée n'est envoyée à un serveur :
 * les champs sont compilés en un message WhatsApp clair et professionnel,
 * puis WhatsApp s'ouvre directement avec la demande de réservation.
 */
export function ReservationForm() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    depart: "",
    arrivee: "",
    date: "",
    heure: "",
    passagers: "1",
    infos: "",
  });

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  // Formate "2026-07-12" -> "12/07/2026" pour le message.
  const formatDate = (iso: string) => {
    if (!iso) return "À définir";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = [
      "Bonjour Aures Drive, je souhaite réserver un trajet.",
      "",
      `Nom : ${form.nom.trim()}`,
      `Téléphone : ${form.telephone.trim()}`,
      "",
      `Départ : ${form.depart.trim()}`,
      `Arrivée : ${form.arrivee.trim()}`,
      "",
      `Date : ${formatDate(form.date)}`,
      `Heure : ${form.heure || "À définir"}`,
      "",
      `Passagers : ${form.passagers}`,
      "",
      "Informations complémentaires :",
      form.infos.trim() || "—",
      "",
      "Merci de confirmer cette réservation.",
    ].join("\n");

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
      {/* Nom */}
      <div className="relative">
        <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="text"
          required
          value={form.nom}
          onChange={(e) => set("nom", e.target.value)}
          placeholder="Votre nom"
          className={fieldClass}
          aria-label="Votre nom"
        />
      </div>

      {/* Téléphone */}
      <div className="relative">
        <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="tel"
          required
          value={form.telephone}
          onChange={(e) => set("telephone", e.target.value)}
          placeholder="Votre téléphone"
          className={fieldClass}
          aria-label="Votre téléphone"
        />
      </div>

      {/* Départ (autocomplétion) */}
      <div className="sm:col-span-2">
        <AddressAutocomplete
          value={form.depart}
          onChange={(v) => set("depart", v)}
          placeholder="Adresse de départ"
          ariaLabel="Adresse de départ"
          required
        />
      </div>

      {/* Arrivée (autocomplétion) */}
      <div className="sm:col-span-2">
        <AddressAutocomplete
          value={form.arrivee}
          onChange={(v) => set("arrivee", v)}
          placeholder="Adresse d'arrivée"
          ariaLabel="Adresse d'arrivée"
          required
        />
      </div>

      {/* Date */}
      <div className="relative">
        <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <input
          type="date"
          value={form.date}
          onChange={(e) => set("date", e.target.value)}
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
          onChange={(e) => set("heure", e.target.value)}
          className={fieldClass}
          aria-label="Heure"
        />
      </div>

      {/* Passagers */}
      <div className="relative sm:col-span-2">
        <Users className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-azur-500" />
        <select
          value={form.passagers}
          onChange={(e) => set("passagers", e.target.value)}
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

      {/* Informations complémentaires */}
      <div className="relative sm:col-span-2">
        <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-azur-500" />
        <textarea
          value={form.infos}
          onChange={(e) => set("infos", e.target.value)}
          placeholder="Informations complémentaires (bagages, vol, siège enfant…)"
          rows={3}
          className="w-full resize-none rounded-xl border border-navy-200 bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy-400 transition-colors focus:border-azur-400 focus:outline-none focus:ring-2 focus:ring-azur-100"
          aria-label="Informations complémentaires"
        />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-premium transition-all hover:bg-[#1ebe5b] hover:shadow-premium-lg"
      >
        <MessageCircle className="h-5 w-5" />
        Envoyer ma réservation sur WhatsApp
      </button>

      <p className="sm:col-span-2 text-center text-xs text-navy-400">
        Réponse rapide · Devis sans engagement · Aucune application à installer
      </p>
    </form>
  );
}
