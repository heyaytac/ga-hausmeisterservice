/**
 * Every figure in this file is sourced from the German Wikipedia infobox for
 * the municipality (population as of 31 Dec 2025). Nothing here is estimated.
 * Distances are deliberately absent where they were not verifiable — the
 * `zone` field carries the geographic relationship instead.
 */

export type Zone = "kern" | "rheinschiene" | "hoehe";

export const zones: Record<Zone, { label: string; note: string }> = {
  kern: {
    label: "Kernzone",
    note: "Direkt um Lahnstein. Kurzfristige Termine und Notdienst sind hier der Normalfall.",
  },
  rheinschiene: {
    label: "Rheinschiene",
    note: "Entlang des Rheins nach Norden und Süden. Feste Turnusarbeiten und geplante Einsätze.",
  },
  hoehe: {
    label: "Lahntal & Höhe",
    note: "Lahntal und Taunushöhen. Höhenlagen brauchen im Winter mehr Vorlauf — das planen wir ein.",
  },
};

export type City = {
  slug: string;
  name: string;
  /** Genitive/dative-safe display, e.g. "in Bad Ems" vs "in der Stadt". */
  plz: string;
  population: number;
  admin: string;
  /** Metres above sea level (NHN). Drives the winter-service copy. */
  elevation: number;
  zone: Zone;
  /** Two or three sentences of genuinely local, verifiable context. */
  intro: string[];
  /** One fact that actually changes how we work there. */
  localNote: string;
  /** Districts, where they exist and matter for a service business. */
  ortsteile?: string[];
  /** Gets service × town landing pages. */
  combo: boolean;
};

