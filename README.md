# G.A Hausmeisterservice

Website für einen Hausmeisterbetrieb in Lahnstein. Next.js 16 (App Router,
TypeScript), statisch vorgerendert, ohne CSS-Framework — das Designsystem
liegt vollständig in `tokens.css`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # 86 Seiten, statisch
```

---

## ⚠️ Vor dem Livegang

Diese Punkte sind bewusst offen geblieben, weil sie nicht erfunden werden
durften. Alles davon steht in **einer** Datei: `src/content/business.ts`.

| #   | Was                                                    | Wo                                            | Warum es blockiert                                                                                                                                                                                            |
| --- | ------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Inhabername, Straße + Hausnummer, geschäftliche E-Mail | `business.ts` → `owner`, `address`, `email`   | §5 DDG. Ohne diese Angaben ist das Impressum unvollständig und abmahnfähig. Die Lücken werden auf `/impressum` **gelb markiert angezeigt**, damit sie nicht übersehen werden.                                 |
| 2   | Steuernummer bzw. USt-IdNr., Kleinunternehmer ja/nein  | `business.ts` → `tax`                         | §14 UStG. Steuert außerdem den Umsatzsteuer-Hinweis auf `/impressum` und `/preise`.                                                                                                                           |
| 3   | Öffnungszeiten                                         | `business.ts` → `hours`                       | Google zeigt „Schließt um 20:00“, die Öffnungszeit ist unbekannt. Solange `confirmed: false` ist, bleiben die Zeiten aus der Seite **und** aus dem JSON-LD raus. Nach dem Eintragen `confirmed: true` setzen. |
| 4   | Link zum Google-Unternehmensprofil                     | `business.ts` → `googleProfileUrl`            | Wird als `sameAs` ins JSON-LD gehängt — wichtigstes Entitäts-Signal für lokales SEO.                                                                                                                          |
| 5   | Volltext von zwei Bewertungen                          | `src/content/reviews.ts`                      | Gustav Tränkle und Lara Elbert sind bei Google mit „…Mehr“ abgeschnitten. Volltext einsetzen, dann `featured: true`.                                                                                          |
| 6   | Drei bis fünf Sätze zur Person + Foto                  | `src/app/ueber-uns/page.tsx` (TODO-Kommentar) | Bei einem Handwerksbetrieb der stärkste Vertrauensfaktor. Wurde nicht erfunden.                                                                                                                               |
| 7   | Resend-Zugangsdaten                                    | `.env` lokal · Vercel → Environment Variables (Vorlage: `.env.example`) | Ohne `RESEND_API_KEY` fällt das Formular sauber auf WhatsApp zurück — es geht also nichts verloren, aber Leads landen nicht im Postfach. Der Absender `onboarding@resend.dev` liefert nur an die im Resend-Konto hinterlegte Adresse; für jeden anderen Empfänger die Domain unter resend.com/domains verifizieren. |

Suche im Code nach `TODO(GA)`, um alle Stellen zu finden.

---

## Struktur

```
src/content/     Einzige Quelle für Inhalte — Fakten, keine Logik
  business.ts      NAP, Recht, Bewertungssnapshot
  services.ts      10 Leistungen inkl. FAQ und Preislogik
  cities.ts        19 Orte, Zahlen aus der Wikipedia (Stand 31.12.2025)
  combos.ts        36 handgeschriebene Leistung×Ort-Absätze
  reviews.ts       Google-Bewertungen, wörtlich
  ratgeber.ts      4 Fachartikel
  faqs.ts          Seitenübergreifende Fragen
src/lib/         Metadaten- und JSON-LD-Bauer
src/components/  UI. Hero, Nav (Mega-Menü), Footer, Formular, Karte
tokens.css       Das Designsystem. Jede Farbe, jede Schrift, jeder Abstand.
scripts/         Audits (siehe unten)
```

**Alle Inhalte ändern sich über `src/content/`.** Ein neuer Ort in
`cities.ts` erzeugt automatisch eine Ortsseite, Sitemap-Eintrag,
Footer-Link, Mega-Menü-Eintrag, Formular-Option und `llms.txt`-Zeile.

## Seiten (86)

| Muster                                                                                                    | Anzahl |
| --------------------------------------------------------------------------------------------------------- | ------ |
| `/` · `/leistungen` · `/einsatzgebiet` · `/preise` · `/angebot` · `/kontakt` · `/ueber-uns` · `/ratgeber` | 8      |
| `/leistungen/[leistung]`                                                                                  | 10     |
| `/hausmeisterservice/[ort]`                                                                               | 19     |
| `/leistungen/[leistung]/[ort]`                                                                            | 36     |
| `/ratgeber/[artikel]`                                                                                     | 4      |
| `/impressum` · `/datenschutz` · `/danke` · 404                                                            | 4      |
| `sitemap.xml` · `robots.txt` · `llms.txt`                                                                 | 3      |

## Audits

Erst `npm run build && npm start`, dann:

```bash
npm run audit            # alle drei
npm run audit:responsive # 320/375/414/768/1440 px
npm run audit:contrast   # WCAG AA über alle Seitentypen
npm run audit:functional # Mega-Menü, Akkordeon, Formular, JSON-LD
```

`audit:responsive` prüft vier Dinge: horizontalen Überlauf, zweizeilige
Buttons, **gequetschte Spalten** und **überlagerten Text**. Die letzten
beiden sind wichtig, weil eine Spaltenklasse, die nur in einer
Desktop-Media-Query definiert ist, auf `grid-column: auto` zurückfällt, in
einer ~8 px breiten Spur landet und den Text in ein Wort pro Zeile zerlegt —
ohne dabei überzulaufen. Genau das ist hier einmal passiert.

**Regel:** Jede neue `.col-*`-Klasse braucht eine Mobile-First-Basis in
`globals.css` (`grid-column: 1 / -1`), nicht nur den Eintrag in der
60rem-Query.

Erwarteter Stand: `CLEAN`, `CONTRAST CLEAN`, 11×`PASS`.

## Design

Hallmark-Build. Macrostructure **Split Studio**, Theme **Grid** (Schweizer
Raster, sichtbares 12-Spalten-Gitter, Archivo 800 in Kleinbuchstaben, ein
Signalgelb). Nav **N11** Mega-Menü, Footer **Ft4** Kolophon.
Der Stempel steht oben in `tokens.css`, die Historie in `.hallmark/log.json`.

Keine Bilder: Es lagen keine echten Fotos vor, und Stockfotos wären hier
schlechter als keine. Sobald echte Aufnahmen da sind, sind die Stellen dafür
die Figurenzellen (`.figcell`) in den Hero-Bereichen.
