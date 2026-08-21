import type { Metadata } from "next";
import { SITE_URL, business } from "@/content/business";

export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Set false on thin utility pages we do not want in the index. */
  index?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const url = abs(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: business.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Breadcrumb trail shared by the visible crumbs and the JSON-LD. */
export type Crumb = { name: string; href: string };

export const crumbTrail = (...crumbs: Crumb[]): Crumb[] => [
  { name: "Start", href: "/" },
  ...crumbs,
];
