import Link from "next/link";
import { business, contact } from "@/content/business";
import { articles } from "@/content/ratgeber";
import { Rails } from "@/components/Rails";
import { Bar, Period } from "@/components/Marks";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Anfrage eingegangen",
  description: "Ihre Anfrage ist bei uns eingegangen.",
  path: "/danke",
  index: false,
});

export default function Danke() {
  return (
    <section
      className="band band--flat band--open"
      style={{ position: "relative" }}
    >
      <Rails />
      <div className="shell">
        <div className="grid12">
          <div className="col-text stack stack--lg">
            <Bar />
            <h1 style={{ fontSize: "var(--text-display-s)" }}>
              angekommen
              <Period />
            </h1>
            <p className="lede">
              Ihre Anfrage liegt uns vor. An einem Werktag melden wir uns am
              selben Tag zurück.
            </p>
            <div className="prose" style={{ color: "var(--color-muted)" }}>
              <p>
                Wenn es eilt, rufen Sie an — dann geht es schneller als über das
                Formular.
              </p>
            </div>
            <div className="actions">
              <a href={contact.tel} className="btn btn--primary">
                {business.phoneDisplay}
              </a>
              <Link href="/" className="btn">
                Zur Startseite
              </Link>
            </div>
          </div>
          <div className="col-object">
            <div className="figcell">
              <p className="label label--ink">Bis dahin</p>
              <div
                style={{
                  marginBlockStart: "var(--space-sm)",
                  display: "grid",
                  gap: "var(--space-xs)",
                }}
              >
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/ratgeber/${a.slug}`}
                    style={{
                      fontSize: "var(--text-sm)",
                      paddingBlock: "var(--space-xs)",
                      borderBlockEnd: "1px solid var(--color-rule)",
                    }}
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
