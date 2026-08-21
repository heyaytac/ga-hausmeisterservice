import { business } from "@/content/business";
import { Hero } from "@/components/Hero";

import { Crumbs } from "@/components/Crumbs";
import { crumbTrail, pageMeta } from "@/lib/seo";

const trail = crumbTrail({ name: "Datenschutz", href: "/datenschutz" });

export const metadata = pageMeta({
  title: "Datenschutzerklärung",
  description:
    "Wie wir personenbezogene Daten auf dieser Website verarbeiten: Server-Logfiles, Kontaktformular, WhatsApp, Rechtsgrundlagen und Ihre Rechte nach DSGVO.",
  path: "/datenschutz",
});

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: "var(--text-2xl)", textTransform: "none" }}>
    {children}
  </h2>
);

export default function Datenschutz() {
  return (
    <>
      <div className="shell">
        <Crumbs trail={trail} />
      </div>

      <Hero
        title={<>datenschutz</>}
        small
        body={
          <>
            <div className="prose">
              <H>1. Verantwortlicher</H>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist{" "}
                {business.legalName}
                {business.owner ? `, Inhaber ${business.owner}` : ""},{" "}
                {business.address.street ? `${business.address.street}, ` : ""}
                {business.address.postalCode} {business.address.locality}.
                Telefon {business.phoneDisplay}
                {business.email ? `, E-Mail ${business.email}` : ""}. Die
                vollständigen Angaben finden Sie im Impressum.
              </p>

              <H>2. Grundsätze</H>
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit das für die
                Bereitstellung dieser Website und für die Bearbeitung Ihrer
                Anfragen erforderlich ist. Diese Website setzt{" "}
                <strong>keine Cookies zu Analyse- oder Werbezwecken</strong>{" "}
                ein, bindet keine Tracking-Dienste ein und erstellt keine
                Nutzungsprofile. Aus diesem Grund gibt es hier auch kein
                Cookie-Banner.
              </p>
              <p>
                Die verwendete Schriftart wird lokal vom eigenen Server
                ausgeliefert. Beim Aufruf der Seite wird{" "}
                <strong>keine Verbindung zu Google Fonts</strong> oder einem
                anderen externen Schriftanbieter hergestellt; Ihre IP-Adresse
                wird dorthin nicht übermittelt.
              </p>

              <H>3. Server-Logfiles</H>
              <p>
                Beim Aufruf dieser Website erhebt der Hosting-Anbieter
                automatisch Daten, die Ihr Browser übermittelt: aufgerufene
                Seite, Datum und Uhrzeit, übertragene Datenmenge, Referrer-URL,
                Browsertyp und Betriebssystem sowie die IP-Adresse. Diese Daten
                sind für uns keiner bestimmten Person zuordenbar und werden
                nicht mit anderen Datenquellen zusammengeführt.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse liegt im technisch fehlerfreien Betrieb
                und in der Sicherheit der Website. Die Speicherung erfolgt für
                einen kurzen Zeitraum und wird danach automatisch gelöscht.
              </p>

              <H>4. Hosting</H>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet.
                Der Anbieter verarbeitet die oben genannten Logfile-Daten in
                unserem Auftrag auf Grundlage eines Vertrags zur
                Auftragsverarbeitung nach Art. 28 DSGVO. Sofern Daten dabei in
                ein Drittland übermittelt werden, erfolgt dies auf Grundlage der
                EU-Standardvertragsklauseln.
              </p>

              <H>5. Kontaktformular und Angebotsanfrage</H>
              <p>
                Wenn Sie uns über das Formular eine Anfrage senden, verarbeiten
                wir die von Ihnen angegebenen Daten — Name, Telefonnummer,
                gegebenenfalls E-Mail-Adresse, Ort, Objektart, gewünschte
                Leistung und Ihre Nachricht — zur Bearbeitung dieser Anfrage.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die
                Anfrage auf den Abschluss eines Vertrags gerichtet ist, im
                Übrigen Art. 6 Abs. 1 lit. a und lit. f DSGVO. Die Daten
                verbleiben bei uns, bis der Zweck entfällt oder Sie uns zur
                Löschung auffordern; zwingende gesetzliche Aufbewahrungsfristen
                — insbesondere handels- und steuerrechtliche — bleiben
                unberührt.
              </p>
              <p>
                Zur Übermittlung der Formularnachricht an unser Postfach setzen
                wir einen E-Mail-Versanddienstleister als Auftragsverarbeiter
                ein. Dieser verarbeitet die Formularinhalte ausschließlich zum
                Zweck der Zustellung.
              </p>
              <p>
                Das Formular enthält ein für Sie unsichtbares Feld zur
                Spam-Abwehr sowie eine Begrenzung der Absendehäufigkeit. Beides
                dient allein der Missbrauchsvermeidung (Art. 6 Abs. 1 lit. f
                DSGVO).
              </p>

              <H>6. Kontaktaufnahme per Telefon und WhatsApp</H>
              <p>
                Rufen Sie uns an oder schreiben Sie uns über WhatsApp,
                verarbeiten wir die dabei übermittelten Daten zur Bearbeitung
                Ihres Anliegens (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO).
              </p>
              <p>
                Bitte beachten Sie: Beim Klick auf einen WhatsApp-Link verlassen
                Sie diese Website. Für die Verarbeitung Ihrer Daten innerhalb
                von WhatsApp ist der Betreiber des Dienstes verantwortlich; es
                gelten dessen Datenschutzbestimmungen. Wir binden WhatsApp nicht
                in die Seite ein — es handelt sich um einen einfachen Link, der
                erst beim Anklicken eine Verbindung herstellt. Wenn Sie das
                vermeiden möchten, nutzen Sie bitte Telefon oder das Formular.
              </p>

              <H>7. Kundenbewertungen</H>
              <p>
                Auf dieser Website zitierte Bewertungen stammen aus dem
                öffentlich einsehbaren Google-Unternehmensprofil. Es werden
                ausschließlich der bereits öffentlich veröffentlichte Name und
                Text wiedergegeben; eine darüber hinausgehende Verarbeitung
                findet nicht statt.
              </p>

              <H>8. Ihre Rechte</H>
              <p>Sie haben jederzeit das Recht auf:</p>
              <p>
                Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15
                DSGVO) · Berichtigung unrichtiger Daten (Art. 16 DSGVO) ·
                Löschung (Art. 17 DSGVO) · Einschränkung der Verarbeitung (Art.
                18 DSGVO) · Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruch
                gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art.
                21 DSGVO).
              </p>
              <p>
                Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für
                die Zukunft widerrufen. Wenden Sie sich dafür formlos an die im
                Impressum genannten Kontaktdaten.
              </p>

              <H>9. Beschwerderecht</H>
              <p>
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
                beschweren. Zuständig ist der Landesbeauftragte für den
                Datenschutz und die Informationsfreiheit Rheinland-Pfalz,
                Hintere Bleiche 34, 55116 Mainz.
              </p>

              <H>10. SSL-/TLS-Verschlüsselung</H>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen eine SSL-
                beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                mit „https://“ beginnt.
              </p>

              <H>11. Änderungen</H>
              <p>
                Wir passen diese Erklärung an, sobald sich die Datenverarbeitung
                auf dieser Website ändert — etwa weil neue Funktionen
                hinzukommen. Es gilt jeweils die hier abrufbare Fassung.
              </p>
            </div>
          </>
        }
      />
    </>
  );
}
