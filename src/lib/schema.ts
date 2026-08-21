import { SITE_URL, business } from "@/content/business";
import { cities } from "@/content/cities";
import { featuredReviews } from "@/content/reviews";
import type { Crumb } from "@/lib/seo";
import { abs } from "@/lib/seo";

const BUSINESS_ID = `${SITE_URL}/#business`;

/** Address and opening hours are emitted only once someone has verified them.
 *  A wrong NAP is worse for local ranking than a missing one. */
function postalAddress() {
  if (!business.address.confirmed) return undefined;
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    postalCode: business.address.postalCode,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    addressCountry: business.address.country,
  };
}

function openingHours() {
  if (!business.hours.confirmed || business.hours.spec.length === 0)
    return undefined;
  return business.hours.spec.map((s) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: s.days.map((d) => `https://schema.org/${d}`),
    opens: s.opens,
    closes: s.closes,
  }));
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: business.name,
    legalName: business.legalName || undefined,
    url: SITE_URL,
    telephone: business.phoneE164,
    email: business.email || undefined,
    description:
      "Hausmeisterservice, Objektbetreuung, Grünpflege, Winterdienst, Entrümpelung und Kleinreparaturen in Lahnstein, Koblenz und im Rhein-Lahn-Kreis.",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: c.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: c.name,
        addressRegion: "Rheinland-Pfalz",
        addressCountry: "DE",
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.geo.lat,
        longitude: business.geo.lng,
      },
      geoRadius: 25000,
    },
    openingHoursSpecification: openingHours(),
    sameAs: business.googleProfileUrl ? [business.googleProfileUrl] : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: featuredReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    inLanguage: "de-DE",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  areaNames?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    serviceType: input.name,
    provider: { "@id": BUSINESS_ID },
    areaServed: (input.areaNames ?? cities.map((c) => c.name)).map((n) => ({
      "@type": "City",
      name: n,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string | string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: Array.isArray(f.a) ? f.a.join(" ") : f.a,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: abs(input.path),
    inLanguage: "de-DE",
    dateModified: input.updated,
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  };
}
