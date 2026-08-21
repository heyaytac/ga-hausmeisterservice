export type FaqEntry = { q: string; a: string | string[] };

export function Faq({ items }: { items: FaqEntry[] }) {
  return (
    <div className="faq">
      {items.map((item) => {
        const paras = Array.isArray(item.a) ? item.a : [item.a];
        return (
          <details className="faq__item" key={item.q}>
            <summary className="faq__q">
              {item.q}
              <span className="faq__sign" aria-hidden="true" />
            </summary>
            <div className="faq__a">
              {paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}
