import { Rails } from "@/components/Rails";
import { Bar, Period } from "@/components/Marks";

/**
 * The hero shape, shared by every page so the display line can never be
 * squeezed into a six-column track and chopped mid-word. The title spans all
 * twelve columns; the lede and the figure form the diptych underneath.
 */
export function Hero({
  title,
  lede,
  actions,
  meta,
  body,
  aside,
  wide = false,
  small = false,
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  actions?: React.ReactNode;
  meta?: React.ReactNode;
  /** Everything under the display line, when it is not a plain lede+actions. */
  body?: React.ReactNode;
  aside?: React.ReactNode;
  /** Give the figure seven columns instead of five (maps, forms). */
  wide?: boolean;
  /** Step the display down a rung for legal and article pages. */
  small?: boolean;
}) {
  return (
    <section
      className="band band--flat band--open"
      style={{ position: "relative" }}
    >
      <Rails />
      <div className="shell">
        <div className={`hero__grid${wide ? " hero__grid--wide" : ""}`}>
          <div className="hero__head">
            <Bar />
            <h1
              style={{
                marginBlockStart: "var(--space-md)",
                ...(small ? { fontSize: "var(--text-display-s)" } : {}),
              }}
            >
              {title}
              <Period />
            </h1>
          </div>

          <div className="hero__body">
            {lede && <p className="lede">{lede}</p>}
            {actions && <div className="hero__actions">{actions}</div>}
            {meta}
            {body}
          </div>

          {aside && <div className="hero__aside">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
