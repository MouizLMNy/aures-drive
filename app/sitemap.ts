import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/nos-services",
    "/a-propos",
    "/faq",
    "/contact",
    "/mentions-legales",
    "/cgv",
  ];

  const serviceRoutes = SERVICES.map((s) => `/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
