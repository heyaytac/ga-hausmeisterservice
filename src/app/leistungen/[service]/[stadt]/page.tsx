import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceBySlug, townServices } from "@/content/services";
import { cityBySlug, comboCities, zones } from "@/content/cities";
import { comboAngle } from "@/content/combos";
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
  return townServices.flatMap((s) =>
    comboCities.map((c) => ({ service: s.slug, stadt: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; stadt: string }>;
}): Promise<Metadata> {
  const { service, stadt } = await params;
  const s = serviceBySlug(service);
  const c = cityBySlug(stadt);
  if (!s || !c) return {};
  return pageMeta({
    title: `${s.name} ${c.name} — ${c.plz} | ${"G.A Hausmeisterservice"}`,
    description: `${s.short} in ${c.name} (${c.plz}): ${c.localNote.split(".")[0]}. Festpreis vor Arbeitsbeginn, kostenloses Angebot. Aus Lahnstein, ${zones[c.zone].label}.`,
    path: `/leistungen/${s.slug}/${c.slug}`,
  });
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ service: string; stadt: string }>;
}) {
  const { service, stadt } = await params;
  const s = serviceBySlug(service);
  const c = cityBySlug(stadt);
  if (!s || !c) notFound();

  const angle = comboAngle(s.slug, c.slug);
  const trail = crumbTrail(
    { name: "Leistungen", href: "/leistungen" },
    { name: s.short, href: `/leistungen/${s.slug}` },
    { name: c.name, href: `/leistungen/${s.slug}/${c.slug}` },
  );

  const localFaq = {
    q: `Kommen Sie für ${s.short.toLowerCase()} auch nach ${c.name}?`,
    a: `Ja. ${c.name} liegt in unserer ${zones[c.zone].label} — ${zones[c.zone].note} Rufen Sie an, dann sagen wir Ihnen direkt, wann ein Termin möglich ist.`,
  };

  return (
    <>
      <Jsonld
        data={[
          breadcrumbSchema(trail),
          faqSchema([localFaq, ...s.faqs]),
          serviceSchema({
            name: `${s.name} ${c.name}`,
            description: `${s.name} für Wohn- und Gewerbeobjekte in ${c.name} (${c.plz}).`,
            path: `/leistungen/${s.slug}/${c.slug}`,
            areaNames: [c.name],
          }),
        ]}
      />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={
          <>
            {s.h1} {c.name.toLowerCase()}
          </>
        }
        body={
          <>
            <p className="lede">{s.lede}</p>
            <div className="actions">
              <Link
                href={`/angebot?leistung=${s.slug}&ort=${c.slug}`}
                className="btn btn--primary"
              >
                Angebot für {c.name}
              </Link>
              <Link href={`/leistungen/${s.slug}`} className="btn">
                Übersicht
              </Link>
            </div>
            <RatingLine />
          </>
        }
        aside={
          <div className="figcell crop">
            <p className="label label--ink">{c.name} in Zahlen</p>
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

      {/* the pair-specific angle — the reason this page exists */}
      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>was in {c.name.toLowerCase()} anders ist</h2>
              <div className="prose">
                {angle.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>{c.localNote}</p>
              </div>
            </div>
            <div className="col-object">
              <div className="figcell">
                <p className="label label--ink">Enthalten</p>
                <ul
                  style={{
                    marginBlockStart: "var(--space-sm)",
                    display: "grid",
                    gap: "var(--space-2xs)",
                  }}
                >
                  {s.includes.map((inc) => (
                    <li
                      key={inc}
                      style={{
                        fontSize: "var(--text-sm)",
                        paddingBlock: "var(--space-2xs)",
                        borderBlockEnd: "1px solid var(--color-rule)",
                      }}
                    >
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about the town */}
      <section
        className="band band--paper2 band--tight"
        style={{ position: "relative" }}
      >
        <Rails />
        <div className="shell">
          <div className="grid12">
            <div className="col-half-a stack">
              <h2>über {c.name.toLowerCase()}</h2>
              <Link href={`/hausmeisterservice/${c.slug}`} className="tlink">
                Alle Leistungen in {c.name} →
              </Link>
            </div>
            <div
              className="col-half-b prose"
              style={{ color: "var(--color-muted)" }}
            >
              {c.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {c.ortsteile && (
                <p>
                  <strong>Ortsteile:</strong> {c.ortsteile.join(" · ")}
                </p>
              )}
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
          <Faq items={[localFaq, ...s.faqs]} />
        </div>
      </section>

      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <Reviews limit={3} />

          <div
            className="grid12"
            style={{ marginBlockStart: "var(--space-2xl)" }}
          >
            <div className="col-half-a stack">
              <p className="label label--ink">Weitere Leistungen in {c.name}</p>
              <div className="chips">
                {townServices
                  .filter((x) => x.slug !== s.slug)
                  .map((x) => (
                    <Link
                      key={x.slug}
                      href={`/leistungen/${x.slug}/${c.slug}`}
                      className="chip"
                    >
                      {x.short}
                    </Link>
                  ))}
              </div>
            </div>
            <div className="col-half-b stack">
              <p className="label label--ink">{s.short} in anderen Orten</p>
              <div className="chips">
                {comboCities
                  .filter((x) => x.slug !== c.slug)
                  .map((x) => (
                    <Link
                      key={x.slug}
                      href={`/leistungen/${s.slug}/${x.slug}`}
                      className="chip"
                    >
                      {x.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        head={`${s.name} in ${c.name}`}
        line={`Sagen Sie uns, worum es geht — wir melden uns am selben Werktag zurück und nennen einen Termin für ${c.name}.`}
        numeral={c.plz.slice(0, 3)}
      />
    </>
  );
}
