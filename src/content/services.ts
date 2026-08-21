export type Service = {
  slug: string;
  /** Short label for nav, chips, breadcrumbs. */
  short: string;
  /** Full service name as used in headings and structured data. */
  name: string;
  /** Lowercase display headline — the Grid theme sets h1 lowercase. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  /** One plainspoken paragraph. No hype, no adjective stacking. */
  body: string[];
  /** What the job actually includes. Concrete nouns, not benefits. */
  includes: string[];
  /** Who books this. Named audiences, not "everyone". */
  audience: string[];
  /** Honest note on how the price is formed. Never an invented number. */
  priceNote: string;
  /** Service-specific questions. Answered like a person, not a sales doc. */
  faqs: { q: string; a: string }[];
  /** Slugs of services that genuinely pair with this one. */
  related: string[];
  /** Whether this service gets per-town landing pages. */
  towns: boolean;
};

export const services: Service[] = [
  {
    slug: "hausmeisterservice",
    short: "Hausmeisterservice",
    name: "Hausmeisterservice",
    h1: "hausmeisterservice",
    metaTitle:
      "Hausmeisterservice Lahnstein & Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Hausmeisterservice für Wohn- und Gewerbeobjekte in Lahnstein, Koblenz und im Rhein-Lahn-Kreis. Feste Ansprechpartner, Festpreis vor Arbeitsbeginn. Angebot kostenlos anfordern.",
    lede: "Ein fester Hausmeister für Ihr Objekt — mit einem Turnus, den Sie kennen, und einer Nummer, die rangeht.",
    body: [
      "Der klassische Hausmeisterservice ist kein einzelner Auftrag, sondern ein Turnus: dieselben Wege, dieselben Kontrollen, derselbe Ansprechpartner. Wir legen mit Ihnen fest, was in welchem Rhythmus passiert — wöchentlich, vierzehntägig oder monatlich — und halten uns daran.",
      "Wir arbeiten für Eigentümer, Hausverwaltungen und WEG zwischen Lahn und Rhein. Der Vorteil einer regionalen Firma ist banal, aber entscheidend: Bei einem verstopften Fallrohr in Oberlahnstein sind wir in Minuten da, nicht am übernächsten Werktag.",
    ],
    includes: [
      "Regelmäßige Objektkontrolle innen und außen",
      "Kleinreparaturen an Türen, Fenstern, Schlössern, Beleuchtung",
      "Ablesen von Zählerständen und Führen des Objektbuchs",
      "Kontrolle von Dachrinnen, Fallrohren und Entwässerung",
      "Mülltonnen stellen, zurückholen, Standplatz reinigen",
      "Pflege der Außenanlagen und Zuwege",
      "Kontrolle von Beleuchtung, Rauchmeldern und Fluchtwegen",
      "Ansprechpartner für Mieter bei Störungen",
    ],
    audience: [
      "Hausverwaltungen mit mehreren Objekten in der Region",
      "WEG ohne eigenen Hausmeister",
      "Vermieter, die nicht vor Ort wohnen",
      "Gewerbeobjekte mit Publikumsverkehr",
    ],
    priceNote:
      "Beim laufenden Hausmeisterservice rechnen wir in der Regel pauschal pro Monat ab — der Preis hängt an Objektgröße, Turnus und Leistungsumfang. Einmalige Arbeiten laufen über Stundensatz plus Material. Beides steht vor Arbeitsbeginn schriftlich fest.",
    faqs: [
      {
        q: "Ab welcher Objektgröße lohnt sich ein fester Hausmeister?",
        a: "Wir betreuen Objekte ab etwa vier Wohneinheiten sinnvoll im Turnus. Darunter ist meistens ein Einsatz nach Bedarf günstiger — sagen Sie uns, was anfällt, und wir rechnen beides durch.",
      },
      {
        q: "Bekommen wir einen festen Ansprechpartner?",
        a: "Ja. Sie haben eine Nummer und eine Person, die Ihr Objekt kennt. Kein Callcenter, keine wechselnden Kolonnen.",
      },
      {
        q: "Können wir den Vertrag monatlich kündigen?",
        a: "Wir arbeiten mit kurzen Kündigungsfristen. Wenn die Betreuung nicht passt, soll Sie kein Vertrag festhalten.",
      },
      {
        q: "Übernehmen Sie auch die Verkehrssicherungspflicht?",
        a: "Wir übernehmen die konkreten Arbeiten — Räumen, Streuen, Kontrollieren, Dokumentieren — und halten sie nach. Die Pflicht selbst bleibt beim Eigentümer, lässt sich aber vertraglich auf uns übertragen. Das regeln wir schriftlich, damit es im Schadensfall belastbar ist.",
      },
    ],
    related: ["objektbetreuung", "treppenhausreinigung", "kleinreparaturen"],
    towns: true,
  },
  {
    slug: "objektbetreuung",
    short: "Objektbetreuung",
    name: "Objektbetreuung",
    h1: "objektbetreuung",
    metaTitle: "Objektbetreuung Lahnstein & Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Technische Objektbetreuung für Wohnanlagen und Gewerbeimmobilien im Rhein-Lahn-Kreis: Kontrolle, Dokumentation, Handwerkerkoordination. Kostenloses Angebot.",
    lede: "Die Betreuung, die zwischen Verwaltung und Handwerker fehlt — Kontrolle, Dokumentation, Koordination.",
    body: [
      "Objektbetreuung ist das, was übrig bleibt, wenn die Verwaltung im Büro sitzt und der Handwerker erst kommt, wenn etwas kaputt ist. Wir sind der Teil dazwischen: Wir sehen das Objekt regelmäßig, halten fest, was sich verändert, und melden es, bevor daraus ein Schaden wird.",
      "Dazu gehört auch die Koordination vor Ort. Wenn der Heizungsbauer, der Schornsteinfeger und der Aufzugswärter je einen Termin brauchen, muss jemand aufschließen und danach abnehmen. Das übernehmen wir.",
    ],
    includes: [
      "Turnusmäßige Begehung mit schriftlichem Protokoll",
      "Fotodokumentation von Mängeln und Schäden",
      "Aufschließen und Abnahme bei Fremdfirmen",
      "Kontrolle von Heizung, Technikräumen und Zählern",
      "Überwachung von Wartungsintervallen und Prüffristen",
      "Meldung an die Verwaltung mit Handlungsempfehlung",
      "Schlüsselverwaltung nach Absprache",
    ],
    audience: [
      "Hausverwaltungen ohne eigenes Personal vor Ort",
      "Eigentümer von Renditeobjekten außerhalb der Region",
      "WEG-Verwalter mit Objekten im Rhein-Lahn-Kreis",
    ],
    priceNote:
      "Objektbetreuung rechnen wir pauschal pro Objekt und Monat ab. Grundlage sind Begehungsturnus, Anzahl der Einheiten und der Umfang der Dokumentation. Fremdfirmen-Koordination und Sondertermine werden separat ausgewiesen.",
    faqs: [
      {
        q: "In welcher Form bekommen wir die Dokumentation?",
        a: "Als Protokoll mit Fotos, per E-Mail nach jeder Begehung. Auf Wunsch in einer Struktur, die zu Ihrem Verwaltungsprogramm passt.",
      },
      {
        q: "Betreuen Sie auch Objekte, die uns nicht gehören?",
        a: "Ja. Ein großer Teil unserer Aufträge kommt von Verwaltungen, die für Dritte handeln. Die Abrechnung läuft dann über die Verwaltung.",
      },
      {
        q: "Was passiert bei einem Schaden außerhalb der Begehung?",
        a: "Rufen Sie an. Wir fahren hin, sichern die Lage und melden zurück, was es braucht. Größere Reparaturen stimmen wir vorher ab.",
      },
    ],
    related: ["hausmeisterservice", "kleinreparaturen", "notdienst"],
    towns: true,
  },
  {
    slug: "gartenpflege",
    short: "Gartenpflege",
    name: "Gartenpflege & Grünpflege",
    h1: "gartenpflege",
    metaTitle:
      "Gartenpflege & Grünpflege Lahnstein, Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Rasen, Hecken, Baumschnitt und Grünpflege für Wohnanlagen und Privatgärten in Lahnstein, Koblenz, Braubach und Umgebung. Festpreis, Abtransport inklusive.",
    lede: "Rasen, Hecken, Beete, Wege — einmalig auf Vordermann gebracht oder das ganze Jahr über gehalten.",
    body: [
      "Grünpflege ist die Leistung, die am schnellsten auffällt, wenn sie fehlt. Bei Mietobjekten entscheidet der Zustand der Außenanlage mit darüber, wie eine Wohnung besichtigt wird; bei Gewerbeobjekten ist es das Erste, was ein Kunde sieht.",
      "Wir arbeiten sowohl im Turnus — Rasen alle zwei Wochen in der Saison, Hecken zweimal im Jahr — als auch einmalig, wenn ein Grundstück zugewachsen ist und wieder in einen pflegbaren Zustand muss. Das Schnittgut nehmen wir mit.",
    ],
    includes: [
      "Rasen mähen, vertikutieren, Kanten stechen",
      "Hecken- und Formschnitt",
      "Baumschnitt im zulässigen Rahmen",
      "Beete anlegen, jäten, mulchen",
      "Laub räumen und entsorgen",
      "Wege und Pflaster von Wildkraut befreien",
      "Grundstücksfreischnitt bei verwilderten Flächen",
      "Abtransport und fachgerechte Entsorgung des Schnittguts",
    ],
    audience: [
      "Wohnanlagen mit gemeinschaftlicher Außenanlage",
      "Gewerbeobjekte und Praxen mit Vorgarten",
      "Privatgärten, deren Eigentümer die Arbeit nicht mehr selbst machen",
      "Erben und Verkäufer, die ein Grundstück herrichten müssen",
    ],
    priceNote:
      "Einmalige Einsätze rechnen wir nach Stundensatz plus Entsorgung ab, laufende Pflege pauschal pro Saison oder pro Einsatz. Bei größeren Flächen sehen wir uns das Grundstück vorher an und geben einen Festpreis.",
    faqs: [
      {
        q: "Wann darf eine Hecke geschnitten werden?",
        a: "Ein starker Rückschnitt oder das Auf-den-Stock-Setzen ist nach §39 Bundesnaturschutzgesetz vom 1. März bis 30. September nicht zulässig. Ein schonender Form- und Pflegeschnitt bleibt auch im Sommer erlaubt, solange keine Vögel brüten. Wir prüfen das vor Ort, bevor die Schere ansetzt.",
      },
      {
        q: "Nehmen Sie das Schnittgut mit?",
        a: "Ja, standardmäßig. Die Entsorgung weisen wir im Angebot getrennt aus, damit Sie sehen, was Arbeit und was Deponie kostet.",
      },
      {
        q: "Übernehmen Sie auch Hanglagen?",
        a: "Ja. Zwischen Lahnstein, Braubach und dem Mittelrheintal ist kaum ein Grundstück eben — Hang- und Terrassenlagen sind für uns der Normalfall, nicht der Sonderfall.",
      },
      {
        q: "Fällen Sie auch Bäume?",
        a: "Kleinere Bäume und Rückschnitte ja. Bei großen Bäumen, Nachbargrenzen oder gesatzter Baumschutzsatzung sagen wir Ihnen ehrlich, wenn ein Fachbetrieb mit Seilklettertechnik die richtige Adresse ist.",
      },
    ],
    related: ["hausmeisterservice", "winterdienst", "entruempelung"],
    towns: true,
  },
  {
    slug: "winterdienst",
    short: "Winterdienst",
    name: "Winterdienst",
    h1: "winterdienst",
    metaTitle:
      "Winterdienst Lahnstein, Koblenz & Umgebung | G.A Hausmeisterservice",
    metaDescription:
      "Winterdienst mit Räum- und Streupflicht-Übernahme für Gehwege, Zufahrten und Parkplätze in Lahnstein, Koblenz und im Rhein-Lahn-Kreis. Dokumentiert und saisonvertraglich.",
    lede: "Räumen, streuen, dokumentieren — damit die Verkehrssicherungspflicht nicht an Ihnen hängen bleibt.",
    body: [
      "Die Räum- und Streupflicht liegt bei der Gemeinde, wird per Satzung aber fast überall auf die Anlieger übertragen — und von dort per Mietvertrag oft weiter auf die Mieter. Wer sie tatsächlich erfüllt, entscheidet sich morgens um sechs. Wenn dann jemand auf Ihrem Gehweg stürzt, zählt nicht die gute Absicht, sondern was nachweisbar getan wurde.",
      "Wir übernehmen die Arbeit vertraglich, fahren im Winterhalbjahr kontrolliert an und dokumentieren jeden Einsatz mit Datum, Uhrzeit und Streumittel. Diese Dokumentation ist der Teil, der im Streitfall zählt — und der Teil, den die meisten vergessen.",
    ],
    includes: [
      "Räumen von Gehwegen, Zuwegen und Eingängen",
      "Streuen mit abstumpfendem Streumittel",
      "Zufahrten, Höfe und Stellplätze nach Vereinbarung",
      "Kontrollfahrten bei angekündigtem Frost",
      "Einsatzdokumentation mit Datum, Uhrzeit und Mittel",
      "Bereitstellung und Nachfüllen der Streugutkiste",
      "Abräumen des Streuguts zum Saisonende",
    ],
    audience: [
      "Vermieter, die die Pflicht nicht auf Mieter abwälzen wollen",
      "WEG mit gemeinschaftlichen Zuwegen",
      "Gewerbeobjekte mit Kundenparkplatz",
      "Eigentümer, die im Winter nicht vor Ort sind",
    ],
    priceNote:
      "Winterdienst läuft über einen Saisonvertrag für das Winterhalbjahr, üblicherweise November bis März. Der Pauschalpreis richtet sich nach Quadratmetern, Anzahl der Flächen und der vereinbarten Räumzeit. Streumittel weisen wir getrennt aus.",
    faqs: [
      {
        q: "In welchem Zeitraum muss geräumt werden?",
        a: "In Rheinland-Pfalz regeln das die kommunalen Satzungen; werktags gilt üblicherweise ein Zeitfenster von etwa 7 bis 20 Uhr, sonn- und feiertags mit späterem Beginn. Die genauen Zeiten stehen in der Satzung Ihrer Gemeinde — sagen Sie uns den Ort, wir richten den Vertrag danach aus.",
      },
      {
        q: "Ist Streusalz erlaubt?",
        a: "Viele Kommunen schränken Salz auf Gehwegen ein oder verbieten es. Wir streuen deshalb standardmäßig abstumpfend mit Splitt und setzen Salz nur dort ein, wo es zulässig und nötig ist — etwa bei Blitzeis auf einer Rampe.",
      },
      {
        q: "Was passiert, wenn trotzdem jemand stürzt?",
        a: "Dann zählt die Dokumentation. Wir protokollieren jeden Einsatz mit Uhrzeit und Streumittel; dieses Protokoll bekommen Sie und Ihre Versicherung. Deshalb ist es Teil des Vertrags und kein Extra.",
      },
      {
        q: "Räumen Sie auch bei Nacht?",
        a: "Bei Frostlage fahren wir vor Beginn der Räumzeit an, damit der Weg begehbar ist, wenn die Pflicht greift. Die genaue Anfahrtszeit vereinbaren wir im Saisonvertrag.",
      },
    ],
    related: ["hausmeisterservice", "gartenpflege", "objektbetreuung"],
    towns: true,
  },
  {
    slug: "treppenhausreinigung",
    short: "Treppenhausreinigung",
    name: "Treppenhausreinigung & Gebäudereinigung",
    h1: "treppenhaus­reinigung",
    metaTitle:
      "Treppenhausreinigung Lahnstein & Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Treppenhausreinigung und Unterhaltsreinigung für Mehrfamilienhäuser in Lahnstein, Koblenz, Braubach und Umgebung. Fester Turnus, feste Ansprechpartner.",
    lede: "Der Turnus, der im Mietshaus für Ruhe sorgt — ohne Putzplan an der Wand.",
    body: [
      "Der Reinigungsplan im Treppenhaus ist in vielen Mehrfamilienhäusern die häufigste Ursache für Streit. Wer kehrt das Kellergeschoss, wer wischt nach dem Umzug, wer war letzte Woche dran. Sobald eine Firma den Turnus übernimmt, ist die Frage vom Tisch.",
      "Wir reinigen im festen Rhythmus, mit gleichbleibendem Umfang und ohne dass jemand im Haus koordinieren muss. Der Aufwand pro Wohneinheit ist überschaubar und lässt sich als Betriebskosten umlegen.",
    ],
    includes: [
      "Treppen, Podeste und Handläufe reinigen",
      "Eingangsbereich, Briefkastenanlage und Glasflächen",
      "Kellergänge und Nebenräume nach Turnus",
      "Aufzugkabine wischen",
      "Mülltonnenstandplatz reinigen",
      "Fensterreinigung im Treppenhaus nach Vereinbarung",
      "Grundreinigung nach Umzug oder Bauarbeiten",
    ],
    audience: [
      "Eigentümer von Mehrfamilienhäusern",
      "WEG, die den Putzplan abschaffen wollen",
      "Hausverwaltungen mit mehreren Häusern in einer Straße",
      "Gewerbeobjekte mit gemeinsamem Treppenhaus",
    ],
    priceNote:
      "Wir rechnen pauschal pro Monat ab, gestaffelt nach Anzahl der Geschosse, Wohneinheiten und dem gewünschten Turnus (wöchentlich oder vierzehntägig). Grundreinigungen und Sonderfälle wie Bauschmutz kalkulieren wir gesondert.",
    faqs: [
      {
        q: "Sind die Kosten auf die Mieter umlegbar?",
        a: "Ja. Gebäudereinigung gehört nach §2 Betriebskostenverordnung zu den umlagefähigen Betriebskosten, solange der Mietvertrag die Umlage vorsieht. Sie bekommen eine Rechnung, die sich sauber in die Nebenkostenabrechnung übernehmen lässt.",
      },
      {
        q: "Wie oft wird gereinigt?",
        a: "Üblich sind wöchentlich oder vierzehntägig. Bei Häusern mit viel Durchgangsverkehr oder Gewerbe im Erdgeschoss empfehlen wir wöchentlich, sonst reicht meistens der Zwei-Wochen-Turnus.",
      },
      {
        q: "Brauchen Sie einen Schlüssel und Zugang zu Wasser?",
        a: "Ja — einen Schlüssel für Haustür und Kellerzugang sowie einen Wasseranschluss und Strom im Haus. Die Schlüsselübergabe dokumentieren wir schriftlich.",
      },
    ],
    related: ["hausmeisterservice", "objektbetreuung", "entruempelung"],
    towns: true,
  },
  {
    slug: "entruempelung",
    short: "Entrümpelung",
    name: "Entrümpelung & Haushaltsauflösung",
    h1: "entrümpelung",
    metaTitle:
      "Entrümpelung & Haushaltsauflösung Lahnstein, Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Entrümpelung von Keller, Dachboden, Wohnung oder Garage in Lahnstein, Koblenz und Umgebung — besenrein übergeben, fachgerecht entsorgt. Festpreis nach Besichtigung.",
    lede: "Keller, Dachboden, Garage oder ganze Wohnung — geräumt, besenrein übergeben, fachgerecht entsorgt.",
    body: [
      "Entrümpelungen stehen meistens unter Zeitdruck: eine Wohnung muss zum Monatsende übergeben werden, ein Haus soll verkauft werden, ein Nachlass ist zu ordnen. Wir sehen uns das Objekt vorher an, nennen einen Festpreis und halten ihn.",
      "Was verwertbar ist, wird verwertet — das senkt die Entsorgungskosten und steht im Angebot. Was auf die Deponie muss, wird nach Fraktion getrennt und mit Nachweis entsorgt. Am Ende ist das Objekt besenrein.",
    ],
    includes: [
      "Kellerräume, Dachböden, Garagen und Schuppen",
      "Komplette Wohnungen und Haushaltsauflösungen",
      "Nachlassräumungen nach Absprache mit den Erben",
      "Demontage von Einbauküchen und Möbeln",
      "Sortenreine Trennung und Entsorgung mit Nachweis",
      "Verwertung brauchbarer Gegenstände, angerechnet im Angebot",
      "Besenreine Übergabe",
    ],
    audience: [
      "Erbengemeinschaften und Nachlassverwalter",
      "Vermieter bei Mieterwechsel",
      "Verkäufer, die ein Objekt räumen müssen",
      "Privathaushalte vor einem Umzug",
    ],
    priceNote:
      "Entrümpelungen kalkulieren wir nach Besichtigung als Festpreis — Grundlage sind Volumen, Zugang (Etage, Aufzug, Parkmöglichkeit) und Entsorgungsart. Verwertbares rechnen wir gegen. Sie bekommen eine Summe, keine offene Stundenliste.",
    faqs: [
      {
        q: "Was kostet eine Entrümpelung?",
        a: "Das hängt am Volumen und am Zugang. Ein Kellerabteil in einem Haus mit Hofzufahrt ist etwas völlig anderes als eine Vier-Zimmer-Wohnung im dritten Stock ohne Aufzug in einer Altstadtgasse. Deshalb besichtigen wir vorher und nennen einen Festpreis, statt am Telefon zu raten.",
      },
      {
        q: "Wird Verwertbares angerechnet?",
        a: "Ja. Was sich verkaufen oder weitergeben lässt, ziehen wir vom Preis ab und weisen es im Angebot aus.",
      },
      {
        q: "Bekommen wir einen Entsorgungsnachweis?",
        a: "Ja. Das ist besonders bei Nachlässen und bei gewerblichen Auftraggebern wichtig — Sie erhalten die Belege der Entsorgungsstellen.",
      },
      {
        q: "Wie schnell können Sie räumen?",
        a: "Bei Kellern und kleineren Flächen meist innerhalb einer Woche. Für eine Wohnungsübergabe zum Monatsende brauchen wir etwas Vorlauf — rufen Sie früh an, dann geht es fast immer.",
      },
    ],
    related: ["abbruch-abrissarbeiten", "treppenhausreinigung", "gartenpflege"],
    towns: true,
  },
  {
    slug: "montagearbeiten",
    short: "Montagearbeiten",
    name: "Montagearbeiten",
    h1: "montagearbeiten",
    metaTitle: "Montagearbeiten Lahnstein & Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Möbelmontage, Küchenaufbau, Türen, Rollläden und Sichtschutz — fachgerecht montiert in Lahnstein, Koblenz und Umgebung. Termin nach Absprache.",
    lede: "Aufgebaut, ausgerichtet, befestigt — vom Schrank bis zur Küche.",
    body: [
      "Montage klingt einfach und ist es selten. Der Unterschied zwischen einem Regal, das hält, und einem, das aus der Wand kommt, liegt im Dübel und in der Frage, was hinter dem Putz sitzt. Wir prüfen den Untergrund, bevor wir bohren.",
      "Wir montieren neu gelieferte Möbel, bauen Küchen auf, setzen Türen und Zargen, montieren Rollläden, Markisen und Sichtschutz. Wenn Sie das Material selbst gekauft haben, ist das kein Problem — wir montieren auch, was nicht von uns kommt.",
    ],
    includes: [
      "Möbelmontage und Demontage",
      "Küchenaufbau inklusive Anschluss der Geräte im zulässigen Rahmen",
      "Türen, Zargen und Beschläge",
      "Rollläden, Jalousien und Insektenschutz",
      "Markisen und Sichtschutzelemente",
      "Wandmontagen: Regale, TV-Halterungen, Spiegel, Hängeschränke",
      "Zaun- und Torelemente",
    ],
    audience: [
      "Privathaushalte nach Umzug oder Möbelkauf",
      "Vermieter bei der Wohnungsvorbereitung",
      "Büros und Praxen bei der Einrichtung",
    ],
    priceNote:
      "Montagearbeiten rechnen wir nach Stundensatz plus Material ab. Bei planbaren Aufträgen — etwa einem kompletten Küchenaufbau — geben wir vorab einen Festpreis, wenn wir die Aufbauanleitung oder den Küchenplan sehen.",
    faqs: [
      {
        q: "Montieren Sie auch Möbel, die ich woanders gekauft habe?",
        a: "Ja. Herkunft und Marke sind egal, solange die Teile vollständig sind.",
      },
      {
        q: "Können Sie die Küchengeräte anschließen?",
        a: "Wasser und Abwasser sowie das Einsetzen steckerfertiger Geräte übernehmen wir. Festanschlüsse an Gas oder eine neue Elektroleitung gehören in die Hand des jeweiligen Fachbetriebs — das sagen wir Ihnen vorher, nicht hinterher.",
      },
      {
        q: "Was ist bei Altbauwänden zu beachten?",
        a: "In den Altbauten in Ober- und Niederlahnstein trifft man auf alles von Vollziegel bis Hohllochstein und Lehmputz. Wir prüfen den Untergrund und wählen die Befestigung danach — pauschale Dübel gibt es bei uns nicht.",
      },
    ],
    related: [
      "kleinreparaturen",
      "hausmeisterservice",
      "abbruch-abrissarbeiten",
    ],
    towns: false,
  },
  {
    slug: "kleinreparaturen",
    short: "Kleinreparaturen",
    name: "Kleinreparaturen & Handwerkerservice",
    h1: "kleinreparaturen",
    metaTitle:
      "Kleinreparaturen & Handwerkerservice Lahnstein | G.A Hausmeisterservice",
    metaDescription:
      "Kleinreparaturen rund ums Haus in Lahnstein, Koblenz und Umgebung: Türen, Schlösser, Silikon, Beleuchtung, Wasserhähne. Schnelle Termine, ehrliche Abgrenzung.",
    lede: "Die Arbeiten, für die kein Fachbetrieb anrückt — und die trotzdem jemand machen muss.",
    body: [
      "Eine klemmende Tür, ein tropfender Wasserhahn, eine Silikonfuge, die schwarz wird: Für solche Arbeiten bekommt man selten kurzfristig einen Termin, weil sie sich für einen spezialisierten Betrieb nicht rechnen. Genau das ist unser Bereich.",
      "Wir sagen Ihnen auch, wo unsere Grenze liegt. Elektroarbeiten hinter der Steckdose, Eingriffe an der Gasleitung oder eine Reparatur an der Heizungsanlage gehören zum Fachbetrieb. Wir schicken Sie dann weiter, statt etwas zu machen, das später teurer wird.",
    ],
    includes: [
      "Türen und Fenster einstellen, Beschläge tauschen",
      "Schlösser und Zylinder wechseln",
      "Silikonfugen erneuern in Bad und Küche",
      "Wasserhähne, Siphons und Duschköpfe tauschen",
      "Leuchten, Schalter und Steckdosen im zulässigen Rahmen",
      "Kleine Maler- und Ausbesserungsarbeiten",
      "Dachrinnen reinigen und Fallrohre freimachen",
      "Wandhalterungen, Handläufe, Haltegriffe",
    ],
    audience: [
      "Mieter und Eigentümer mit einer Liste kleiner Sachen",
      "Vermieter zwischen zwei Mietverhältnissen",
      "Ältere Menschen, die nicht mehr auf die Leiter steigen",
    ],
    priceNote:
      "Kleinreparaturen laufen über Stundensatz plus Material, angefangene Viertelstunden werden nicht aufgerundet. Wenn Sie mehrere Kleinigkeiten sammeln, wird ein Termin daraus — das ist deutlich günstiger als drei Anfahrten.",
    faqs: [
      {
        q: "Lohnt sich ein Termin für eine einzelne Kleinigkeit?",
        a: "Ehrliche Antwort: selten. Die Anfahrt kostet unabhängig von der Arbeit. Sammeln Sie, was anfällt — dann erledigen wir es in einem Durchgang.",
      },
      {
        q: "Machen Sie auch Elektroarbeiten?",
        a: "Leuchten tauschen und steckerfertige Geräte anschließen ja. Alles, was in die feste Installation eingreift, gehört zum Elektrofachbetrieb. Das ist keine Bequemlichkeit, sondern Vorschrift.",
      },
      {
        q: "Bringen Sie das Material mit?",
        a: "Auf Wunsch ja, dann steht es mit Beleg auf der Rechnung. Sie können es auch selbst besorgen — sagen Sie einfach vorher Bescheid.",
      },
    ],
    related: ["montagearbeiten", "hausmeisterservice", "notdienst"],
    towns: false,
  },
  {
    slug: "abbruch-abrissarbeiten",
    short: "Abbruch & Abriss",
    name: "Abbruch- & Abrissarbeiten",
    h1: "abbruch & abriss",
    metaTitle:
      "Abbruch- & Abrissarbeiten Lahnstein, Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Rückbau und Abbruch im Innenbereich, Garagen, Schuppen und Nebengebäude in Lahnstein, Koblenz und Umgebung. Sortenreine Entsorgung mit Nachweis.",
    lede: "Rückbau im Bestand, Nebengebäude, Garagen — abgetragen, getrennt, abgefahren.",
    body: [
      "Vor jeder Sanierung steht der Rückbau. Estrich raus, Fliesen ab, eine nichttragende Wand weg, das alte Bad komplett entkernt — das ist schmutzige, laute Arbeit, die den Zeitplan der ganzen Baustelle bestimmt.",
      "Wir arbeiten sauber getrennt, weil das die Entsorgungskosten bestimmt: Bauschutt, Holz, Metall und Mischabfall gehen getrennt vom Grundstück. Was tragend ist oder wo Statik im Spiel ist, machen wir nur mit Freigabe eines Statikers — und sagen es Ihnen vorher.",
    ],
    includes: [
      "Entkernung von Wohnungen und Bädern",
      "Rückbau nichttragender Wände",
      "Estrich, Fliesen und Bodenbeläge entfernen",
      "Abbruch von Garagen, Schuppen und Carports",
      "Rückbau von Terrassen, Pflaster und Mauern",
      "Sortenreine Trennung und Entsorgung mit Nachweis",
      "Container stellen und abfahren lassen",
    ],
    audience: [
      "Eigentümer vor einer Sanierung",
      "Käufer eines Objekts mit Renovierungsstau",
      "Gewerbe beim Umbau von Flächen",
    ],
    priceNote:
      "Abbrucharbeiten kalkulieren wir nach Besichtigung. Preisbestimmend sind Kubatur, Zugang zum Grundstück, Containerstellplatz und die Entsorgungsfraktionen. Sie bekommen ein Angebot, in dem Arbeit und Entsorgung getrennt ausgewiesen sind.",
    faqs: [
      {
        q: "Brauche ich für einen Abriss eine Genehmigung?",
        a: "Für Innenrückbau ohne Eingriff in die Statik in der Regel nicht. Für den Abbruch ganzer Gebäude, bei Denkmalschutz oder im UNESCO-Welterbegebiet Oberes Mittelrheintal sehr wohl. Wir sagen Ihnen, welche Fälle das betrifft, und arbeiten erst, wenn die Freigabe da ist.",
      },
      {
        q: "Entfernen Sie auch Asbest oder alte Dämmung?",
        a: "Nein. Asbest, KMF und ähnliche Schadstoffe gehören in die Hand eines zugelassenen Sanierungsbetriebs nach TRGS 519. Wenn wir beim Rückbau darauf stoßen, stoppen wir und sagen Bescheid.",
      },
      {
        q: "Kümmern Sie sich um den Container?",
        a: "Ja, Stellung und Abfuhr organisieren wir mit. Auf beengten Grundstücken klären wir vorher, wo der Container überhaupt stehen kann.",
      },
    ],
    related: ["entruempelung", "montagearbeiten", "objektbetreuung"],
    towns: false,
  },
  {
    slug: "notdienst",
    short: "Notdienst",
    name: "Notdienst",
    h1: "notdienst",
    metaTitle:
      "Hausmeister-Notdienst Lahnstein & Koblenz | G.A Hausmeisterservice",
    metaDescription:
      "Notdienst für Objekte in Lahnstein, Koblenz und im Rhein-Lahn-Kreis: Wasser, Sturmschaden, verstopfte Leitung, Türöffnung im Objekt. Anruf genügt.",
    lede: "Wenn etwas nicht bis Montag warten kann — Wasser, Sturm, verstopfte Leitung, offene Tür.",
    body: [
      "Bei einem Schaden zählt die erste Stunde. Wasser, das durch eine Decke läuft, verursacht in dieser Zeit mehr Kosten als die gesamte spätere Reparatur. Der Notdienst hat deshalb ein Ziel: Lage sichern, Schaden begrenzen, dann in Ruhe reparieren.",
      "Wir kommen aus Lahnstein — das ist der eigentliche Punkt. Ein Dienstleister aus einer anderen Region ist irgendwann da; wir sind im Kernbereich zwischen Lahnstein, Koblenz und Braubach in kurzer Zeit vor Ort.",
    ],
    includes: [
      "Wasserschaden sichern und Zulauf abstellen",
      "Verstopfte Abläufe und Fallrohre freimachen",
      "Sturmschäden sichern und lose Teile abnehmen",
      "Notabdichtung nach Unwetter",
      "Türöffnung an gemeinschaftlichen Zugängen im betreuten Objekt",
      "Absperren und Absichern von Gefahrenstellen",
      "Kontrollfahrt nach Unwetterwarnung",
    ],
    audience: [
      "Verwaltungen mit Objekten in der Region",
      "Eigentümer, die nicht vor Ort wohnen",
      "Gewerbeobjekte, die am nächsten Morgen öffnen müssen",
    ],
    priceNote:
      "Notdiensteinsätze rechnen wir nach Anfahrt und Stundensatz ab; außerhalb der regulären Zeiten kommt ein Zuschlag dazu, den wir am Telefon nennen, bevor wir losfahren. Keine Überraschung auf der Rechnung.",
    faqs: [
      {
        q: "Wie schnell sind Sie da?",
        a: "Im Kernbereich Lahnstein, Koblenz, Braubach und Bad Ems in der Regel kurzfristig. Eine belastbare Zeit nennen wir Ihnen am Telefon — abhängig davon, wo wir gerade sind.",
      },
      {
        q: "Ersetzt der Notdienst Feuerwehr oder Havariedienst?",
        a: "Nein. Bei Gasgeruch, Brand, Personengefahr oder einem Rohrbruch, den nur der Versorger abstellen kann, rufen Sie 112 beziehungsweise den Netzbetreiber. Wir machen das, was danach kommt.",
      },
      {
        q: "Öffnen Sie auch Wohnungstüren?",
        a: "Wir öffnen gemeinschaftliche Zugänge in Objekten, die wir betreuen. Für private Wohnungstüren ist ein Schlüsseldienst zuständig — das ist eine Frage der Berechtigung, nicht des Könnens.",
      },
    ],
    related: ["hausmeisterservice", "objektbetreuung", "kleinreparaturen"],
    towns: false,
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** Services that get per-town landing pages. */
export const townServices = services.filter((s) => s.towns);
