/**
 * Illustration vectorielle décorative : Notre-Dame de la Garde dominant
 * la skyline de Marseille et le Vieux-Port. Utilisée en arrière-plan
 * (purement décorative, ne gêne pas la lecture). Couleurs de la marque.
 */
export function MarseilleBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 340"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="md-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1AA0E0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1AA0E0" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="md-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6dd0ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1c3c73" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Mer / reflets du Vieux-Port */}
      <g stroke="#6dd0ff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round">
        <line x1="60" y1="312" x2="150" y2="312" />
        <line x1="180" y1="322" x2="300" y2="322" />
        <line x1="340" y1="314" x2="430" y2="314" />
        <line x1="1010" y1="316" x2="1110" y2="316" />
        <line x1="1150" y1="324" x2="1260" y2="324" />
      </g>

      {/* Skyline arrière (immeubles lointains) */}
      <g fill="url(#md-sky)">
        <rect x="80" y="232" width="46" height="108" />
        <rect x="134" y="208" width="34" height="132" />
        <rect x="176" y="248" width="40" height="92" />
        <rect x="224" y="222" width="30" height="118" />
        <rect x="262" y="256" width="48" height="84" />
        <rect x="1180" y="236" width="40" height="104" />
        <rect x="1228" y="214" width="32" height="126" />
        <rect x="1268" y="250" width="44" height="90" />
        <rect x="1320" y="226" width="30" height="114" />
        <rect x="1358" y="252" width="46" height="88" />
      </g>

      {/* Colline de la Garde + basilique Notre-Dame de la Garde */}
      <g>
        {/* Colline */}
        <path
          d="M470 340 C 600 300, 660 250, 720 196 C 780 250, 840 300, 970 340 Z"
          fill="url(#md-front)"
        />
        {/* Corps de la basilique */}
        <rect x="686" y="150" width="68" height="52" fill="#9adcff" fillOpacity="0.85" />
        {/* Coupole */}
        <path d="M686 150 q34 -26 68 0 Z" fill="#9adcff" fillOpacity="0.85" />
        {/* Clocher (tour) */}
        <rect x="706" y="78" width="28" height="74" fill="#bfe8ff" fillOpacity="0.9" />
        {/* Socle de la statue */}
        <rect x="714" y="60" width="12" height="20" fill="#bfe8ff" fillOpacity="0.9" />
        {/* La « Bonne Mère » (statue dorée stylisée) */}
        <circle cx="720" cy="50" r="7" fill="#ffd87a" />
        <rect x="717" y="40" width="6" height="6" fill="#ffd87a" />
      </g>

      {/* Skyline avant (immeubles proches du port) */}
      <g fill="#1c3c73" fillOpacity="0.55">
        <rect x="360" y="262" width="56" height="78" />
        <rect x="420" y="240" width="40" height="100" />
        <rect x="466" y="270" width="50" height="70" />
        <rect x="980" y="252" width="46" height="88" />
        <rect x="1030" y="272" width="52" height="68" />
        <rect x="1086" y="244" width="40" height="96" />
        <rect x="1130" y="274" width="54" height="66" />
      </g>
    </svg>
  );
}
