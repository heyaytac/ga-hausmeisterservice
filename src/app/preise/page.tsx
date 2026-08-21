import Link from "next/link";
import { services } from "@/content/services";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Numeral, Period } from "@/components/Marks";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Crumbs } from "@/components/Crumbs";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Preise", href: "/preise" });

const priceFaqs = [
  {
    q: "Warum steht hier keine Preisliste?",
    a: "Weil sie für Ihr Objekt nicht stimmen würde. Ein Quadratmeterpreis für „Hausmeisterservice“ sagt nichts über ein Haus mit acht Parteien, Tiefgarage und Hanggrundstück aus. Wir nennen einen Preis, wenn wir wissen, worum es geht — und dann steht er.",
  },
  {
    q: "Ist das Angebot wirklich kostenlos?",
    a: "Ja, inklusive Besichtigung. Es entstehen keine Kosten, wenn Sie sich dagegen entscheiden.",
  },
  {
    q: "Wie wird abgerechnet?",
    a: "Per Rechnung mit Zahlungsziel. Bei laufender Betreuung monatlich, bei einmaligen Aufträgen nach Abnahme.",
  },
  {
    q: "Kommt Mehrwertsteuer dazu?",
    a: "Das steht im Angebot, und zwar so, dass Sie den Endbetrag sehen — nicht nur den Nettopreis.",
  },
  {
    q: "Gibt es einen Rabatt für mehrere Objekte?",
    a: "In der Regel ja. Wenn wir mehrere Häuser in derselben Straße oder demselben Ort in einer Route fahren, sinkt der Anfahrtsanteil pro Objekt — das geben wir weiter.",
  },
];

export const metadata = pageMeta({
  title: "Preise & Abrechnung — Pauschale, Festpreis oder Stundensatz",
  description:
    "Wie wir abrechnen: Monatspauschale für laufende Betreuung, Festpreis nach Besichtigung, Stundensatz für Reparaturen, Saisonvertrag für Winterdienst. Was den Preis treibt und was umlagefähig ist.",
  path: "/preise",
});

