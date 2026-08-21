"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { services } from "@/content/services";
import { cities, zones, type Zone } from "@/content/cities";
import { business, contact } from "@/content/business";
import { Period } from "@/components/Marks";

type PanelId = "leistungen" | "einsatzgebiet";

const ZONE_ORDER: Zone[] = ["kern", "rheinschiene", "hoehe"];

export function SiteHeader() {
  const [panel, setPanel] = useState<PanelId | null>(null);
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  /** Close-grace timer so the pointer can travel into the panel without flicker. */
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setPanel(null), 140);
  }, [cancelClose]);

  const open = useCallback(
    (id: PanelId) => {
      cancelClose();
      setPanel(id);
    },
    [cancelClose],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanel(null);
        setDrawer(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const trigger = (id: PanelId, label: string) => (
    <div
      onMouseEnter={() => open(id)}
      onMouseLeave={scheduleClose}
      style={{ display: "flex" }}
    >
      <button
        type="button"
        className="nav__link"
        aria-expanded={panel === id}
        aria-controls={`mega-${id}`}
        onClick={() => setPanel(panel === id ? null : id)}
      >
        {label}
        <span className="nav__caret" aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <Link href="/" className="nav__brand">
            G.A Hausmeisterservice
            <Period />
          </Link>

          <nav className="nav__rail" aria-label="Hauptnavigation">
            {trigger("leistungen", "Leistungen")}
            {trigger("einsatzgebiet", "Einsatzgebiet")}
            <Link href="/preise" className="nav__link">
              Preise
            </Link>
            <Link href="/ratgeber" className="nav__link">
              Ratgeber
            </Link>
            <Link href="/kontakt" className="nav__link">
              Kontakt
            </Link>
          </nav>

          <div className="nav__right">
            <a href={contact.tel} className="nav__phone">
              {business.phoneDisplay}
            </a>
            <Link href="/angebot" className="btn btn--primary nav__cta">
              Angebot
            </Link>
            <button
              type="button"
              className="nav__toggle"
              aria-expanded={drawer}
              aria-controls="nav-drawer"
              onClick={() => setDrawer((d) => !d)}
            >
              <span className="nav__burger" aria-hidden="true">
                <span />
              </span>
              {drawer ? "Schließen" : "Menü"}
            </button>
          </div>
        </div>

        {/* ---------------------------------------------- Leistungen panel */}
        <div
          id="mega-leistungen"
          className={`mega${panel === "leistungen" ? " is-open" : ""}`}
          onMouseEnter={() => open("leistungen")}
          onMouseLeave={scheduleClose}
          hidden={panel !== "leistungen"}
        >
          <div className="mega__inner">
            {[
              {
                head: "Laufende Betreuung",
                slugs: [
                  "hausmeisterservice",
                  "objektbetreuung",
                  "treppenhausreinigung",
                ],
              },
              { head: "Außenanlage", slugs: ["gartenpflege", "winterdienst"] },
              {
                head: "Räumen & Rückbau",
                slugs: ["entruempelung", "abbruch-abrissarbeiten"],
              },
              {
                head: "Handwerk",
                slugs: ["montagearbeiten", "kleinreparaturen", "notdienst"],
              },
            ].map((col) => (
              <div key={col.head} className="mega__col">
                <p className="label mega__head">{col.head}</p>
                {col.slugs.map((slug) => {
                  const s = services.find((x) => x.slug === slug)!;
                  return (
                    <Link
                      key={s.slug}
                      href={`/leistungen/${s.slug}`}
                      className="mega__item"
                      onClick={() => setPanel(null)}
                    >
                      <b>{s.name}</b>
                      <i>{s.lede.split("—")[0].trim()}</i>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------- Einsatzgebiet panel */}
        <div
          id="mega-einsatzgebiet"
          className={`mega${panel === "einsatzgebiet" ? " is-open" : ""}`}
          onMouseEnter={() => open("einsatzgebiet")}
          onMouseLeave={scheduleClose}
          hidden={panel !== "einsatzgebiet"}
        >
          <div className="mega__inner">
            {ZONE_ORDER.map((z) => (
              <div key={z} className="mega__col">
                <p className="label mega__head">{zones[z].label}</p>
                <div className="mega__towns">
                  {cities
                    .filter((c) => c.zone === z)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        href={`/hausmeisterservice/${c.slug}`}
                        className="mega__town"
                        onClick={() => setPanel(null)}
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
            <div className="mega__col">
              <p className="label mega__head">Übersicht</p>
              <Link
                href="/einsatzgebiet"
                className="mega__item"
                onClick={() => setPanel(null)}
              >
                <b>Karte des Einsatzgebiets</b>
                <i>Alle {cities.length} Orte zwischen Lahn und Rhein</i>
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------- mobile drawer */}
        {drawer && (
          <div className="drawer" id="nav-drawer">
            <div className="drawer__group">
              <p className="label">Leistungen</p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="drawer__link"
                  onClick={() => setDrawer(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="drawer__group">
              <p className="label">Einsatzgebiet</p>
              <Link
                href="/einsatzgebiet"
                className="drawer__link"
                onClick={() => setDrawer(false)}
              >
                Alle Orte
              </Link>
              <div className="chips" style={{ marginBlockStart: "1rem" }}>
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/hausmeisterservice/${c.slug}`}
                    className="chip"
                    onClick={() => setDrawer(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="drawer__group">
              {[
                ["/preise", "Preise"],
                ["/ratgeber", "Ratgeber"],
                ["/ueber-uns", "Über uns"],
                ["/kontakt", "Kontakt"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="drawer__link"
                  onClick={() => setDrawer(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <div
        className={`nav-scrim${panel ? " is-active" : ""}`}
        onClick={() => setPanel(null)}
        aria-hidden="true"
      />
    </>
  );
}
