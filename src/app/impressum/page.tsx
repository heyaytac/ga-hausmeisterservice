import { business } from "@/content/business";
import { Hero } from "@/components/Hero";

import { Crumbs } from "@/components/Crumbs";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Impressum", href: "/impressum" });

export const metadata = pageMeta({
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung nach §5 DDG für ${business.name}, Lahnstein.`,
  path: "/impressum",
});

/** Renders a value, or an unmissable gap where a legally required one is absent. */
function Required({ value, label }: { value: string; label: string }) {
  if (value) return <>{value}</>;
  return (
    <mark
      style={{
        background: "var(--color-accent)",
        color: "var(--color-accent-ink)",
        fontWeight: 700,
        padding: "0 0.3em",
      }}
    >
      ausstehend: {label}
    </mark>
  );
}

export default function Impressum() {
  const incomplete =
    !business.owner ||
    !business.address.street ||
    !business.email ||
    !business.tax.taxNumber;

  return (
    <>
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>impressum</>}
        small
        body={
          <>
            {incomplete && (
              <div
                className="figcell"
                style={{ borderWidth: "var(--rule-bar)", width: "100%" }}
              >
                <p className="label label--ink">Vor dem Livegang auszufüllen</p>
                <p
                  style={{
                    marginBlockStart: "var(--space-xs)",
                    fontSize: "var(--text-sm)",
                  }}
                >
                  Dieses Impressum ist noch unvollständig. §5 DDG verlangt Name,
                  ladungsfähige Anschrift und eine E-Mail-Adresse; §14 UStG
                  verlangt zusätzlich die Steuernummer oder USt-IdNr. Fehlende
                  Angaben sind unten gelb markiert. Die Werte stehen in{" "}
                  <code>src/content/business.ts</code>.
                </p>
              </div>
            )}

            <div className="prose">
              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Angaben gemäß §5 DDG
              </h2>
              <p>
                <strong>
                  <Required
                    value={business.legalName}
                    label="vollständiger Firmenname"
                  />
                </strong>
                <br />
                Inhaber:{" "}
                <Required
                  value={business.owner}
                  label="Vor- und Nachname des Inhabers"
                />
                <br />
                <Required
                  value={business.address.street}
                  label="Straße und Hausnummer"
                />
                <br />
                {business.address.postalCode} {business.address.locality}
                <br />
                Deutschland
              </p>

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Kontakt
              </h2>
              <p>
                Telefon: {business.phoneDisplay}
                <br />
                E-Mail:{" "}
                <Required
                  value={business.email}
                  label="geschäftliche E-Mail-Adresse"
                />
              </p>

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Umsatzsteuer
              </h2>
              {business.tax.kleinunternehmer ? (
                <p>
                  Steuernummer:{" "}
                  <Required
                    value={business.tax.taxNumber}
                    label="Steuernummer"
                  />
                  <br />
                  Gemäß §19 UStG wird keine Umsatzsteuer berechnet und
                  entsprechend nicht ausgewiesen.
                </p>
              ) : (
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:{" "}
                  <Required value={business.tax.vatId} label="USt-IdNr." />
                </p>
              )}

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Redaktionell verantwortlich
              </h2>
              <p>
                <Required value={business.owner} label="Vor- und Nachname" />,
                Anschrift wie oben.
              </p>

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  rel="noopener nofollow"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben.
              </p>

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Haftung für Inhalte und Links
              </h2>
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist
                stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden
                von Rechtsverletzungen entfernen wir derartige Links umgehend.
              </p>

              <h2
                style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}
              >
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Zitierte
                Kundenbewertungen stammen unverändert aus dem öffentlichen
                Google-Unternehmensprofil und geben die Meinung der jeweiligen
                Verfasserin oder des Verfassers wieder.
              </p>
            </div>
          </>
        }
      />
    </>
  );
}
