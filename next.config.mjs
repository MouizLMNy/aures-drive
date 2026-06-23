/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique : génère un dossier /out (HTML/CSS/JS) à téléverser sur Hostinger.
  output: "export",

  // Obligatoire pour l'export statique (pas de serveur d'optimisation d'images).
  images: {
    unoptimized: true,
  },

  // Chaque route devient un dossier avec index.html -> compatible hébergement Apache (Hostinger).
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
