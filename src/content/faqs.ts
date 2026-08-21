export type Faq = { q: string; a: string[] };

/** Site-wide questions. Service-specific ones live on the service itself. */
export const generalFaqs: Faq[] = [
  {
    q: "Was kostet ein Hausmeisterservice?",
    a: [
      "Laufende Betreuung rechnen wir pauschal pro Monat ab, einmalige Arbeiten nach Stundensatz plus Material. Der Monatspreis hängt an drei Dingen: Objektgröße, Turnus und Leistungsumfang.",
      "Eine seriöse Zahl können wir erst nennen, wenn wir wissen, worum es geht. Deshalb kostet das Angebot nichts und ist unverbindlich — und deshalb finden Sie hier keine Preisliste, die für Ihr Objekt sowieso nicht stimmen würde.",
    ],
  },
  {
    q: "In welchen Orten arbeiten Sie?",
    a: [
      "Unser Kerngebiet ist Lahnstein, Koblenz, Braubach und die angrenzenden Gemeinden im Rhein-Lahn-Kreis. Dazu kommen die Rheinschiene bis Boppard und Vallendar sowie das Lahntal bis Nassau.",
      "Wenn Ihr Ort nicht dabei ist, fragen Sie trotzdem. Bei größeren Aufträgen fahren wir auch weiter.",
    ],
  },
  {
    q: "Wie schnell bekomme ich eine Rückmeldung?",
    a: [
      "Anfragen, die an einem Werktag eingehen, beantworten wir am selben Tag. Bei einem Notfall rufen Sie besser direkt an, statt das Formular zu benutzen.",
    ],
  },
  {
    q: "Arbeiten Sie auch für Hausverwaltungen und WEG?",
    a: [
      "Ja, das ist ein großer Teil unserer Arbeit. Für Verwaltungen mit mehreren Objekten in der Region machen wir eine gemeinsame Kalkulation über alle Häuser — das ist in der Regel günstiger als jedes Objekt einzeln.",
    ],
  },
  {
    q: "Bekomme ich einen Festpreis?",
    a: [
      "Bei allem, was sich vorher besichtigen lässt — Entrümpelung, Abbruch, Grünpflege, laufende Betreuung — ja. Der Preis steht schriftlich fest, bevor die Arbeit beginnt.",
      "Bei Reparaturen, deren Umfang sich erst beim Öffnen zeigt, rechnen wir nach Aufwand und sagen Bescheid, bevor die Kosten steigen. Wir fangen nicht an und legen hinterher eine Rechnung vor, mit der niemand gerechnet hat.",
    ],
  },
  {
    q: "Kann ich Sie über WhatsApp erreichen?",
    a: [
      "Ja. Für viele Anfragen ist das der schnellste Weg — ein Foto vom Keller, vom Garten oder vom Schaden sagt mehr als eine lange Beschreibung.",
    ],
  },
];
