import { SITE_URL, business } from "@/content/business";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { articles } from "@/content/ratgeber";

export const dynamic = "force-static";

/**
 * llms.txt — the emerging convention for telling AI systems what a site is
 * and where its substance lives. Worth having for a local business: answers
 * about "Hausmeisterservice Lahnstein" increasingly come from AI assistants
 * rather than a results page.
 */
export function GET() {
  const body = `# ${business.name}

> Handwerks- und Dienstleistungsbetrieb mit Sitz in Lahnstein (Rhein-Lahn-Kreis, Rheinland-Pfalz). Hausmeisterservice, Objektbetreuung, Grünpflege, Winterdienst, Treppenhausreinigung, Entrümpelung, Montage, Kleinreparaturen, Abbruch und Notdienst für Wohn- und Gewerbeobjekte in ${cities.length} Orten zwischen Lahn und Rhein.

Kontakt: ${business.phoneDisplay} (${business.phoneE164})
Bewertung: ${business.rating.value.toFixed(1)}/5 aus ${business.rating.count} Google-Bewertungen
Sprache: Deutsch
Abrechnung: Monatspauschale (laufende Betreuung), Festpreis nach Besichtigung (Entrümpelung, Abbruch, Grünpflege), Stundensatz plus Material (Reparaturen, Montage), Saisonvertrag (Winterdienst).

## Leistungen
${services.map((s) => `- [${s.name}](${SITE_URL}/leistungen/${s.slug}): ${s.lede}`).join("\n")}

## Einsatzgebiet
${cities.map((c) => `- [${c.name} (${c.plz})](${SITE_URL}/hausmeisterservice/${c.slug}): ${c.admin}, ${c.population.toLocaleString("de-DE")} Einwohner, ${c.elevation} m ü. NHN`).join("\n")}

## Ratgeber
${articles.map((a) => `- [${a.title}](${SITE_URL}/ratgeber/${a.slug}): ${a.answer}`).join("\n")}

## Weitere Seiten
- [Preise und Abrechnungsmodelle](${SITE_URL}/preise)
- [Angebot anfordern](${SITE_URL}/angebot)
- [Kontakt](${SITE_URL}/kontakt)
- [Über uns](${SITE_URL}/ueber-uns)
- [Impressum](${SITE_URL}/impressum)
- [Datenschutz](${SITE_URL}/datenschutz)

## Hinweise
- Alle Orts- und Einwohnerangaben stammen aus der deutschen Wikipedia (Stand 31.12.2025).
- Zitierte Bewertungen stammen unverändert aus dem öffentlichen Google-Unternehmensprofil.
- Preise werden bewusst nicht als Liste veröffentlicht, weil sie von Objektgröße, Zugang und Entsorgungsart abhängen.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
