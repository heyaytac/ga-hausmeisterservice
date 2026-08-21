import Link from "next/link";
import type { Crumb } from "@/lib/seo";

export function Crumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Brotkrumen-Navigation">
      {trail.map((c, i) => {
        const last = i === trail.length - 1;
        return (
          <span key={c.href} style={{ display: "contents" }}>
            {last ? (
              <span aria-current="page">{c.name}</span>
            ) : (
              <Link href={c.href}>{c.name}</Link>
            )}
            {!last && <span aria-hidden="true">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
