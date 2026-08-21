import Link from "next/link";
import { cities, zones, type Zone } from "@/content/cities";

/**
 * A constructed diagram, not a map. Nodes sit on the schematic course of the
 * Rhine and the Lahn; positions are relative, not surveyed. Built from the
 * marks kit — no image, no icon font, no tile server.
 *
 * Below 48rem the diagram is hidden and the grouped index carries the whole
 * job: at phone widths the labels would render under 6 px.
 */

type Node = { slug: string; x: number; y: number; anchor?: "start" | "end" };

const NODES: Node[] = [
  { slug: "vallendar", x: 318, y: 148, anchor: "start" },
  { slug: "koblenz", x: 268, y: 212, anchor: "end" },
  { slug: "lahnstein", x: 312, y: 300, anchor: "start" },
  { slug: "braubach", x: 322, y: 360, anchor: "start" },
  { slug: "osterspai", x: 330, y: 404, anchor: "start" },
  { slug: "filsen", x: 337, y: 448, anchor: "start" },
  { slug: "kamp-bornhofen", x: 341, y: 492, anchor: "start" },
  { slug: "rhens", x: 250, y: 352, anchor: "end" },
  { slug: "brey", x: 245, y: 396, anchor: "end" },
  { slug: "spay", x: 240, y: 440, anchor: "end" },
  { slug: "boppard", x: 233, y: 492, anchor: "end" },
  { slug: "miellen", x: 358, y: 288, anchor: "start" },
  { slug: "nievern", x: 400, y: 284, anchor: "start" },
  { slug: "fachbach", x: 444, y: 279, anchor: "start" },
  { slug: "bad-ems", x: 510, y: 270, anchor: "start" },
  { slug: "nassau", x: 618, y: 252, anchor: "start" },
  { slug: "fruecht", x: 392, y: 344, anchor: "start" },
  { slug: "becheln", x: 440, y: 380, anchor: "start" },
  { slug: "dachsenhausen", x: 402, y: 434, anchor: "start" },
];

const ZONE_ORDER: Zone[] = ["kern", "rheinschiene", "hoehe"];

export function ServiceAreaMap() {
  return (
    <figure style={{ margin: 0 }}>
      <div className="map-wrap">
        <svg
          className="map"
          viewBox="0 0 760 570"
          role="img"
          aria-label="Schematische Darstellung des Einsatzgebiets zwischen Rhein und Lahn. Alle Orte sind unter der Grafik als Liste verlinkt."
        >
          {/* The rivers — 1px ink rules, the only lines in the figure. */}
          <path
            d="M296 545 L288 470 L297 400 L286 330 L292 268 L272 200 L280 130 L296 40"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
          />
          <path
            d="M292 300 L360 292 L440 282 L520 270 L600 256 L700 240"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
          />

          <text x="304" y="60" className="map__label map__label--quiet">
            Rhein
          </text>
          <text x="660" y="228" className="map__label map__label--quiet">
            Lahn
          </text>

          {/* The diagonal — one 45° rule, snapped, marking the Taunus edge. */}
          <path
            d="M360 320 L520 480"
            stroke="var(--color-rule)"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <text x="470" y="452" className="map__label map__label--quiet">
            Taunushöhen
          </text>

          {NODES.map((n) => {
            const city = cities.find((c) => c.slug === n.slug)!;
            const isBase = city.slug === "lahnstein";
            const dx = n.anchor === "end" ? -12 : 12;
            return (
              <a
                key={n.slug}
                href={`/hausmeisterservice/${n.slug}`}
                className="map__hit"
              >
                <title>{`Hausmeisterservice ${city.name}`}</title>
                {isBase ? (
                  <rect
                    x={n.x - 6}
                    y={n.y - 6}
                    width="12"
                    height="12"
                    className="map__node"
                    fill="var(--color-accent)"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                  />
                ) : (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={city.population > 8000 ? 5 : 3.5}
                    className="map__node"
                    fill="var(--color-paper)"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                  />
                )}
                <text
                  x={n.x + dx}
                  y={n.y + 4}
                  textAnchor={n.anchor === "end" ? "end" : "start"}
                  className="map__label"
                  fontWeight={isBase ? 700 : 400}
                >
                  {city.name}
                </text>
              </a>
            );
          })}
        </svg>
      </div>
      <figcaption className="label figcell__cap map-cap">
        Schematische Darstellung — Lage relativ, nicht maßstabsgetreu. Das
        gefüllte Quadrat markiert Lahnstein.
      </figcaption>
    </figure>
  );
}

export function TownIndex() {
  return (
    <div className="stack stack--xl" style={{ width: "100%" }}>
      {ZONE_ORDER.map((z) => (
        <div key={z} style={{ width: "100%" }}>
          <p className="label label--ink">{zones[z].label}</p>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-muted)",
              maxWidth: "56ch",
              marginBlock: "var(--space-2xs) var(--space-sm)",
            }}
          >
            {zones[z].note}
          </p>
          <div className="chips">
            {cities
              .filter((c) => c.zone === z)
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
      ))}
    </div>
  );
}
