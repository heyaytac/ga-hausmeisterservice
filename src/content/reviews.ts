/**
 * Verbatim reviews from the public Google Business Profile
 * (5,0 ★ from 9 reviews, read August 2026). Nothing here is written by us.
 *
 * Two deliberate omissions:
 *  · Reviews by Aytac Acar and Aykut Acar are held back. They are real, but a
 *    reviewer who shares a surname with the business reads badly to a
 *    prospect who notices — and prospects notice.
 *  · Two reviews are truncated by Google's "…Mehr" cut-off. They stay
 *    `featured: false` until someone pastes the full text, rather than
 *    shipping a sentence that stops mid-thought.
 */

export type Review = {
  author: string;
  /** Google Local Guide status + review count, where shown. Adds weight. */
  credential?: string;
  text: string;
  rating: 5;
  featured: boolean;
  /** TODO(GA): paste the full text from Google, then flip featured to true. */
  truncated?: boolean;
};

export const reviews: Review[] = [
  {
    author: "Francisco Wink Blas",
    credential: "Local Guide · 159 Rezensionen",
    text: "Zuverlässiger und kompetenter Hausmeisterbetrieb – Arbeiten werden stets pünktlich, sauber und professionell ausgeführt. Absolut empfehlenswert!",
    rating: 5,
    featured: true,
  },
  {
    author: "Marc Mayenfels",
    credential: "9 Rezensionen",
    text: "DER Hausmeister-Service mit dem besten Preis-Leistungsverhältnis. Zuverlässig und kompetent.",
    rating: 5,
    featured: true,
  },
  {
    author: "Stefanie Weiand",
    credential: "Local Guide",
    text: "Sehr zu empfehlen, sehr freundlich. Schnelle, saubere und kompetente Arbeit. Werde immer wieder sehr gerne auf diesen Service zurückgreifen.",
    rating: 5,
    featured: true,
  },
  {
    author: "Emre Dogan",
    credential: "Local Guide · 16 Rezensionen",
    text: "Preis & Leistung top. Plus zuverlässig. Gerne wieder.",
    rating: 5,
    featured: true,
  },
  {
    author: "Salvatore Ligorio",
    credential: "8 Rezensionen",
    text: "Sehr zuverlässig und saubere Leistung. Sehr zu empfehlen.",
    rating: 5,
    featured: true,
  },
  {
    author: "Gustav Tränkle",
    credential: "8 Rezensionen",
    text: "Sehr empfehlenswerter Hausmeisterservice! Wir sind mit dem G.A Hausmeisterservice rundum zufrieden.",
    rating: 5,
    featured: false,
    truncated: true,
  },
  {
    author: "Lara Elbert",
    credential: "2 Rezensionen",
    text: "Absolut empfehlenswert! Der Hausmeisterservice leistet hervorragende Arbeit – zuverlässig, freundlich und immer professionell.",
    rating: 5,
    featured: false,
    truncated: true,
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
