import { services } from "@/content/services";
import { business, contact, promise } from "@/content/business";
import { QuoteForm } from "@/components/QuoteForm";
import { Hero } from "@/components/Hero";
import { Period } from "@/components/Marks";
import { Crumbs } from "@/components/Crumbs";
import { RatingLine } from "@/components/Reviews";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Angebot", href: "/angebot" });

export const metadata = pageMeta({
  title: "Kostenloses Angebot anfordern",
  description:
    "Angebot für Hausmeisterservice, Grünpflege, Winterdienst, Treppenhausreinigung oder Entrümpelung in Lahnstein, Koblenz und Umgebung. Kostenlos, unverbindlich, Rückmeldung am selben Werktag.",
  path: "/angebot",
});

export default async function Angebot({
  searchParams,
}: {
  searchParams: Promise<{ leistung?: string }>;
}) {
  const { leistung } = await searchParams;
  const preset = services.find((s) => s.slug === leistung)?.slug;

  return (
    <>
      <Jsonld data={breadcrumbSchema(trail)} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>angebot</>}
        small
        wide
        body={
          <>
            <p className="lede" style={{ maxWidth: "30ch" }}>
              Kostenlos und unverbindlich. Am Werktag melden wir uns am selben
              Tag zurück.
            </p>
            <ul className="stack" style={{ gap: "var(--space-xs)" }}>
              {promise.map((p) => (
                <li key={p} style={{ fontSize: "var(--text-sm)" }}>
                  <Period /> {p}
                </li>
              ))}
            </ul>
            <RatingLine />
            <div
              className="figcell"
              style={{ width: "100%", marginBlockStart: "var(--space-md)" }}
            >
              <p className="label label--ink">Lieber direkt?</p>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-xs)",
                  flexWrap: "wrap",
                  marginBlockStart: "var(--space-sm)",
                }}
              >
                <a href={contact.tel} className="btn">
                  {business.phoneDisplay}
                </a>
                <a
                  href={contact.whatsapp(
                    "Guten Tag, ich möchte ein Angebot für:",
                  )}
                  className="btn"
                  rel="noopener"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </>
        }
        aside={<QuoteForm presetService={preset} />}
      />
    </>
  );
}
