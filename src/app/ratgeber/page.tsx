import Link from "next/link";
import { articles } from "@/content/ratgeber";
import { Rails } from "@/components/Rails";
import { Hero } from "@/components/Hero";

import { Cta } from "@/components/Cta";
import { Crumbs } from "@/components/Crumbs";
import { Jsonld } from "@/components/Jsonld";
import { breadcrumbSchema } from "@/lib/schema";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Ratgeber", href: "/ratgeber" });

export const metadata = pageMeta({
  title: "Ratgeber — Kosten, Pflichten und Abläufe rund um die Immobilie",
  description:
    "Was ein Hausmeisterservice kostet, wer räumen muss, wann Hecken geschnitten werden dürfen und wie eine Entrümpelung abläuft. Ohne Werbesprache erklärt.",
  path: "/ratgeber",
});

export default function RatgeberHub() {
  return (
    <>
      <Jsonld data={breadcrumbSchema(trail)} />
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>ratgeber</>}
        body={
          <>
            <p className="lede">
              Vier Themen, zu denen wir am häufigsten gefragt werden — mit
              Paragraphen, wo es welche gibt.
            </p>
          </>
        }
      />

      <section className="band" style={{ position: "relative" }}>
        <Rails />
        <div className="shell">
          <div className="index">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/ratgeber/${a.slug}`}
                className="index__row"
              >
                <span className="index__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="index__title">{a.title}</span>
                  <span className="index__desc">{a.answer}</span>
                </span>
                <span className="index__meta tnum">{a.readingMinutes} min</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta
        head="Frage nicht dabei?"
        line="Rufen Sie an. Wir beantworten auch Fragen, aus denen kein Auftrag wird — das gehört dazu."
        numeral="?"
      />
    </>
  );
}
