import Link from "next/link";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { Rails } from "@/components/Rails";
import { Bar, Numeral, Period } from "@/components/Marks";

export default function NotFound() {
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
              seite nicht gefunden
              <Period />
            </h1>
            <p className="lede">
              Die Adresse gibt es nicht (mehr). Hier entlang geht es weiter.
            </p>
            <div className="actions">
              <Link href="/" className="btn btn--primary">
                Startseite
              </Link>
              <Link href="/kontakt" className="btn">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="col-object crop">
            <div className="figcell">
              <p className="label label--ink">Leistungen</p>
              <div
                className="chips"
                style={{ marginBlockStart: "var(--space-sm)" }}
              >
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/leistungen/${s.slug}`}
                    className="chip"
                  >
                    {s.short}
                  </Link>
                ))}
              </div>
              <p
                className="label label--ink"
                style={{ marginBlockStart: "var(--space-lg)" }}
              >
                Orte
              </p>
              <div
                className="chips"
                style={{ marginBlockStart: "var(--space-sm)" }}
              >
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/hausmeisterservice/${c.slug}`}
                    className="chip"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <Numeral>404</Numeral>
          </div>
        </div>
      </div>
    </section>
  );
}
