import Link from "next/link";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";

import { Cta } from "@/components/Cta";
import { Crumbs } from "@/components/Crumbs";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Leistungen", href: "/leistungen" });

export const metadata = pageMeta({
  title: "Leistungen — Hausmeisterservice, Grünpflege, Winterdienst",
  description:
    "Zehn Gewerke für Wohn- und Gewerbeobjekte in Lahnstein, Koblenz und im Rhein-Lahn-Kreis: Hausmeisterservice, Objektbetreuung, Grünpflege, Winterdienst, Treppenhausreinigung, Entrümpelung, Montage, Kleinreparaturen, Abbruch und Notdienst.",
  path: "/leistungen",
});

export default function LeistungenHub() {
  return (
    <>
      <Jsonld data={breadcrumbSchema(trail)} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>leistungen</>}
        body={
          <>
            <p className="lede">
              Zehn Gewerke rund um Immobilie und Grundstück. Einzeln buchbar,
              vieles sinnvoll im Turnus.
            </p>
          </>
        }
        aside={
          <div className="figcell">
            <p className="label label--ink">Ortsseiten</p>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                marginBlock: "var(--space-xs) var(--space-sm)",
              }}
            >
              Sechs Leistungen haben eigene Seiten für die größeren Orte im
              Einsatzgebiet — mit dem, was dort tatsächlich anders ist.
            </p>
            <div className="chips">
              {services
                .filter((s) => s.towns)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/leistungen/${s.slug}`}
                    className="chip"
                  >
                    {s.short}
                  </Link>
                ))}
            </div>
          </div>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="index">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className="index__row"
              >
                <span className="index__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="index__title">{s.name}</span>
                  <span className="index__desc">{s.lede}</span>
                </span>
                <span className="index__meta">
                  {s.towns
                    ? `${cities.filter((c) => c.combo).length} Ortsseiten`
                    : "Auf Anfrage"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta
        head="Nicht sicher, was Sie brauchen?"
        line="Beschreiben Sie kurz, worum es geht — wir sagen Ihnen, welche Leistung passt und was sie ungefähr kostet."
        numeral="10"
      />
    </>
  );
}
