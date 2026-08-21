import Link from "next/link";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { business, contact } from "@/content/business";
import { Rails } from "@/components/Rails";
import { Register } from "@/components/Marks";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <Rails />
      <div className="shell">
        <div className="foot__top">
          <div className="foot__block">
            <p className="label label--ink">Leistungen</p>
            <div className="foot__list">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="foot__link"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="foot__block">
            <p className="label label--ink">Einsatzgebiet</p>
            <div className="foot__list">
              {cities.slice(0, 10).map((c) => (
                <Link
                  key={c.slug}
                  href={`/hausmeisterservice/${c.slug}`}
                  className="foot__link"
                >
                  Hausmeisterservice {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="foot__block">
            <p className="label label--ink">Weitere Orte</p>
            <div className="foot__list">
              {cities.slice(10).map((c) => (
                <Link
                  key={c.slug}
                  href={`/hausmeisterservice/${c.slug}`}
                  className="foot__link"
                >
                  Hausmeisterservice {c.name}
                </Link>
              ))}
              <Link href="/einsatzgebiet" className="foot__link">
                Alle Orte auf der Karte
              </Link>
            </div>
          </div>

          <div className="foot__block">
            <p className="label label--ink">Kontakt</p>
            <div className="foot__list">
              <a href={contact.tel} className="foot__link">
                {business.phoneDisplay}
              </a>
              <a
                href={contact.whatsapp("Guten Tag, ich habe eine Anfrage:")}
                className="foot__link"
                rel="noopener"
              >
                WhatsApp
              </a>
              {business.email && (
                <a href={`mailto:${business.email}`} className="foot__link">
                  {business.email}
                </a>
              )}
              <span className="foot__link">{business.hours.note}</span>
            </div>

            <p
              className="label label--ink"
              style={{ marginBlockStart: "1rem" }}
            >
              Unternehmen
            </p>
            <div className="foot__list">
              <Link href="/ueber-uns" className="foot__link">
                Über uns
              </Link>
              <Link href="/preise" className="foot__link">
                Preise
              </Link>
              <Link href="/ratgeber" className="foot__link">
                Ratgeber
              </Link>
              <Link href="/angebot" className="foot__link">
                Angebot anfordern
              </Link>
              <Link href="/impressum" className="foot__link">
                Impressum
              </Link>
              <Link href="/datenschutz" className="foot__link">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        {/* Ft4 · the dense colophon proper */}
        <div className="foot__colophon">
          <Register />
          <p>
            {business.name} · Hausmeisterservice, Objektbetreuung, Grünpflege,
            Winterdienst, Treppenhausreinigung, Entrümpelung, Montage und
            Kleinreparaturen für Wohn- und Gewerbeobjekte in Lahnstein, Koblenz,
            Braubach, Bad Ems, Boppard, Vallendar und {cities.length - 6}{" "}
            weiteren Gemeinden zwischen Lahn und Rhein.{" "}
            {business.address.confirmed
              ? `${business.address.street}, ${business.address.postalCode} ${business.address.locality}. `
              : `${business.address.postalCode} ${business.address.locality}. `}
            Telefon {business.phoneDisplay}. Angebote sind kostenlos und
            unverbindlich; Preise stehen vor Arbeitsbeginn schriftlich fest.
            Bewertungen stammen aus dem öffentlichen Google-Unternehmensprofil.{" "}
            <Link href="/impressum">Impressum</Link> ·{" "}
            <Link href="/datenschutz">Datenschutz</Link> · © {year}.
          </p>
        </div>
      </div>
    </footer>
  );
}
