/**
 * SINGLE SOURCE OF TRUTH for every business fact on this site.
 *
 * Nothing else in the codebase hard-codes a phone number, an address, or a
 * legal detail. Change it here and it changes on all ~60 pages, in the
 * footer, in the JSON-LD, in the sitemap and in the quote-form emails.
 *
 * ────────────────────────────────────────────────────────────────────────
 * TODO(GA) — fill these in before going live. Search for TODO(GA).
 * Items marked `confirmed: false` are deliberately withheld from the
 * rendered page and from structured data until they are verified, so the
 * site never publishes a fact nobody checked.
 * ────────────────────────────────────────────────────────────────────────
 */

export const SITE_URL = "https://www.ga-hausmeisterservice.de";

export const business = {
  name: "G.A Hausmeisterservice",
  legalName: "G.A Hausmeisterservice", // TODO(GA): full legal name incl. owner, e.g. "Hausmeisterservice G. Acar"
  owner: "", // TODO(GA): "Vorname Nachname" — required in the Impressum (§5 DDG)
  foundedYear: 2024, // TODO(GA): confirm the year the business was registered

  /** Phone. tel: needs E.164, display is the readable German form. */
  phoneE164: "+4915785565403",
  phoneDisplay: "0157 8556 5403",
  whatsappNumber: "4915785565403",

  email: "", // TODO(GA): e.g. info@ga-hausmeisterservice.de — used for the Impressum and as the quote-form reply-to

  address: {
    street: "", // TODO(GA): Straße + Hausnummer — required in the Impressum
    postalCode: "56112",
    locality: "Lahnstein",
    region: "Rheinland-Pfalz",
    country: "DE",
    /** Flip to true once street + postal code are verified. Gates the
     *  PostalAddress in the JSON-LD and the address block in the footer. */
    confirmed: false,
  },

  /** Approximate centre of the service area (Lahnstein). Used for geo + map. */
  geo: { lat: 50.3006, lng: 7.6122 },

  /** Google Business Profile shows "Schließt um 20:00". The opening time is
   *  not confirmed, so hours stay out of the page and out of the JSON-LD
   *  until someone checks. */
  hours: {
    confirmed: false,
    // TODO(GA): confirm and set e.g. [{ days: ["Mo","Tu","We","Th","Fr"], opens: "07:00", closes: "20:00" }]
    spec: [] as { days: string[]; opens: string; closes: string }[],
    /** This much IS confirmed from the Google Business Profile. */
    note: "Mo–Sa bis 20:00 Uhr erreichbar",
  },

  /** Notdienst availability. TODO(GA): confirm before advertising 24/7. */
  emergency: {
    confirmed: false,
    note: "Notdienst nach Absprache",
  },

  tax: {
    vatId: "", // TODO(GA): USt-IdNr. (nur falls vorhanden)
    taxNumber: "", // TODO(GA): Steuernummer
    /** §19 UStG Kleinunternehmer — changes the required VAT wording on
     *  invoices and the price page. */
    kleinunternehmer: true, // TODO(GA): confirm
  },

  /** Public Google Business Profile. Fill in to link "alle Bewertungen". */
  googleProfileUrl: "", // TODO(GA): paste the Google Maps share link

  rating: {
    value: 5.0,
    count: 9,
    /** Verified from the public Google Business Profile, August 2026. */
    source: "Google",
  },
} as const;

export const contact = {
  tel: `tel:${business.phoneE164}`,
  whatsapp: (text?: string) =>
    `https://wa.me/${business.whatsappNumber}${
      text ? `?text=${encodeURIComponent(text)}` : ""
    }`,
};

/** The line that appears under CTAs. Only claims things we can stand behind. */
export const promise = [
  "Kostenloses Angebot",
  "Festpreis vor Arbeitsbeginn",
  "Rückmeldung am selben Werktag",
] as const;
