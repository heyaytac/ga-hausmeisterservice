import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, articleBySlug } from "@/content/ratgeber";
import { serviceBySlug } from "@/content/services";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";
import { Register } from "@/components/Marks";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Crumbs } from "@/components/Crumbs";
import { Jsonld } from "@/components/Jsonld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  return pageMeta({
    title: a.metaTitle,
    description: a.metaDescription,
    path: `/ratgeber/${a.slug}`,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();

  const trail = crumbTrail(
    { name: "Ratgeber", href: "/ratgeber" },
    { name: a.crumb ?? a.title, href: `/ratgeber/${a.slug}` },
  );

  return (
    <>
      <Jsonld
        data={[
          breadcrumbSchema(trail),
          articleSchema({
            headline: a.title,
            description: a.metaDescription,
            path: `/ratgeber/${a.slug}`,
            updated: a.updated,
          }),
          ...(a.faqs ? [faqSchema(a.faqs)] : []),
        ]}
      />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>{a.h1}</>}
        small
        body={
          <>
            <p className="lede" style={{ maxWidth: "44ch" }}>
              {a.answer}
            </p>
            <div
              className="label"
              style={{ display: "flex", gap: "var(--space-md)" }}
            >
              <span>Stand {a.updated.replace("-", "/")}</span>
              <span>{a.readingMinutes} Minuten</span>
            </div>
          </>
        }
        aside={
          <div className="figcell">
            <p className="label label--ink">Inhalt</p>
            <ol
              style={{
                marginBlockStart: "var(--space-sm)",
                display: "grid",
                gap: "var(--space-2xs)",
              }}
            >
              {a.sections.map((s, i) => (
                <li
                  key={s.h}
                  style={{
                    fontSize: "var(--text-sm)",
                    paddingBlock: "var(--space-2xs)",
                    borderBlockEnd: "1px solid var(--color-rule)",
                  }}
                >
                  <span className="index__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {s.h}
                </li>
              ))}
            </ol>
          </div>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          {a.sections.map((s, i) => (
            <div
              className={`grid12${i % 2 === 1 ? " flip" : ""}`}
              key={s.h}
              style={{ marginBlockEnd: "var(--space-2xl)" }}
            >
              <div className="col-text stack">
                <h2 style={{ fontSize: "var(--text-3xl)" }}>{s.h}</h2>
              </div>
              <div className="col-object prose">
                {s.p.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="grid12">
            <div className="col-text">
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
                  Dieser Text ersetzt keine Rechtsberatung. Die genannten
                  Vorschriften sind der Stand bei Veröffentlichung; kommunale
                  Satzungen weichen ab. Im Zweifel gilt die Satzung Ihrer
                  Gemeinde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {a.faqs && (
        <section className="band band--paper2" style={{ position: "relative" }}>
          <Rails />
          <div className="shell">
            <div
              className="grid12"
              style={{ marginBlockEnd: "var(--space-lg)" }}
            >
              <div className="col-text">
                <h2>häufige fragen</h2>
              </div>
            </div>
            <Faq items={a.faqs} />
          </div>
        </section>
      )}

      <section className="band band--tight" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="chips">
            <span className="label" style={{ alignSelf: "center" }}>
              Dazu passende Leistungen:
            </span>
            {a.related.map((r) => {
              const s = serviceBySlug(r);
              if (!s) return null;
              return (
                <Link key={r} href={`/leistungen/${r}`} className="chip">
                  {s.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta
        head="Noch Fragen dazu?"
        line="Rufen Sie an. Wir sagen Ihnen auch dann, was zu tun ist, wenn daraus kein Auftrag wird."
        numeral="§"
      />
    </>
  );
}
