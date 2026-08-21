import Link from "next/link";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { generalFaqs } from "@/content/faqs";
import { business, contact, promise } from "@/content/business";
import { Rails } from "@/components/Rails";
import { Numeral, Register, Stepped } from "@/components/Marks";
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Reviews, RatingLine } from "@/components/Reviews";
import { ServiceAreaMap, TownIndex } from "@/components/ServiceAreaMap";
import { Jsonld } from "@/components/Jsonld";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Hausmeisterservice Lahnstein & Koblenz | G.A Hausmeisterservice",
  description:
    "Hausmeisterservice, Objektbetreuung, Grünpflege, Winterdienst und Entrümpelung in Lahnstein, Koblenz, Braubach und 16 weiteren Orten im Rhein-Lahn-Kreis. 5,0 aus 9 Google-Bewertungen. Kostenloses Angebot.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Jsonld data={faqSchema(generalFaqs)} />

      <Hero
        title="hausmeisterservice lahnstein"
        lede="Objektbetreuung, Grünpflege, Winterdienst und Entrümpelung — zwischen Lahn und Rhein, mit einer Nummer, die rangeht."
        actions={
          <>
            <a href={contact.tel} className="btn btn--primary">
              {business.phoneDisplay}
            </a>
            <Link href="/angebot" className="btn">
              Angebot anfordern
            </Link>
          </>
        }
        meta={<RatingLine />}
        aside={
          <div className="figcell crop">
            <p className="label label--ink">Im Überblick</p>
            <div
              className="pairs"
              style={{ marginBlockStart: "var(--space-sm)" }}
            >
              {[
                ["Sitz", "Lahnstein, Rhein-Lahn-Kreis"],
                [
                  "Einsatzgebiet",
                  `${cities.length} Orte zwischen Lahn und Rhein`,
                ],
                ["Leistungen", `${services.length} Gewerke`],
                ["Bewertung", "5,0 aus 9 Google-Bewertungen"],
                ["Erreichbar", business.hours.note],
              ].map(([k, v]) => (
                <div className="pairs__row" key={k}>
                  <span className="label">{k}</span>
                  <span className="pairs__val">{v}</span>
                </div>
              ))}
            </div>
            <Numeral>{cities.length}</Numeral>
          </div>
        }
      />

      {/* ───────────────────────────────────────────────────────── ticker */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((dup) => (
            <div key={dup} style={{ display: "flex", gap: "var(--space-2xl)" }}>
              {cities.map((c) => (
                <span className="label" key={`${dup}-${c.slug}`}>
                  {c.name} · {c.plz}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────── leistungen · numbered index */}
      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-xl)" }}>
            <div className="col-text stack">
              <h2>leistungen</h2>
              <p style={{ maxWidth: "48ch", color: "var(--color-muted)" }}>
                Zehn Gewerke, die im Alltag einer Immobilie tatsächlich
                anfallen. Alles einzeln buchbar, vieles sinnvoll im Turnus.
              </p>
            </div>
          </div>

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
                  {s.towns ? "Ortsseiten" : "Auf Anfrage"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── einsatzgebiet · diptych, flipped side */}
      <section className="band band--paper2" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12">
            <div className="col-lead stack stack--lg">
              <h2>einsatz&shy;gebiet</h2>
              <p style={{ color: "var(--color-muted)" }}>
                Von Vallendar im Norden bis Kamp-Bornhofen im Süden, von Boppard
                am linken Rheinufer bis Nassau an der Lahn. Der Sitz in
                Lahnstein liegt genau in der Mitte — das ist der Grund, warum
                kurzfristige Termine hier funktionieren.
              </p>
              <Link href="/einsatzgebiet" className="tlink">
                Alle {cities.length} Orte ansehen →
              </Link>
              <div
                style={{ marginBlockStart: "var(--space-md)", width: "100%" }}
              >
                <TownIndex />
              </div>
            </div>
            <div className="col-wide">
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────── ablauf · genuinely ordinal */}
      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text stack">
              <h2>so läuft es ab</h2>
              <p style={{ maxWidth: "46ch", color: "var(--color-muted)" }}>
                Vier Schritte, in dieser Reihenfolge. Ohne Vertreterbesuch und
                ohne Preis, der sich unterwegs ändert.
              </p>
            </div>
          </div>

          <ol className="cells">
            {[
              {
                n: "01",
                h: "Anruf oder Formular",
                p: "Sie sagen, worum es geht. Am Werktag melden wir uns am selben Tag zurück.",
              },
              {
                n: "02",
                h: "Termin vor Ort",
                p: "Wir sehen uns das Objekt an. Bei Kleinigkeiten reicht ein Foto per WhatsApp.",
              },
              {
                n: "03",
                h: "Angebot mit Festpreis",
                p: "Schriftlich, mit getrennt ausgewiesenem Material und Entsorgung. Kostenlos.",
              },
              {
                n: "04",
                h: "Ausführung und Abnahme",
                p: "Zum vereinbarten Termin. Bei laufender Betreuung mit Protokoll nach jeder Begehung.",
              },
            ].map((step) => (
              <li className="cell" key={step.n}>
                <span className="index__num">{step.n}</span>
                <h3>{step.h}</h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                  }}
                >
                  {step.p}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ──────────────────────────── proof · real numbers, stepped figure */}
      <section className="band band--ruled" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>was belegbar ist</h2>
              <div className="prose" style={{ color: "var(--color-muted)" }}>
                <p>
                  Wir schreiben hier keine Zahlen hin, die niemand nachprüfen
                  kann. Was Sie sehen, steht im öffentlichen
                  Google-Unternehmensprofil oder ergibt sich aus dieser Website.
                </p>
                <p>
                  Alles andere — Reaktionszeiten, Objektzahlen, Jahre am Markt —
                  sagen wir Ihnen am Telefon, wenn Sie danach fragen.
                </p>
              </div>
              <Register />
            </div>
            <div className="col-object">
              <div className="figcell">
                <p className="label label--ink">Nachprüfbar</p>
                <div style={{ marginBlockStart: "var(--space-md)" }}>
                  <Stepped
                    rows={[
                      {
                        label: "Google-Bewertung",
                        value: "5,0 / 5",
                        ratio: 1,
                      },
                      {
                        label: "Abgegebene Bewertungen",
                        value: "9",
                        ratio: 0.62,
                        ink: true,
                      },
                      {
                        label: "Orte im Einsatzgebiet",
                        value: String(cities.length),
                        ratio: 0.84,
                        ink: true,
                      },
                      {
                        label: "Leistungen",
                        value: String(services.length),
                        ratio: 0.48,
                        ink: true,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────── bewertungen */}
      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text stack">
              <h2>bewertungen</h2>
              <RatingLine />
            </div>
          </div>
          <Reviews limit={4} />
        </div>
      </section>

      {/* ──────────────────────────────────── abrechnung · F3 spec sheet   */}
      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12">
            <div className="col-half-a stack stack--lg">
              <h2>abrechnung</h2>
              <div className="prose" style={{ color: "var(--color-muted)" }}>
                <p>
                  Drei Modelle, je nachdem, ob sich der Umfang vorher bestimmen
                  lässt. Welches für Ihr Objekt passt, sagen wir Ihnen im
                  Angebot — und begründen es.
                </p>
              </div>
              <Link href="/preise" className="tlink">
                Preise und Modelle im Detail →
              </Link>
            </div>
            <div className="col-half-b">
              <table className="sheet">
                <caption className="label label--ink">
                  Abrechnungsmodelle
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Modell</th>
                    <th scope="col">Wofür</th>
                    <th scope="col">Preis steht fest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Monatspauschale</th>
                    <td data-label="Wofür">
                      Hausmeisterservice, Objektbetreuung, Treppenhausreinigung
                    </td>
                    <td data-label="Preis steht fest" className="muted">
                      Vor Vertragsbeginn
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Festpreis</th>
                    <td data-label="Wofür">
                      Entrümpelung, Abbruch, Grünpflege, Grundreinigung
                    </td>
                    <td data-label="Preis steht fest" className="muted">
                      Nach Besichtigung
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Stundensatz</th>
                    <td data-label="Wofür">
                      Kleinreparaturen, Montage, Notdienst
                    </td>
                    <td data-label="Preis steht fest" className="muted">
                      Satz vorab, Aufwand nach Absprache
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Saisonvertrag</th>
                    <td data-label="Wofür">Winterdienst, November bis März</td>
                    <td data-label="Preis steht fest" className="muted">
                      Vor Saisonbeginn
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── faq */}
      <section className="band band--paper2" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text stack">
              <h2>häufige fragen</h2>
              <ul className="chips">
                {promise.map((p) => (
                  <li className="chip" key={p}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Faq items={generalFaqs} />
        </div>
      </section>

      {/* ────────────────────────────────── the plate · one per page, last */}
      <Cta
        head="Sagen Sie, worum es geht."
        line="Ein Anruf reicht für eine erste Einschätzung. Für ein belastbares Angebot sehen wir uns das Objekt an — kostenlos und unverbindlich."
        numeral="GA"
      />
    </>
  );
}
