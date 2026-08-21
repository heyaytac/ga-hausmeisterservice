import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, townServices } from "@/content/services";
import { cities, cityBySlug, zones } from "@/content/cities";
import { generalFaqs } from "@/content/faqs";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Numeral } from "@/components/Marks";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Crumbs } from "@/components/Crumbs";
import { Reviews, RatingLine } from "@/components/Reviews";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((c) => ({ stadt: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const c = cityBySlug(stadt);
  if (!c) return {};
  return pageMeta({
    title: `Hausmeisterservice ${c.name} (${c.plz}) | G.A Hausmeisterservice`,
    description: `Hausmeisterservice in ${c.name}: Objektbetreuung, Grünpflege, Winterdienst, Treppenhausreinigung und Entrümpelung. Aus Lahnstein, ${zones[c.zone].label}. Kostenloses Angebot.`,
    path: `/hausmeisterservice/${c.slug}`,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const c = cityBySlug(stadt);
  if (!c) notFound();

  const trail = crumbTrail(
    { name: "Einsatzgebiet", href: "/einsatzgebiet" },
    { name: c.name, href: `/hausmeisterservice/${c.slug}` },
  );

  const neighbours = cities
    .filter((x) => x.zone === c.zone && x.slug !== c.slug)
    .slice(0, 8);

  const cityFaqs = [
    {
      q: `Arbeiten Sie in ${c.name}?`,
      a: `Ja. ${c.name} gehört zur ${zones[c.zone].label} unseres Einsatzgebiets. ${zones[c.zone].note}`,
    },
    {
      q: `Welche Leistungen bieten Sie in ${c.name} an?`,
      a: `Alle: ${services.map((s) => s.short).join(", ")}. Was davon für Ihr Objekt sinnvoll ist, klären wir bei der Besichtigung.`,
    },
    ...generalFaqs.slice(0, 4),
  ];

  return (
    <>
      <Jsonld
        data={[
          breadcrumbSchema(trail),
          faqSchema(cityFaqs),
          serviceSchema({
            name: `Hausmeisterservice ${c.name}`,
            description: `Hausmeisterservice und Objektbetreuung in ${c.name} (${c.plz}).`,
            path: `/hausmeisterservice/${c.slug}`,
            areaNames: [c.name],
          }),
        ]}
      />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>hausmeister&shy;service {c.name.toLowerCase()}</>}
        body={
          <>
            <p className="lede">
              Objektbetreuung, Grünpflege, Winterdienst und Entrümpelung in{" "}
              {c.name} — von einem Betrieb mit Sitz in Lahnstein.
            </p>
            <div className="actions">
              <Link
                href={`/angebot?ort=${c.slug}`}
                className="btn btn--primary"
              >
                Angebot für {c.name}
              </Link>
              <Link href="/kontakt" className="btn">
                Kontakt
              </Link>
            </div>
            <RatingLine />
          </>
        }
        aside={
          <div className="figcell crop">
            <p className="label label--ink">{c.name}</p>
            <div
              className="pairs"
              style={{ marginBlockStart: "var(--space-sm)" }}
            >
              {[
                ["Postleitzahl", c.plz],
                ["Einwohner", c.population.toLocaleString("de-DE")],
                ["Höhe", `${c.elevation} m ü. NHN`],
                ["Verwaltung", c.admin],
                ["Zone", zones[c.zone].label],
              ].map(([k, v]) => (
                <div className="pairs__row" key={k}>
                  <span className="label">{k}</span>
                  <span className="pairs__val">{v}</span>
                </div>
              ))}
            </div>
            <Numeral>{c.plz.slice(0, 3)}</Numeral>
          </div>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>der ort</h2>
              <div className="prose">
                {c.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="col-object">
              <div className="figcell">
                <p className="label label--ink">Was hier zählt</p>
                <p
                  style={{
                    marginBlockStart: "var(--space-sm)",
                    fontSize: "var(--text-lg)",
                    lineHeight: 1.4,
                  }}
                >
                  {c.localNote}
                </p>
                {c.ortsteile && (
                  <>
                    <p
                      className="label"
                      style={{ marginBlockStart: "var(--space-lg)" }}
                    >
                      Ortsteile
                    </p>
                    <div
                      className="chips"
                      style={{ marginBlockStart: "var(--space-xs)" }}
                    >
                      {c.ortsteile.map((o) => (
                        <span className="chip" key={o}>
                          {o}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text stack">
              <h2>leistungen in {c.name.toLowerCase()}</h2>
              <p style={{ maxWidth: "48ch", color: "var(--color-muted)" }}>
                Alles einzeln buchbar. Für einige Leistungen haben wir
                aufgeschrieben, was in {c.name} konkret anders ist.
              </p>
            </div>
          </div>

          <div className="index">
            {services.map((s, i) => {
              const hasCombo =
                c.combo && townServices.some((t) => t.slug === s.slug);
              const href = hasCombo
                ? `/leistungen/${s.slug}/${c.slug}`
                : `/leistungen/${s.slug}`;
              return (
                <Link key={s.slug} href={href} className="index__row">
                  <span className="index__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="index__title">
                      {s.short} {hasCombo ? c.name : ""}
                    </span>
                    <span className="index__desc">{s.lede}</span>
                  </span>
                  <span className="index__meta">
                    {hasCombo ? `Seite für ${c.name}` : "Allgemein"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="band band--paper2 band--tight"
        style={{ position: "relative" }}
      >
        <Rails />
        <div className="shell">
          <div className="grid12">
            <div className="col-half-a stack">
              <h2>anfahrt</h2>
              <p className="label label--ink">{zones[c.zone].label}</p>
            </div>
            <div
              className="col-half-b prose"
              style={{ color: "var(--color-muted)" }}
            >
              <p>{zones[c.zone].note}</p>
              <p>
                Nachbarorte, in denen wir ebenfalls arbeiten — wenn sich Termine
                bündeln lassen, sinkt der Anfahrtsanteil:
              </p>
              <div className="chips">
                {neighbours.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/hausmeisterservice/${n.slug}`}
                    className="chip"
                  >
                    {n.name}
                  </Link>
                ))}
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
              <h2>fragen</h2>
            </div>
          </div>
          <Faq items={cityFaqs} />
        </div>
      </section>

      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <Reviews limit={4} />
        </div>
      </section>

      <Cta
        head={`Hausmeisterservice in ${c.name}`}
        line="Ein Anruf, eine kurze Beschreibung — den Rest klären wir vor Ort. Das Angebot ist kostenlos."
        numeral={c.plz.slice(0, 3)}
      />
    </>
  );
}