export default function Preise() {
  return (
    <>
      <Jsonld data={[breadcrumbSchema(trail), faqSchema(priceFaqs)]} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>preise</>}
        body={
          <>
            <p className="lede">
              Vier Abrechnungsmodelle. Welches gilt, hängt davon ab, ob sich der
              Umfang vorher bestimmen lässt.
            </p>
            <div className="prose" style={{ color: "var(--color-muted)" }}>
              <p>
                Sie finden hier bewusst keine Preisliste. Eine Zahl, die für
                jedes Objekt gilt, gibt es in diesem Gewerbe nicht — und wer
                eine nennt, korrigiert sie später. Was Sie hier finden, ist die
                Systematik dahinter, damit Sie Angebote vergleichen können.
              </p>
            </div>
            <Link href="/angebot" className="btn btn--primary">
              Kostenloses Angebot
            </Link>
          </>
        }
        aside={
          <div className="figcell crop">
            <p className="label label--ink">Immer enthalten</p>
            <ul
              style={{
                marginBlockStart: "var(--space-sm)",
                display: "grid",
                gap: "var(--space-sm)",
              }}
            >
              {[
                "Angebot und Besichtigung kostenlos",
                "Preis schriftlich vor Arbeitsbeginn",
                "Material und Entsorgung getrennt ausgewiesen",
                "Rechnung geeignet für die Nebenkostenabrechnung",
              ].map((x) => (
                <li key={x} style={{ fontSize: "var(--text-sm)" }}>
                  <Period /> {x}
                </li>
              ))}
            </ul>
            <Numeral>4</Numeral>
          </div>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text">
              <h2>die vier modelle</h2>
            </div>
          </div>
          <table className="sheet">
            <thead>
              <tr>
                <th scope="col">Modell</th>
                <th scope="col">Gilt für</th>
                <th scope="col">Grundlage</th>
                <th scope="col">Preis steht fest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monatspauschale</th>
                <td data-label="Gilt für">
                  Hausmeisterservice, Objektbetreuung, Treppenhausreinigung
                </td>
                <td data-label="Grundlage">
                  Wohneinheiten, Turnus, Leistungsumfang
                </td>
                <td data-label="Preis steht fest" className="muted">
                  Vor Vertragsbeginn
                </td>
              </tr>
              <tr>
                <th scope="row">Festpreis</th>
                <td data-label="Gilt für">
                  Entrümpelung, Abbruch, Grünpflege, Grundreinigung
                </td>
                <td data-label="Grundlage">
                  Volumen bzw. Fläche, Zugang, Entsorgungsart
                </td>
                <td data-label="Preis steht fest" className="muted">
                  Nach Besichtigung
                </td>
              </tr>
              <tr>
                <th scope="row">Stundensatz</th>
                <td data-label="Gilt für">
                  Kleinreparaturen, Montage, Notdienst
                </td>
                <td data-label="Grundlage">
                  Arbeitszeit plus Material, Anfahrt getrennt
                </td>
                <td data-label="Preis steht fest" className="muted">
                  Satz vorab, Aufwand nach Absprache
                </td>
              </tr>
              <tr>
                <th scope="row">Saisonvertrag</th>
                <td data-label="Gilt für">Winterdienst, November bis März</td>
                <td data-label="Grundlage">
                  Fläche, Anzahl Flächen, Räumzeit, Höhenlage
                </td>
                <td data-label="Preis steht fest" className="muted">
                  Vor Saisonbeginn
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band band--paper2" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>was den preis treibt</h2>
              <div className="prose">
                <p>
                  Nicht die Arbeit, sondern der Zugang. Dieselbe Wohnung kostet
                  im Erdgeschoss mit Hofzufahrt einen Bruchteil dessen, was sie
                  im dritten Stock einer Altstadtgasse ohne Halteverbot kostet.
                </p>
                <p>
                  Bei Entrümpelung und Rückbau ist der zweite große Posten die
                  Entsorgung — häufig mehr als die Hälfte der Rechnung. Deshalb
                  trennen wir sortenrein, und deshalb steht Entsorgung bei uns
                  als eigene Position im Angebot.
                </p>
                <p>
                  Der dritte Faktor ist die Anfahrt. Wenn Sie mehrere
                  Kleinigkeiten sammeln oder mehrere Objekte in einem Ort haben,
                  wirkt sich das direkt aus.{" "}
                  <Link href="/ratgeber/was-kostet-ein-hausmeisterservice">
                    Ausführlich im Ratgeber
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="col-object">
              <div className="figcell">
                <p className="label label--ink">Umlagefähig auf Mieter</p>
                <div
                  className="pairs"
                  style={{ marginBlockStart: "var(--space-sm)" }}
                >
                  {[
                    ["Hauswartung", "§2 Nr. 14 BetrKV"],
                    ["Gebäudereinigung", "§2 Nr. 9 BetrKV"],
                    ["Winterdienst", "§2 Nr. 8 BetrKV"],
                    ["Gartenpflege", "§2 Nr. 10 BetrKV"],
                    ["Reparaturen", "nicht umlagefähig"],
                  ].map(([k, v]) => (
                    <div className="pairs__row" key={k}>
                      <span className="label">{k}</span>
                      <span className="pairs__val">{v}</span>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    marginBlockStart: "var(--space-md)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                  }}
                >
                  Voraussetzung ist jeweils eine entsprechende Vereinbarung im
                  Mietvertrag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text">
              <h2>preise je leistung</h2>
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
                  <span className="index__desc">{s.priceNote}</span>
                </span>
                <span className="index__meta">Details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text">
              <h2>fragen zum preis</h2>
            </div>
          </div>
          <Faq items={priceFaqs} />
        </div>
      </section>

      <Cta
        head="Was kostet Ihr Objekt?"
        line="Beschreiben Sie kurz, worum es geht. Wir sehen es uns an und nennen einen Preis, der hält."
        numeral="€"
      />
    </>
  );
}