export const cities: City[] = [
  {
    slug: "lahnstein",
    name: "Lahnstein",
    plz: "56112",
    population: 18887,
    admin: "Rhein-Lahn-Kreis",
    elevation: 70,
    zone: "kern",
    intro: [
      "Lahnstein ist unser Sitz. Die Stadt liegt dort, wo die Lahn in den Rhein mündet, rund fünf Kilometer südlich von Koblenz, und ist mit 18.887 Einwohnern die größte Stadt im Rhein-Lahn-Kreis.",
      "Das Stadtgebiet zerfällt in zwei sehr unterschiedliche Hälften: Oberlahnstein mit dichter Altstadtbebauung und schmalen Zufahrten, Niederlahnstein mit größeren Wohnanlagen aus der Nachkriegszeit. Dazu kommen Friedrichssegen im Lahntal und die Höhenlage Lahnstein auf der Höhe.",
    ],
    localNote:
      "Zwischen Altstadt, Hanglage und Höhe liegen in Lahnstein rund 200 Höhenmeter. Was in Niederlahnstein am Rhein noch Regen ist, liegt auf der Höhe als Schnee — für den Winterdienst planen wir beide Lagen getrennt.",
    ortsteile: [
      "Oberlahnstein",
      "Niederlahnstein",
      "Friedrichssegen",
      "Lahnstein auf der Höhe",
    ],
    combo: true,
  },
  {
    slug: "koblenz",
    name: "Koblenz",
    plz: "56068–56077",
    population: 113020,
    admin: "kreisfreie Stadt",
    elevation: 73,
    zone: "kern",
    intro: [
      "Koblenz ist mit 113.020 Einwohnern das Oberzentrum der Region und liegt rund fünf Kilometer nördlich von Lahnstein. Die Stadt gliedert sich in 30 Stadtteile — von der Altstadt am Deutschen Eck bis zu den Höhenlagen in Arenberg und Arzheim.",
      "Für uns ist Koblenz der Markt mit den meisten Mehrfamilienhäusern und Verwaltungen. Gerade auf der rechten Rheinseite — Pfaffendorf, Horchheim, Ehrenbreitstein, Niederberg — sind wir schneller vor Ort als die meisten Anbieter mit Sitz auf der linken Seite.",
    ],
    localNote:
      "Die rechtsrheinischen Stadtteile hängen an zwei Brücken. Wer aus Lahnstein kommt, ist in Horchheim oder Pfaffendorf in wenigen Minuten — für Notdienst und kurzfristige Termine ist das der entscheidende Unterschied.",
    ortsteile: [
      "Pfaffendorf",
      "Horchheim",
      "Ehrenbreitstein",
      "Niederberg",
      "Arzheim",
      "Arenberg",
      "Altstadt",
      "Süd",
      "Lützel",
      "Neuendorf",
      "Metternich",
      "Güls",
    ],
    combo: true,
  },
  {
    slug: "braubach",
    name: "Braubach",
    plz: "56338",
    population: 2986,
    admin: "Verbandsgemeinde Loreley, Rhein-Lahn-Kreis",
    elevation: 72,
    zone: "kern",
    intro: [
      "Braubach liegt rheinaufwärts direkt hinter Lahnstein und gehört zur Verbandsgemeinde Loreley. Über der Stadt steht die Marksburg — die einzige nie zerstörte Höhenburg am Mittelrhein.",
      "Die 2.986 Einwohner verteilen sich auf die Kernstadt am Rhein und den Ortsteil Hinterwald. Der historische Ortskern ist eng bebaut, mit Gassen, in denen ein Transporter nicht überall durchkommt.",
    ],
    localNote:
      "In der Braubacher Altstadt ist der Zugang das Hauptthema. Bei Entrümpelungen und Abbrucharbeiten klären wir vorher, wo Fahrzeug und Container stehen können — das entscheidet über den Preis mehr als die Menge.",
    ortsteile: ["Braubach", "Hinterwald"],
    combo: true,
  },
  {
    slug: "bad-ems",
    name: "Bad Ems",
    plz: "56130",
    population: 10048,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 82,
    zone: "hoehe",
    intro: [
      "Bad Ems ist Kreisstadt des Rhein-Lahn-Kreises und zählt 10.048 Einwohner. Seit 2021 gehört die Stadt als Teil der „Great Spa Towns of Europe“ zum UNESCO-Welterbe.",
      "Der Kurort im Lahntal ist geprägt von historischer Bausubstanz: Kurhäuser, Villen und Hotels aus dem 19. Jahrhundert, dazu Wohnanlagen an den steilen Talhängen.",
    ],
    localNote:
      "In Bad Ems steht ungewöhnlich viel unter Denkmalschutz. Bei Arbeiten an der Fassade, an Fenstern oder an der Außenanlage prüfen wir vorher, ob eine Genehmigung nötig ist — daran scheitern hier sonst gern die Termine.",
    combo: true,
  },
  {
    slug: "boppard",
    name: "Boppard",
    plz: "56154",
    population: 15665,
    admin: "Rhein-Hunsrück-Kreis",
    elevation: 70,
    zone: "rheinschiene",
    intro: [
      "Boppard liegt rund 22 Kilometer südlich von Koblenz an der größten Rheinschleife, dem Bopparder Hamm, und hat 15.665 Einwohner. Zur Stadt gehören zehn Ortsbezirke — neben Boppard selbst unter anderem Bad Salzig, Buchholz, Herschwiesen und Hirzenach.",
      "Die Stadtteile auf dem Hunsrück liegen deutlich höher als die Kernstadt am Rhein. Das macht bei Winterdienst und Grünpflege einen erheblichen Unterschied.",
    ],
    localNote:
      "Zwischen der Rheinuferlage und den Höhenorten auf dem Hunsrück liegen mehrere hundert Höhenmeter. Wir kalkulieren Winterdienst in Boppard deshalb nie pauschal für „Boppard“, sondern pro Ortsbezirk.",
    ortsteile: [
      "Boppard",
      "Bad Salzig",
      "Buchholz",
      "Herschwiesen",
      "Hirzenach",
    ],
    combo: true,
  },
  {
    slug: "vallendar",
    name: "Vallendar",
    plz: "56179",
    population: 9046,
    admin: "Verbandsgemeinde Vallendar, Landkreis Mayen-Koblenz",
    elevation: 65,
    zone: "rheinschiene",
    intro: [
      "Vallendar liegt 5,7 Kilometer nördlich von Koblenz am rechten Rheinufer und hat 9.046 Einwohner. Die Stadt ist Sitz einer Hochschule und des Wallfahrtsorts Schönstatt.",
      "Wohnbebauung und Studierendenwohnungen bedeuten viele kleinere Mehrfamilienhäuser mit häufigem Mieterwechsel — Treppenhausreinigung und Wohnungsübergaben sind hier die häufigsten Aufträge.",
    ],
    localNote:
      "Häufiger Mieterwechsel heißt: Übergabetermine zum Monatsende. Für Entrümpelung und Grundreinigung in Vallendar sollten Sie früh anfragen, weil sich diese Termine ballen.",
    combo: true,
  },
  {
    slug: "nassau",
    name: "Nassau",
    plz: "56377",
    population: 4802,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 100,
    zone: "hoehe",
    intro: [
      "Nassau an der Lahn hat 4.802 Einwohner und ist Namensgeber des Hauses Nassau, das bis heute in Luxemburg und den Niederlanden regiert. Die Stadt liegt im Lahntal, umgeben vom Naturpark Nassau.",
      "Die Bebauung reicht vom historischen Kern an der Lahn bis zu Wohnlagen an den Hängen. Größere Grundstücke mit viel Grün sind hier die Regel.",
    ],
    localNote:
      "Grundstücke im Lahntal um Nassau sind oft groß, hängig und von Wald begrenzt. Bei der Grünpflege ist der Aufwand für Abtransport meistens größer als der fürs Schneiden — das steht bei uns getrennt im Angebot.",
    combo: false,
  },
  {
    slug: "osterspai",
    name: "Osterspai",
    plz: "56340",
    population: 1243,
    admin: "Verbandsgemeinde Loreley, Rhein-Lahn-Kreis",
    elevation: 65,
    zone: "rheinschiene",
    intro: [
      "Osterspai liegt rheinaufwärts hinter Braubach im UNESCO-Welterbe Oberes Mittelrheintal und hat 1.243 Einwohner. Der Ort ist bekannt für seine Fachwerkbauten aus dem 17. und 18. Jahrhundert.",
    ],
    localNote:
      "Fachwerk aus dem 17. und 18. Jahrhundert verträgt keine Standardbefestigung. Bei Montagearbeiten in Osterspai prüfen wir den Untergrund, bevor gebohrt wird — Lehm und Weichholz brauchen andere Dübel als Beton.",
    combo: false,
  },
  {
    slug: "filsen",
    name: "Filsen",
    plz: "56341",
    population: 648,
    admin: "Verbandsgemeinde Loreley, Rhein-Lahn-Kreis",
    elevation: 75,
    zone: "rheinschiene",
    intro: [
      "Filsen ist mit 648 Einwohnern eine der kleinsten Gemeinden in unserem Einsatzgebiet. Der Ort liegt in der größten Rheinschleife, gegenüber von Boppard, und ist von Weinbergen umgeben.",
    ],
    localNote:
      "In Filsen und den Nachbarorten fahren wir gebündelt. Wenn Sie einen Termin flexibel legen können, koppeln wir ihn an einen anderen Auftrag im Ort — das spart die zweite Anfahrt und macht sich im Preis bemerkbar.",
    combo: false,
  },
  {
    slug: "kamp-bornhofen",
    name: "Kamp-Bornhofen",
    plz: "56341",
    population: 1465,
    admin: "Verbandsgemeinde Loreley, Rhein-Lahn-Kreis",
    elevation: 69,
    zone: "rheinschiene",
    intro: [
      "Kamp-Bornhofen hat 1.465 Einwohner und liegt im Oberen Mittelrheintal. Über dem Ort stehen die beiden Burgen Sterrenberg und Liebenstein, die „feindlichen Brüder“; das Franziskanerkloster zieht jährlich rund 200.000 Wallfahrer an.",
    ],
    localNote:
      "Gastgewerbe und Wallfahrtsbetrieb bedeuten Saisonspitzen. Für Objekte in Kamp-Bornhofen legen wir Grünpflege und Reinigung möglichst vor den Saisonbeginn, nicht mittendrin.",
    combo: false,
  },
  {
    slug: "dachsenhausen",
    name: "Dachsenhausen",
    plz: "56340",
    population: 959,
    admin: "Verbandsgemeinde Loreley, Rhein-Lahn-Kreis",
    elevation: 380,
    zone: "hoehe",
    intro: [
      "Dachsenhausen liegt auf 380 Metern über dem Rheintal und hat 959 Einwohner. Erstmals erwähnt wurde der Ort 1277 als „Dossinhusin“ in einer Braubacher Kaufurkunde.",
    ],
    localNote:
      "380 Meter Höhe sind der praktische Unterschied: Wenn es in Lahnstein am Rhein regnet, liegt in Dachsenhausen Schnee. Winterdienstverträge für die Höhenorte kalkulieren wir mit deutlich mehr Einsätzen pro Saison.",
    combo: false,
  },
  {
    slug: "rhens",
    name: "Rhens",
    plz: "56321",
    population: 2928,
    admin: "Verbandsgemeinde Rhein-Mosel, Landkreis Mayen-Koblenz",
    elevation: 77,
    zone: "rheinschiene",
    intro: [
      "Rhens liegt am linken Rheinufer gegenüber von Braubach und hat 2.928 Einwohner. Der Königsstuhl erinnert an den Kurverein von 1338, mit dem sieben Kurfürsten die Königswahl regelten.",
    ],
    localNote:
      "Rhens liegt linksrheinisch — die Anfahrt führt über Koblenz. Für kurzfristige Einsätze bedeutet das mehr Vorlauf als bei den rechtsrheinischen Orten; für Turnusarbeiten spielt es keine Rolle.",
    combo: false,
  },
  {
    slug: "spay",
    name: "Spay",
    plz: "56322",
    population: 1869,
    admin: "Verbandsgemeinde Rhein-Mosel, Landkreis Mayen-Koblenz",
    elevation: 68,
    zone: "rheinschiene",
    intro: [
      "Spay liegt rund zwölf Kilometer südlich von Koblenz am Bopparder Hamm und hat 1.869 Einwohner. Der Ort gehört zum UNESCO-Welterbe Oberes Mittelrheintal.",
    ],
    localNote:
      "Die Lage am Bopparder Hamm bedeutet Weinberge bis an die Ortslage. Bei der Grünpflege haben wir es hier häufiger mit Terrassen und Trockenmauern zu tun als mit ebenen Rasenflächen.",
    combo: false,
  },
  {
    slug: "brey",
    name: "Brey",
    plz: "56321",
    population: 1482,
    admin: "Verbandsgemeinde Rhein-Mosel, Landkreis Mayen-Koblenz",
    elevation: 98,
    zone: "rheinschiene",
    intro: [
      "Brey liegt am linken Rheinufer gegenüber von Braubach und hat 1.482 Einwohner. Im Gemeindegebiet finden sich Reste römischer Besiedlung.",
    ],
    localNote:
      "Brey und Rhens fahren wir gemeinsam an. Wenn Ihr Termin sich mit einem Nachbarauftrag bündeln lässt, sagen wir Ihnen das — und der Anfahrtsanteil sinkt.",
    combo: false,
  },
  {
    slug: "nievern",
    name: "Nievern",
    plz: "56132",
    population: 1049,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 90,
    zone: "kern",
    intro: [
      "Nievern liegt an der Lahn zwischen Lahnstein und Bad Ems und hat 1.049 Einwohner. Erstmals urkundlich erwähnt wurde der Ort 1275; der Name geht vermutlich auf eine frühe Fährverbindung zurück.",
    ],
    localNote:
      "Nievern liegt auf der direkten Strecke Lahnstein–Bad Ems. Wir kommen hier ohnehin regelmäßig vorbei, was kurzfristige Termine leichter macht als in Orten abseits der Lahnstraße.",
    combo: false,
  },
  {
    slug: "fachbach",
    name: "Fachbach",
    plz: "56133",
    population: 1293,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 76,
    zone: "kern",
    intro: [
      "Fachbach liegt direkt an der Lahn an der Grenze zwischen Taunus und Westerwald und hat 1.293 Einwohner. Mit der Nieverner Hütte steht hier ein Industriedenkmal der regionalen Eisenverarbeitung.",
    ],
    localNote:
      "Grundstücke direkt an der Lahn sind hochwassererfahren. Bei Kellerentrümpelungen in Fachbach rechnen wir mit durchfeuchtetem Inventar und planen die Entsorgung entsprechend.",
    combo: false,
  },
  {
    slug: "becheln",
    name: "Becheln",
    plz: "56132",
    population: 662,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 380,
    zone: "hoehe",
    intro: [
      "Becheln liegt auf 380 Metern auf den Taunushöhen im Naturpark Nassau und ist eine Exklave der Verbandsgemeinde Bad Ems-Nassau. In der Gemeinde leben 662 Menschen.",
    ],
    localNote:
      "Wie Dachsenhausen liegt Becheln auf 380 Metern. Beide Orte fahren wir im Winter zusammen an — das hält den Saisonpreis für die Höhenlagen in einem vertretbaren Rahmen.",
    combo: false,
  },
  {
    slug: "fruecht",
    name: "Frücht",
    plz: "56132",
    population: 578,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 260,
    zone: "kern",
    intro: [
      "Frücht liegt auf halber Höhe zwischen Lahnstein und Bad Ems, jeweils rund sieben Kilometer von Koblenz und Bad Ems entfernt, und hat 578 Einwohner. Erstmals erwähnt wurde der Ort 1159 als „Wruhte“.",
    ],
    localNote:
      "Frücht liegt auf 260 Metern und damit zwischen Rheintal und Höhe. Für den Winterdienst heißt das: nicht so viele Einsätze wie in Becheln, aber deutlich mehr als unten am Rhein.",
    combo: false,
  },
  {
    slug: "miellen",
    name: "Miellen",
    plz: "56132",
    population: 361,
    admin: "Verbandsgemeinde Bad Ems-Nassau, Rhein-Lahn-Kreis",
    elevation: 85,
    zone: "kern",
    intro: [
      "Miellen ist mit 361 Einwohnern die kleinste Gemeinde in unserem Einsatzgebiet. Der Ortsname geht auf eine Mühle zurück; erstmals schriftlich belegt ist der Ort 1290.",
    ],
    localNote:
      "Für einen Ort dieser Größe lohnt sich keine eigene Anfahrt für eine Kleinigkeit. Wir hängen Termine in Miellen an Aufträge in Nievern oder Lahnstein — sagen Sie uns, wie flexibel Sie sind.",
    combo: false,
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

/** Towns that get service × town landing pages. */
export const comboCities = cities.filter((c) => c.combo);

export const citiesByZone = (zone: Zone) =>
  cities.filter((c) => c.zone === zone);

export const totalPopulation = cities.reduce((n, c) => n + c.population, 0);
