"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Loader2 } from "lucide-react";

type Suggestion = {
  label: string;
  context: string;
};

/**
 * Champ d'adresse avec autocomplétion via l'API Adresse (BAN) du
 * gouvernement français — gratuite, sans clé, adresses réelles et précises
 * (numéro, rue, code postal, ville). Appel direct côté navigateur.
 */
export function AddressAutocomplete({
  value,
  onChange,
  placeholder,
  ariaLabel,
  required = false,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
  required?: boolean;
}) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const justSelected = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const abortRef = useRef<AbortController>();

  // Recherche d'adresses (debounce 250 ms).
  useEffect(() => {
    if (justSelected.current) {
      justSelected.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const query = value.trim();
    if (query.length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
            query
          )}&limit=6&autocomplete=1`,
          { signal: controller.signal }
        );
        const data = await res.json();
        const items: Suggestion[] = (data.features || []).map((f: any) => ({
          label: f.properties.label as string,
          context: f.properties.context as string,
        }));
        setSuggestions(items);
        setOpen(items.length > 0);
        setActiveIndex(-1);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setSuggestions([]);
          setOpen(false);
        }
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  // Fermeture au clic extérieur.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const select = (label: string) => {
    justSelected.current = true;
    onChange(label);
    setOpen(false);
    setSuggestions([]);
    setActiveIndex(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      select(suggestions[activeIndex].label);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <MapPin className="pointer-events-none absolute left-4 top-[1.15rem] h-5 w-5 -translate-y-1/2 text-azur-500" />
      {loading && (
        <Loader2 className="pointer-events-none absolute right-4 top-[1.15rem] h-4 w-4 -translate-y-1/2 animate-spin text-azur-400" />
      )}
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete="off"
        className="w-full rounded-xl border border-navy-200 bg-white py-3 pl-11 pr-9 text-sm text-navy placeholder:text-navy-400 transition-colors focus:border-azur-400 focus:outline-none focus:ring-2 focus:ring-azur-100"
      />

      {open && suggestions.length > 0 && (
        <ul className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-navy-100 bg-white py-1 shadow-premium-lg">
          {suggestions.map((s, i) => (
            <li key={`${s.label}-${i}`}>
              <button
                type="button"
                onClick={() => select(s.label)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex w-full items-start gap-2.5 px-4 py-2.5 text-left text-sm transition-colors ${
                  i === activeIndex ? "bg-azur-50" : "hover:bg-azur-50/60"
                }`}
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azur-500" />
                <span className="text-navy">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
