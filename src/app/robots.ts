import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/business";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines and AI crawlers alike. A local trade business gains
      // from being quotable in an AI answer; there is nothing here to gate.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/danke"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
