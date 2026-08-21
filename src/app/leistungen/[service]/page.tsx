import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, serviceBySlug } from "@/content/services";
import { cities, comboCities } from "@/content/cities";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Numeral, Period } from "@/components/Marks";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Crumbs } from "@/components/Crumbs";
import { Reviews, RatingLine } from "@/components/Reviews";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) return {};
  return pageMeta({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/leistungen/${s.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) notFound();

  const trail = crumbTrail(
    { name: "Leistungen", href: "/leistungen" },
    { name: s.short, href: `/leistungen/${s.slug}` },
  );

  return (
    <>
      <Jsonld
        data={[
          breadcrumbSchema(trail),
          faqSchema(s.faqs),
          serviceSchema({
            name: s.name,
            description: s.metaDescription,
            path: `/leistungen/${s.slug}`,
          }),
        ]}
      />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      {/* hero · split diptych */}
      <Hero
        title={<>{s.h1}</>}
        body={
          <>
            <p className="lede">{s.lede}</p>
            <div className="actions">
              <Link
                href={`/angebot?leistung=${s.slug}`}
                className="btn btn--primary"
              >
                Angebot anfordern
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
            <p className="label label--ink">Leistungsumfang</p>
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
            <Numeral>{String(s.includes.length)}</Numeral>
          </div>
        }
      />

      {/* body · flipped diptych */}
      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12 flip">
            <div className="col-text stack stack--lg">
              <h2>worum es geht</h2>
              <div className="prose">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="col-object">
              <div className="figcell">
                <p className="label label--ink">Wer das bucht</p>
                <ul
                  style={{
                    marginBlockStart: "var(--space-sm)",
                    display: "grid",
                    gap: "var(--space-sm)",
                  }}
                >
                  {s.audience.map((a) => (
                    <li key={a} style={{ fontSize: "var(--text-sm)" }}>
                      <Period /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* price */}
      <section
        className="band band--paper2 band--tight"
        style={{ position: "relative" }}
      >
        <Rails />
        <div className="shell">
          <div className="grid12">
            <div className="col-half-a stack">
              <h2>was es kostet</h2>
            </div>
            <div className="col-half-b prose">
              <p>{s.priceNote}</p>
              <p>
                <Link href="/preise">Alle Abrechnungsmodelle im Überblick</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* towns */}
      {s.towns && (
        <section className="band" style={{ position: "relative" }}>
          <Rails />
          <div className="shell">
            <div
              className="grid12"
              style={{ marginBlockEnd: "var(--space-lg)" }}
            >
              <div className="col-text stack">
                <h2>{s.short.toLowerCase()} in ihrem ort</h2>
                <p style={{ maxWidth: "48ch", color: "var(--color-muted)" }}>
                  Für diese Orte haben wir aufgeschrieben, was vor Ort konkret
                  anders ist — Zugang, Lage, Bausubstanz.
                </p>
              </div>
            </div>
            <div className="cells">
              {comboCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/leistungen/${s.slug}/${c.slug}`}
                  className="cell"
                >
                  <span className="label">{c.plz}</span>
                  <h3 className="cell__title">
                    {s.short} {c.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {c.localNote.split(".")[0]}.
                  </p>
                </Link>
              ))}
            </div>
            <div
              className="chips"
              style={{ marginBlockStart: "var(--space-lg)" }}
            >
              {cities
                .filter((c) => !c.combo)
                .map((c) => (
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
        </section>
      )}

      {/* faq */}
      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="grid12" style={{ marginBlockEnd: "var(--space-lg)" }}>
            <div className="col-text">
              <h2>fragen zu {s.short.toLowerCase()}</h2>
            </div>
          </div>
          <Faq items={s.faqs} />
        </div>
      </section>

      {/* reviews + related */}
      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <Reviews limit={3} />
          <div
            className="chips"
            style={{ marginBlockStart: "var(--space-xl)" }}
          >
            <span className="label" style={{ alignSelf: "center" }}>
              Passt dazu:
            </span>
            {s.related.map((r) => {
              const rel = serviceBySlug(r);
              if (!rel) return null;
              return (
                <Link key={r} href={`/leistungen/${r}`} className="chip">
                  {rel.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta
        head={`${s.name} anfragen`}
        line="Rufen Sie an oder schicken Sie eine kurze Beschreibung. Das Angebot ist kostenlos und unverbindlich."
        numeral="GA"
      />
    </>
  );
}
