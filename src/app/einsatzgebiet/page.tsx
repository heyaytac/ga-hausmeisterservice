import Link from "next/link";
import { cities, zones, totalPopulation, type Zone } from "@/content/cities";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Numeral } from "@/components/Marks";
import { Cta } from "@/components/Cta";
import { Crumbs } from "@/components/Crumbs";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Einsatzgebiet", href: "/einsatzgebiet" });
const ZONE_ORDER: Zone[] = ["kern", "rheinschiene", "hoehe"];

export const metadata = pageMeta({
  title: "Einsatzgebiet — Lahnstein, Koblenz und der Rhein-Lahn-Kreis",
  description: `Wir arbeiten in ${cities.length} Orten zwischen Lahn und Rhein: Lahnstein, Koblenz, Braubach, Bad Ems, Boppard, Vallendar, Nassau und den umliegenden Gemeinden. Alle Orte mit Postleitzahl und Lage.`,
  path: "/einsatzgebiet",
});

export default function Einsatzgebiet() {
  return (
    <>
      <Jsonld data={breadcrumbSchema(trail)} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>einsatz&shy;gebiet</>}
        wide
        body={
          <>
            <p className="lede">
              {cities.length} Orte zwischen Lahn und Rhein. Von Vallendar im
              Norden bis Kamp-Bornhofen im Süden.
            </p>
            <div className="pairs">
              {[
                ["Orte", String(cities.length)],
                [
                  "Einwohner im Gebiet",
                  totalPopulation.toLocaleString("de-DE"),
                ],
                ["Sitz", "Lahnstein, 56112"],
                ["Landkreise", "Rhein-Lahn · Mayen-Koblenz · Rhein-Hunsrück"],
              ].map(([k, v]) => (
                <div className="pairs__row" key={k}>
                  <span className="label">{k}</span>
                  <span className="pairs__val">{v}</span>
                </div>
              ))}
            </div>
          </>
        }
        aside={<ServiceAreaMap />}
      />

      {ZONE_ORDER.map((z, zi) => {
        const list = cities.filter((c) => c.zone === z);
        return (
          <section
            key={z}
            className={`band${zi % 2 === 1 ? " band--paper2" : ""}`}
            style={{ position: "relative" }}
          >
            <Rails />
            <div className="shell">
              <div
                className="grid12"
                style={{ marginBlockEnd: "var(--space-lg)" }}
              >
                <div className={zi % 2 === 1 ? "col-text" : "col-text"}>
                  <div className="crop">
                    <h2>{zones[z].label.toLowerCase()}</h2>
                    <Numeral>{String(list.length)}</Numeral>
                  </div>
                  <p
                    style={{
                      maxWidth: "50ch",
                      color: "var(--color-muted)",
                      marginBlockStart: "var(--space-sm)",
                    }}
                  >
                    {zones[z].note}
                  </p>
                </div>
              </div>

              <div className="index">
                {list.map((c, i) => (
                  <Link
                    key={c.slug}
                    href={`/hausmeisterservice/${c.slug}`}
                    className="index__row"
                  >
                    <span className="index__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="index__title">{c.name}</span>
                      <span className="index__desc">{c.localNote}</span>
                    </span>
                    <span className="index__meta tnum">
                      {c.plz} · {c.elevation} m
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Cta
        head="Ihr Ort ist nicht dabei?"
        line="Fragen Sie trotzdem. Bei größeren Aufträgen fahren wir auch über das Kerngebiet hinaus — und sagen Ihnen ehrlich, wenn es sich nicht rechnet."
        numeral={String(cities.length)}
      />
    </>
  );
}
