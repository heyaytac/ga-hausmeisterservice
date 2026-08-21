import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/business";
import { services, townServices } from "@/content/services";
import { cities, comboCities } from "@/content/cities";
import { articles } from "@/content/ratgeber";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${SITE_URL}${path}`;

  return [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: u("/leistungen"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: u("/einsatzgebiet"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: u("/preise"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: u("/angebot"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: u("/kontakt"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: u("/ueber-uns"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: u("/ratgeber"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    ...services.map((s) => ({
      url: u(`/leistungen/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    ...cities.map((c) => ({
      url: u(`/hausmeisterservice/${c.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: c.combo ? 0.8 : 0.65,
    })),

    ...townServices.flatMap((s) =>
      comboCities.map((c) => ({
        url: u(`/leistungen/${s.slug}/${c.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
    ),

    ...articles.map((a) => ({
      url: u(`/ratgeber/${a.slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),

    {
      url: u("/impressum"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: u("/datenschutz"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
