/**
 * Hand-written angle for every service × town pair.
 *
 * These pages are the reason a "programmatic SEO" build usually fails: 36
 * near-identical pages read as doorways and get treated as such. So none of
 * this is generated. Each entry names something that is actually different
 * about doing THAT job in THAT town — terrain, building stock, access,
 * altitude, ownership structure.
 */

export const combos: Record<string, Record<string, string[]>> = {
  hausmeisterservice: {
    lahnstein: [
      "In Lahnstein betreuen wir Objekte in beiden Stadtteilen und auf der Höhe. Der Unterschied ist praktisch relevant: In Oberlahnstein liegen viele Objekte in der Altstadt mit schmaler Zufahrt und ohne eigenen Stellplatz, in Niederlahnstein überwiegen größere Wohnanlagen aus der Nachkriegszeit mit Gemeinschaftsflächen, Tiefgarage und Müllstandplatz.",
      "Weil wir hier sitzen, sind Zwischentermine kein Aufwand. Wenn zwischen zwei Begehungen etwas ansteht, fahren wir hin, ohne dass daraus ein eigener Anfahrtsposten wird.",
    ],
    koblenz: [
      "Unser Schwerpunkt in Koblenz liegt rechtsrheinisch — Pfaffendorf, Horchheim, Ehrenbreitstein, Niederberg und die Höhenstadtteile Arzheim und Arenberg. Von Lahnstein aus sind das wenige Minuten, während Anbieter mit Sitz auf der linken Rheinseite über eine der Brücken müssen.",
      "Koblenz hat den größten Bestand an Mehrfamilienhäusern in der Region und entsprechend viele Verwaltungen. Wenn Sie mehrere Objekte in der Stadt haben, kalkulieren wir sie gemeinsam statt einzeln.",
    ],
    braubach: [
      "Braubach ist überschaubar, und genau das macht die Betreuung effizient: Die meisten Objekte liegen zwischen Rheinufer und Marksburg auf wenigen hundert Metern. Eine Begehungsrunde deckt hier mehrere Häuser ab.",
      "In der Altstadt ist der Zugang das wiederkehrende Thema — Gassen ohne Wendemöglichkeit, Höfe hinter Toreinfahrten. Wir wissen, wo man stehen kann, und das spart bei jedem Einsatz Zeit.",
    ],
    "bad-ems": [
      "In Bad Ems betreuen wir Objekte im Kurgebiet und an den Talhängen. Der historische Bestand aus dem 19. Jahrhundert bringt eigene Themen mit: Kastenfenster, aufwendige Fassaden, alte Entwässerung — und häufig Denkmalschutz.",
      "Wir prüfen deshalb vor jeder Maßnahme, ob sie genehmigungsfrei ist. Das kostet einmal einen Anruf und verhindert, dass eine Reparatur später zurückgebaut werden muss.",
    ],
    boppard: [
      "Boppard besteht aus zehn Ortsbezirken, die von der Rheinuferlage bis auf den Hunsrück reichen. Für die laufende Betreuung heißt das: Ein Turnus für „Boppard“ ergibt keinen Sinn — wir planen pro Ortsbezirk, weil Anfahrt und Witterung sich unterscheiden.",
      "In der Kernstadt und in Bad Salzig ist der Bestand dichter und lässt sich gut bündeln. Für die Höhenorte legen wir Termine bewusst anders.",
    ],
    vallendar: [
      "Vallendar hat viele kleinere Mehrfamilienhäuser und durch Hochschule und Schönstatt einen hohen Anteil an befristet vermieteten Wohnungen. Für die Betreuung bedeutet das häufigen Mieterwechsel — Wohnungsabnahmen, Schlüsselübergaben und Zwischenreinigungen fallen öfter an als anderswo.",
      "Wir richten den Turnus danach aus und halten die Zeit um den Monatswechsel frei.",
    ],
  },

  objektbetreuung: {
    lahnstein: [
      "Für Lahnsteiner Objekte übernehmen wir die vollständige Dokumentation: Begehungsprotokoll mit Fotos, Zählerstände, Prüffristen. Weil wir am Ort sind, können wir bei einer Auffälligkeit am nächsten Tag noch einmal nachsehen, statt sie bis zur nächsten Begehung offen zu lassen.",
    ],
    koblenz: [
      "Verwaltungen mit Koblenzer Beständen brauchen vor allem eines: jemanden, der aufschließt. Zwischen Schornsteinfeger, Aufzugswartung, Heizungsprüfung und Trinkwasseruntersuchung kommen im Jahr etliche Fremdfirmentermine zusammen.",
      "Wir übernehmen Zugang und Abnahme und melden zurück, was der Prüfer gesagt hat — schriftlich, mit Datum.",
    ],
    braubach: [
      "In Braubach betreuen wir vor allem kleinere Wohnhäuser, bei denen sich eine eigene Hausverwaltung vor Ort nicht rechnet. Die Betreuung deckt dann den Teil ab, für den sonst der Eigentümer selbst anreisen müsste.",
    ],
    "bad-ems": [
      "In Bad Ems ist die Dokumentation besonders wichtig, weil viele Objekte unter Denkmalschutz stehen und Veränderungen belegt werden müssen. Unsere Fotoprotokolle sind so aufgebaut, dass sie im Zweifel als Nachweis taugen.",
    ],
    boppard: [
      "Boppard liegt am äußeren Rand unseres Kerngebiets. Für laufende Objektbetreuung ist das kein Problem — der Turnus steht ohnehin fest. Für kurzfristige Sondertermine planen wir mehr Vorlauf ein und sagen das vorher, statt es zu versprechen und dann zu spät zu kommen.",
    ],
    vallendar: [
      "Der hohe Mieterwechsel in Vallendar macht die Betreuung planbarer, wenn Wohnungsabnahmen fest im Turnus liegen. Wir stimmen die Begehungen deshalb auf die Kündigungstermine ab, nicht auf den Kalender.",
    ],
  },

  gartenpflege: {
    lahnstein: [
      "In Lahnstein ist kaum ein Grundstück eben. Zwischen Rheinufer und Höhe liegen rund 200 Höhenmeter, und viele Gärten sind terrassiert oder hängen zum Hang hin ab. Für die Kalkulation ist deshalb nicht die Quadratmeterzahl entscheidend, sondern wie das Schnittgut zum Fahrzeug kommt.",
      "Bei Hanglagen in Friedrichssegen und auf der Höhe sehen wir uns das Grundstück vorher an, statt nach Fläche zu schätzen.",
    ],
    koblenz: [
      "In Koblenz pflegen wir vor allem Gemeinschaftsflächen von Wohnanlagen: Rasenflächen zwischen den Blöcken, Hecken an der Grundstücksgrenze, Zuwege und Müllplätze. Diese Flächen sind meist gut zugänglich und lassen sich effizient im Turnus fahren.",
      "In den Höhenstadtteilen Arzheim und Arenberg beginnt und endet die Saison spürbar später als unten am Rhein — wir setzen den ersten Schnitt entsprechend an.",
    ],
    braubach: [
      "Rund um Braubach reichen Weinberge und Waldrand bis an die Ortslage. Grundstücke wachsen hier schneller zu als in einer Stadtrandlage, und der Anteil an Wildwuchs entlang der Grenzen ist höher.",
      "Bei länger ungepflegten Grundstücken machen wir zuerst einen Freischnitt und stellen danach auf einen normalen Turnus um — das ist günstiger, als jedes Mal von vorn anzufangen.",
    ],
    "bad-ems": [
      "Die Kurstadtlage bringt viele repräsentative Vorgärten und alten Baumbestand mit. Bei Bäumen an denkmalgeschützten Objekten oder im Geltungsbereich einer Baumschutzsatzung klären wir vorab, was zulässig ist.",
      "Die steilen Talhänge sind das zweite Thema: Für Flächen, die sich nicht befahren lassen, kalkulieren wir den Handschnitt getrennt aus.",
    ],
    boppard: [
      "Am Bopparder Hamm reichen die Weinberge bis an die Wohnbebauung. Trockenmauern, Terrassen und Treppen sind hier normal — Rasenroboter und Aufsitzmäher meist nicht einsetzbar.",
      "In den Hunsrück-Ortsbezirken ist die Vegetationsperiode kürzer, dafür der Aufwuchs kräftiger. Wir legen dort weniger, aber intensivere Termine.",
    ],
    vallendar: [
      "In Vallendar pflegen wir überwiegend kleinere Vorgärten und Innenhöfe von Mehrfamilienhäusern. Die Flächen sind übersichtlich, liegen aber oft hinter dem Haus — der Weg zum Fahrzeug bestimmt hier den Aufwand mehr als die Fläche selbst.",
    ],
  },

  winterdienst: {
    lahnstein: [
      "Lahnstein braucht zwei Winterdienstpläne. Am Rhein auf rund 70 Metern fällt in vielen Wintern kaum Schnee; auf der Höhe, gut 200 Meter darüber, liegt er regelmäßig. Ein Vertrag, der beides pauschal abdeckt, ist für die eine Lage zu teuer und für die andere zu knapp.",
      "Wir kalkulieren deshalb getrennt nach Lage und sagen Ihnen, in welche Ihr Objekt fällt.",
    ],
    koblenz: [
      "Für Koblenzer Objekte gilt die Satzung der Stadt: Die Räum- und Streupflicht für Gehwege liegt bei den Anliegern. Wir übernehmen sie vertraglich und dokumentieren jeden Einsatz mit Datum, Uhrzeit und Streumittel.",
      "Die Höhenstadtteile Arzheim, Arenberg und Niederberg brauchen erkennbar mehr Einsätze als die Lagen am Rhein — das steht bei uns getrennt in der Kalkulation.",
    ],
    braubach: [
      "Braubach liegt auf 72 Metern direkt am Rhein und gehört damit zu den schneeärmeren Lagen der Region. Kritisch sind hier weniger die Schneemengen als das Glatteis an den steilen Zuwegen zur Marksburg-Seite.",
      "Für solche Gefällstrecken planen wir Kontrollfahrten bei Frostlage ein, auch wenn kein Niederschlag angekündigt ist.",
    ],
    "bad-ems": [
      "Bad Ems liegt im Lahntal auf 82 Metern, viele Objekte aber deutlich höher an den Hängen. Die Zuwege dorthin sind das eigentliche Thema: kurze, steile Strecken, die bei Frost schnell unpassierbar werden.",
      "Streusalz ist auf Gehwegen vielerorts eingeschränkt — wir streuen abstumpfend und setzen Salz nur an Gefahrenstellen ein, wo es zulässig ist.",
    ],
    boppard: [
      "Zwischen der Bopparder Rheinlage und den Ortsbezirken auf dem Hunsrück liegen mehrere hundert Höhenmeter. In Buchholz, Herschwiesen oder Oppenhausen fallen pro Saison deutlich mehr Einsätze an als in der Kernstadt.",
      "Wir kalkulieren Winterdienst in Boppard deshalb grundsätzlich pro Ortsbezirk und nie pauschal für die Gesamtstadt.",
    ],
    vallendar: [
      "Vallendar liegt am Rhein und ist damit vergleichsweise schneearm. Der Aufwand entsteht hier eher durch die Zahl der Einzelflächen: viele kleinere Häuser mit je eigenem Gehwegabschnitt, Hauseingang und Müllplatz.",
      "Für mehrere Objekte in einer Straße macht ein gemeinsamer Saisonvertrag den Preis pro Objekt deutlich niedriger.",
    ],
  },

  treppenhausreinigung: {
    lahnstein: [
      "In Niederlahnstein reinigen wir überwiegend Treppenhäuser größerer Wohnanlagen — vier bis acht Parteien, Aufzug, Kellergang, Tiefgaragenzugang. In der Oberlahnsteiner Altstadt sind es kleinere Häuser mit Holztreppen, die eine andere Behandlung brauchen als Stein oder Kunststoff.",
      "Welches Reinigungsmittel auf welchen Belag darf, klären wir bei der Besichtigung. Bei alten Holztreppen ist das keine Formalie.",
    ],
    koblenz: [
      "Koblenz ist unser größter Markt für Treppenhausreinigung, weil hier die meisten Mehrfamilienhäuser stehen. Für Verwaltungen mit mehreren Häusern legen wir eine Route und reinigen sie am selben Tag — das senkt den Preis pro Haus spürbar.",
      "Die Kosten sind nach §2 Nr. 9 Betriebskostenverordnung umlagefähig; unsere Rechnung ist so aufgebaut, dass sie sich direkt in die Nebenkostenabrechnung übernehmen lässt.",
    ],
    braubach: [
      "In Braubach sind die Häuser kleiner, oft drei bis vier Parteien. Ein wöchentlicher Turnus lohnt sich dort selten — vierzehntägig reicht meistens und halbiert die Kosten je Wohneinheit.",
    ],
    "bad-ems": [
      "Viele Bad Emser Objekte haben aufwendige historische Treppenhäuser: Naturstein, Stuck, alte Geländer, Bleiverglasung im Fenster. Das ist Reinigung mit Rücksicht, nicht mit Hochdruck.",
      "Wir stimmen Mittel und Verfahren vorab ab und dokumentieren, was verwendet wurde.",
    ],
    boppard: [
      "In Boppard reinigen wir Treppenhäuser überwiegend in der Kernstadt und in Bad Salzig. Bei Objekten mit Ferienwohnungen legen wir den Turnus auf den Wechseltag, nicht auf einen festen Wochentag.",
    ],
    vallendar: [
      "Studentisch geprägte Häuser in Vallendar haben mehr Durchgangsverkehr als der Schnitt — mehr Umzüge, mehr Fahrräder im Flur, mehr Verschmutzung im Eingangsbereich. Ein wöchentlicher Turnus ist hier meistens die richtige Wahl.",
      "Zum Semesterwechsel bieten wir zusätzlich eine Grundreinigung an, weil sich in diesen Wochen die Umzüge häufen.",
    ],
  },

  entruempelung: {
    lahnstein: [
      "In Lahnstein entscheidet der Stadtteil über den Preis. In Niederlahnstein gibt es meist Hofzufahrt oder Parkplatz direkt am Haus; in der Oberlahnsteiner Altstadt muss das Fahrzeug häufig in einer Gasse stehen, und jeder Gang wird länger.",
      "Wir sehen uns den Zugang bei der Besichtigung genauso genau an wie die Menge — er macht regelmäßig den größeren Teil des Unterschieds aus.",
    ],
    koblenz: [
      "In Koblenz ist bei Wohnungsentrümpelungen fast immer eine Halteverbotszone nötig, besonders in der Altstadt und in Pfaffendorf. Die Beantragung dauert einige Werktage — planen Sie das ein, wenn die Wohnung zum Monatsende übergeben werden muss.",
      "Wir kümmern uns auf Wunsch um die Beantragung und weisen die Kosten getrennt aus.",
    ],
    braubach: [
      "Die Braubacher Altstadt ist der Fall, für den wir immer vorher besichtigen: enge Gassen, Häuser ohne Hofzufahrt, teils Treppen zum Eingang. Ein Container passt nicht überall hin, und wo er nicht hinpasst, wird umgeschlagen.",
      "Das ist machbar, muss aber im Preis stehen, bevor der Termin vereinbart wird.",
    ],
    "bad-ems": [
      "Bei Nachlässen in Bad Emser Villen und Kurhäusern finden sich häufiger Dinge, die eine Einschätzung verdienen, bevor sie im Container landen. Wir sagen Bescheid, statt es stillschweigend mitzunehmen.",
      "Die Talhanglage bringt zusätzlich lange Wege vom Haus zur Straße mit sich — auch das gehört in die Kalkulation.",
    ],
    boppard: [
      "In Boppard entrümpeln wir häufig Keller und Dachböden von Objekten, die verkauft werden sollen. Bei Häusern in den Hunsrück-Ortsbezirken ist die Zufahrt meist unproblematisch, dafür ist der Weg zur nächsten Entsorgungsstelle länger.",
    ],
    vallendar: [
      "Zum Monatsende ballen sich in Vallendar die Wohnungsübergaben. Wenn Sie zu einem festen Termin räumen lassen müssen, fragen Sie früh an — in der letzten Monatswoche sind die Kapazitäten regelmäßig ausgebucht.",
    ],
  },
};

export const comboAngle = (service: string, city: string): string[] =>
  combos[service]?.[city] ?? [];
