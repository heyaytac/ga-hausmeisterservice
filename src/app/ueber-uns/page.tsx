import Link from "next/link";
import { business } from "@/content/business";
import { cities } from "@/content/cities";
import { services } from "@/content/services";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Numeral } from "@/components/Marks";
import { Cta } from "@/components/Cta";
import { Crumbs } from "@/components/Crumbs";
import { Reviews, RatingLine } from "@/components/Reviews";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Über uns", href: "/ueber-uns" });

export const metadata = pageMeta({
  title: "Über uns — Hausmeisterservice aus Lahnstein",
  description: `G.A Hausmeisterservice ist ein Betrieb mit Sitz in Lahnstein. Wir arbeiten in ${cities.length} Orten zwischen Lahn und Rhein — wie wir arbeiten und was Sie erwarten können.`,
  path: "/ueber-uns",
});

/*
 * TODO(GA): Dieser Seite fehlt der persönliche Teil — wer den Betrieb führt,
 * seit wann, welche Ausbildung, warum Lahnstein. Das ist bei einem
 * Handwerksbetrieb der stärkste Vertrauensfaktor und der Abschnitt, der am
 * meisten bringt. Er ist bewusst nicht erfunden. Schicken Sie drei bis fünf
 * Sätze und ein Foto, dann kommt hier ein eigener Abschnitt hin.
 */

export default function UeberUns() {
  return (
    <>
      <Jsonld data={breadcrumbSchema(trail)} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>über uns</>}
        body={
          <>
            <p className="lede">
              Ein Betrieb aus Lahnstein, der in {cities.length} Orten zwischen
              Lahn und Rhein arbeitet.
            </p>
            <div className="prose">
              <p>
                {business.name} ist kein überregionaler Dienstleister mit
                Disposition in einer anderen Stadt. Wir sitzen in Lahnstein, und
                das Einsatzgebiet ist so geschnitten, dass wir es tatsächlich
                bedienen können — nicht so, wie es auf einer Landkarte gut
                aussieht.
              </p>
              <p>
                Das hat einen praktischen Grund. Bei einem verstopften Fallrohr,
                einer aufgebrochenen Kellertür oder Blitzeis auf einer Rampe
                entscheidet die Fahrzeit. Wer aus Koblenz-Mitte oder aus dem
                Westerwald anfährt, ist irgendwann da. Wer aus Lahnstein kommt,
                ist in Braubach, Pfaffendorf oder Nievern in wenigen Minuten.
              </p>
            </div>
            <RatingLine />
          </>
        }
        aside={
          <div className="figcell crop">
            <p className="label label--ink">Der Betrieb</p>
            <div
              className="pairs"
              style={{ marginBlockStart: "var(--space-sm)" }}
            >
              {[
                [
                  "Sitz",
                  `${business.address.postalCode} ${business.address.locality}`,
                ],
                ["Einsatzgebiet", `${cities.length} Orte`],
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
            <Numeral>GA</Numeral>
          </div>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text stack">
              <h2>wie wir arbeiten</h2>
              <p style={{ maxWidth: "46ch", color: "var(--color-muted)" }}>
                Vier Regeln, an denen Sie uns messen können.
              </p>
            </div>
          </div>

          <div className="cells">
            {[
              {
                n: "01",
                h: "Der Preis steht vorher",
                p: "Bei allem, was sich besichtigen lässt, bekommen Sie einen Festpreis, bevor die Arbeit beginnt. Wenn sich der Umfang erst beim Öffnen zeigt, sagen wir Bescheid, bevor die Kosten steigen — nicht danach.",
              },
              {
                n: "02",
                h: "Wir nennen unsere Grenzen",
                p: "Elektroarbeiten in der festen Installation, Gas, Statik, Asbest: Dafür gibt es Fachbetriebe mit Zulassung. Wir sagen Ihnen das vorher und schicken Sie weiter, statt etwas zu machen, das später teurer wird.",
              },
              {
                n: "03",
                h: "Ein Ansprechpartner",
                p: "Sie haben eine Nummer und eine Person, die Ihr Objekt kennt. Kein Callcenter, keine wechselnden Kolonnen, keine Ticketnummer.",
              },
              {
                n: "04",
                h: "Was wir tun, steht schriftlich",
                p: "Begehungsprotokolle mit Fotos, Winterdiensteinsätze mit Uhrzeit und Streumittel, Entsorgung mit Nachweis. Im Streitfall zählt die Dokumentation, nicht die Erinnerung.",
              },
            ].map((r) => (
              <div className="cell" key={r.n}>
                <span className="index__num">{r.n}</span>
                <h3>{r.h}</h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                  }}
                >
                  {r.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper2" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>was kunden schreiben</h2>
              <div className="prose" style={{ color: "var(--color-muted)" }}>
                <p>
                  Die Bewertungen stammen unverändert aus dem öffentlichen
                  Google-Unternehmensprofil. Wir haben nichts umformuliert und
                  nichts hinzugefügt.
                </p>
              </div>
              <Link href="/kontakt" className="tlink">
                Kontakt aufnehmen →
              </Link>
            </div>
            <div className="col-object">
              <div className="figcell">
                <p className="label label--ink">Am häufigsten genannt</p>
                <div
                  className="chips"
                  style={{ marginBlockStart: "var(--space-sm)" }}
                >
                  {[
                    "zuverlässig",
                    "sauber",
                    "pünktlich",
                    "Preis-Leistung",
                    "Kommunikation",
                    "freundlich",
                  ].map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <Reviews limit={5} />
        </div>
      </section>

      <Cta
        head="Lernen wir uns kennen."
        line="Ein Termin vor Ort kostet nichts und dauert selten länger als zwanzig Minuten."
        numeral="GA"
      />
    </>
  );
}
