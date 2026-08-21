export type Article = {
  slug: string;
  title: string;
  /** Short label for breadcrumbs, where the full title would overflow. */
  crumb?: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence answer, lifted straight into the AI-overview / snippet slot. */
  answer: string;
  updated: string;
  readingMinutes: number;
  sections: { h: string; p: string[] }[];
  faqs?: { q: string; a: string }[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "was-kostet-ein-hausmeisterservice",
    title: "Was kostet ein Hausmeisterservice?",
    crumb: "Kosten",
    h1: "was kostet ein hausmeisterservice?",
    metaTitle: "Was kostet ein Hausmeisterservice? Preismodelle erklärt | G.A",
    metaDescription:
      "Pauschale, Stundensatz oder Festpreis: die drei Abrechnungsmodelle im Hausmeisterservice, was den Preis wirklich treibt und welche Posten umlagefähig sind.",
    answer:
      "Hausmeisterservice wird auf drei Arten abgerechnet: als Monatspauschale für laufende Betreuung, nach Stundensatz plus Material für einzelne Arbeiten, oder als Festpreis nach Besichtigung bei planbaren Aufträgen wie Entrümpelung und Grünpflege.",
    updated: "2026-08",
    readingMinutes: 5,
    sections: [
      {
        h: "Die drei Abrechnungsmodelle",
        p: [
          "Wer nach Preisen für einen Hausmeisterservice sucht, findet meist Stundensätze — und die sagen für sich genommen wenig. Entscheidend ist, welches der drei Modelle zu Ihrem Objekt passt.",
          "Die Monatspauschale ist das Modell für laufende Betreuung. Sie vereinbaren einen festen Leistungsumfang in einem festen Turnus und zahlen dafür jeden Monat denselben Betrag. Der Vorteil liegt in der Planbarkeit — für die Nebenkostenabrechnung und für Ihre eigene Kalkulation.",
          "Der Stundensatz plus Material passt für Arbeiten, deren Umfang sich vorher nicht sicher bestimmen lässt: Kleinreparaturen, Montage, alles, wo man erst beim Öffnen sieht, was dahintersteckt. Achten Sie darauf, wie abgerechnet wird — im Viertelstundentakt oder in vollen angefangenen Stunden macht bei kleinen Aufträgen einen erheblichen Unterschied.",
          "Der Festpreis nach Besichtigung ist das Modell für alles, was man vorher anschauen kann: Entrümpelung, Abbruch, Grundstücksfreischnitt, Grundreinigung. Wenn ein Anbieter am Telefon einen Festpreis nennt, ohne das Objekt gesehen zu haben, ist entweder der Preis großzügig kalkuliert oder er wird später korrigiert.",
        ],
      },
      {
        h: "Was den Preis tatsächlich treibt",
        p: [
          "Der größte Kostenfaktor ist selten die eigentliche Arbeit, sondern der Zugang. Eine Vier-Zimmer-Wohnung im dritten Obergeschoss ohne Aufzug, in einer Altstadtgasse ohne Halteverbot, kostet ein Vielfaches derselben Wohnung im Erdgeschoss mit Hofzufahrt. Dasselbe gilt für den Container beim Abbruch: Wenn er nicht aufs Grundstück passt, braucht es eine Sondernutzungserlaubnis und kürzere Wege.",
          "Der zweite Faktor ist die Entsorgung. Bei Entrümpelung und Rückbau macht die Deponie oft mehr als die Hälfte der Rechnung aus. Deshalb lohnt sich sortenreine Trennung, und deshalb sollten Arbeit und Entsorgung im Angebot getrennt ausgewiesen sein — sonst können Sie zwei Angebote nicht vergleichen.",
          "Der dritte Faktor ist die Anfahrt. Bei einem Objekt in einem kleinen Ort abseits der Hauptstrecke schlägt eine einzelne Anfahrt für eine Kleinigkeit unverhältnismäßig zu Buche. Sammeln Sie kleine Arbeiten und lassen Sie sie in einem Termin erledigen.",
        ],
      },
      {
        h: "Welche Kosten sind auf Mieter umlagefähig?",
        p: [
          "Nach §2 Nr. 14 der Betriebskostenverordnung sind die Kosten der Hauswartung umlagefähig — allerdings nur der Teil, der auf laufende Betreuung entfällt. Instandhaltung, Instandsetzung und Verwaltungstätigkeiten müssen herausgerechnet werden. Eine Rechnung, die alles in einer Summe zusammenfasst, ist deshalb für die Nebenkostenabrechnung unbrauchbar.",
          "Gebäudereinigung, also auch die Treppenhausreinigung, fällt unter §2 Nr. 9 BetrKV und ist umlagefähig. Winterdienst wird üblicherweise über die Straßenreinigung nach §2 Nr. 8 BetrKV abgerechnet. In beiden Fällen muss die Umlage im Mietvertrag vereinbart sein.",
          "Praktischer Hinweis: Bitten Sie Ihren Dienstleister um eine Rechnung, die die umlagefähigen von den nicht umlagefähigen Positionen trennt. Das ist kein Sonderwunsch, sondern die Grundlage einer Abrechnung, die einer Prüfung standhält.",
        ],
      },
      {
        h: "Woran Sie ein belastbares Angebot erkennen",
        p: [
          "Ein gutes Angebot benennt den Leistungsumfang als Liste, nicht als Sammelbegriff. „Objektbetreuung“ ist keine Leistungsbeschreibung; „vierzehntägige Begehung mit Fotoprotokoll, Kontrolle von Beleuchtung und Entwässerung, Mülltonnenstellung“ ist eine.",
          "Es nennt außerdem den Turnus, die Kündigungsfrist und die Frage, was bei zusätzlichen Einsätzen gilt. Und es weist Material und Entsorgung getrennt aus. Fehlt eines davon, fragen Sie nach — die Antwort sagt Ihnen viel über den Betrieb.",
        ],
      },
    ],
    faqs: [
      {
        q: "Gibt es Pauschalpreise pro Quadratmeter?",
        a: "Für Treppenhausreinigung und Winterdienst wird häufig nach Fläche kalkuliert, für Hausmeisterservice fast nie — dort zählen Einheiten, Turnus und Umfang. Ein Quadratmeterpreis für „Hausmeisterservice“ ist meistens ein Lockangebot.",
      },
      {
        q: "Ist ein Jahresvertrag günstiger?",
        a: "In der Regel ja, weil der Dienstleister planen kann. Achten Sie aber auf die Kündigungsfrist: Ein günstiger Preis mit zwölfmonatiger Bindung ist teuer, wenn die Leistung nicht stimmt.",
      },
    ],
    related: ["hausmeisterservice", "objektbetreuung"],
  },
  {
    slug: "raeum-und-streupflicht",
    title: "Räum- und Streupflicht: Wer muss wann räumen?",
    crumb: "Räumpflicht",
    h1: "räum- und streupflicht",
    metaTitle: "Räum- und Streupflicht Rheinland-Pfalz: Wer räumt wann? | G.A",
    metaDescription:
      "Wer die Räum- und Streupflicht trägt, welche Zeiten gelten, wann sie auf Mieter übergeht und warum die Dokumentation im Schadensfall entscheidend ist.",
    answer:
      "Die Räum- und Streupflicht liegt grundsätzlich bei der Gemeinde, wird per kommunaler Satzung aber fast überall auf die Anlieger übertragen. Vermieter können sie per Mietvertrag an Mieter weitergeben, behalten aber eine Kontrollpflicht.",
    updated: "2026-08",
    readingMinutes: 6,
    sections: [
      {
        h: "Die Kette: Gemeinde, Eigentümer, Mieter",
        p: [
          "Ausgangspunkt ist die Verkehrssicherungspflicht der Gemeinde für öffentliche Wege. In Rheinland-Pfalz erlaubt das Landesstraßengesetz den Kommunen, diese Pflicht für Gehwege per Satzung auf die Anlieger zu übertragen — und praktisch jede Gemeinde macht davon Gebrauch.",
          "Damit sitzt die Pflicht beim Grundstückseigentümer. Der kann sie im Mietvertrag an die Mieter weitergeben, aber nur ausdrücklich: Eine allgemeine Klausel in der Hausordnung reicht nach ständiger Rechtsprechung nicht aus. Und selbst bei wirksamer Übertragung bleibt beim Vermieter eine Kontrollpflicht — er muss stichprobenartig prüfen, ob tatsächlich geräumt wird.",
          "Genau an dieser Stelle entsteht das praktische Problem: Wer im Winter nicht vor Ort wohnt, kann diese Kontrolle nicht ausüben. Deshalb vergeben viele Eigentümer die Aufgabe lieber ganz an einen Dienstleister, statt sie auf Mieter zu verteilen und dann hoffen zu müssen.",
        ],
      },
      {
        h: "Welche Zeiten gelten?",
        p: [
          "Die konkreten Räumzeiten stehen in der Satzung der jeweiligen Gemeinde, nicht im Gesetz. Werktags gilt üblicherweise ein Fenster von etwa 7 bis 20 Uhr, an Sonn- und Feiertagen mit späterem Beginn, häufig 8 oder 9 Uhr.",
          "Das heißt: Bei Schneefall um 6 Uhr muss der Weg um 7 Uhr begehbar sein — nicht erst, wenn es aufgehört hat zu schneien. Bei anhaltendem Schneefall besteht eine Pflicht zur Wiederholung in zumutbaren Abständen. Bei extremem Dauerschneefall kann die Pflicht vorübergehend entfallen, aber darauf sollte sich niemand verlassen.",
          "Weil die Zeiten von Ort zu Ort abweichen, sollten Sie die Satzung Ihrer Gemeinde einmal nachlesen. Für Objekte, die wir betreuen, richten wir den Saisonvertrag danach aus.",
        ],
      },
      {
        h: "Salz oder Splitt?",
        p: [
          "Viele Kommunen schränken Streusalz auf Gehwegen ein oder verbieten es ganz — aus Rücksicht auf Bäume, Boden und Kanalisation. Zulässig und meist vorgeschrieben sind abstumpfende Mittel wie Splitt, Sand oder Granulat.",
          "Ausnahmen gelten in der Regel für besondere Gefahrenstellen: Treppen, Rampen, starkes Gefälle, Blitzeis. Auch hier lohnt der Blick in die Satzung. Und nicht vergessen: Das Streugut muss zum Saisonende wieder aufgenommen werden.",
        ],
      },
      {
        h: "Warum die Dokumentation der wichtigste Teil ist",
        p: [
          "Wenn jemand stürzt und Schadensersatz fordert, ist die entscheidende Frage nicht, ob geräumt wurde, sondern ob sich das beweisen lässt. Ohne Nachweis steht Aussage gegen Aussage — und die Beweislast liegt in der Praxis oft beim Pflichtigen.",
          "Ein belastbares Einsatzprotokoll hält pro Einsatz Datum, Uhrzeit, geräumte Flächen und verwendetes Streumittel fest. Bei uns ist das Bestandteil des Winterdienstvertrags und kein Zusatzposten — es ist der Teil, für den Sie den Vertrag eigentlich abschließen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Muss ich auch räumen, wenn ich im Urlaub bin?",
        a: "Ja. Die Pflicht ruht nicht, wenn Sie nicht da sind. Sie müssen für eine Vertretung sorgen — Nachbarn, Angehörige oder einen Dienstleister.",
      },
      {
        q: "Wie breit muss geräumt werden?",
        a: "Üblich ist ein Streifen, auf dem zwei Personen aneinander vorbeikommen — meist rund ein Meter, oft 1,20 m. Die genaue Breite steht in der kommunalen Satzung.",
      },
      {
        q: "Gilt die Pflicht auch für den Weg zur Haustür?",
        a: "Ja. Neben dem öffentlichen Gehweg müssen auch die Zuwege auf dem Grundstück sicher begehbar sein — dazu zählen Hauseingang, Müllplatz und Stellplätze.",
      },
    ],
    related: ["winterdienst", "hausmeisterservice"],
  },
  {
    slug: "hecke-schneiden-erlaubte-zeiten",
    title: "Hecke schneiden: Welche Zeiten sind erlaubt?",
    crumb: "Heckenschnitt",
    h1: "hecke schneiden: welche zeiten gelten?",
    metaTitle: "Hecke schneiden: erlaubte Zeiten nach §39 BNatSchG | G.A",
    metaDescription:
      "Vom 1. März bis 30. September ist der starke Rückschnitt von Hecken verboten. Was trotzdem erlaubt ist, welche Ausnahmen gelten und was bei Vogelbrut zu beachten ist.",
    answer:
      "Vom 1. März bis 30. September verbietet §39 Bundesnaturschutzgesetz das Roden und Auf-den-Stock-Setzen von Hecken. Schonende Form- und Pflegeschnitte bleiben ganzjährig erlaubt, solange kein Vogel im Gehölz brütet.",
    updated: "2026-08",
    readingMinutes: 4,
    sections: [
      {
        h: "Was das Gesetz verbietet — und was nicht",
        p: [
          "§39 Absatz 5 des Bundesnaturschutzgesetzes verbietet es, Hecken, lebende Zäune, Gebüsche und andere Gehölze in der Zeit vom 1. März bis zum 30. September abzuschneiden, auf den Stock zu setzen oder zu beseitigen. Der Zweck ist der Schutz brütender Vögel.",
          "Ausdrücklich erlaubt bleiben schonende Form- und Pflegeschnitte, die dem Zuwachs des laufenden oder vorangegangenen Jahres gelten. Praktisch heißt das: Die Hecke in Form halten dürfen Sie auch im Juni. Sie radikal einkürzen oder entfernen nicht.",
          "Die Grenze verläuft also nicht am Datum allein, sondern an der Eingriffstiefe. Wer im Sommer mehr als den Jahreszuwachs wegnimmt, bewegt sich außerhalb der Ausnahme — und Verstöße sind Ordnungswidrigkeiten, die je nach Bundesland empfindlich werden können.",
        ],
      },
      {
        h: "Die Brut geht dem Kalender vor",
        p: [
          "Auch ein erlaubter Pflegeschnitt darf nicht durchgeführt werden, wenn dabei ein besetztes Nest zerstört oder ein brütender Vogel vertrieben würde. §44 BNatSchG schützt Fortpflanzungsstätten unabhängig vom Datum.",
          "Deshalb gehört zu jedem Sommerschnitt eine Sichtkontrolle vorher. Wir schauen die Hecke durch, bevor die Schere ansetzt — und verschieben den Termin, wenn wir ein besetztes Nest finden. Das ist kein Formalismus, sondern der Unterschied zwischen Pflege und Ordnungswidrigkeit.",
        ],
      },
      {
        h: "Wann Sie den Termin am besten legen",
        p: [
          "Für den starken Rückschnitt bleibt das Fenster vom 1. Oktober bis Ende Februar. Ideal ist der frühe Herbst oder ein frostfreier Tag im Spätwinter — bei starkem Frost reißt der Schnitt und die Pflanze nimmt Schaden.",
          "Für den Formschnitt sind zwei Termine im Jahr üblich: einer im Juni nach dem ersten Austrieb, einer im späten Sommer. Wer nur einmal schneiden lässt, sollte den späteren Termin wählen.",
          "Ein Hinweis für Wohnanlagen: Planen Sie den Herbsttermin früh. Zwischen Oktober und Dezember sind die Kapazitäten in der Region knapp, weil alle im selben Fenster arbeiten müssen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Gilt das Verbot auch im eigenen Garten?",
        a: "Ja. §39 BNatSchG gilt unabhängig davon, ob die Hecke auf einem privaten Grundstück oder im öffentlichen Raum steht.",
      },
      {
        q: "Was ist mit einer Hecke, die über den Gehweg wächst?",
        a: "Der Rückschnitt zur Herstellung der Verkehrssicherheit ist zulässig, wenn er sich auf das Nötige beschränkt. Aufschieben lässt sich das nicht — überhängende Zweige über einem Gehweg sind ein Haftungsthema.",
      },
    ],
    related: ["gartenpflege", "hausmeisterservice"],
  },
  {
    slug: "entruempelung-ablauf",
    title: "Entrümpelung: Ablauf, Kosten und Vorbereitung",
    crumb: "Entrümpelung",
    h1: "entrümpelung: ablauf und kosten",
    metaTitle:
      "Entrümpelung: Ablauf, Kosten und Vorbereitung | G.A Hausmeisterservice",
    metaDescription:
      "Wie eine Entrümpelung abläuft, was den Preis bestimmt, was Sie vorher aussortieren sollten und worauf es bei Nachlass und Wohnungsübergabe ankommt.",
    answer:
      "Eine Entrümpelung läuft in vier Schritten: Besichtigung, Festpreisangebot, Räumung mit sortenreiner Trennung, besenreine Übergabe. Der Preis richtet sich nach Volumen, Zugang und Entsorgungsart — nicht nach der Quadratmeterzahl.",
    updated: "2026-08",
    readingMinutes: 5,
    sections: [
      {
        h: "Der Ablauf in vier Schritten",
        p: [
          "Am Anfang steht die Besichtigung. Ohne sie ist ein Festpreis nicht seriös zu kalkulieren, weil sich Volumen und Zugang am Telefon nicht einschätzen lassen. Die Besichtigung dauert selten länger als zwanzig Minuten.",
          "Danach kommt das Angebot — mit einer Summe, getrennt nach Arbeit und Entsorgung, und mit einer Angabe dazu, was als verwertbar gegengerechnet wird. Ist es angenommen, wird ein Termin vereinbart.",
          "Am Räumtag wird direkt getrennt: Sperrmüll, Holz, Metall, Elektrogeräte, Restmüll. Das ist kein Ordnungssinn, sondern Kostenrechnung — gemischte Fraktionen sind auf der Deponie am teuersten.",
          "Zum Schluss die besenreine Übergabe. Bei Mietwohnungen ist das der Zustand, den der Mietvertrag üblicherweise verlangt; bei Verkaufsobjekten die Grundlage für Besichtigungen.",
        ],
      },
      {
        h: "Was Sie vorher tun sollten",
        p: [
          "Gehen Sie einmal durch und nehmen Sie heraus, was Sie behalten wollen. Das klingt banal, ist aber der häufigste Grund für Ärger: Was am Räumtag noch dasteht, wird mitgenommen.",
          "Suchen Sie gezielt nach Unterlagen. In Kellern und auf Dachböden liegen erfahrungsgemäß Versicherungspolicen, Sparbücher, Urkunden und Fotos — bei Nachlässen ist das der Teil, der sich nicht ersetzen lässt.",
          "Klären Sie den Zugang: Wo kann das Fahrzeug stehen, gibt es einen Aufzug, brauchen wir eine Halteverbotszone? In engen Altstadtlagen — etwa in Braubach oder Oberlahnstein — ist das die Frage, die den Preis am stärksten bewegt.",
          "Und sagen Sie vorher, wenn Sondermüll dabei ist: Farben, Lösungsmittel, Altöl, Batterien oder Leuchtstoffröhren gehen nicht in den normalen Container.",
        ],
      },
      {
        h: "Nachlass: was zusätzlich zu bedenken ist",
        p: [
          "Bei einer Erbengemeinschaft sollten alle Beteiligten der Räumung zustimmen, bevor sie beginnt. Räumen ohne Zustimmung ist ein Streit, den niemand braucht.",
          "Lassen Sie sich in jedem Fall die Entsorgungsnachweise geben. Sie sind der Beleg dafür, dass ordnungsgemäß entsorgt wurde — und in einer Erbauseinandersetzung der Nachweis dafür, was tatsächlich passiert ist.",
          "Wenn Wertgegenstände im Spiel sind, holen Sie eine Einschätzung ein, bevor geräumt wird. Ein seriöser Betrieb weist Sie darauf hin, statt es stillschweigend mitzunehmen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert eine Entrümpelung?",
        a: "Ein Kellerabteil ist eine Sache von Stunden, eine vollständige Wohnung dauert je nach Volumen ein bis zwei Tage. Der Zugang bestimmt die Dauer stärker als die Menge.",
      },
      {
        q: "Wird Verwertbares angerechnet?",
        a: "Bei einem seriösen Angebot ja, und es steht dort ausgewiesen. Ein pauschales „wir rechnen an“ ohne Position im Angebot ist wertlos.",
      },
      {
        q: "Muss ich beim Termin dabei sein?",
        a: "Am Anfang und am Ende ist es sinnvoll — für die Übergabe der Schlüssel und die Abnahme. Dazwischen nicht.",
      },
    ],
    related: ["entruempelung", "abbruch-abrissarbeiten"],
  },
];

export const articleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
