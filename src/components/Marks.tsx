/**
 * The marks kit. Every mark aligns to the column grid or to type metrics;
 * nothing floats freehand. Under 5 % painted area per viewport.
 */

/** The period square — a solid square where a full stop would fall. */
export const Period = () => <span className="period" aria-hidden="true" />;

/** The bar — a signal rule over a head, cut to a column width. */
export const Bar = () => <span className="bar" aria-hidden="true" />;

/** The register — a print registration mark, used as a folio device. */
export const Register = () => <span className="register" aria-hidden="true" />;

/** The cropped numeral — art, not a heading. One per band at most. */
export const Numeral = ({ children }: { children: React.ReactNode }) => (
  <span className="numeral" aria-hidden="true">
    {children}
  </span>
);

/** The stepped bars — a data-ful figure beside real numbers. */
export function Stepped({
  rows,
}: {
  rows: { label: string; value: string; ratio: number; ink?: boolean }[];
}) {
  return (
    <div className="stepped">
      {rows.map((r) => (
        <div key={r.label} className="stepped__row">
          <div>
            <div className="label">{r.label}</div>
            <div
              className={`stepped__fill${r.ink ? " stepped__fill--ink" : ""}`}
              style={{ width: `${Math.round(r.ratio * 100)}%` }}
              aria-hidden="true"
            />
          </div>
          <div className="pairs__val tnum">{r.value}</div>
        </div>
      ))}
    </div>
  );
}

export const Stars = ({ count = 5 }: { count?: number }) => (
  <span className="stars" aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <i key={i} />
    ))}
  </span>
);
