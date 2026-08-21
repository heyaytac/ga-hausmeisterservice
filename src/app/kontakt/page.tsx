import Link from "next/link";
import { business, contact } from "@/content/business";
import { cities } from "@/content/cities";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Register } from "@/components/Marks";
import { Crumbs } from "@/components/Crumbs";
import { Reviews, RatingLine } from "@/components/Reviews";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Kontakt", href: "/kontakt" });

export const metadata = pageMeta({
  title: "Kontakt — G.A Hausmeisterservice Lahnstein",
  description: `Telefon ${business.phoneDisplay}, WhatsApp oder Formular. Hausmeisterservice für Lahnstein, Koblenz und ${cities.length - 2} weitere Orte im Rhein-Lahn-Kreis.`,
  path: "/kontakt",
});

export default function Kontakt() {
  return (
    <>
      <Jsonld data={breadcrumbSchema(trail)} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>kontakt</>}
        body={
          <>
            <p className="lede">
              Am schnellsten geht es telefonisch. Für alles, was sich besser
              zeigen als beschreiben lässt, nehmen Sie WhatsApp und schicken ein
              Foto.
            </p>
            <div className="actions">
              <a href={contact.tel} className="btn btn--primary">
                {business.phoneDisplay}
              </a>
              <a
                href={contact.whatsapp(
                  "Guten Tag, ich habe eine Frage zu folgenden Arbeiten:",
                )}
                className="btn"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>
            <RatingLine />
          </>
        }
        aside={
          <div className="figcell">
            <p className="label label--ink">Erreichbarkeit</p>
            <div
              className="pairs"
              style={{ marginBlockStart: "var(--space-sm)" }}
            >
              <div className="pairs__row">
                <span className="label">Telefon</span>
                <span className="pairs__val">
                  <a href={contact.tel}>{business.phoneDisplay}</a>
                </span>
              </div>
              {business.email && (
                <div className="pairs__row">
                  <span className="label">E-Mail</span>
                  <span className="pairs__val">
                    <a href={`mailto:${business.email}`}>{business.email}</a>
                  </span>
                </div>
              )}
              <div className="pairs__row">
                <span className="label">Zeiten</span>
                <span className="pairs__val">{business.hours.note}</span>
              </div>
              <div className="pairs__row">
                <span className="label">Sitz</span>
                <span className="pairs__val">
                  {business.address.confirmed
                    ? `${business.address.street}, ${business.address.postalCode} ${business.address.locality}`
                    : `${business.address.postalCode} ${business.address.locality}`}
                </span>
              </div>
              <div className="pairs__row">
                <span className="label">Gebiet</span>
                <span className="pairs__val">
                  {cities.length} Orte zwischen Lahn und Rhein
                </span>
              </div>
            </div>
          </div>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>angebot anfordern</h2>
              <div className="prose">
                <p>
                  Für ein belastbares Angebot brauchen wir ein paar Angaben mehr
                  als „bitte um Rückruf“. Das Formular fragt genau das ab, was
                  wir für eine erste Einschätzung brauchen.
                </p>
              </div>
              <Link href="/angebot" className="btn btn--primary">
                Zum Formular
              </Link>
            </div>
            <div className="col-object">
              <div
                className="figcell"
                style={{ display: "flex", gap: "var(--space-md)" }}
              >
                <Register />
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                  }}
                >
                  Bei einem Notfall — Wasser, Sturmschaden, verstopfte Leitung —
                  rufen Sie bitte direkt an, statt das Formular zu benutzen.{" "}
                  <Link href="/leistungen/notdienst">Zum Notdienst</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <Reviews limit={4} />
        </div>
      </section>
    </>
  );
}
