import Link from "next/link";
import { business, contact, promise } from "@/content/business";
import { Rails } from "@/components/Rails";
import { Numeral } from "@/components/Marks";

/**
 * The plate — at most one per page. A full-bleed band flooded with the signal
 * ink, carrying the page's poster moment. Zero radius, zero shadow, butted
 * flush against the rules above and below.
 */
export function Cta({
  head,
  line,
  numeral,
}: {
  head: string;
  line: string;
  numeral?: string;
}) {
  return (
    <section className="plate">
      <Rails />
      <div className="shell">
        <div
          className="grid12"
          style={{
            paddingBlock: "clamp(3rem, 7vw, 6.5rem)",
            position: "relative",
          }}
        >
          <div className="col-text stack stack--lg">
            <h2 style={{ fontSize: "var(--text-4xl)" }}>{head}</h2>
            <p style={{ maxWidth: "42ch", fontSize: "var(--text-lg)" }}>
              {line}
            </p>
            <div className="actions">
              <a href={contact.tel} className="btn btn--ink">
                {business.phoneDisplay}
              </a>
              <Link href="/angebot" className="btn">
                Angebot anfordern
              </Link>
            </div>
            <ul
              className="label"
              style={{
                display: "flex",
                gap: "var(--space-md)",
                flexWrap: "wrap",
                color: "inherit",
              }}
            >
              {promise.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          {numeral && (
            <div
              className="col-object crop"
              style={{ minHeight: "1px", alignSelf: "end" }}
            >
              <Numeral>{numeral}</Numeral>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
