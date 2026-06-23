# Aures Drive — Site VTC Marseille

Site vitrine premium pour **Aures Drive**, chauffeur privé VTC à Marseille et alentours.
Réservation via WhatsApp, 24h/24 et 7j/7.

Construit avec **Next.js 14 + TypeScript + Tailwind CSS**, exporté en **site statique**
(HTML/CSS/JS) compatible avec un hébergement Hostinger classique.

---

## 🚀 Démarrer en local

> Node.js LTS requis (déjà installé sur cette machine).

```bash
npm install        # installe les dépendances
npm run dev        # lance le site en local : http://localhost:3000
```

## 🏗️ Générer le site statique (pour Hostinger)

```bash
npm run build      # génère le dossier /out (site statique prêt à téléverser)
```

Le dossier **`/out`** contient l'intégralité du site (fichiers `.html`, CSS, JS, images).
C'est ce dossier que vous mettez en ligne.

---

## 🌐 Déploiement

### Étape 1 — Pousser le code sur GitHub
Le code est versionné sur GitHub. Toute modification se fait ici puis se pousse
(`git add . && git commit -m "..." && git push`).

### Étape 2 — Mettre en ligne sur Hostinger
1. Lancez `npm run build` pour régénérer le dossier `/out`.
2. Connectez-vous à **hPanel Hostinger → Gestionnaire de fichiers**.
3. Ouvrez le dossier `public_html` de votre domaine.
4. Téléversez **tout le contenu du dossier `/out`** (pas le dossier lui-même, son contenu).
5. C'est en ligne ✅

> Astuce : vous pouvez aussi automatiser via le déploiement Git de Hostinger,
> mais le build doit être lancé avant (Hostinger sert des fichiers statiques).

---

## ✏️ Personnaliser le contenu

Tout est centralisé pour faciliter les modifications :

| Fichier | Contenu |
|---|---|
| `lib/site.ts` | Coordonnées, **numéro WhatsApp**, email, mentions légales |
| `lib/content.ts` | Services, zones desservies, FAQ, atouts |
| `tailwind.config.ts` | Couleurs de la charte graphique |
| `app/icon.svg` | Favicon (icône d'onglet) |

### ⚠️ À compléter avant la mise en ligne
Dans `lib/site.ts`, remplacez les valeurs entre crochets :
- `url` → votre nom de domaine définitif
- `email` → votre email professionnel
- `legal.*` → forme juridique, SIRET, EVTC, adresse, responsable
- `social.*` → liens réseaux sociaux (optionnel)

---

## 📄 Pages

- `/` — Accueil
- `/nos-services` — Vue d'ensemble des services
- `/transfert-aeroport`, `/transfert-gare`, `/mise-a-disposition`,
  `/longue-distance`, `/entreprises`, `/evenementiel` — Détail des services
- `/a-propos` — À propos
- `/faq` — Questions fréquentes (avec données structurées SEO)
- `/contact` — Contact & réservation
- `/mentions-legales`, `/cgv` — Pages légales

## 🔍 SEO inclus
- Métadonnées (title/description) optimisées par page
- Données structurées Schema.org (TaxiService + FAQPage)
- `sitemap.xml` et `robots.txt` générés automatiquement
- Mots-clés locaux : chauffeur VTC Marseille, transfert aéroport, etc.
