window.NATURKUNDE_DATA = {
  // =========================================================================
  // 1. EMOJI-BEWERTUNG (NOTE 1,0 BIS 7,0) & GESCHENK-SCHATZKISTE
  // =========================================================================
  gradeEmojiScale: [
    {
      minNota: 6.8,
      maxNota: 7.0,
      emojis: "👑🏆🦄💎🌟",
      titleDe: "Note 7,0 — Königliche Meisterleistung!",
      titleEs: "¡Nota 7,0 — Desempeño Real Sobresaliente!",
      giftDe: "🎁 Mega-Geschenk freigeschaltet: Goldene Naturkunde-Krone 👑 & Einhorn 🦄!",
      giftEs: "🎁 ¡Súper regalo desbloqueado: Corona dorada 👑 y Unicornio de Ciencias 🦄!"
    },
    {
      minNota: 6.3,
      maxNota: 6.7,
      emojis: "🦸‍♀️🚀🏅✨🎉",
      titleDe: "Note 6,3 – 6,7 — Sehr gut! Fast perfekt!",
      titleEs: "¡Nota 6,3 – 6,7 — Excelente trabajo, casi perfecto!",
      giftDe: "🎁 Geschenk freigeschaltet: Superhelden-Rakete 🚀 & Goldmedaille 🏅!",
      giftEs: "🎁 ¡Regalo desbloqueado: Cohete de superhéroe 🚀 y Medalla de oro 🏅!"
    },
    {
      minNota: 5.5,
      maxNota: 6.2,
      emojis: "😄🌟🎈🥇👏",
      titleDe: "Note 5,5 – 6,2 — Gut gemacht! Starkes Wissen!",
      titleEs: "¡Nota 5,5 – 6,2 — Muy buen dominio de la materia!",
      giftDe: "🎁 Geschenk freigeschaltet: Leuchtender Stern 🌟 & Party-Ballon 🎈!",
      giftEs: "🎁 ¡Regalo desbloqueado: Estrella brillante 🌟 y Globo de fiesta 🎈!"
    },
    {
      minNota: 4.8,
      maxNota: 5.4,
      emojis: "😊👍🍀⭐📘",
      titleDe: "Note 4,8 – 5,4 — Befriedigend! Auf gutem Weg!",
      titleEs: "¡Nota 4,8 – 5,4 — Buen camino, sigue practicando!",
      giftDe: "🎁 Geschenk freigeschaltet: Glücksklee 🍀 & Forscher-Stern ⭐!",
      giftEs: "🎁 ¡Regalo desbloqueado: Trébol de la suerte 🍀 y Estrella exploradora ⭐!"
    },
    {
      minNota: 4.0,
      maxNota: 4.7,
      emojis: "🙂🌱💪🧩🕯️",
      titleDe: "Note 4,0 – 4,7 — Ausreichend (Bestanden)!",
      titleEs: "Nota 4,0 – 4,7 — Aprobado, ¡repasa los errores para subir tu nota!",
      giftDe: "🎁 Geschenk zum Anfeuern: Wachsende Pflanze 🌱 & Kraft-Muskel 💪!",
      giftEs: "🎁 Regalo de ánimo: Plantita creciendo 🌱 y Músculo de fuerza 💪."
    },
    {
      minNota: 1.0,
      maxNota: 3.9,
      emojis: "🧐🔧📚🔁💡",
      titleDe: "Note unter 4,0 — Noch weiter üben!",
      titleEs: "Nota bajo 4,0 — ¡Usa el botón «Nur Fehler üben» y verás cómo sube a 7,0!",
      giftDe: "🎁 Trainings-Geschenk: Forscher-Lupe 🧐 & Schlau-Lampe 💡 für den nächsten Versuch!",
      giftEs: "🎁 Regalo de entrenamiento: Lupa investigadora 🧐 y Ampolleta de ideas 💡."
    }
  ],

  collectibleGifts: [
    {
      id: "gift_blood_drop",
      emoji: "🩸",
      nameDe: "Roter Sauerstoff-Kurier",
      nameEs: "Mensajero Rojo de Oxígeno",
      unlockHintDe: "Beantworte deine ersten 3 Fragen richtig",
      pointsCost: 20
    },
    {
      id: "gift_plasma_sun",
      emoji: "🧪",
      nameDe: "Goldenes Blutplasma-Elixier",
      nameEs: "Elixir Dorado de Plasma Sanguíneo",
      unlockHintDe: "Löse das Blut-Schema auf Seite 1",
      pointsCost: 40
    },
    {
      id: "gift_immune_knight",
      emoji: "🛡️",
      nameDe: "Blauer Abwehr-Ritter (Weißes Blutkörperchen)",
      nameEs: "Caballero Azul Defensor (Glóbulo Blanco)",
      unlockHintDe: "Male die Comic-Figuren auf Seite 2 richtig an",
      pointsCost: 60
    },
    {
      id: "gift_platelet_builder",
      emoji: "🧱",
      nameDe: "Brauner Plättchen-Baumeister",
      nameEs: "Maestro Constructor de Plaquetas",
      unlockHintDe: "Meistere die Blutgerinnung",
      pointsCost: 80
    },
    {
      id: "gift_strong_heart",
      emoji: "🫀",
      nameDe: "Unermüdlicher Herz-Muskel",
      nameEs: "Músculo Cardíaco Incansable",
      unlockHintDe: "Erreiche eine 5er-Serie (Combo 5x 🔥)",
      pointsCost: 100
    },
    {
      id: "gift_fresh_lungs",
      emoji: "🫁",
      nameDe: "Saubere Lungenbläschen",
      nameEs: "Alvéolos Pulmonares Limpios",
      unlockHintDe: "Beschrifte das Kreislauf-Schema von Seite 4",
      pointsCost: 130
    },
    {
      id: "gift_microscope",
      emoji: "🔬",
      nameDe: "Kapillaren-Mikroskop",
      nameEs: "Microscopio de Capilares",
      unlockHintDe: "Löse alle 3 Klappkarten aus dem Heft (Seite 5–6)",
      pointsCost: 160
    },
    {
      id: "gift_no_smoke",
      emoji: "🚭",
      nameDe: "Rauchfrei-Schutzschild",
      nameEs: "Escudo Protector Libre de Humo",
      unlockHintDe: "Löse das Raucher-Gasaustausch-Modell (Seite 10)",
      pointsCost: 190
    },
    {
      id: "gift_detective",
      emoji: "🕵️‍♀️",
      nameDe: "5-Fehler-Meisterdetektivin",
      nameEs: "Detective Maestra de los 5 Errores",
      unlockHintDe: "Finde und korrigiere alle 5 Schulbuch-Fehler (Seite 11)",
      pointsCost: 220
    },
    {
      id: "gift_dolphin",
      emoji: "🐬",
      nameDe: "Frischer Atem-Delfin",
      nameEs: "Delfín de Aire Puro",
      unlockHintDe: "Sammle 250 Punkte beim Üben",
      pointsCost: 250
    },
    {
      id: "gift_owl",
      emoji: "🦉",
      nameDe: "Weise Naturkunde-Eule",
      nameEs: "Búho Sabio de Ciencias Naturales",
      unlockHintDe: "Erreiche mindestens Note 5,5 in einer Prüfung",
      pointsCost: 300
    },
    {
      id: "gift_rocket",
      emoji: "🚀",
      nameDe: "Kreislauf-Turbo-Rakete",
      nameEs: "Cohete Turbo Circulatorio",
      unlockHintDe: "Erreiche eine 10er-Serie (Combo 10x 🔥)",
      pointsCost: 350
    },
    {
      id: "gift_diamond",
      emoji: "💎",
      nameDe: "Funkelnder Bio-Diamant",
      nameEs: "Diamante Brillante de Biología",
      unlockHintDe: "Erreiche mindestens Note 6,5 in einer Prüfung",
      pointsCost: 420
    },
    {
      id: "gift_unicorn",
      emoji: "🦄",
      nameDe: "Magisches Naturkunde-Einhorn",
      nameEs: "Unicornio Mágico de Naturkunde",
      unlockHintDe: "Beantworte 35 Prüfungsfragen richtig",
      pointsCost: 500
    },
    {
      id: "gift_trophy",
      emoji: "🏆",
      nameDe: "Goldener Vitacura-Pokal (DS Santiago)",
      nameEs: "Copa Dorada DS Santiago (Vitacura)",
      unlockHintDe: "Beantworte 50 Prüfungsfragen richtig",
      pointsCost: 600
    },
    {
      id: "gift_crown_70",
      emoji: "👑",
      nameDe: "Königin der Note 7,0!",
      nameEs: "¡Reina de la Nota 7,0!",
      unlockHintDe: "Schaffe eine glatte Note 7,0 (100%) in einer Probe!",
      pointsCost: 700
    }
  ],

  // =========================================================================
  // 2. VOKABELN & SCHLÜSSELBEGRIFFE (28 BEGRIFFE AUS ALLEN 11 SEITEN)
  // =========================================================================
  vocabItems: [
    // Block 1: Das Blut (Seite 1–2)
    {
      id: "v_blut",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "das flüssige Gewebe",
      synonymsDe: ["flüssiges gewebe", "das flüssige gewebe", "fluessiges gewebe"],
      termEs: "el tejido líquido (la sangre)",
      synonymsEs: ["tejido liquido", "el tejido liquido", "sangre"],
      hintDe: "So nennt man das Blut, weil es aus einem flüssigen Teil und einem festen Teil besteht.",
      tipEs: "Recuerda la 1ª frase de la guía: «Das Blut ist ein flüssiges Gewebe» (la sangre es un tejido líquido)."
    },
    {
      id: "v_plasma",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "das Blutplasma",
      synonymsDe: ["blutplasma", "das blutplasma", "plasma"],
      termEs: "el plasma sanguíneo (parte líquida amarilla)",
      synonymsEs: ["plasma", "plasma sanguineo", "el plasma sanguineo", "parte liquida"],
      hintDe: "Der flüssige, gelbe Teil des Blutes. Transportiert verschiedene Stoffe (z. B. Nährstoffe).",
      tipEs: "Es la parte líquida (amarilla en el cómic) donde viven las células sanguíneas y transporta sustancias."
    },
    {
      id: "v_knochenmark",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "das Knochenmark",
      synonymsDe: ["knochenmark", "das knochenmark", "rotes knochenmark"],
      termEs: "la médula ósea (de los huesos largos)",
      synonymsEs: ["medula osea", "la medula osea", "medula"],
      hintDe: "Im Inneren der langen Knochen: Hier bildet sich das Blut!",
      tipEs: "«Knochen» = hueso, «Mark» = médula. La sangre se forma en la médula ósea de los huesos largos (lange Knochen)."
    },
    {
      id: "v_rote_bk",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "die roten Blutkörperchen",
      synonymsDe: ["rote blutkörperchen", "die roten blutkörperchen", "rote blutzellen", "erythrozyten", "rotes blutkörperchen"],
      termEs: "los glóbulos rojos (eritrocitos)",
      synonymsEs: ["globulos rojos", "los globulos rojos", "eritrocitos"],
      hintDe: "Transportieren Sauerstoff (O₂) und Kohlenstoffdioxid (CO₂).",
      tipEs: "En el esquema del cuaderno también se aceptan como «rote Blutzellen». Transportan O₂ y CO₂."
    },
    {
      id: "v_weisse_bk",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "die weißen Blutkörperchen",
      synonymsDe: ["weiße blutkörperchen", "die weißen blutkörperchen", "weiße blutzellen", "weisse blutkoerperchen", "leukozyten", "weißes blutkörperchen"],
      termEs: "los glóbulos blancos (leucocitos / defensas)",
      synonymsEs: ["globulos blancos", "los globulos blancos", "leucocitos", "defensas"],
      hintDe: "Kämpfen gegen Viren und Bakterien (Abwehr des Körpers).",
      tipEs: "Son los soldados/policías del cuerpo: «kämpfen gegen Viren und Bakterien»."
    },
    {
      id: "v_blutplaettchen",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "die Blutplättchen",
      synonymsDe: ["blutplättchen", "die blutplättchen", "blutplaettchen", "thrombozyten"],
      termEs: "las plaquetas (trombocitos)",
      synonymsEs: ["plaquetas", "las plaquetas", "trombocitos"],
      hintDe: "Reparieren zerstörte Blutgefäße, damit das Blut gerinnt.",
      tipEs: "«Plättchen» = plaquitas. Reparan los vasos sanguíneos rotos para que la sangre coagule."
    },
    {
      id: "v_gerinnen",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "gerinnen",
      synonymsDe: ["gerinnen", "es gerinnt", "blutgerinnung"],
      termEs: "coagular (se coagula)",
      synonymsEs: ["coagular", "se coagula", "coagulacion"],
      hintDe: "Wenn die Blutplättchen eine Wunde verschließen, fließt das Blut nicht weiter: Es gerinnt.",
      tipEs: "En la página 1 viene traducido entre paréntesis: «Also, es gerinnt (se coagula)»."
    },

    // Block 2: Herz & Blutgefäße (Seite 3–6)
    {
      id: "v_blutgefaesse",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Blutgefäße",
      synonymsDe: ["blutgefäße", "die blutgefäße", "blutgefaesse", "das blutgefäß"],
      termEs: "los vasos sanguíneos (tubos / Röhren)",
      synonymsEs: ["vasos sanguineos", "los vasos sanguineos", "tubos"],
      hintDe: "Röhren, die das Blut zu allen Teilen des Körpers transportieren (Arterien, Venen, Kapillaren).",
      tipEs: "Son los «tubos» (Röhren) por donde viaja la sangre: Arterien, Venen y Kapillaren."
    },
    {
      id: "v_arterien",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Arterien",
      synonymsDe: ["arterien", "die arterien", "arterie", "die arterie"],
      termEs: "las arterias (del corazón a las células)",
      synonymsEs: ["arterias", "las arterias", "arteria"],
      hintDe: "Transportieren Blut VOM Herzen ZU den Körperzellen (oder zur Lunge). Symbol: ♡ ──► 🧍",
      tipEs: "Regla de oro: Arterie SIEMPRE sale DEL corazón (VOM Herzen ZU den Zellen / Organen)."
    },
    {
      id: "v_venen",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Venen",
      synonymsDe: ["venen", "die venen", "vene", "die vene"],
      termEs: "las venas (de los órganos al corazón)",
      synonymsEs: ["venas", "las venas", "vena"],
      hintDe: "Transportieren das Blut VON den Organen (Körperzellen) ZUM Herzen zurück. Symbol: 🧍 ──► ♡",
      tipEs: "Regla de oro: Vene SIEMPRE vuelve AL corazón (VON den Organen ZUM Herzen)."
    },
    {
      id: "v_kapillaren",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Kapillaren",
      synonymsDe: ["kapillaren", "die kapillaren", "kapillare", "die kapillare"],
      termEs: "los capilares (microscópicos, intercambio gaseoso)",
      synonymsEs: ["capilares", "los capilares", "capilar"],
      hintDe: "Sind mikroskopisch klein, verbinden Arterien und Venen. Hier findet der Gasaustausch statt!",
      tipEs: "Conectan arterias y venas. Son tan pequeñitos que ahí ocurre el intercambio de gases (Gasaustausch)."
    },
    {
      id: "v_herzkammer",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Herzkammer",
      synonymsDe: ["herzkammer", "die herzkammer", "herzkammern", "die herzkammern"],
      termEs: "el ventrículo (cámara del corazón)",
      synonymsEs: ["ventriculo", "el ventriculo", "camara del corazon", "ventriculos"],
      hintDe: "Es gibt eine rechte und eine linke Herzkammer (unten im Herzen; oben sind die Vorhöfe).",
      tipEs: "En las tarjetas plegables del cuaderno se abrevia «Herzk.» (rechte Herzkammer / linke Herzkammer)."
    },

    // Block 3: Blutkreislauf & Gasaustausch (Seite 3–6)
    {
      id: "v_sauerstoffreich",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "sauerstoffreich",
      synonymsDe: ["sauerstoffreich", "sauerstoffreiches blut", "viel sauerstoff"],
      termEs: "rico en oxígeno (con mucho oxígeno)",
      synonymsEs: ["rico en oxigeno", "con mucho oxigeno", "oxigenada"],
      hintDe: "Blut, das in der Lunge frischen Sauerstoff aufgenommen hat (im Schema rot dargestellt).",
      tipEs: "«reich» = rico. En la pág. 3 está anotado a mano: «hat viel Sauerstoff / rico en oxígeno»."
    },
    {
      id: "v_sauerstoffarm",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "sauerstoffarm",
      synonymsDe: ["sauerstoffarm", "sauerstoffarmes blut", "wenig sauerstoff"],
      termEs: "pobre en oxígeno (con poco O₂ y mucho CO₂)",
      synonymsEs: ["pobre en oxigeno", "con poco oxigeno", "desoxigenada"],
      hintDe: "Blut, das von den Körperzellen zurückkommt und viel Kohlenstoffdioxid enthält (blau dargestellt).",
      tipEs: "«arm» = pobre. En la pág. 3 está anotado a mano: «wenig Sauerstoff / pobre en oxígeno»."
    },
    {
      id: "v_koerperkreislauf",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "der Körperkreislauf",
      synonymsDe: ["körperkreislauf", "der körperkreislauf", "koerperkreislauf"],
      termEs: "la circulación mayor / corporal",
      synonymsEs: ["circulacion corporal", "circulacion mayor", "el circuito del cuerpo"],
      hintDe: "Weg des Blutes von der linken Herzkammer zu allen Körperzellen und zurück zur rechten Herzkammer.",
      tipEs: "Va desde el lado izquierdo del corazón hacia todas las células del cuerpo (Muskelzellen) y vuelve al lado derecho."
    },
    {
      id: "v_lungenkreislauf",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "der Lungenkreislauf",
      synonymsDe: ["lungenkreislauf", "der lungenkreislauf"],
      termEs: "la circulación pulmonar / menor",
      synonymsEs: ["circulacion pulmonar", "circulacion menor", "circuito pulmonar"],
      hintDe: "Weg von der rechten Herzhälfte über die Lungenarterie zur Lunge und über die Lungenvene zur linken Herzhälfte.",
      tipEs: "Circuito corto: lado derecho del corazón → Lungenarterie → Lungenbläschen → Lungenvene → lado izquierdo."
    },
    {
      id: "v_lungenblaeschen",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "die Lungenbläschen",
      synonymsDe: ["lungenbläschen", "die lungenbläschen", "lungenblaeschen", "bläschen"],
      termEs: "los alvéolos pulmonares",
      synonymsEs: ["alveolos", "los alveolos", "alveolos pulmonares"],
      hintDe: "Kleine Bläschen in der Lunge: Hier gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf.",
      tipEs: "«Bläschen» = burbujitas/saquitos de aire en el pulmón donde ocurre el intercambio de gases."
    },
    {
      id: "v_gasaustausch",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "der Gasaustausch",
      synonymsDe: ["gasaustausch", "der gasaustausch"],
      termEs: "el intercambio gaseoso (O₂ y CO₂)",
      synonymsEs: ["intercambio gaseoso", "el intercambio gaseoso", "intercambio de gases"],
      hintDe: "Austausch von Sauerstoff (O₂) und Kohlenstoffdioxid (CO₂) in den Lungenbläschen und in den Kapillaren.",
      tipEs: "«Austausch» = intercambio. Ocurre en los alvéolos (con el aire) y en los capilares (con las células)."
    },
    {
      id: "v_zellatmung",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "die Zellatmung",
      synonymsDe: ["zellatmung", "die zellatmung"],
      termEs: "la respiración celular (produce energía)",
      synonymsEs: ["respiracion celular", "la respiracion celular"],
      hintDe: "Die Zellen nehmen Sauerstoff und Nährstoffe auf, gewinnen Energie und geben Kohlenstoffdioxid ab.",
      tipEs: "Las células usan oxígeno (S) + nutrientes (N) para obtener energía y liberan CO₂ (Ko)."
    },

    // Block 4: Tabakkonsum & Passivrauchen (Seite 7–11)
    {
      id: "v_nikotin",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Nikotin",
      synonymsDe: ["nikotin", "das nikotin"],
      termEs: "la nicotina (veneno en insecticidas, estrecha vasos y causa adicción)",
      synonymsEs: ["nicotina", "la nicotina"],
      hintDe: "Gift in Insektiziden (tötet Insekten). Verengt die Blutgefäße, macht sie hart/steif (Raucherbein), zerstört Nervenzellen und macht süchtig.",
      tipEs: "Se usa en insecticidas, estrecha los vasos sanguíneos (verengt Blutgefäße), acelera el corazón y vuelve adicto (süchtig)."
    },
    {
      id: "v_teer",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "der Teer",
      synonymsDe: ["teer", "der teer"],
      termEs: "el alquitrán (usado en asfalto, pega los cilios y alvéolos)",
      synonymsEs: ["alquitran", "el alquitran"],
      hintDe: "Bindemittel im Straßenbau (klebrig bei Hitze). Klebt an den Flimmerhärchen und in den Lungenbläschen fest.",
      tipEs: "Se usa en las calles (Straßenbau). Se pega (klebt) en los pelillos (Flimmerhärchen) y en los alvéolos (Lungenbläschen)."
    },
    {
      id: "v_kohlenmonoxid",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Kohlenstoffmonoxid",
      synonymsDe: ["kohlenstoffmonoxid", "kohlenmonoxid", "das kohlenstoffmonoxid", "das kohlenmonoxid"],
      termEs: "el monóxido de carbono (humo de autos/combustión, más rápido que el O₂)",
      synonymsEs: ["monoxido de carbono", "el monoxido de carbono"],
      hintDe: "Entsteht bei Verbrennung von Kohle, Gas oder Benzin. Ist im Blut schneller als Sauerstoff („NO ADELANTAR“)!",
      tipEs: "Sale del tubo de escape (combustión). En la sangre es más rápido que el oxígeno («schneller als Sauerstoff»)."
    },
    {
      id: "v_flimmerhaerchen",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "die Flimmerhärchen",
      synonymsDe: ["flimmerhärchen", "die flimmerhärchen", "flimmerhaerchen"],
      termEs: "los cilios / pelillos de las vías respiratorias",
      synonymsEs: ["pelillos", "los pelillos", "cilios", "pelillos de las vias respiratorias"],
      hintDe: "Kleine Härchen, die die Atemwege sauber machen. Durch Teer verkleben sie und können sich nicht richtig bewegen.",
      tipEs: "En la página 7 dice: «Flimmerhärchen (pelillos) der Atemwege». Limpian las vías respiratorias."
    },
    {
      id: "v_raucherbein",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Raucherbein",
      synonymsDe: ["raucherbein", "das raucherbein"],
      termEs: "la pierna de fumador (muerte de tejido por falta de sangre)",
      synonymsEs: ["pierna de fumador", "la pierna de fumador"],
      hintDe: "Wenn sich Blutgefäße durch Nikotin so stark verengen, dass kein Blut mehr durchkommt und ein Zeh, Fuß oder Bein abstirbt.",
      tipEs: "Ocurre por culpa de la nicotina cuando los vasos sanguíneos se cierran tanto que no llega sangre al pie o pierna."
    },
    {
      id: "v_suechtig",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "süchtig",
      synonymsDe: ["süchtig", "suechtig", "macht süchtig"],
      termEs: "adicto / adictivo",
      synonymsEs: ["adicto", "adictivo", "adiccion"],
      hintDe: "Nikotin wirkt im Gehirn, zerstört Nervenzellen und macht süchtig (man kann kaum noch aufhören).",
      tipEs: "«Nikotin macht süchtig» = la nicotina produce adicción."
    },
    {
      id: "v_passivrauchen",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Passivrauchen",
      synonymsDe: ["passivrauchen", "das passivrauchen", "passivraucher"],
      termEs: "el tabaquismo pasivo (respirar el humo de otros)",
      synonymsEs: ["tabaquismo pasivo", "fumador pasivo", "respirar humo ajeno"],
      hintDe: "Wenn man den Rauch einer angezündeten Zigarette von anderen einatmet. Fast so schädlich wie aktives Rauchen!",
      tipEs: "Es aún más peligroso para los niños porque respiran más rápido y su cuerpo elimina peor los tóxicos."
    },
    {
      id: "v_abwehrkraefte",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "die Abwehrkräfte",
      synonymsDe: ["abwehrkräfte", "die abwehrkräfte", "abwehrkraefte"],
      termEs: "las defensas del cuerpo",
      synonymsEs: ["defensas", "las defensas", "sistema inmune"],
      hintDe: "Werden bei Kindern durch Passivrauchen mit der Zeit schwächer, sodass die Kinder oft krank werden.",
      tipEs: "En la página 9 dice: «Abwehrkräfte (defensas)». Si bajan, los niños se enferman seguido."
    },
    {
      id: "v_giftstoffe_abbauen",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "Giftstoffe abbauen",
      synonymsDe: ["giftstoffe abbauen", "abbauen"],
      termEs: "descomponer / eliminar sustancias tóxicas (venenos)",
      synonymsEs: ["descomponer", "eliminar", "descomponer eliminar", "eliminar toxinas"],
      hintDe: "Der Körper von Kindern kann die Giftstoffe aus dem Rauch viel schlechter abbauen als ein Erwachsener.",
      tipEs: "En la página 9 viene traducido: «abbauen (descomponer-eliminar)»."
    }
  ],

  // =========================================================================
  // 3. KLAPPKARTEN & ABKÜRZUNGEN AUS DEM HEFT (SEITE 5 & 6)
  // =========================================================================
  abbreviationsList: [
    { abbr: "Bl", fullDe: "Blut", fullEs: "Sangre" },
    { abbr: "H", fullDe: "Herz", fullEs: "Corazón" },
    { abbr: "K", fullDe: "Körperzellen", fullEs: "Células del cuerpo" },
    { abbr: "Tr / tr.", fullDe: "transportiert", fullEs: "transporta" },
    { abbr: "S", fullDe: "Sauerstoff", fullEs: "Oxígeno (O₂)" },
    { abbr: "N", fullDe: "Nährstoffe", fullEs: "Nutrientes" },
    { abbr: "Ko", fullDe: "Kohlenstoffdioxid", fullEs: "Dióxido de carbono (CO₂)" },
    { abbr: "re", fullDe: "rechte", fullEs: "derecha" },
    { abbr: "li", fullDe: "linke", fullEs: "izquierda" },
    { abbr: "Herzk.", fullDe: "Herzkammer", fullEs: "Ventrículo (cámara del corazón)" },
    { abbr: "Bl / Lungenbl.", fullDe: "Lungenbläschen", fullEs: "Alvéolos pulmonares" }
  ],

  klappkarten: [
    {
      id: "kk_gefaesse",
      titleDe: "Klappkarte 1: die Blutgefäße",
      titleEs: "Tarjeta plegable 1: Los vasos sanguíneos (Pág. 5–6)",
      rows: [
        {
          id: "kk1_r1",
          leftClueDe: "Arterie",
          rightClueDe: "transportiert Bl... von H... zu K...",
          optionsDe: [
            "transportiert Blut vom Herzen zu den Körperzellen",
            "transportiert Blut von den Körperzellen zum Herzen",
            "verbindet die Herzkammern mit den Zähnen",
            "transportiert Wasser von der Lunge zum Magen"
          ],
          correctIdx: 0,
          fullSentenceDe: "Die Arterie transportiert Blut vom Herzen zu den Körperzellen.",
          tipEs: "Bl = Blut · H = Herz · K = Körperzellen. ¡La arteria siempre sale DEL corazón!"
        },
        {
          id: "kk1_r2",
          leftClueDe: "Vene",
          rightClueDe: "tr... Bl... von K... zu H...",
          optionsDe: [
            "transportiert Blut von den Körperzellen zum Herzen",
            "transportiert Blut vom Herzen zu den Körperzellen",
            "macht die Zellatmung in den Muskeln",
            "pumpt Luft in die Lungenbläschen"
          ],
          correctIdx: 0,
          fullSentenceDe: "Die Vene transportiert Blut von den Körperzellen (Organen) zum Herzen.",
          tipEs: "tr = transportiert · Bl = Blut · von K (Körperzellen) zu H (Herz)."
        },
        {
          id: "kk1_r3",
          leftClueDe: "Kapillare",
          rightClueDe: "...",
          optionsDe: [
            "sind mikroskopisch klein, verbinden Arterien und Venen (hier findet der Gasaustausch statt)",
            "sind die größten Röhren direkt am Herzen ohne Gasaustausch",
            "bilden das Blut im Knochenmark der langen Knochen",
            "transportieren nur Speichel durch den Mund"
          ],
          correctIdx: 0,
          fullSentenceDe: "Kapillaren sind mikroskopisch klein. Sie verbinden die Arterien und Venen. Hier findet der Gasaustausch statt.",
          tipEs: "En los capilares se unen arterias y venas y ocurre el intercambio de gases (Gasaustausch)."
        }
      ]
    },
    {
      id: "kk_lungenkreislauf",
      titleDe: "Klappkarte 2: der Lungenkreislauf",
      titleEs: "Tarjeta plegable 2: La circulación pulmonar (Pág. 5–6)",
      rows: [
        {
          id: "kk2_r1",
          leftClueDe: "die re... Herzkammer",
          rightClueDe: "pumpt sauerstoffar... Bl... zu ...",
          optionsDe: [
            "Die rechte Herzkammer pumpt sauerstoffarmes Blut zu den Lungenbläschen (zur Lunge)",
            "Die linke Herzkammer pumpt sauerstoffreiches Blut zu den Körperzellen",
            "Die rechte Herzkammer pumpt sauerstoffreiches Blut zu den Muskeln",
            "Die linke Herzkammer pumpt Wasser in die Knochen"
          ],
          correctIdx: 0,
          fullSentenceDe: "Die rechte Herzkammer pumpt sauerstoffarmes Blut über die Lungenarterie zu den Lungenbläschen.",
          tipEs: "re = rechte · sauerstoffar... = sauerstoffarmes · Bl = Blut · zu den Lungenbläschen."
        },
        {
          id: "kk2_r2",
          leftClueDe: "die Lungenbl...",
          rightClueDe: "machen den Gasaustausch",
          optionsDe: [
            "Die Lungenbläschen machen den Gasaustausch (Blut gibt CO₂ ab und nimmt Sauerstoff auf)",
            "Die Lungenbläschen pumpen das Blut wie ein Muskel durch den Körper",
            "Die Lungenbläschen geben Kohlenstoffdioxid ins Blut und nehmen Sauerstoff heraus",
            "Die Lungenbläschen bilden rote und weiße Blutkörperchen"
          ],
          correctIdx: 0,
          fullSentenceDe: "Die Lungenbläschen machen den Gasaustausch: Das Blut gibt Kohlenstoffdioxid ab und nimmt Sauerstoff auf.",
          tipEs: "Lungenbl... = Lungenbläschen (alvéolos). Ahí la sangre deja el CO₂ y toma O₂ fresco."
        },
        {
          id: "kk2_r3",
          leftClueDe: "das sauerstoffr... Bl...",
          rightClueDe: "fließt zur li... Herzk...",
          optionsDe: [
            "Das sauerstoffreiche Blut fließt (über die Lungenvene) zur linken Herzkammer",
            "Das sauerstoffarme Blut fließt zur rechten Herzkammer",
            "Das sauerstoffreiche Blut fließt direkt in die Füße",
            "Das sauerstoffarme Blut bleibt in der Lunge kleben"
          ],
          correctIdx: 0,
          fullSentenceDe: "Das sauerstoffreiche Blut fließt über die Lungenvene zur linken Herzkammer (linken Herzhälfte).",
          tipEs: "sauerstoffr... = sauerstoffreiche · li... Herzk... = linke Herzkammer."
        }
      ]
    },
    {
      id: "kk_koerperkreislauf",
      titleDe: "Klappkarte 3: der Körperkreislauf",
      titleEs: "Tarjeta plegable 3: La circulación corporal (Pág. 5–6)",
      rows: [
        {
          id: "kk3_r1",
          leftClueDe: "die linke Herzkammer",
          rightClueDe: "pumpt sauerstoffr... Bl. zu ...",
          optionsDe: [
            "Die linke Herzkammer pumpt sauerstoffreiches Blut zu den Körperzellen",
            "Die linke Herzkammer pumpt sauerstoffarmes Blut zu den Lungenbläschen",
            "Die rechte Herzkammer pumpt sauerstoffarmes Blut zu den Körperzellen",
            "Die linke Herzkammer nimmt Kohlenstoffdioxid aus der Luft auf"
          ],
          correctIdx: 0,
          fullSentenceDe: "Die linke Herzkammer pumpt sauerstoffreiches Blut (über die Körperarterie) zu den Körperzellen.",
          tipEs: "En el cuaderno (pág. 6) pusieron una «K...» (Körperzellen) como destino final desde la linke Herzkammer."
        },
        {
          id: "kk3_r2",
          leftClueDe: "die Zellen",
          rightClueDe: "machen die Zellatmung: nehmen S... und N... auf und geben Ko... ab",
          optionsDe: [
            "nehmen Sauerstoff und Nährstoffe auf und geben Kohlenstoffdioxid ab",
            "nehmen Kohlenstoffdioxid und Teer auf und geben Sauerstoff ab",
            "nehmen Blutplättchen auf und geben Knochenmark ab",
            "nehmen Nikotin auf und geben Wasser ab"
          ],
          correctIdx: 0,
          fullSentenceDe: "Die Zellen machen die Zellatmung: Sie nehmen Sauerstoff und Nährstoffe auf und geben Kohlenstoffdioxid ab.",
          tipEs: "S = Sauerstoff (oxígeno) · N = Nährstoffe (nutrientes) · Ko = Kohlenstoffdioxid (CO₂)."
        },
        {
          id: "kk3_r3",
          leftClueDe: "das Bl... (sauerstoffarm)",
          rightClueDe: "fließt zur rechten Herzkammer",
          optionsDe: [
            "Das sauerstoffarme Blut (mit viel CO₂) fließt über die Körpervene zur rechten Herzkammer zurück",
            "Das sauerstoffreiche Blut fließt von den Muskeln direkt in die Nase",
            "Das Blut verschwindet in den Muskelzellen",
            "Das Blut fließt von den Zellen direkt in die linke Herzkammer"
          ],
          correctIdx: 0,
          fullSentenceDe: "Das sauerstoffarme Blut fließt (über die Körpervene) zur rechten Herzkammer zurück.",
          tipEs: "Después de entregar el oxígeno a las células, la sangre pobre en O₂ vuelve al lado derecho del corazón."
        }
      ]
    }
  ],

  // =========================================================================
  // 4. TAB 2: DAS BLUT — SCHEMA (SEITE 1) & COMIC-FIGUREN (SEITE 2)
  // =========================================================================
  blutSchemaSlots: [
    {
      id: "slot_plasma",
      positionLabelDe: "Box links oben (Flüssiger Teil)",
      correctDe: "Blutplasma",
      hintEs: "Parte líquida amarilla que transporta sustancias (sustancias nutritivas, etc.).",
      optionsDe: ["Blutplasma", "Fester Teil", "Knochenmark", "Lungenbläschen"]
    },
    {
      id: "slot_fest",
      positionLabelDe: "Box rechts oben (Zweiter Hauptteil)",
      correctDe: "fester Teil",
      hintEs: "Parte sólida compuesta por los 3 tipos de células/corpúsculos sanguíneos.",
      optionsDe: ["fester Teil", "flüssiger Teil", "Wasserteil", "Gasaustausch"]
    },
    {
      id: "slot_plaettchen",
      positionLabelDe: "Box 1 unten (Reparieren Gefäße / Gerinnung)",
      correctDe: "Blutplättchen",
      hintEs: "Plaquetas: reparan vasos sanguíneos rotos para que la sangre coagule (gerinnt).",
      optionsDe: ["Blutplättchen", "Rote Blutkörperchen", "Weiße Blutkörperchen", "Flimmerhärchen"]
    },
    {
      id: "slot_weisse",
      positionLabelDe: "Box 2 unten (Kämpfen gegen Viren & Bakterien)",
      correctDe: "Weiße Blutkörperchen (Weiße Blutzellen)",
      hintEs: "Glóbulos blancos: defienden el cuerpo contra virus y bacterias.",
      optionsDe: ["Weiße Blutkörperchen (Weiße Blutzellen)", "Rote Blutkörperchen (Rote Blutzellen)", "Blutplättchen", "Blutplasma"]
    },
    {
      id: "slot_rote",
      positionLabelDe: "Box 3 unten (Transportieren O₂ und CO₂)",
      correctDe: "Rote Blutkörperchen (Rote Blutzellen)",
      hintEs: "Glóbulos rojos: transportan oxígeno (Sauerstoff) y dióxido de carbono (Kohlenstoffdioxid).",
      optionsDe: ["Rote Blutkörperchen (Rote Blutzellen)", "Weiße Blutkörperchen (Weiße Blutzellen)", "Blutplättchen", "Nervenzellen"]
    }
  ],

  comicColoringTargets: [
    {
      id: "comic_rote",
      letterBadge: "R",
      nameDe: "a) Die roten Blutkörperchen (Figuren mit „R“ und Sauerstoff-Ring)",
      taskDe: "Male die roten Blutkörperchen rot an!",
      tipEs: "Las figuras con «R» llevan aros de oxígeno sobre la cabeza → píntalas de ROJO (rot).",
      expectedColor: "rot",
      roleExplanationDe: "Sie transportieren Sauerstoff (die Ringe!) zu den Zellen und nehmen Kohlenstoffdioxid mit."
    },
    {
      id: "comic_weisse",
      letterBadge: "W / B",
      nameDe: "b) Das „B“ auf dem Schild der weißen Blutkörperchen (Wächter mit Schwert & Helm „W“)",
      taskDe: "Male das „B“ der weißen Blutkörperchen blau an!",
      tipEs: "Los guardias con espada y casco «W» tienen un escudo con la letra «B» → píntalo de AZUL (blau).",
      expectedColor: "blau",
      roleExplanationDe: "Wie Polizisten oder Ritter mit Schwert und Schild kämpfen sie gegen Viren und Bakterien!"
    },
    {
      id: "comic_plaettchen",
      letterBadge: "P",
      nameDe: "c) Die Blutplättchen (Bauarbeiter mit „P“ und Maurerkelle an der Gefäßwand)",
      taskDe: "Male die Blutplättchen braun an!",
      tipEs: "Los albañiles con la «P» están reparando los ladrillos rotos de la pared del vaso sanguíneo → píntalos de CAFÉ (braun).",
      expectedColor: "braun",
      roleExplanationDe: "Sie mauern das Loch in der kaputten Blutgefäßwand zu, damit das Blut nicht weiter herausfließt (Blutgerinnung!)."
    },
    {
      id: "comic_plasma",
      letterBadge: "💧",
      nameDe: "d) Das Blutplasma (Die Flüssigkeit im Blutgefäß, in der alle schwimmen)",
      taskDe: "Das Blutplasma ist gelb!",
      tipEs: "El líquido del río dentro del vaso sanguíneo donde flotan todos → píntalo de AMARILLO (gelb).",
      expectedColor: "gelb",
      roleExplanationDe: "Das Blutplasma ist der flüssige Teil des Blutes. In ihm leben die Blutkörperchen und Blutplättchen, und es transportiert Stoffe."
    }
  ],

  // =========================================================================
  // 5. TAB 3: DER BLUTKREISLAUF — SCHEMA BESCHRIFTEN (SEITE 3 & 4)
  // =========================================================================
  kreislaufNumbersTask: [
    {
      num: 1,
      correctDe: "Ein-/Ausatmung",
      tipEs: "Arriba del todo (nº 1): las flechas muestran el aire que entra y sale al respirar (Ein-/Ausatmung).",
      optionsDe: ["Ein-/Ausatmung", "Lunge", "Lungenkreislauf", "Herz", "Muskelzellen"]
    },
    {
      num: 2,
      correctDe: "Lunge",
      hintDe: "Das Organ oben, in dem die Lungenbläschen sitzen.",
      tipEs: "Nº 2 apunta directamente al pulmón (Lunge).",
      optionsDe: ["Lunge", "Ein-/Ausatmung", "Lungenkreislauf", "Herz", "Muskelzellen"]
    },
    {
      num: 3,
      correctDe: "Lungenkreislauf",
      tipEs: "Nº 3 señala el circuito superior entre el corazón y los pulmones (Lungenkreislauf).",
      optionsDe: ["Lungenkreislauf", "Körperkreislauf", "Herz", "Muskelzellen", "Ein-/Ausatmung"]
    },
    {
      num: 4,
      correctDe: "Herz",
      tipEs: "Nº 4 está en el centro bombeando la sangre (Herz).",
      optionsDe: ["Herz", "Lunge", "Muskelzellen", "Lungenkreislauf", "Ein-/Ausatmung"]
    },
    {
      num: 5,
      correctDe: "Muskelzellen",
      tipEs: "Nº 5 abajo del todo es el músculo donde las células reciben el oxígeno (Muskelzellen).",
      optionsDe: ["Muskelzellen", "Herz", "Lunge", "Lungenkreislauf", "Ein-/Ausatmung"]
    }
  ],

  kreislaufLabelsTask: [
    {
      id: "lbl_lungenarterie",
      posDe: "Blaues Gefäß oben links (pumpt sauerstoffarmes Blut VOM rechten Herzen ZUR Lunge)",
      correctDe: "Lungenarterie",
      tipEs: "¡Cuidado con la trampa! Aunque lleva sangre sin oxígeno (azul), sale DEL corazón hacia el pulmón, por eso es una ARTERIA (Lungenarterie).",
      optionsDe: ["Lungenarterie", "Lungenvene", "Körperarterie", "Körpervene", "rechte Herzhälfte", "linke Herzhälfte"]
    },
    {
      id: "lbl_lungenvene",
      posDe: "Rotes Gefäß oben rechts (bringt sauerstoffreiches Blut VON der Lunge ZUM linken Herzen)",
      correctDe: "Lungenvene",
      tipEs: "Viene DESDE el pulmón HACIA el corazón con sangre rica en oxígeno (roja) → como vuelve al corazón, es una VENA (Lungenvene).",
      optionsDe: ["Lungenvene", "Lungenarterie", "Körperarterie", "Körpervene", "rechte Herzhälfte", "linke Herzhälfte"]
    },
    {
      id: "lbl_rechte_herz",
      posDe: "Blaue Herzhälfte (links im Bild gezeichnet, enthält sauerstoffarmes Blut)",
      correctDe: "rechte Herzhälfte",
      tipEs: "En los dibujos anatómicos se mira al cuerpo de frente: el lado azul a la izquierda del papel es la mitad DERECHA del corazón (rechte Herzhälfte).",
      optionsDe: ["rechte Herzhälfte", "linke Herzhälfte", "Lungenarterie", "Körpervene", "Lungenvene", "Körperarterie"]
    },
    {
      id: "lbl_linke_herz",
      posDe: "Rote Herzhälfte mit Stern (*) (rechts im Bild gezeichnet, enthält sauerstoffreiches Blut)",
      correctDe: "linke Herzhälfte",
      tipEs: "El lado rojo (con el asterisco * en tu guía) recibe la sangre con mucho O₂ de los pulmones y la bombea al cuerpo: es la mitad IZQUIERDA (linke Herzhälfte / Herzkammer).",
      optionsDe: ["linke Herzhälfte", "rechte Herzhälfte", "Körperarterie", "Lungenvene", "Körpervene", "Lungenarterie"]
    },
    {
      id: "lbl_koerperarterie",
      posDe: "Rotes Gefäß unten rechts (transportiert sauerstoffreiches Blut VOM linken Herzen ZU den Muskelzellen)",
      correctDe: "Körperarterie",
      tipEs: "Sale DEL corazón izquierdo hacia las células de los músculos llevando sangre rica en oxígeno → Körperarterie.",
      optionsDe: ["Körperarterie", "Körpervene", "Lungenarterie", "Lungenvene", "linke Herzhälfte", "rechte Herzhälfte"]
    },
    {
      id: "lbl_koerpervene",
      posDe: "Blaues Gefäß unten links (bringt sauerstoffarmes Blut VON den Muskelzellen zurück ZUM rechten Herzen)",
      correctDe: "Körpervene",
      tipEs: "Regresa DESDE las células musculares HACIA el corazón derecho con sangre pobre en O₂ y rica en CO₂ → Körpervene.",
      optionsDe: ["Körpervene", "Körperarterie", "Lungenvene", "Lungenarterie", "rechte Herzhälfte", "linke Herzhälfte"]
    }
  ],

  gasaustauschSortingTask: [
    {
      id: "gs_1",
      sentenceDe: "Das Blut nimmt Sauerstoff auf.",
      sentenceEs: "La sangre absorbe/toma oxígeno.",
      correctLocation: "Lunge (Nr. 2 — Lungenbläschen)",
      options: ["Lunge (Nr. 2 — Lungenbläschen)", "Muskelzellen / Körperzellen (Nr. 5)"],
      explanationDe: "In den Lungenbläschen der Lunge kommt frischer Sauerstoff aus der Atemluft ins Blut!"
    },
    {
      id: "gs_2",
      sentenceDe: "Das Blut gibt Kohlenstoffdioxid ab.",
      sentenceEs: "La sangre entrega/libera dióxido de carbono.",
      correctLocation: "Lunge (Nr. 2 — Lungenbläschen)",
      options: ["Lunge (Nr. 2 — Lungenbläschen)", "Muskelzellen / Körperzellen (Nr. 5)"],
      explanationDe: "In der Lunge gibt das Blut das Kohlenstoffdioxid (CO₂) ab, damit wir es ausatmen können."
    },
    {
      id: "gs_3",
      sentenceDe: "Die Zelle nimmt Sauerstoff auf.",
      sentenceEs: "La célula absorbe/toma oxígeno.",
      correctLocation: "Muskelzellen / Körperzellen (Nr. 5)",
      options: ["Muskelzellen / Körperzellen (Nr. 5)", "Lunge (Nr. 2 — Lungenbläschen)"],
      explanationDe: "Unten in den Muskelzellen (Körperzellen) nimmt die Zelle den Sauerstoff für die Zellatmung auf."
    },
    {
      id: "gs_4",
      sentenceDe: "Die Zelle gibt Kohlenstoffdioxid ab.",
      sentenceEs: "La célula entrega/libera dióxido de carbono.",
      correctLocation: "Muskelzellen / Körperzellen (Nr. 5)",
      options: ["Muskelzellen / Körperzellen (Nr. 5)", "Lunge (Nr. 2 — Lungenbläschen)"],
      explanationDe: "Bei der Zellatmung in den Muskelzellen entsteht Kohlenstoffdioxid, das die Zelle ans Blut abgibt."
    }
  ],

  // =========================================================================
  // 6. TAB 4: TABAK-LABOR (SEITE 7–10) & 5-FEHLER-DETEKTIV (SEITE 11)
  // =========================================================================
  smokerModelSteps: [
    {
      id: "sm_teer",
      stepNum: 1,
      questionDe: "1. Wo bleibt Teer im Atmungssystem kleben? Und mit welcher Farbe sollst du es auf Seite 10 anmalen?",
      tipEs: "Pregunta 1 de la página 10: ¿Dónde se queda pegado el alquitrán (Teer) y de qué color se pinta?",
      correctColor: "braun",
      options: [
        {
          textDe: "In den Lungenbläschen (und an den Flimmerhärchen) — in BRAUN anmalen!",
          textEs: "En los alvéolos pulmonares (y cilios) — pintar de CAFÉ (braun).",
          correct: true
        },
        {
          textDe: "Im Knochenmark der Knochen — in GELB anmalen!",
          textEs: "En la médula ósea — pintar de amarillo.",
          correct: false
        },
        {
          textDe: "Nur außen an den Haaren — in GRÜN anmalen!",
          textEs: "Solo en el pelo — pintar de verde.",
          correct: false
        }
      ],
      effectDe: "Der braune Teer klebt in den Lungenbläschen: Der Gasaustausch wird schwieriger, es kommt nicht genug Sauerstoff ins Blut und Kohlenstoffdioxid bleibt im Blut!"
    },
    {
      id: "sm_nikotin",
      stepNum: 2,
      questionDe: "2. Wie wirkt Nikotin auf die Blutgefäße? Und mit welcher Farbe malst du es auf Seite 10?",
      tipEs: "Pregunta 2 de la página 10: ¿Cómo actúa la nicotina sobre los vasos sanguíneos y de qué color se pinta?",
      correctColor: "lila",
      options: [
        {
          textDe: "Die Blutgefäße verengen sich (werden enger, hart und steif) — in LILA anmalen!",
          textEs: "Los vasos sanguíneos se estrechan (se vuelven duros y rígidos) — pintar de LILA/MORADO.",
          correct: true
        },
        {
          textDe: "Die Blutgefäße werden doppelt so breit — in BLAU anmalen!",
          textEs: "Los vasos sanguíneos se vuelven el doble de anchos — pintar de azul.",
          correct: false
        },
        {
          textDe: "Die Blutgefäße lösen sich in Wasser auf — in WEISS anmalen!",
          textEs: "Los vasos se disuelven en agua — pintar de blanco.",
          correct: false
        }
      ],
      effectDe: "Nikotin verengt die Blutgefäße (in lila eingezeichnet). Dadurch fließt das Blut schlechter und Körperteile können absterben (Raucherbein)!"
    },
    {
      id: "sm_co",
      stepNum: 3,
      questionDe: "3. Welches Gas kommt außer Sauerstoff und Kohlendioxid auch ins Blut rein? Male seinen Weg von den Lungenbläschen bis zur Zelle in GRAU!",
      tipEs: "Pregunta 3 de la página 10: ¿Qué gas venenoso entra además a la sangre y viaja en GRIS desde los alvéolos hasta la célula?",
      correctColor: "grau",
      options: [
        {
          textDe: "Kohlenstoffmonoxid (Kohlenmonoxid) — es ist schneller als Sauerstoff (Weg in GRAU)!",
          textEs: "Monóxido de carbono — es más rápido que el oxígeno (camino en GRIS).",
          correct: true
        },
        {
          textDe: "Helium-Gas — es macht die Stimme hoch (Weg in ROSA)!",
          textEs: "Gas helio — camino en rosado.",
          correct: false
        },
        {
          textDe: "Wasserdampf — er kühlt die Muskeln (Weg in BLAU)!",
          textEs: "Vapor de agua — camino en azul.",
          correct: false
        }
      ],
      effectDe: "Kohlenstoffmonoxid gelangt durch die Lungenbläschen ins Blut. Da es schneller als Sauerstoff ist, wird weniger Sauerstoff zu den Zellen transportiert!"
    }
  ],

  // Die 6 Sätze von Seite 11 (5 Fehler + 1 richtiger Satz!)
  fiveErrorsSentences: [
    {
      num: 1,
      originalDe: "1. Wenn Du atmest, dann kommt Wasser in die Lunge.",
      originalEs: "1. Cuando respiras, entonces entra agua a los pulmones.",
      hasError: true,
      wrongWordDe: "Wasser",
      correctedDe: "Wenn du atmest, dann kommt Luft (oder: Sauerstoff) in die Lunge.",
      optionsDe: [
        "Fehler: „Wasser“ → Korrektur: Wenn du atmest, dann kommt Luft (Sauerstoff) in die Lunge.",
        "Kein Fehler! Der Satz ist 100 % richtig.",
        "Fehler: „Lunge“ → Korrektur: Wenn du atmest, dann kommt Wasser in das Knochenmark.",
        "Fehler: „atmest“ → Korrektur: Wenn du schläfst, dann kommt Teer in die Lunge."
      ],
      correctIdx: 0,
      tipEs: "En tu guía marcaste «Wasser» y escribiste: «Wenn du atmest, dann kommt Luft in die Lunge.» ¡Perfecto! (Recuerda escribir el verbo «atmest» con minúscula)."
    },
    {
      num: 2,
      originalDe: "2. Die Lungenbläschen geben den Sauerstoff an die Zellen ab.",
      originalEs: "2. Los alvéolos pulmonares entregan el oxígeno directamente a las células.",
      hasError: true,
      wrongWordDe: "Lungenbläschen / an die Zellen",
      correctedDe: "Die Lungenbläschen geben den Sauerstoff an das Blut ab. (Oder: Die Blutgefäße / Das Blut geben den Sauerstoff an die Zellen ab.)",
      optionsDe: [
        "Fehler! Korrektur: Die Lungenbläschen geben den Sauerstoff an das Blut ab (oder: Die Blutgefäße / Das Blut geben den Sauerstoff an die Zellen ab).",
        "Kein Fehler! Die Lungenbläschen wandern selbst zu den Fußzellen.",
        "Fehler! Korrektur: Die Lungenbläschen geben Kohlenmonoxid an die Haare ab.",
        "Fehler! Korrektur: Die Zähne geben den Sauerstoff an die Zellen ab."
      ],
      correctIdx: 0,
      tipEs: "Los alvéolos están en el pulmón: le entregan el oxígeno a la SANGRE (an das Blut), y la sangre/vasos sanguíneos (die Blutgefäße) se lo entregan a las células."
    },
    {
      num: 3,
      originalDe: "3. Das Blut transportiert den Sauerstoff zu den Zellen.",
      originalEs: "3. La sangre transporta el oxígeno hacia las células.",
      hasError: false,
      wrongWordDe: "Kein Fehler (Richtig!)",
      correctedDe: "Richtig! Das Blut (die roten Blutkörperchen) transportiert den Sauerstoff zu den Zellen.",
      optionsDe: [
        "Kein Fehler! Dieser Satz ist vollkommen richtig (es gab nur 5 Fehler in den 6 Sätzen!).",
        "Fehler: „Sauerstoff“ → Das Blut transportiert nur Teer zu den Zellen.",
        "Fehler: „Das Blut“ → Die Knochen transportieren den Sauerstoff zu den Zellen.",
        "Fehler: „Zellen“ → Das Blut transportiert den Sauerstoff aus dem Körper hinaus."
      ],
      correctIdx: 0,
      tipEs: "¡Trampa clásica! Hay 6 oraciones pero el enunciado dice «Er hat 5 Fehler gemacht». La oración 3 es la única CORRECTA («3. Richtig» en tu hoja)."
    },
    {
      num: 4,
      originalDe: "4. Der Teer bleibt an den Flimmerhärchen kleben. So können sie besser arbeiten.",
      originalEs: "4. El alquitrán se queda pegado en los cilios (pelillos). Así pueden trabajar mejor.",
      hasError: true,
      wrongWordDe: "besser arbeiten",
      correctedDe: "Der Teer bleibt an den Flimmerhärchen kleben. So können sie schlechter (oder: nicht richtig) arbeiten.",
      optionsDe: [
        "Fehler: „besser arbeiten“ → Korrektur: Der Teer bleibt an den Flimmerhärchen kleben. So können sie schlechter (nicht richtig) arbeiten.",
        "Kein Fehler! Teer hilft den Flimmerhärchen beim Putzen.",
        "Fehler: „Der Teer“ → Das Wasser bleibt an den Flimmerhärchen kleben.",
        "Fehler: „Flimmerhärchen“ → Der Teer bleibt am Herzen kleben, so kann es besser arbeiten."
      ],
      correctIdx: 0,
      tipEs: "💡 Súper tip de alemán para la prueba: En tu hoja escribiste «schlimmer arbeiten» y «Flimerherchen». En alemán se escribe «Flimmerhärchen» (con mm y ä) y lo contrario de «besser arbeiten» es «schlechter arbeiten» o «nicht richtig arbeiten»."
    },
    {
      num: 5,
      originalDe: "5. Das Nikotin macht die Blutgefäße breiter (anchos). Das Blut bewegt sich langsamer und die Zellen erhalten weniger Nährstoffe und weniger Sauerstoff.",
      originalEs: "5. La nicotina hace los vasos sanguíneos más anchos. La sangre se mueve más lento...",
      hasError: true,
      wrongWordDe: "breiter (anchos)",
      correctedDe: "Das Nikotin macht die Blutgefäße enger (oder: schmaler / dünner). (Oder: Das Nikotin verengt die Blutgefäße.)",
      optionsDe: [
        "Fehler: „breiter“ → Korrektur: Das Nikotin macht die Blutgefäße enger / dünner (verengt die Blutgefäße).",
        "Kein Fehler! Nikotin macht die Blutgefäße riesig breit.",
        "Fehler: „Nikotin“ → Der Sauerstoff macht die Blutgefäße breiter.",
        "Fehler: „langsamer“ → Das Blut bewegt sich gar nicht durch das Herz."
      ],
      correctIdx: 0,
      tipEs: "La nicotina NO ensancha los vasos sanguíneos, sino que los estrecha: «Das Nikotin macht die Blutgefäße enger / dünner» (o «verengt die Blutgefäße»)."
    },
    {
      num: 6,
      originalDe: "6. Der Teer klebt in den Lungenbläschen. In die Blutgefäße kommt mehr Sauerstoff.",
      originalEs: "6. El alquitrán se pega en los alvéolos. A los vasos sanguíneos entra más oxígeno.",
      hasError: true,
      wrongWordDe: "mehr Sauerstoff",
      correctedDe: "Der Teer klebt in den Lungenbläschen. In die Blutgefäße kommt weniger (oder: nicht genug) Sauerstoff.",
      optionsDe: [
        "Fehler: „mehr Sauerstoff“ → Korrektur: Der Teer klebt in den Lungenbläschen. In die Blutgefäße kommt weniger (nicht genug) Sauerstoff.",
        "Kein Fehler! Teer produziert extra Sauerstoff.",
        "Fehler: „Lungenbläschen“ → Der Teer klebt in den weißen Blutkörperchen.",
        "Fehler: „Sauerstoff“ → In die Blutgefäße kommt mehr Gold."
      ],
      correctIdx: 0,
      tipEs: "Si el alquitrán tapa los alvéolos, el intercambio gaseoso se dificulta y pasa MENOS oxígeno a la sangre («weniger Sauerstoff» / «nicht genug Sauerstoff»)."
    }
  ],

  // =========================================================================
  // 7. TAB 5: GROSSE PRÜFUNGS-ARENA (64 FRAGEN IN 4 WELTEN + ZUFALLS-GENERATOR)
  // =========================================================================
  arenaWorlds: {
    blut: "🩸 1. Das Blut & Comic (16)",
    kreislauf: "🫀 2. Herz & Blutkreislauf (16)",
    tabak: "🚬 3. Tabak, Nikotin, Teer & CO (16)",
    passiv_fehler: "🛡️ 4. Passivrauchen & 5-Fehler (16)"
  },

  arenaQuestions: [
    // =======================================================================
    // WELT 1: DAS BLUT & KNOCHENMARK & COMIC-FIGUREN (16 FRAGEN)
    // =======================================================================
    {
      id: "q_blut_1",
      world: "blut",
      topicDe: "🩸 Das Blut — Grundbegriff (S. 1)",
      questionDe: "Wie wird das Blut im ersten Satz deines Naturkunde-Arbeitsblattes beschrieben?",
      questionEs: "¿Cómo se describe la sangre en la primera frase de tu guía de Naturkunde?",
      tipEs: "💡 Tipp auf Spanisch: «flüssig» = líquido, «das Gewebe» = el tejido.",
      svgSpec: { type: "blood_tube_split" },
      options: [
        { textDe: "Als ein „flüssiges Gewebe“", textEs: "Como un «tejido líquido»", correct: true },
        { textDe: "Als ein „fester Knochen“", textEs: "Como un «hueso sólido»", correct: false },
        { textDe: "Als ein „gasförmiger Muskel“", textEs: "Como un «músculo gaseoso»", correct: false },
        { textDe: "Als „reines Wasser ohne Zellen“", textEs: "Como «agua pura sin células»", correct: false }
      ],
      explanationDe: "Auf Seite 1 steht: „Das Blut ist ein flüssiges Gewebe. Es besteht aus einem flüssigen Teil, dem Blutplasma, und einem festen Teil.“",
      explanationEs: "La sangre es un «flüssiges Gewebe» (tejido líquido) compuesto por una parte líquida (Blutplasma) y una parte sólida (fester Teil)."
    },
    {
      id: "q_blut_2",
      world: "blut",
      topicDe: "🩸 Hauptteile des Blutes (S. 1)",
      questionDe: "Aus welchen zwei Hauptteilen besteht das menschliche Blut laut dem Schema auf Seite 1?",
      questionEs: "¿De qué dos partes principales se compone la sangre humana según el esquema de la página 1?",
      tipEs: "💡 Tipp auf Spanisch: Mira las dos primeras ramas debajo de «BLUT» en la Actividad 1.",
      svgSpec: { type: "blood_schema_blank" },
      options: [
        { textDe: "Aus einem flüssigen Teil (Blutplasma) und einem festen Teil", textEs: "De una parte líquida (plasma) y una parte sólida", correct: true },
        { textDe: "Aus Luft und Knochenmark", textEs: "De aire y médula ósea", correct: false },
        { textDe: "Aus Arterien und Venen", textEs: "De arterias y venas", correct: false },
        { textDe: "Aus Teer und Nikotin", textEs: "De alquitrán y nicotina", correct: false }
      ],
      explanationDe: "Das Blut teilt sich im Schema zuerst in den flüssigen Teil (Blutplasma) und den festen Teil (Blutkörperchen + Blutplättchen).",
      explanationEs: "El esquema principal divide BLUT en «Blutplasma» (parte líquida) y «fester Teil» (parte sólida)."
    },
    {
      id: "q_blut_3",
      world: "blut",
      topicDe: "🩸 Fester Teil des Blutes (S. 1)",
      questionDe: "Welche drei Bestandteile gehören zum FESTEN Teil des Blutes?",
      questionEs: "¿Qué tres componentes pertenecen a la parte SÓLIDA (fester Teil) de la sangre?",
      tipEs: "💡 Tipp auf Spanisch: Son las tres cajitas de abajo en el esquema de la página 1.",
      svgSpec: { type: "blood_cells_trio" },
      options: [
        { textDe: "Rote Blutkörperchen, weiße Blutkörperchen und Blutplättchen", textEs: "Glóbulos rojos, glóbulos blancos y plaquetas", correct: true },
        { textDe: "Blutplasma, Wasser und Sauerstoff", textEs: "Plasma sanguíneo, agua y oxígeno", correct: false },
        { textDe: "Arterien, Venen und Kapillaren", textEs: "Arterias, venas y capilares", correct: false },
        { textDe: "Herz, Lunge und Muskelzellen", textEs: "Corazón, pulmón y células musculares", correct: false }
      ],
      explanationDe: "Zum festen Teil gehören: 1. die roten Blutkörperchen (rote Blutzellen), 2. die weißen Blutkörperchen (weiße Blutzellen) und 3. die Blutplättchen.",
      explanationEs: "A la parte sólida pertenecen los glóbulos rojos, los glóbulos blancos y las plaquetas."
    },
    {
      id: "q_blut_4",
      world: "blut",
      topicDe: "🦴 Wo entsteht das Blut? (S. 1)",
      questionDe: "Wo im Körper bildet sich das Blut (die Blutzellen)?",
      questionEs: "¿En qué lugar del cuerpo se forma la sangre (las células sanguíneas)?",
      tipEs: "💡 Tipp auf Spanisch: «Knochen» = hueso, «Mark» = médula.",
      svgSpec: { type: "bone_marrow_stem" },
      options: [
        { textDe: "Im Knochenmark der langen Knochen", textEs: "En la médula ósea de los huesos largos", correct: true },
        { textDe: "In den Lungenbläschen der Lunge", textEs: "En los alvéolos de los pulmones", correct: false },
        { textDe: "In der linken Herzkammer", textEs: "En el ventrículo izquierdo del corazón", correct: false },
        { textDe: "Im Magen aus dem Trinkwasser", textEs: "En el estómago a partir del agua", correct: false }
      ],
      explanationDe: "Das Blut bildet sich im roten Knochenmark der langen Knochen (aus den Stammzellen).",
      explanationEs: "«Das Blut bildet sich im Knochenmark der langen Knochen» (en la médula ósea de los huesos largos)."
    },
    {
      id: "q_blut_5",
      world: "blut",
      topicDe: "🧪 Funktion des Blutplasmas (S. 1)",
      questionDe: "Was ist die wichtigste Funktion vom Blutplasma und wer lebt in ihm?",
      questionEs: "¿Cuál es la función más importante del plasma sanguíneo y quiénes viven en él?",
      tipEs: "💡 Tipp auf Spanisch: El plasma es el río líquido que transporta sustancias (Stoffe).",
      svgSpec: { type: "blood_tube_split" },
      options: [
        { textDe: "Der Transport von verschiedenen Stoffen; in ihm leben die Blutkörperchen und die Blutplättchen", textEs: "El transporte de diversas sustancias; en él viven los glóbulos y las plaquetas", correct: true },
        { textDe: "Es kämpft mit Schwertern gegen Viren und Bakterien", textEs: "Lucha con espadas contra virus y bacterias", correct: false },
        { textDe: "Es pumpt als starker Muskel das Blut durch die Arterien", textEs: "Bombea como un músculo la sangre por las arterias", correct: false },
        { textDe: "Es verklebt die Flimmerhärchen in den Atemwegen", textEs: "Pega los cilios en las vías respiratorias", correct: false }
      ],
      explanationDe: "Die wichtigste Funktion vom Blutplasma ist der Transport von verschiedenen Stoffen (z. B. Nährstoffen). In ihm schwimmen/leben die Blutkörperchen und Blutplättchen.",
      explanationEs: "El plasma transporta distintas sustancias y en él viven los glóbulos sanguíneos y las plaquetas."
    },
    {
      id: "q_blut_6",
      world: "blut",
      topicDe: "🔴 Rote Blutkörperchen (S. 1)",
      questionDe: "Welche Aufgabe haben die roten Blutkörperchen (Erythrozyten)?",
      questionEs: "¿Qué función tienen los glóbulos rojos (rote Blutkörperchen)?",
      tipEs: "💡 Tipp auf Spanisch: Piensa en los dos gases de la respiración: O₂ y CO₂.",
      svgSpec: { type: "single_cell_red" },
      options: [
        { textDe: "Den Transport von Sauerstoff (O₂) und Kohlenstoffdioxid (CO₂)", textEs: "El transporte de oxígeno y dióxido de carbono", correct: true },
        { textDe: "Den Kampf gegen Viren und Bakterien", textEs: "La lucha contra virus y bacterias", correct: false },
        { textDe: "Die Reparatur von zerstörten Blutgefäßen (Gerinnung)", textEs: "La reparación de vasos sanguíneos dañados", correct: false },
        { textDe: "Die Bildung von Knochenmark", textEs: "La formación de médula ósea", correct: false }
      ],
      explanationDe: "Die Funktion der roten Blutkörperchen ist der Transport von Sauerstoff (zu den Zellen) und Kohlenstoffdioxid (zurück zur Lunge).",
      explanationEs: "Los glóbulos rojos transportan Sauerstoff (oxígeno) y Kohlenstoffdioxid (CO₂)."
    },
    {
      id: "q_blut_7",
      world: "blut",
      topicDe: "🛡️ Weiße Blutkörperchen (S. 1)",
      questionDe: "Welche Aufgabe haben die weißen Blutkörperchen (Leukozyten) im Körper?",
      questionEs: "¿Qué función cumplen los glóbulos blancos (weiße Blutkörperchen) en el cuerpo?",
      tipEs: "💡 Tipp auf Spanisch: «kämpfen gegen...» = luchar contra...",
      svgSpec: { type: "single_cell_white" },
      options: [
        { textDe: "Sie kämpfen gegen Viren und Bakterien", textEs: "Luchan contra los virus y las bacterias", correct: true },
        { textDe: "Sie transportieren Sauerstoff von der Lunge zu den Muskeln", textEs: "Transportan oxígeno del pulmón a los músculos", correct: false },
        { textDe: "Sie lassen das Blut bei einer Wunde gerinnen", textEs: "Hacen que la sangre coagule en una herida", correct: false },
        { textDe: "Sie färben das Blut tiefrot", textEs: "Tiñen la sangre de color rojo intenso", correct: false }
      ],
      explanationDe: "Die weißen Blutkörperchen sind die Polizei (Abwehr) unseres Körpers: Sie kämpfen gegen Viren und Bakterien!",
      explanationEs: "«Die weißen Blutkörperchen kämpfen gegen Viren und Bakterien»."
    },
    {
      id: "q_blut_8",
      world: "blut",
      topicDe: "🩹 Blutplättchen & Gerinnung (S. 1)",
      questionDe: "Was machen die Blutplättchen (Thrombozyten), wenn ein Blutgefäß verletzt oder zerstört wird?",
      questionEs: "¿Qué hacen las plaquetas (Blutplättchen) cuando un vaso sanguíneo se rompe o daña?",
      tipEs: "💡 Tipp auf Spanisch: «reparieren» = reparar, «gerinnt» = se coagula.",
      svgSpec: { type: "single_cell_platelet" },
      options: [
        { textDe: "Sie reparieren zerstörte Blutgefäße, damit das Blut gerinnt und nicht weiter herausfließt", textEs: "Reparan los vasos sanguíneos rotos para que la sangre coagule y no siga saliendo", correct: true },
        { textDe: "Sie fressen Bakterien und Viren auf", textEs: "Se comen a las bacterias y virus", correct: false },
        { textDe: "Sie pumpen das Blut schneller durch das Herz", textEs: "Bombean la sangre más rápido por el corazón", correct: false },
        { textDe: "Sie transportieren Kohlenstoffmonoxid ins Gehirn", textEs: "Transportan monóxido de carbono al cerebro", correct: false }
      ],
      explanationDe: "Die Blutplättchen reparieren zerstörte Blutgefäße und sorgen dafür, dass das Blut gerinnt (se coagula).",
      explanationEs: "Las plaquetas reparan los vasos sanguíneos dañados logrando que la sangre se coagule (es gerinnt)."
    },
    {
      id: "q_blut_9",
      world: "blut",
      topicDe: "🎨 Comic-Figuren des Blutes (S. 2)",
      questionDe: "Auf Seite 2 siehst du die Bestandteile des Blutes als Comic-Figuren. Welche Figuren reparieren dort mit Kelle und Steinen die kaputte Mauer des Blutgefäßes (und welche Farbe bekommen sie)?",
      questionEs: "En el cómic de la página 2, ¿qué figuras reparan con espátula y ladrillos el muro roto del vaso sanguíneo (y de qué color se pintan)?",
      tipEs: "💡 Tipp auf Spanisch: Tienen la letra «P» en la ropa.",
      svgSpec: { type: "comic_preview_p" },
      options: [
        { textDe: "Die Blutplättchen (Buchstabe „P“) — sie werden BRAUN angemalt", textEs: "Las plaquetas (letra «P») — se pintan de CAFÉ (braun)", correct: true },
        { textDe: "Die roten Blutkörperchen (Buchstabe „R“) — sie werden ROT angemalt", textEs: "Los glóbulos rojos (letra «R») — se pintan de rojo", correct: false },
        { textDe: "Die weißen Blutkörperchen (Schild „B“) — sie werden BLAU angemalt", textEs: "Los glóbulos blancos (escudo «B») — se pintan de azul", correct: false },
        { textDe: "Das Blutplasma — es wird GRÜN angemalt", textEs: "El plasma sanguíneo — se pinta de verde", correct: false }
      ],
      explanationDe: "Aufgabe 2c: „Male die Blutplättchen braun an.“ Die Figuren mit dem „P“ mauern die verletzte Gefäßwand zu!",
      explanationEs: "Las figuras «P» son los Blutplättchen (plaquetas) reparando la herida y se pintan de color café (braun)."
    },
    {
      id: "q_blut_10",
      world: "blut",
      topicDe: "🎨 Comic-Figuren des Blutes (S. 2)",
      questionDe: "Welche Farbe hat das Blutplasma im Comic auf Seite 2 und was bedeuten die Wächter mit dem Schwert und dem Schild „B“?",
      questionEs: "¿De qué color es el plasma sanguíneo en el cómic de la página 2 y qué representan los guardias con espada y escudo «B»?",
      tipEs: "💡 Tipp auf Spanisch: Revisa las instrucciones b) y d) de la página 2.",
      svgSpec: { type: "comic_preview_wb" },
      options: [
        { textDe: "Das Blutplasma ist GELB, und die Wächter sind die weißen Blutkörperchen (das „B“ wird BLAU angemalt)", textEs: "El plasma es AMARILLO y los guardias son los glóbulos blancos («B» en AZUL)", correct: true },
        { textDe: "Das Blutplasma ist ROT, und die Wächter sind die Blutplättchen", textEs: "El plasma es rojo y los guardias son las plaquetas", correct: false },
        { textDe: "Das Blutplasma ist BLAU, und die Wächter sind rote Blutkörperchen", textEs: "El plasma es azul y los guardias son glóbulos rojos", correct: false },
        { textDe: "Das Blutplasma ist BRAUN, und die Wächter sind Lungenbläschen", textEs: "El plasma es café y los guardias son alvéolos", correct: false }
      ],
      explanationDe: "Aufgabe 2b & 2d: „Male das B der weißen Blutkörperchen blau an“ und „Das Blutplasma ist gelb!“",
      explanationEs: "El escudo «B» de los glóbulos blancos se pinta azul (blau) y el plasma sanguíneo es amarillo (gelb)."
    },
    {
      id: "q_blut_11",
      world: "blut",
      topicDe: "🩸 Fachbegriffe im Bild (S. 1)",
      questionDe: "Im Bild oben rechts auf Seite 1 stehen in Klammern auch die wissenschaftlichen Namen der Blutzellen. Welche Zuordnung stimmt?",
      questionEs: "En la imagen superior derecha de la página 1 aparecen los nombres científicos entre paréntesis. ¿Cuál asociación es correcta?",
      tipEs: "💡 Tipp auf Spanisch: Erythro- = rojo, Leuko- = blanco, Thrombo- = coágulo/plaqueta.",
      svgSpec: { type: "bone_marrow_stem" },
      options: [
        { textDe: "Rote Blutkörperchen = Erythrozyten · Weiße Blutkörperchen = Leukozyten · Blutplättchen = Thrombozyten", textEs: "Rojos = Eritrocitos · Blancos = Leucocitos · Plaquetas = Trombocitos", correct: true },
        { textDe: "Rote Blutkörperchen = Leukozyten · Weiße Blutkörperchen = Thrombozyten", textEs: "Rojos = Leucocitos · Blancos = Trombocitos", correct: false },
        { textDe: "Rote Blutkörperchen = Kapillaren · Weiße Blutkörperchen = Arterien", textEs: "Rojos = Capilares · Blancos = Arterias", correct: false },
        { textDe: "Blutplättchen = Lungenbläschen · Blutplasma = Knochenmark", textEs: "Plaquetas = Alvéolos · Plasma = Médula ósea", correct: false }
      ],
      explanationDe: "Im Schaubild zur Stammzelle im roten Knochenmark steht: Rote Blutkörperchen (Erythrozyten), Weiße Blutkörperchen (Leukozyten), Blutplättchen (Thrombozyten).",
      explanationEs: "Erythrozyten = glóbulos rojos, Leukozyten = glóbulos blancos, Thrombozyten = plaquetas."
    },
    {
      id: "q_blut_12",
      world: "blut",
      topicDe: "🩸 Was passiert bei „Es gerinnt“? (S. 1)",
      questionDe: "Was bedeutet der Satz „Also, es gerinnt“ auf Seite 1?",
      questionEs: "¿Qué significa la frase «Also, es gerinnt» en la página 1?",
      tipEs: "💡 Tipp auf Spanisch: Ocurre gracias a las plaquetas cuando te haces una herida.",
      svgSpec: { type: "single_cell_platelet" },
      options: [
        { textDe: "Das Blut wird an der verletzten Stelle fest (koaguliert) und verschließt die Wunde, damit man nicht verblutet", textEs: "La sangre se coagula en la herida cerrándola para que deje de sangrar", correct: true },
        { textDe: "Das Blut wird dünner als Wasser und fließt doppelt so schnell", textEs: "La sangre se vuelve más líquida que el agua", correct: false },
        { textDe: "Das Blut verwandelt sich in Luft", textEs: "La sangre se transforma en aire", correct: false },
        { textDe: "Die weißen Blutkörperchen verlassen den Körper", textEs: "Los glóbulos blancos abandonan el cuerpo", correct: false }
      ],
      explanationDe: "„Es gerinnt“ (se coagula) heißt: Die Blutplättchen verschließen das kaputte Blutgefäß, sodass das Blut nicht weiter herausfließt.",
      explanationEs: "«Es gerinnt» significa que la sangre se coagula y tapona la herida."
    },
    {
      id: "q_blut_13",
      world: "blut",
      topicDe: "🩸 Blutgefäß-Querschnitt (S. 1)",
      questionDe: "Auf Seite 1 links siehst du ein rundes Rohr, aus dem Blutkörperchen und Blutplättchen herauskommen. Wie ist dieses Rohr beschriftet?",
      questionEs: "En la página 1 a la izquierda ves un tubo redondo del que salen glóbulos y plaquetas. ¿Cómo está rotulado ese tubo?",
      tipEs: "💡 Tipp auf Spanisch: Es el nombre general de cualquier vaso sanguíneo en singular.",
      svgSpec: { type: "vessel_cross_section" },
      options: [
        { textDe: "Blutgefäß", textEs: "Vaso sanguíneo (Blutgefäß)", correct: true },
        { textDe: "Luftröhre", textEs: "Tráquea", correct: false },
        { textDe: "Knochenmark", textEs: "Médula ósea", correct: false },
        { textDe: "Flimmerhärchen", textEs: "Cilios", correct: false }
      ],
      explanationDe: "Im Bild auf Seite 1 steht oben links „Blutgefäß“ und darin schwimmen „rotes Blutkörperchen“, „weißes Blutkörperchen“ und „Blutplättchen“.",
      explanationEs: "El tubo es un «Blutgefäß» (vaso sanguíneo)."
    },
    {
      id: "q_blut_14",
      world: "blut",
      topicDe: "🩸 Rätsel: Wer bin ich im Blut? (S. 1–2)",
      questionDe: "Lies das Rätsel: „Ich bin rund wie ein kleiner roter Ring ohne Kern. Im Comic trage ich Ringe auf dem Kopf, weil ich Sauerstoff zu deinen Zellen bringe.“ Wer bin ich?",
      questionEs: "Lee la adivinanza: «Soy redondo como un pequeño anillo rojo. En el cómic llevo aros porque llevo oxígeno a tus células.» ¿Quién soy?",
      tipEs: "💡 Tipp auf Spanisch: Tiene la letra «R» en el cómic de la página 2.",
      svgSpec: { type: "comic_preview_r" },
      options: [
        { textDe: "Ein rotes Blutkörperchen", textEs: "Un glóbulo rojo", correct: true },
        { textDe: "Ein weißes Blutkörperchen", textEs: "Un glóbulo blanco", correct: false },
        { textDe: "Ein Blutplättchen", textEs: "Una plaqueta", correct: false },
        { textDe: "Das Blutplasma", textEs: "El plasma sanguíneo", correct: false }
      ],
      explanationDe: "Die roten Blutkörperchen („R“ im Comic) sehen aus wie kleine rote Ringe/Scheiben und transportieren den Sauerstoff!",
      explanationEs: "Es un glóbulo rojo (rotes Blutkörperchen)."
    },
    {
      id: "q_blut_15",
      world: "blut",
      topicDe: "🩸 Was passiert bei zu wenig weißen Blutkörperchen?",
      questionDe: "Was wäre die Folge, wenn ein Mensch plötzlich keine funktionierenden weißen Blutkörperchen mehr hätte?",
      questionEs: "¿Qué pasaría si una persona de pronto no tuviera glóbulos blancos funcionando?",
      tipEs: "💡 Tipp auf Spanisch: Recuerda cuál es el trabajo de los glóbulos blancos.",
      svgSpec: { type: "single_cell_white" },
      options: [
        { textDe: "Der Körper könnte nicht mehr gut gegen Viren und Bakterien kämpfen und würde schnell krank werden", textEs: "El cuerpo no podría luchar bien contra virus y bacterias y se enfermaría rápido", correct: true },
        { textDe: "Das Blut wäre nicht mehr flüssig, sondern hart wie Stein", textEs: "La sangre dejaría de ser líquida", correct: false },
        { textDe: "Die Lunge würde sofort mit Teer verkleben", textEs: "Los pulmones se llenarían de alquitrán", correct: false },
        { textDe: "Das Herz würde aufhören zu schlagen", textEs: "El corazón dejaría de latir de inmediato", correct: false }
      ],
      explanationDe: "Da die weißen Blutkörperchen gegen Viren und Bakterien kämpfen, wäre unsere Abwehr ohne sie extrem schwach.",
      explanationEs: "Sin glóbulos blancos no tendríamos defensa contra virus y bacterias."
    },
    {
      id: "q_blut_16",
      world: "blut",
      topicDe: "🩸 Was transportieren rote Blutkörperchen ZURÜCK?",
      questionDe: "Die roten Blutkörperchen bringen Sauerstoff zu den Zellen. Welches Gas nehmen sie von den Zellen wieder mit zurück?",
      questionEs: "Los glóbulos rojos llevan oxígeno a las células. ¿Qué gas recogen de las células para llevarlo de vuelta?",
      tipEs: "💡 Tipp auf Spanisch: Es el gas que se produce en la respiración celular (Zellatmung).",
      svgSpec: { type: "single_cell_red" },
      options: [
        { textDe: "Kohlenstoffdioxid (CO₂)", textEs: "Dióxido de carbono (CO₂)", correct: true },
        { textDe: "Nikotin", textEs: "Nicotina", correct: false },
        { textDe: "Teer", textEs: "Alquitrán", correct: false },
        { textDe: "Blutplasma", textEs: "Plasma sanguíneo", correct: false }
      ],
      explanationDe: "Auf Seite 1 steht: „Die Funktion der roten Blutkörperchen ist der Transport von Sauerstoff und Kohlenstoffdioxid.“",
      explanationEs: "Transportan tanto oxígeno (Sauerstoff) como dióxido de carbono (Kohlenstoffdioxid)."
    },

    // =======================================================================
    // WELT 2: HERZ, BLUTGEFÄSSE & BLUTKREISLAUF (16 FRAGEN, SEITE 3–6)
    // =======================================================================
    {
      id: "q_kr_1",
      world: "kreislauf",
      topicDe: "🫀 Das Herz & Blutmenge (S. 3)",
      questionDe: "Welcher Muskel arbeitet dein ganzes Leben lang ohne eine Pause zu machen, und wie viel Liter Blut haben Kinder und Erwachsene?",
      questionEs: "¿Qué músculo trabaja toda tu vida sin hacer pausa, y cuántos litros de sangre tienen los niños y los adultos?",
      tipEs: "💡 Tipp auf Spanisch: Lee el primer párrafo de la página 3 («Der Blutkreislauf»).",
      svgSpec: { type: "heart_liters" },
      options: [
        { textDe: "Das Herz! Kinder haben 3 oder 4 Liter Blut, Erwachsene haben 5 Liter.", textEs: "¡El corazón! Los niños tienen 3 o 4 litros, los adultos 5 litros.", correct: true },
        { textDe: "Die Lunge! Kinder haben 1 Liter Blut, Erwachsene haben 10 Liter.", textEs: "¡El pulmón! Niños 1 litro, adultos 10 litros.", correct: false },
        { textDe: "Das Herz! Kinder und Erwachsene haben beide genau 2 Liter Blut.", textEs: "¡El corazón! Ambos tienen exactamente 2 litros.", correct: false },
        { textDe: "Der Beinmuskel! Kinder haben 5 Liter Blut, Erwachsene haben 3 Liter.", textEs: "¡El músculo de la pierna! Niños 5 L, adultos 3 L.", correct: false }
      ],
      explanationDe: "Seite 3: „Das ist das Herz. Es pumpt das Blut durch den Körper. Kinder haben 3 oder 4 Liter Blut. Erwachsene haben 5 Liter.“",
      explanationEs: "El corazón trabaja sin pausa; los niños tienen 3 o 4 litros de sangre y los adultos 5 litros."
    },
    {
      id: "q_kr_2",
      world: "kreislauf",
      topicDe: "🩸 Die 3 Arten von Blutgefäßen (S. 3)",
      questionDe: "Blutgefäße sind Röhren, die Blut transportieren. Aus welchen drei Arten von Blutgefäßen besteht der menschliche Blutkreislauf?",
      questionEs: "Los vasos sanguíneos son tubos que transportan sangre. ¿De qué tres tipos de vasos sanguíneos consta el sistema circulatorio?",
      tipEs: "💡 Tipp auf Spanisch: Están en negrita con viñetas en la página 3.",
      svgSpec: { type: "vessel_symbols_table" },
      options: [
        { textDe: "Arterien, Venen und Kapillaren", textEs: "Arterias, venas y capilares", correct: true },
        { textDe: "Lungenbläschen, Flimmerhärchen und Knochenmark", textEs: "Alvéolos, cilios y médula ósea", correct: false },
        { textDe: "Vorhöfe, Herzkammern und Muskelzellen", textEs: "Aurículas, ventrículos y células musculares", correct: false },
        { textDe: "Rote, weiße und braune Röhren", textEs: "Tubos rojos, blancos y cafés", correct: false }
      ],
      explanationDe: "Der menschliche Blutkreislauf besteht aus drei Arten von Blutgefäßen: Arterien, Venen und Kapillaren.",
      explanationEs: "Los tres tipos de Blutgefäße son: Arterien, Venen y Kapillaren."
    },
    {
      id: "q_kr_3",
      world: "kreislauf",
      topicDe: "➡️ Richtung der Arterien (S. 3)",
      questionDe: "Schau auf das Symbol [ ♡ ──► 🧍 ] aus der Tabelle auf Seite 3. In welche Richtung transportieren ARTERIEN das Blut?",
      questionEs: "Mira el símbolo [ ♡ ──► 🧍 ] de la tabla de la página 3. ¿En qué dirección transportan la sangre las ARTERIAS?",
      tipEs: "💡 Tipp auf Spanisch: Mira la flecha: sale desde el corazón (♡) hacia el cuerpo (🧍).",
      svgSpec: { type: "symbol_arterie" },
      options: [
        { textDe: "VOM Herzen ZU den Körperzellen (oder zur Lunge)", textEs: "DESDE el corazón HACIA las células del cuerpo (o al pulmón)", correct: true },
        { textDe: "VON den Organen ZUM Herzen zurück", textEs: "DESDE los órganos HACIA el corazón", correct: false },
        { textDe: "Nur zwischen zwei Muskelzellen ohne Herz", textEs: "Solo entre dos células musculares sin corazón", correct: false },
        { textDe: "Von der Nase in die Luftröhre", textEs: "De la nariz a la tráquea", correct: false }
      ],
      explanationDe: "Merkregel: Arterien transportieren Blut immer VOM Herzen WEG ZU den Körperzellen / Organen (♡ ──► 🧍)!",
      explanationEs: "Las arterias siempre llevan la sangre DESDE el corazón HACIA las células/órganos (VOM Herzen ZU den Körperzellen)."
    },
    {
      id: "q_kr_4",
      world: "kreislauf",
      topicDe: "⬅️ Richtung der Venen (S. 3)",
      questionDe: "Schau auf das Symbol [ 🧍 ──► ♡ ] aus der Tabelle auf Seite 3. Welches Blutgefäß wird hier dargestellt?",
      questionEs: "Mira el símbolo [ 🧍 ──► ♡ ] de la tabla de la página 3. ¿Qué vaso sanguíneo se representa aquí?",
      tipEs: "💡 Tipp auf Spanisch: La flecha regresa desde el cuerpo/órganos (🧍) hacia el corazón (♡).",
      svgSpec: { type: "symbol_vene" },
      options: [
        { textDe: "Die Vene — sie transportiert das Blut VON den Organen ZUM Herzen", textEs: "La vena — transporta la sangre DESDE los órganos HACIA el corazón", correct: true },
        { textDe: "Die Arterie — sie transportiert das Blut VOM Herzen ZU den Zellen", textEs: "La arteria — del corazón a las células", correct: false },
        { textDe: "Das Lungenbläschen — es atmet Luft ein", textEs: "El alvéolo pulmonar", correct: false },
        { textDe: "Das Knochenmark — es bildet Blutzellen", textEs: "La médula ósea", correct: false }
      ],
      explanationDe: "Venen transportieren das Blut immer VON den Organen (oder der Lunge) ZUM Herzen zurück (🧍 ──► ♡).",
      explanationEs: "Las venas (Venen) transportan la sangre DESDE los órganos HACIA el corazón."
    },
    {
      id: "q_kr_5",
      world: "kreislauf",
      topicDe: "🔬 Die Kapillaren (S. 3)",
      questionDe: "Was ist das Besondere an den Kapillaren (drittes Kästchen auf Seite 3)?",
      questionEs: "¿Qué tienen de especial los capilares (tercer recuadro de la página 3)?",
      tipEs: "💡 Tipp auf Spanisch: Están entre las arterias y las venas y son microscópicos.",
      svgSpec: { type: "symbol_kapillare" },
      options: [
        { textDe: "Sie sind mikroskopisch klein, verbinden die Arterien und Venen, und hier findet der Gasaustausch statt", textEs: "Son microscópicos, conectan arterias y venas, y aquí ocurre el intercambio gaseoso", correct: true },
        { textDe: "Sie sind so dick wie ein Gartenschlauch und liegen nur im Herzen", textEs: "Son gruesos como una manguera y están solo en el corazón", correct: false },
        { textDe: "Sie verhindern den Gasaustausch, damit kein Sauerstoff entweicht", textEs: "Impiden el intercambio de gases", correct: false },
        { textDe: "Sie transportieren nur Luft von der Nase zum Mund", textEs: "Transportan solo aire de la nariz a la boca", correct: false }
      ],
      explanationDe: "Seite 3: „Kapillaren sind mikroskopisch klein. Sie verbinden die Arterien und Venen. Hier findet der Gasaustausch statt.“",
      explanationEs: "Los capilares son microscópicos, unen arterias con venas y en ellos ocurre el Gasaustausch."
    },
    {
      id: "q_kr_6",
      world: "kreislauf",
      topicDe: "🫀 Körperkreislauf — Start (S. 3 & 6)",
      questionDe: "Welche Herzkammer (Herzhälfte) pumpt das sauerstoffreiche Blut in den Körperkreislauf zu den Körperzellen?",
      questionEs: "¿Qué ventrículo (mitad del corazón) bombea la sangre rica en oxígeno hacia la circulación corporal (a las células)?",
      tipEs: "💡 Tipp auf Spanisch: Es el lado rojo del corazón (marcado con un asterisco * en la página 3 y 4).",
      svgSpec: { type: "kreislauf_clean_diagram" },
      options: [
        { textDe: "Die linke Herzkammer (linke Herzhälfte)", textEs: "El ventrículo izquierdo (mitad izquierda del corazón)", correct: true },
        { textDe: "Die rechte Herzkammer (rechte Herzhälfte)", textEs: "El ventrículo derecho (mitad derecha del corazón)", correct: false },
        { textDe: "Die Lungenarterie", textEs: "La arteria pulmonar", correct: false },
        { textDe: "Die Körpervene", textEs: "La vena corporal", correct: false }
      ],
      explanationDe: "Auf Klappkarte 3 (Seite 6) steht: „Die linke Herzkammer pumpt sauerstoffreiches Blut zu den Körperzellen.“",
      explanationEs: "La mitad/cámara izquierda del corazón (linke Herzkammer) bombea la sangre rica en O₂ hacia todo el cuerpo."
    },
    {
      id: "q_kr_7",
      world: "kreislauf",
      topicDe: "⚡ Zellatmung in den Körperzellen (S. 3 & 6)",
      questionDe: "Was passiert bei der Zellatmung in den Körperzellen (Muskelzellen)?",
      questionEs: "¿Qué ocurre durante la respiración celular (Zellatmung) en las células del cuerpo?",
      tipEs: "💡 Tipp auf Spanisch: Piensa en las abreviaturas de tu cuaderno (pág. 5–6): «nehmen S... und N... auf und geben Ko... ab».",
      svgSpec: { type: "cell_respiration" },
      options: [
        { textDe: "Die Zellen nehmen Sauerstoff und Nährstoffe auf (für Energie) und geben Kohlenstoffdioxid ab", textEs: "Las células toman oxígeno y nutrientes (para energía) y liberan dióxido de carbono", correct: true },
        { textDe: "Die Zellen nehmen Kohlenstoffdioxid auf und geben frischen Sauerstoff ab", textEs: "Las células toman CO₂ y liberan oxígeno fresco", correct: false },
        { textDe: "Die Zellen bilden neue rote und weiße Blutkörperchen", textEs: "Las células forman nuevos glóbulos rojos y blancos", correct: false },
        { textDe: "Die Zellen nehmen Teer und Nikotin auf, um schneller zu wachsen", textEs: "Las células toman alquitrán y nicotina para crecer", correct: false }
      ],
      explanationDe: "Bei der Zellatmung nehmen die Zellen Sauerstoff (S) und Nährstoffe (N) auf und geben das Kohlenstoffdioxid (Ko) ans Blut ab.",
      explanationEs: "En la Zellatmung las células consumen Sauerstoff + Nährstoffe y desechan Kohlenstoffdioxid."
    },
    {
      id: "q_kr_8",
      world: "kreislauf",
      topicDe: "🫁 Lungenkreislauf — Schritt 2a (S. 3 & 6)",
      questionDe: "Wie beginnt der Lungenkreislauf (Schritt 2a auf Seite 3)?",
      questionEs: "¿Cómo comienza la circulación pulmonar (paso 2a en la página 3)?",
      tipEs: "💡 Tipp auf Spanisch: ¿De qué mitad del corazón sale la sangre pobre en oxígeno y por qué vaso va al pulmón?",
      svgSpec: { type: "kreislauf_clean_diagram" },
      options: [
        { textDe: "Die rechte Herzhälfte pumpt das sauerstoffarme Blut über die Lungenarterie zu den Lungenbläschen der Lungen", textEs: "La mitad derecha del corazón bombea la sangre pobre en O₂ por la arteria pulmonar hacia los alvéolos", correct: true },
        { textDe: "Die linke Herzhälfte pumpt sauerstoffreiches Blut über die Lungenvene zur Lunge", textEs: "La mitad izquierda bombea sangre rica en O₂ por la vena pulmonar al pulmón", correct: false },
        { textDe: "Die Lunge pumpt das Blut über die Körperarterie in die Beine", textEs: "El pulmón bombea la sangre por la arteria corporal a las piernas", correct: false },
        { textDe: "Die rechte Herzhälfte pumpt sauerstoffreiches Blut in das Gehirn", textEs: "La mitad derecha bombea sangre rica en O₂ al cerebro", correct: false }
      ],
      explanationDe: "Seite 3 (2a): „Die rechte Herzhälfte pumpt das sauerstoffarme Blut über die Lungenarterie zu den Lungenbläschen der Lungen.“",
      explanationEs: "La mitad derecha del corazón (rechte Herzhälfte) bombea la sangre pobre en oxígeno por la Lungenarterie hacia los alvéolos."
    },
    {
      id: "q_kr_9",
      world: "kreislauf",
      topicDe: "🫁 Lungenkreislauf — Schritt 2b (S. 3 & 4)",
      questionDe: "Was passiert beim Gasaustausch in den Lungenbläschen der Lunge (Schritt 2b)?",
      questionEs: "¿Qué sucede durante el intercambio gaseoso en los alvéolos pulmonares (paso 2b)?",
      tipEs: "💡 Tipp auf Spanisch: Es justo lo inverso de lo que pasa en las células musculares.",
      svgSpec: { type: "alveolus_normal" },
      options: [
        { textDe: "Das Blut gibt Kohlenstoffdioxid ab und nimmt Sauerstoff auf", textEs: "La sangre libera dióxido de carbono y absorbe oxígeno", correct: true },
        { textDe: "Das Blut gibt Sauerstoff ab und nimmt Kohlenstoffdioxid auf", textEs: "La sangre libera oxígeno y absorbe dióxido de carbono", correct: false },
        { textDe: "Die Lungenbläschen verwandeln Blutplasma in Knochenmark", textEs: "Los alvéolos transforman el plasma en médula ósea", correct: false },
        { textDe: "Das Blut wird dort sauerstoffarm gemacht", textEs: "La sangre se vuelve pobre en oxígeno allí", correct: false }
      ],
      explanationDe: "Seite 3 (2b): „Hier gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf.“ Dadurch wird das Blut wieder sauerstoffreich!",
      explanationEs: "En los alvéolos la sangre entrega el CO₂ (para exhalarlo) y toma oxígeno fresco."
    },
    {
      id: "q_kr_10",
      world: "kreislauf",
      topicDe: "🫁 Lungenkreislauf — Schritt 2c (S. 3)",
      questionDe: "Über welches Blutgefäß fließt das Blut mit viel Sauerstoff von der Lunge zurück in die linke Herzhälfte?",
      questionEs: "¿Por qué vaso sanguíneo fluye la sangre con mucho oxígeno desde el pulmón de regreso a la mitad izquierda del corazón?",
      tipEs: "💡 Tipp auf Spanisch: Como va HACIA el corazón, tiene que llamarse «...vene».",
      svgSpec: { type: "kreislauf_clean_diagram" },
      options: [
        { textDe: "Über die Lungenvene", textEs: "Por la vena pulmonar (Lungenvene)", correct: true },
        { textDe: "Über die Lungenarterie", textEs: "Por la arteria pulmonar (Lungenarterie)", correct: false },
        { textDe: "Über die Körpervene", textEs: "Por la vena corporal (Körpervene)", correct: false },
        { textDe: "Über die Körperarterie", textEs: "Por la arteria corporal (Körperarterie)", correct: false }
      ],
      explanationDe: "Seite 3 (2c): „Das Blut mit viel Sauerstoff fließt über die Lungenvene in die linke Herzhälfte.“",
      explanationEs: "Fluye por la «Lungenvene» hacia la mitad izquierda del corazón."
    },
    {
      id: "q_kr_11",
      world: "kreislauf",
      topicDe: "⚠️ Prüfungsfalle: Lungenarterie vs. Lungenvene!",
      questionDe: "Aufgepasst, Prüfungsfalle! Welches Blut fließt in der LUNGENARTERIE und warum heißt sie trotzdem „Arterie“?",
      questionEs: "¡Atención, pregunta trampa de prueba! ¿Qué tipo de sangre fluye por la LUNGENARTERIE y por qué se llama «Arterie»?",
      tipEs: "💡 Tipp auf Spanisch: Una arteria se define por su DIRECCIÓN (sale del corazón), no por si lleva oxígeno.",
      svgSpec: { type: "symbol_arterie" },
      options: [
        { textDe: "Sauerstoffarmes Blut! Sie heißt Arterie, weil sie das Blut VOM Herzen weg (zur Lunge) transportiert.", textEs: "¡Sangre pobre en oxígeno! Se llama arteria porque lleva sangre DESDE el corazón (hacia el pulmón).", correct: true },
        { textDe: "Sauerstoffreiches Blut! Alle Arterien im Körper haben immer viel Sauerstoff.", textEs: "¡Sangre rica en oxígeno! Todas las arterias tienen siempre mucho oxígeno.", correct: false },
        { textDe: "Gar kein Blut, sondern nur eingeatmete Luft.", textEs: "Nada de sangre, solo aire inhalado.", correct: false },
        { textDe: "Nur gelbes Blutplasma ohne rote Blutkörperchen.", textEs: "Solo plasma amarillo sin glóbulos rojos.", correct: false }
      ],
      explanationDe: "Goldene Regel: Jedes Gefäß VOM Herzen weg heißt Arterie! Die Lungenarterie führt vom rechten Herzen zur Lunge und transportiert deshalb sauerstoffarmes Blut.",
      explanationEs: "La Lungenarterie lleva sangre pobre en oxígeno (azul) del corazón derecho al pulmón; se llama Arterie porque sale DEL corazón."
    },
    {
      id: "q_kr_12",
      world: "kreislauf",
      topicDe: "🔢 Schema Seite 4 — Nummern 1 bis 5",
      questionDe: "Im großen Kreislauf-Schema auf Seite 4 stehen die Zahlen 1 bis 5 von oben nach unten. Welche Reihenfolge ist komplett richtig?",
      questionEs: "En el gran esquema circulatorio de la página 4 están los números del 1 al 5 de arriba hacia abajo. ¿Qué orden es completamente correcto?",
      tipEs: "💡 Tipp auf Spanisch: 1 está en las flechas de aire arriba, 2 en el pulmón, 3 en el circuito superior, 4 en el centro y 5 en el músculo abajo.",
      svgSpec: { type: "page4_numbered_clean" },
      options: [
        { textDe: "1 = Ein-/Ausatmung · 2 = Lunge · 3 = Lungenkreislauf · 4 = Herz · 5 = Muskelzellen", textEs: "1 = Inhalación/Exhalación · 2 = Pulmón · 3 = Circulación pulmonar · 4 = Corazón · 5 = Células musculares", correct: true },
        { textDe: "1 = Lunge · 2 = Herz · 3 = Muskelzellen · 4 = Lungenkreislauf · 5 = Ein-/Ausatmung", textEs: "1 = Pulmón · 2 = Corazón · 3 = Células musculares...", correct: false },
        { textDe: "1 = Ein-/Ausatmung · 2 = Herz · 3 = Körperkreislauf · 4 = Lunge · 5 = Knochenmark", textEs: "1 = Respiración · 2 = Corazón · 3 = Circulación corporal...", correct: false },
        { textDe: "1 = Nase · 2 = Luftröhre · 3 = Magen · 4 = Herz · 5 = Raucherbein", textEs: "1 = Nariz · 2 = Tráquea · 3 = Estómago...", correct: false }
      ],
      explanationDe: "Von oben nach unten auf Seite 4: 1 = Ein-/Ausatmung, 2 = Lunge, 3 = Lungenkreislauf, 4 = Herz, 5 = Muskelzellen!",
      explanationEs: "El orden exacto de la página 4 es: 1 Ein-/Ausatmung, 2 Lunge, 3 Lungenkreislauf, 4 Herz, 5 Muskelzellen."
    },
    {
      id: "q_kr_13",
      world: "kreislauf",
      topicDe: "🫀 Aufbau des Herzens (S. 3)",
      questionDe: "Im Menschen-Bild auf Seite 3 sind die oberen und unteren Räume des Herzens beschriftet. Wie heißen sie auf Deutsch?",
      questionEs: "En el dibujo del cuerpo humano de la página 3 están rotuladas las cavidades superiores e inferiores del corazón. ¿Cómo se llaman en alemán?",
      tipEs: "💡 Tipp auf Spanisch: Arriba = aurículas («Vorhöfe»), abajo = ventrículos («Herzkammern»).",
      svgSpec: { type: "heart_chambers" },
      options: [
        { textDe: "Oben: die Vorhöfe · Unten: die Herzkammern (und es gibt eine rechte und eine linke Herzhälfte)", textEs: "Arriba: aurículas (Vorhöfe) · Abajo: ventrículos (Herzkammern)", correct: true },
        { textDe: "Oben: die Lungenbläschen · Unten: die Flimmerhärchen", textEs: "Arriba: alvéolos · Abajo: cilios", correct: false },
        { textDe: "Oben: die Kapillaren · Unten: das Knochenmark", textEs: "Arriba: capilares · Abajo: médula ósea", correct: false },
        { textDe: "Oben: die Blutplättchen · Unten: das Blutplasma", textEs: "Arriba: plaquetas · Abajo: plasma", correct: false }
      ],
      explanationDe: "Das Herz hat eine rechte und eine linke Herzhälfte, oben die Vorhöfe und unten die kräftigen Herzkammern.",
      explanationEs: "En el diagrama de la página 3 se indican «Vorhöfe» (arriba) y «Herzkammern» (abajo)."
    },
    {
      id: "q_kr_14",
      world: "kreislauf",
      topicDe: "🔤 Heft-Abkürzungen (S. 5–6)",
      questionDe: "In deinem Heft (Seite 5–6) steht bei den Zellen: „nehmen S... und N... auf und geben Ko... ab“. Wofür stehen S, N und Ko?",
      questionEs: "En tu cuaderno (pág. 5–6) dice sobre las células: «nehmen S... und N... auf und geben Ko... ab». ¿Qué significan S, N y Ko?",
      tipEs: "💡 Tipp auf Spanisch: Revisa la lista de abreviaturas escrita a mano al costado derecho de la página 5.",
      svgSpec: { type: "cell_respiration" },
      options: [
        { textDe: "S = Sauerstoff · N = Nährstoffe · Ko = Kohlenstoffdioxid", textEs: "S = Oxígeno · N = Nutrientes · Ko = Dióxido de carbono", correct: true },
        { textDe: "S = Speichel · N = Nikotin · Ko = Kohlenmonoxid", textEs: "S = Saliva · N = Nicotina · Ko = Monóxido de carbono", correct: false },
        { textDe: "S = Sonne · N = Nase · Ko = Knochenmark", textEs: "S = Sol · N = Nariz · Ko = Médula ósea", correct: false },
        { textDe: "S = Salz · N = Nerven · Ko = Kopf", textEs: "S = Sal · N = Nervios · Ko = Cabeza", correct: false }
      ],
      explanationDe: "Auf Seite 5 rechts steht der Schlüssel: S = Sauerstoff, N = Nährstoffe, Ko = Kohlenstoffdioxid!",
      explanationEs: "S = Sauerstoff, N = Nährstoffe, Ko = Kohlenstoffdioxid."
    },
    {
      id: "q_kr_15",
      world: "kreislauf",
      topicDe: "🔄 Körpervene vs. Körperarterie (S. 4)",
      questionDe: "Welches Blutgefäß bringt das sauerstoffarme Blut von den Muskelzellen (Nr. 5) zurück in die rechte Herzhälfte?",
      questionEs: "¿Qué vaso sanguíneo lleva la sangre pobre en oxígeno desde las células musculares (nº 5) de vuelta a la mitad derecha del corazón?",
      tipEs: "💡 Tipp auf Spanisch: Viene del cuerpo (Körper) y vuelve al corazón (Vene).",
      svgSpec: { type: "page4_numbered_clean" },
      options: [
        { textDe: "Die Körpervene", textEs: "La vena corporal (Körpervene)", correct: true },
        { textDe: "Die Körperarterie", textEs: "La arteria corporal (Körperarterie)", correct: false },
        { textDe: "Die Lungenarterie", textEs: "La arteria pulmonar (Lungenarterie)", correct: false },
        { textDe: "Die Lungenvene", textEs: "La vena pulmonar (Lungenvene)", correct: false }
      ],
      explanationDe: "Von den Körper-/Muskelzellen zurück zum rechten Herzen fließt das sauerstoffarme Blut durch die Körpervene.",
      explanationEs: "Es la «Körpervene» (tubo azul inferior izquierdo en el esquema de la página 4)."
    },
    {
      id: "q_kr_16",
      world: "kreislauf",
      topicDe: "🔄 Wo nimmt die ZELLE Sauerstoff auf? (S. 4)",
      questionDe: "Auf Seite 4 stehen zwei ähnliche Sätze: „Das Blut nimmt Sauerstoff auf“ und „Die Zelle nimmt Sauerstoff auf“. Wo passiert was?",
      questionEs: "En la página 4 hay dos frases parecidas: «Das Blut nimmt Sauerstoff auf» y «Die Zelle nimmt Sauerstoff auf». ¿Dónde ocurre cada una?",
      tipEs: "💡 Tipp auf Spanisch: En el pulmón la SANGRE se carga de oxígeno; en el músculo la CÉLULA recibe ese oxígeno.",
      svgSpec: { type: "page4_numbered_clean" },
      options: [
        { textDe: "In der Lunge (2) nimmt das BLUT Sauerstoff auf; in den Muskelzellen (5) nimmt die ZELLE Sauerstoff auf", textEs: "En el pulmón (2) la SANGRE toma O₂; en las células musculares (5) la CÉLULA toma O₂", correct: true },
        { textDe: "In der Lunge (2) nimmt die Muskelzelle Sauerstoff auf; im Herzen (4) gibt sie ihn ab", textEs: "En el pulmón la célula muscular toma O₂; en el corazón lo entrega", correct: false },
        { textDe: "Beides passiert nur in der Luftröhre beim Ausatmen", textEs: "Ambos ocurren solo en la tráquea al exhalar", correct: false },
        { textDe: "In den Muskelzellen nimmt das Blut Sauerstoff aus der Luft auf", textEs: "En los músculos la sangre toma O₂ del aire", correct: false }
      ],
      explanationDe: "In der Lunge (Nr. 2) nimmt das Blut Sauerstoff auf und gibt CO₂ ab. Unten bei den Muskelzellen (Nr. 5) nimmt die Zelle Sauerstoff auf und gibt CO₂ ab.",
      explanationEs: "Arriba en la Lunge: «Das Blut nimmt Sauerstoff auf». Abajo en las Muskelzellen: «Die Zelle nimmt Sauerstoff auf»."
    },

    // =======================================================================
    // WELT 3: TABAKKONSUM, NIKOTIN, TEER & KOHLENMONOXID (16 FRAGEN, SEITE 7–8)
    // =======================================================================
    {
      id: "q_tab_1",
      world: "tabak",
      topicDe: "🚬 Was ist Rauchen? (S. 7)",
      questionDe: "Was enthält eine Zigarette und was passiert beim Rauchen genau?",
      questionEs: "¿Qué contiene un cigarrillo y qué ocurre exactamente al fumar?",
      tipEs: "💡 Tipp auf Spanisch: Lee el apartado «Was ist Rauchen?» en la página 7.",
      svgSpec: { type: "cigarette_three_poisons" },
      options: [
        { textDe: "Sie enthält Tabakblätter und andere Stoffe; sie wird verbrannt und der Rauch wird durch den Mund bis in die Lungen eingeatmet", textEs: "Contiene hojas de tabaco y otras sustancias; se quema y el humo se inhala por la boca hasta los pulmones", correct: true },
        { textDe: "Sie enthält nur reinen Wasserdampf, der die Lungenbläschen wäscht", textEs: "Contiene solo vapor de agua puro que limpia los alvéolos", correct: false },
        { textDe: "Sie enthält Vitamine, die im Magen verdaut werden", textEs: "Contiene vitaminas que se digieren en el estómago", correct: false },
        { textDe: "Der Rauch geht nur in die Nase und kommt nie in die Lunge", textEs: "El humo entra solo a la nariz y nunca llega al pulmón", correct: false }
      ],
      explanationDe: "Seite 7: „Eine Zigarette enthält Tabakblätter, aber auch andere Stoffe. Die Zigarette wird an einer Seite angezündet und verbrannt. Der Rauch, der daraus entsteht, wird durch den Mund bis in die Lungen eingeatmet.“",
      explanationEs: "Al quemarse las hojas de tabaco (Tabakblätter), el humo se inhala hasta los pulmones."
    },
    {
      id: "q_tab_2",
      world: "tabak",
      topicDe: "☠️ Die 3 Hauptschadstoffe im Rauch (S. 7)",
      questionDe: "Welche drei besonders schädlichen Stoffe entstehen durch die Verbrennung der Tabakblätter im Zigarettenrauch?",
      questionEs: "¿Cuáles son las tres sustancias especialmente dañinas que se producen al quemarse las hojas de tabaco en el humo del cigarrillo?",
      tipEs: "💡 Tipp auf Spanisch: Están destacados en negrita a mitad de la página 7.",
      svgSpec: { type: "cigarette_three_poisons" },
      options: [
        { textDe: "Nikotin, Teer und Kohlenmonoxid (Kohlenstoffmonoxid)", textEs: "Nicotina, alquitrán y monóxido de carbono", correct: true },
        { textDe: "Sauerstoff, Blutplasma und Nährstoffe", textEs: "Oxígeno, plasma sanguíneo y nutrientes", correct: false },
        { textDe: "Erythrozyten, Leukozyten und Thrombozyten", textEs: "Eritrocitos, leucocitos y trombocitos", correct: false },
        { textDe: "Wasser, Salz und Zucker", textEs: "Agua, sal y azúcar", correct: false }
      ],
      explanationDe: "Im Rauch sind viele schädliche Stoffe enthalten – die drei wichtigsten im Heft sind: Nikotin, Teer und Kohlenmonoxid (Kohlenstoffmonoxid).",
      explanationEs: "Los tres tóxicos principales estudiados en clases son Nikotin, Teer y Kohlenmonoxid."
    },
    {
      id: "q_tab_3",
      world: "tabak",
      topicDe: "🚜 Nikotin im Alltag (S. 7)",
      questionDe: "Wofür wird Nikotin im Alltag benutzt (siehe das Foto mit dem Traktor auf dem Feld auf Seite 7)?",
      questionEs: "¿Para qué se utiliza la nicotina en la vida cotidiana (mira la foto del tractor en el campo en la página 7)?",
      tipEs: "💡 Tipp auf Spanisch: En tu guía escribiste a mano: «tötet Insekten» (mata insectos).",
      svgSpec: { type: "everyday_poisons_icons", focus: "tractor" },
      options: [
        { textDe: "Es befindet sich in einigen Insektiziden (ein Gift, das Insekten tötet)", textEs: "Se encuentra en algunos insecticidas (veneno que mata insectos)", correct: true },
        { textDe: "Als klebriges Bindemittel im Straßenbau (Asphalt)", textEs: "Como aglutinante pegajoso en la construcción de calles", correct: false },
        { textDe: "Als Treibstoff für Flugzeuge", textEs: "Como combustible para aviones", correct: false },
        { textDe: "Als gesundes Medikament gegen Husten", textEs: "Como jarabe saludable para la tos", correct: false }
      ],
      explanationDe: "Seite 7: „Nikotin: Befindet sich in einigen Insektiziden (tötet Insekten).“",
      explanationEs: "La nicotina es un veneno natural tan potente que se usa en insecticidas (Insektiziden)."
    },
    {
      id: "q_tab_4",
      world: "tabak",
      topicDe: "🚗 Kohlenstoffmonoxid im Alltag (S. 7)",
      questionDe: "Wie entsteht Kohlenstoffmonoxid (Kohlenmonoxid) im Alltag (Foto mit dem Auto-Auspuff auf Seite 7)?",
      questionEs: "¿Cómo se produce el monóxido de carbono en la vida diaria (foto del tubo de escape del auto en la página 7)?",
      tipEs: "💡 Tipp auf Spanisch: «Verbrennung von Kohle, Gas oder Benzin».",
      svgSpec: { type: "everyday_poisons_icons", focus: "exhaust" },
      options: [
        { textDe: "Es entsteht aus der Verbrennung von Kohle, Gas oder Benzin (z. B. Auto-Abgase)", textEs: "Surge de la combustión de carbón, gas o bencina (gases de escape)", correct: true },
        { textDe: "Es wird als Insektizid von Traktoren auf Felder gesprüht", textEs: "Se rocía como insecticida en los campos", correct: false },
        { textDe: "Es entsteht beim Kochen von Wasser im Topf", textEs: "Surge al hervir agua en una olla", correct: false },
        { textDe: "Es wird von grünen Pflanzen bei der Fotosynthese gebildet", textEs: "Lo producen las plantas verdes", correct: false }
      ],
      explanationDe: "Seite 7: „Kohlenstoffmonoxid: Entsteht aus der Verbrennung von Kohle, Gas oder Benzin.“",
      explanationEs: "El monóxido de carbono se forma al quemar carbón (Kohle), gas (Gas) o bencina (Benzin)."
    },
    {
      id: "q_tab_5",
      world: "tabak",
      topicDe: "🛣️ Teer im Alltag (S. 7)",
      questionDe: "Wofür wird Teer (alquitrán) im Alltag benutzt und welche Eigenschaft hat er im Sommer?",
      questionEs: "¿Para qué se usa el alquitrán (Teer) en la vida diaria y qué propiedad tiene en verano?",
      tipEs: "💡 Tipp auf Spanisch: «Straßenbau» = construcción de calles/carreteras, «klebrig» = pegajoso.",
      svgSpec: { type: "everyday_poisons_icons", focus: "road" },
      options: [
        { textDe: "Er wird als Bindemittel im Straßenbau benutzt und wird klebrig, wenn es heiß ist (im Sommer)", textEs: "Se usa como aglutinante en la construcción de calles y se pone pegajoso con el calor", correct: true },
        { textDe: "Er wird zum Putzen von Fenstern benutzt und riecht nach Blumen", textEs: "Se usa para limpiar ventanas y huele a flores", correct: false },
        { textDe: "Er entsteht nur im Kühlschrank, wenn es kalt ist", textEs: "Se produce en el refrigerador cuando hace frío", correct: false },
        { textDe: "Er wird in Insektiziden gegen Mücken verwendet", textEs: "Se usa en insecticidas contra mosquitos", correct: false }
      ],
      explanationDe: "Seite 7: „Teer: Wird als Bindemittel im Straßenbau benutzt. Außerdem wird es klebrig, wenn es heiß ist (im Sommer).“",
      explanationEs: "El Teer se usa en el asfalto de las calles (Straßenbau) y es muy pegajoso (klebrig)."
    },
    {
      id: "q_tab_6",
      world: "tabak",
      topicDe: "🫁 Warum ist Teer schädlich? — Flimmerhärchen (S. 7)",
      questionDe: "Was macht der Teer mit den Flimmerhärchen (pelillos) der Atemwege?",
      questionEs: "¿Qué hace el alquitrán (Teer) con los cilios/pelillos (Flimmerhärchen) de las vías respiratorias?",
      tipEs: "💡 Tipp auf Spanisch: Lee la parte inferior de la página 7 bajo el título «Teer».",
      svgSpec: { type: "smoker_alveolus_clean" },
      options: [
        { textDe: "Er bleibt an den Flimmerhärchen kleben; sie können sich nicht richtig bewegen und die Atemwege nicht sauber machen", textEs: "Se queda pegado en los pelillos; no pueden moverse bien ni limpiar las vías respiratorias", correct: true },
        { textDe: "Er lässt die Flimmerhärchen doppelt so schnell wachsen und besser arbeiten", textEs: "Hace que los pelillos crezcan el doble de rápido y trabajen mejor", correct: false },
        { textDe: "Er verwandelt die Flimmerhärchen in rote Blutkörperchen", textEs: "Transforma los pelillos en glóbulos rojos", correct: false },
        { textDe: "Er kühlt die Flimmerhärchen bei Husten ab", textEs: "Enfría los pelillos cuando hay tos", correct: false }
      ],
      explanationDe: "Seite 7: „Er bleibt an den Flimmerhärchen der Atemwege kleben. Diese können sich dann nicht richtig bewegen und auch nicht die Atemwege sauber machen.“",
      explanationEs: "El alquitrán pega los Flimmerhärchen, impidiendo que se muevan y limpien las vías respiratorias."
    },
    {
      id: "q_tab_7",
      world: "tabak",
      topicDe: "🫁 Warum ist Teer schädlich? — Das Schlimmste! (S. 7)",
      questionDe: "Was ist laut Seite 7 „das Schlimmste“ an der Wirkung von Teer in der Lunge?",
      questionEs: "¿Qué es «lo peor» (das Schlimmste) del efecto del alquitrán en los pulmones según la página 7?",
      tipEs: "💡 Tipp auf Spanisch: Fíjate en qué pasa en los Lungenbläschen con el O₂ y el CO₂.",
      svgSpec: { type: "smoker_alveolus_clean" },
      options: [
        { textDe: "Er bleibt in den Lungenbläschen kleben: Der Gasaustausch wird schwieriger, es kommt nicht genug Sauerstoff ins Blut und Kohlenstoffdioxid bleibt im Blut", textEs: "Se pega en los alvéolos: el intercambio gaseoso se dificulta, no entra suficiente O₂ a la sangre y el CO₂ se queda en la sangre", correct: true },
        { textDe: "Er macht die Lungenbläschen größer, sodass zu viel Sauerstoff ins Blut strömt", textEs: "Agranda los alvéolos haciendo que entre demasiado oxígeno", correct: false },
        { textDe: "Er verengt die Blutgefäße im Fuß, sodass das Herz schneller klopft", textEs: "Estrecha los vasos sanguíneos en el pie", correct: false },
        { textDe: "Er ist im Blut schneller als der Sauerstoff", textEs: "Es más rápido que el oxígeno en la sangre", correct: false }
      ],
      explanationDe: "Seite 7 unten: „Das Schlimmste: Er bleibt in den Lungenbläschen kleben. Der Gasaustausch wird schwieriger: Es kommt nicht genug Sauerstoff ins Blut und der Kohlenstoffdioxid bleibt im Blut.“",
      explanationEs: "Al pegarse el Teer en los alvéolos (Lungenbläschen), bloquea el Gasaustausch: entra poco O₂ y el CO₂ queda atrapado en la sangre."
    },
    {
      id: "q_tab_8",
      world: "tabak",
      topicDe: "🚫 Kohlenstoffmonoxid im Körper (S. 8)",
      questionDe: "Warum ist auf Seite 8 neben „Kohlenstoffmonoxid“ ein Verkehrsschild „NO ADELANTAR“ (Überholverbot) abgebildet?",
      questionEs: "¿Por qué en la página 8 junto a «Kohlenstoffmonoxid» aparece una señal de tránsito de «NO ADELANTAR»?",
      tipEs: "💡 Tipp auf Spanisch: «schneller als Sauerstoff» = más rápido que el oxígeno.",
      svgSpec: { type: "co_no_adelantar" },
      options: [
        { textDe: "Weil Kohlenstoffmonoxid durch die Lungenbläschen ins Blut gelangt und SCHNELLER als Sauerstoff ist — so wird weniger Sauerstoff zu den Zellen transportiert", textEs: "Porque entra por los alvéolos a la sangre y es MÁS RÁPIDO que el oxígeno, por lo que se transporta menos O₂ a las células", correct: true },
        { textDe: "Weil man beim Autofahren nicht rauchen darf, wenn man überholt", textEs: "Porque no se puede fumar al adelantar en auto", correct: false },
        { textDe: "Weil Kohlenstoffmonoxid die Blutgefäße hart und steif macht", textEs: "Porque pone duros y rígidos los vasos sanguíneos", correct: false },
        { textDe: "Weil Kohlenstoffmonoxid an den Flimmerhärchen kleben bleibt", textEs: "Porque se queda pegado en los cilios", correct: false }
      ],
      explanationDe: "Seite 8: „Kohlenstoffmonoxid: Er gelangt durch Lungenbläschen ins Blut. Er ist schneller als Sauerstoff. So wird weniger Sauerstoff zu den Zellen transportiert.“",
      explanationEs: "El monóxido de carbono le «gana el asiento» al oxígeno en la sangre porque es más rápido que él (schneller als Sauerstoff)."
    },
    {
      id: "q_tab_9",
      world: "tabak",
      topicDe: "🩸 Nikotin — Wirkung auf Blutgefäße (S. 8)",
      questionDe: "Was passiert durch Nikotin Schritt für Schritt mit den Blutgefäßen (Punkte 1 bis 3 auf Seite 8)?",
      questionEs: "¿Qué pasa paso a paso con los vasos sanguíneos por culpa de la nicotina (puntos 1 a 3 de la página 8)?",
      tipEs: "💡 Tipp auf Spanisch: 1. se estrechan (verengen sich), 2. se ponen duros y rígidos (hart und steif), 3. no queda espacio para la sangre → Raucherbein.",
      svgSpec: { type: "vessel_narrowing_nikotin" },
      options: [
        { textDe: "1. Sie verengen sich · 2. Sie werden hart und steif · 3. Es bleibt kein Platz mehr für das Blut und ein Körperteil kann absterben (Raucherbein)", textEs: "1. Se estrechan · 2. Se vuelven duros y rígidos · 3. No queda espacio para la sangre y una parte del cuerpo puede morir (Raucherbein)", correct: true },
        { textDe: "1. Sie werden breiter · 2. Sie werden weich und elastisch · 3. Es fließt doppelt so viel Blut in die Beine", textEs: "1. Se ensanchan · 2. Se ponen blandos · 3. Fluye el doble de sangre", correct: false },
        { textDe: "1. Sie füllen sich mit Teer · 2. Sie platzen sofort · 3. Sie wachsen im Knochenmark nach", textEs: "1. Se llenan de alquitrán · 2. Explotan · 3. Vuelven a crecer", correct: false },
        { textDe: "Nikotin hat überhaupt keine Wirkung auf die Blutgefäße", textEs: "La nicotina no tiene ningún efecto en los vasos sanguíneos", correct: false }
      ],
      explanationDe: "Auf Seite 8 siehst du das Bild des verengten Blutgefäßes: Zuerst verengen sich die Blutgefäße, danach werden sie hart und steif, bis kein Platz mehr für das Blut bleibt (Raucherbein).",
      explanationEs: "La nicotina estrecha los vasos (verengen sich), los vuelve duros y rígidos (hart und steif) y puede causar el Raucherbein."
    },
    {
      id: "q_tab_10",
      world: "tabak",
      topicDe: "🦶 Was ist ein „Raucherbein“? (S. 8)",
      questionDe: "Wie entsteht ein sogenanntes „Raucherbein“?",
      questionEs: "¿Cómo se produce la llamada «pierna de fumador» (Raucherbein)?",
      tipEs: "💡 Tipp auf Spanisch: «absterben» = morir (un tejido u órgano por falta de riego sanguíneo).",
      svgSpec: { type: "vessel_narrowing_nikotin" },
      options: [
        { textDe: "Durch Nikotin verengen sich die Blutgefäße so stark, dass kein Platz mehr für das Blut bleibt und ein Zeh, Fuß oder Bein absterben kann", textEs: "Por la nicotina los vasos se estrechan tanto que no pasa sangre y un dedo, pie o pierna puede morir", correct: true },
        { textDe: "Wenn einem Raucher beim Laufen eine Zigarette auf den Fuß fällt", textEs: "Cuando a un fumador se le cae un cigarrillo en el pie", correct: false },
        { textDe: "Wenn Teer durch die Haut in das Knie wandert", textEs: "Cuando el alquitrán entra por la piel de la rodilla", correct: false },
        { textDe: "Wenn die Beine durch Sport mehr Muskelzellen bekommen", textEs: "Cuando las piernas ganan más músculo por hacer deporte", correct: false }
      ],
      explanationDe: "Seite 8 (Punkt 3 bei Nikotin): „Mit der Zeit bleibt in diesen Blutgefäßen kein Platz mehr für das Blut und der Körperteil, z. B. ein Zeh, Fuß oder Bein, kann absterben (das nennt man Raucherbein).“",
      explanationEs: "Cuando no llega sangre ni oxígeno por el estrechamiento de los vasos, el tejido del pie o pierna muere (Raucherbein)."
    },
    {
      id: "q_tab_11",
      world: "tabak",
      topicDe: "🧠 Nikotin im Gehirn & am Herzen (S. 8)",
      questionDe: "Wie wirkt das Gift Nikotin auf das Herz und auf das Gehirn (Punkt 4 auf Seite 8)?",
      questionEs: "¿Cómo actúa el veneno nicotina sobre el corazón y sobre el cerebro (punto 4 de la página 8)?",
      tipEs: "💡 Tipp auf Spanisch: «Das Herz klopft schneller» y «zerstört Nervenzellen im Gehirn / macht süchtig».",
      svgSpec: { type: "brain_heart_nikotin" },
      options: [
        { textDe: "Das Herz klopft schneller; im Gehirn zerstört Nikotin Nervenzellen, macht süchtig und macht die Nerven krank", textEs: "El corazón late más rápido; en el cerebro destruye neuronas, causa adicción y enferma los nervios", correct: true },
        { textDe: "Das Herz schlägt viel langsamer und im Gehirn wachsen neue Nervenzellen", textEs: "El corazón late más lento y crecen nuevas neuronas", correct: false },
        { textDe: "Das Herz hört auf zu klopfen und das Gehirn schläft sofort ein", textEs: "El corazón se detiene y el cerebro se duerme", correct: false },
        { textDe: "Nikotin schützt die Nervenzellen im Gehirn vor Bakterien", textEs: "La nicotina protege las neuronas contra bacterias", correct: false }
      ],
      explanationDe: "Seite 8: „4. Das Herz klopft schneller. Nikotin ist ein Gift (veneno). Es zerstört Nervenzellen im Gehirn. Es macht süchtig und macht die Nerven krank.“",
      explanationEs: "La nicotina acelera el latido cardíaco, destruye células nerviosas (Nervenzellen) en el cerebro y genera adicción (macht süchtig)."
    },
    {
      id: "q_tab_12",
      world: "tabak",
      topicDe: "📋 Gesundheitliche Folgen des Rauchens (S. 8)",
      questionDe: "Warum bekommen Raucher laut der Liste auf Seite 8 oft Konzentrationsprobleme und werden schneller müde?",
      questionEs: "¿Por qué los fumadores tienen problemas de concentración y se cansan más rápido según la lista de la página 8?",
      tipEs: "💡 Tipp auf Spanisch: Mira lo que dice entre paréntesis al lado de «Konzentrationsprobleme» en la página 8.",
      svgSpec: { type: "consequences_overview" },
      options: [
        { textDe: "Wegen weniger Sauerstoff (weniger O₂) im Blut und in den Zellen!", textEs: "¡Por tener menos oxígeno (weniger O₂) en la sangre y en las células!", correct: true },
        { textDe: "Weil zu viel Sauerstoff in das Gehirn gelangt", textEs: "Porque llega demasiado oxígeno al cerebro", correct: false },
        { textDe: "Weil ihre Zähne und Finger gelb werden", textEs: "Porque sus dientes y dedos se ponen amarillos", correct: false },
        { textDe: "Weil die weißen Blutkörperchen zu schnell schwimmen", textEs: "Porque los glóbulos blancos nadan muy rápido", correct: false }
      ],
      explanationDe: "Auf Seite 8 steht in der Liste: „• Konzentrationsprobleme (wegen weniger O₂) • Man wird schneller müde“. Ohne genug Sauerstoff fehlt dem Gehirn und den Muskeln die Energie aus der Zellatmung!",
      explanationEs: "Al llegar menos oxígeno (weniger O₂) al cerebro y a los músculos, baja la concentración y uno se cansa más rápido."
    },
    {
      id: "q_tab_13",
      world: "tabak",
      topicDe: "📋 8 Folgen des Tabakkonsums (S. 8)",
      questionDe: "Welche dieser Listen enthält NUR echte gesundheitliche Folgen des Tabakkonsums von Seite 8?",
      questionEs: "¿Cuál de estas listas contiene ÚNICAMENTE consecuencias reales del consumo de tabaco de la página 8?",
      tipEs: "💡 Tipp auf Spanisch: Revisa los 8 puntos de «Zusammengefasst hat der Tabakkonsum diese gesundheitliche Folgen».",
      svgSpec: { type: "consequences_overview" },
      options: [
        { textDe: "Husten · Lungenkrankheiten · Krebs · gelbe Finger & Zähne · Konzentrationsprobleme · schneller müde · riecht schlecht · Organe können absterben", textEs: "Tos · Enfermedades pulmonares · Cáncer · Dedos/dientes amarillos · Problemas de concentración · Cansancio · Mal olor · Órganos pueden morir", correct: true },
        { textDe: "Bessere Ausdauer · weiße Zähne · mehr Sauerstoff im Blut · stärkere Abwehrkräfte", textEs: "Mejor resistencia · Dientes blancos · Más oxígeno · Mejores defensas", correct: false },
        { textDe: "Breitere Blutgefäße · saubere Lungenbläschen · schnellere Flimmerhärchen", textEs: "Vasos más anchos · Alvéolos limpios · Cilios más rápidos", correct: false },
        { textDe: "Mehr rote Blutkörperchen · gesunde Nervenzellen · guter Geruch", textEs: "Más glóbulos rojos · Neuronas sanas · Buen olor", correct: false }
      ],
      explanationDe: "Genau diese 8 Folgen stehen zusammengefasst auf Seite 8 deines Arbeitsblattes!",
      explanationEs: "Esas son exactamente las 8 consecuencias del consumo de tabaco listadas en la página 8."
    },
    {
      id: "q_tab_14",
      world: "tabak",
      topicDe: "🔍 Welcher Schadstoff macht was? (S. 7–8)",
      questionDe: "Ordne richtig zu: Welcher der 3 Stoffe im Rauch macht SÜCHTIG, welcher VERKLEBT die Lungenbläschen, und welcher ÜBERHOLT den Sauerstoff im Blut?",
      questionEs: "Asocia correctamente: ¿Cuál de las 3 sustancias vuelve ADICTO, cuál PEGA los alvéolos y cuál ADELANTA al oxígeno en la sangre?",
      tipEs: "💡 Tipp auf Spanisch: Adicción = Nikotin · Pegamento marrón = Teer · Gas rápido = Kohlenstoffmonoxid.",
      svgSpec: { type: "cigarette_three_poisons" },
      options: [
        { textDe: "Süchtig & verengt Gefäße = Nikotin · Verklebt Lungenbläschen = Teer · Schneller als Sauerstoff = Kohlenstoffmonoxid", textEs: "Adicción/vasos = Nicotina · Pega alvéolos = Alquitrán · Más rápido que O₂ = Monóxido de carbono", correct: true },
        { textDe: "Süchtig = Teer · Verklebt Lungenbläschen = Kohlenstoffmonoxid · Schneller als Sauerstoff = Nikotin", textEs: "Adicción = Alquitrán · Pega alvéolos = Monóxido · Más rápido = Nicotina", correct: false },
        { textDe: "Süchtig = Kohlenstoffmonoxid · Verklebt Lungenbläschen = Nikotin · Schneller als Sauerstoff = Teer", textEs: "Adicción = Monóxido · Pega alvéolos = Nicotina · Más rápido = Alquitrán", correct: false },
        { textDe: "Alle drei Stoffe sind Gase und machen genau dasselbe", textEs: "Las tres sustancias son gases y hacen exactamente lo mismo", correct: false }
      ],
      explanationDe: "Perfekt gemerkt: Nikotin = Nervengift, macht süchtig & verengt Blutgefäße. Teer = klebt an Flimmerhärchen & Lungenbläschen. Kohlenstoffmonoxid = Gas, schneller als O₂ im Blut.",
      explanationEs: "Esta distinción entre Nikotin, Teer y Kohlenstoffmonoxid es la pregunta estrella de la prueba (Aufgabe 2 de la pág. 8)."
    },
    {
      id: "q_tab_15",
      world: "tabak",
      topicDe: "🦷 Sichtbare Folgen beim Raucher (S. 8)",
      questionDe: "Welche äußerlich sofort sichtbaren oder riechbaren Folgen hat das Rauchen laut Seite 8?",
      questionEs: "¿Qué consecuencias visibles u olfativas externas tiene fumar según la página 8?",
      tipEs: "💡 Tipp auf Spanisch: Piensa en el color de los dedos/dientes y el olor.",
      svgSpec: { type: "consequences_overview" },
      options: [
        { textDe: "Finger und Zähne werden gelb, man hat Husten und man riecht schlecht", textEs: "Los dedos y los dientes se ponen amarillos, da tos y uno huele mal", correct: true },
        { textDe: "Finger und Zähne werden strahlend blau und man riecht nach Minze", textEs: "Los dedos y dientes se ponen azules y huele a menta", correct: false },
        { textDe: "Die Haare werden grün und die Augen leuchten im Dunkeln", textEs: "El pelo se pone verde", correct: false },
        { textDe: "Man wächst 20 Zentimeter schneller", textEs: "Uno crece 20 cm más rápido", correct: false }
      ],
      explanationDe: "Auf Seite 8 steht: „• Husten • Finger und Zähne werden gelb • Man riecht schlecht“.",
      explanationEs: "Los dedos y dientes se manchan de amarillo (por el alquitrán/nicotina), da tos y mal olor."
    },
    {
      id: "q_tab_16",
      world: "tabak",
      topicDe: "⚖️ Vor- und Nachteile des Rauchens (S. 9, Aufgabe 3)",
      questionDe: "Auf Seite 9 (Aufgabe 3) soll man über Vor- und Nachteile des Rauchens nachdenken. Was stimmt für die Gesundheit des Körpers?",
      questionEs: "En la página 9 (Actividad 3) se pide reflexionar sobre ventajas y desventajas de fumar. ¿Qué es cierto para la salud del cuerpo?",
      tipEs: "💡 Tipp auf Spanisch: Para la salud no existe ninguna ventaja real; todo son desventajas graves.",
      svgSpec: { type: "consequences_overview" },
      options: [
        { textDe: "Für die Gesundheit gibt es KEINE echten Vorteile — nur schwere Nachteile wie Sucht, Krebs, Lungenkrankheiten, verengte Blutgefäße und hohe Kosten", textEs: "Para la salud NO hay ventajas reales — solo graves desventajas como adicción, cáncer, enfermedades pulmonares y vasos estrechados", correct: true },
        { textDe: "Der Vorteil ist, dass die Lungenbläschen durch Teer besser geschützt sind", textEs: "La ventaja es que el alquitrán protege los alvéolos", correct: false },
        { textDe: "Der Vorteil ist, dass man beim Sport schneller rennen kann", textEs: "La ventaja es que se puede correr más rápido en deporte", correct: false },
        { textDe: "Der Vorteil ist, dass Kinder im Auto besser atmen können", textEs: "La ventaja es que los niños respiran mejor en el auto", correct: false }
      ],
      explanationDe: "Manche Menschen rauchen zwar, um dazuzugehören oder weil sie schon süchtig sind, aber für den Körper gibt es 0 Vorteile und nur gefährliche Nachteile!",
      explanationEs: "Para la salud física no existe ningún beneficio real (keine gesundheitlichen Vorteile), solo daños severos."
    },

    // =======================================================================
    // WELT 4: PASSIVRAUCHEN, RAUCHER-MODELL & 5-FEHLER-TEXT (16 FRAGEN, S. 9–11)
    // =======================================================================
    {
      id: "q_pf_1",
      world: "passiv_fehler",
      topicDe: "🚭 Was ist „Passivrauchen“? (S. 9)",
      questionDe: "Wann nennt man jemanden einen „Passivraucher“?",
      questionEs: "¿Cuándo se llama a alguien un «fumador pasivo» (Passivraucher)?",
      tipEs: "💡 Tipp auf Spanisch: Lee la página 9 («Passivraucher»).",
      svgSpec: { type: "passive_smoking_car" },
      options: [
        { textDe: "Wenn man selbst nicht raucht, aber den Rauch einer angezündeten Zigarette von anderen Menschen einatmet", textEs: "Cuando uno mismo no fuma, pero inhala el humo de un cigarrillo encendido de otras personas", correct: true },
        { textDe: "Wenn man nur im Schlaf eine Zigarette in der Hand hält, ohne sie anzuzünden", textEs: "Cuando uno sostiene un cigarrillo apagado mientras duerme", correct: false },
        { textDe: "Wenn man im Fernsehen jemanden sieht, der raucht", textEs: "Cuando uno ve en televisión a alguien fumando", correct: false },
        { textDe: "Wenn man im Sportunterricht langsam läuft", textEs: "Cuando uno corre lento en clase de educación física", correct: false }
      ],
      explanationDe: "Seite 9: „Hast du schon den Rauch (humo) einer angezündeten Zigarette eingeatmet? Ist deine Antwort ja? Dann hast du leider doch geraucht. Das nennt man Passivrauchen.“",
      explanationEs: "Inhalar el humo del cigarrillo de otra persona se llama «Passivrauchen» y es casi tan dañino como fumar activamente."
    },
    {
      id: "q_pf_2",
      world: "passiv_fehler",
      topicDe: "👧 Warum ist Passivrauchen für KINDER besonders gefährlich? (S. 9)",
      questionDe: "Auf Seite 9 stehen ZWEI wichtige Gründe, warum das Einatmen von fremdem Rauch für Kinder besonders gefährlich ist. Welche sind es?",
      questionEs: "En la página 9 aparecen DOS razones importantes por las que respirar humo ajeno es especialmente peligroso para los niños. ¿Cuáles son?",
      tipEs: "💡 Tipp auf Spanisch: 1) velocidad al respirar («schneller atmen») y 2) capacidad de eliminar venenos («Giftstoffe schlechter abbauen»).",
      svgSpec: { type: "passive_smoking_car" },
      options: [
        { textDe: "1. Weil Kinder schneller als Erwachsene atmen (mehr Rauch kommt rein) und 2. weil ihr Körper die Giftstoffe schlechter abbauen kann", textEs: "1. Porque los niños respiran más rápido que los adultos (entra más humo) y 2. porque su cuerpo descompone/elimina peor las toxinas", correct: true },
        { textDe: "1. Weil Kinder kleinere Nasen haben und 2. weil sie kein Blutplasma besitzen", textEs: "1. Porque tienen narices más pequeñas y 2. porque no tienen plasma", correct: false },
        { textDe: "1. Weil Kinder 10 Liter Blut haben und 2. weil sie keine weißen Blutkörperchen haben", textEs: "1. Porque tienen 10 litros de sangre y 2. no tienen glóbulos blancos", correct: false },
        { textDe: "Passivrauchen ist für Kinder völlig ungefährlich", textEs: "El humo pasivo es totalmente inofensivo para los niños", correct: false }
      ],
      explanationDe: "Wichtige Prüfungsfrage von Seite 9: „Für Kinder ist das Einatmen von fremdem Rauch besonders gefährlich, weil sie schneller als Erwachsene atmen (also mehr Rauch kommt rein) und weil ihr Körper die Giftstoffe schlechter abbauen kann.“",
      explanationEs: "Los dos motivos exactos de la guía son: 1. respiran más rápido (atmen schneller → mehr Rauch) y 2. su cuerpo elimina peor los tóxicos (Giftstoffe schlechter abbauen)."
    },
    {
      id: "q_pf_3",
      world: "passiv_fehler",
      topicDe: "🤒 Folgen von Passivrauchen bei Kindern (S. 9)",
      questionDe: "Welche Beschwerden bekommen Kinder durch Passivrauchen und was passiert mit ihren Abwehrkräften (defensas)?",
      questionEs: "¿Qué molestias sufren los niños por el tabaquismo pasivo y qué pasa con sus defensas (Abwehrkräfte)?",
      tipEs: "💡 Tipp auf Spanisch: Lee el penúltimo párrafo de la página 9.",
      svgSpec: { type: "passive_smoking_car" },
      options: [
        { textDe: "Augenschmerzen, starken Husten, Kopfschmerzen, sie werden schneller müde; ihre Abwehrkräfte werden schwächer und sie werden oft krank", textEs: "Dolor de ojos, tos fuerte, dolor de cabeza, cansancio; sus defensas se debilitan y se enferman a menudo", correct: true },
        { textDe: "Ihre Abwehrkräfte werden stärker und sie bekommen nie wieder Schnupfen", textEs: "Sus defensas se vuelven más fuertes y nunca se resfrían", correct: false },
        { textDe: "Sie bekommen nur Hunger auf Süßigkeiten, bleiben aber gesund", textEs: "Solo les da hambre de dulces pero siguen sanos", correct: false },
        { textDe: "Ihre Knochen wachsen schneller als normal", textEs: "Sus huesos crecen más rápido de lo normal", correct: false }
      ],
      explanationDe: "Seite 9: „Die Kinder bekommen Augenschmerzen und starken Husten. Sie leiden unter Kopfschmerzen und werden schneller müde. Mit der Zeit werden ihre Abwehrkräfte (defensas) schwächer und die Kinder werden dann oft krank.“",
      explanationEs: "Provoca dolor de ojos, tos fuerte, dolor de cabeza, cansancio y debilita las defensas (Abwehrkräfte), haciendo que se enfermen seguido."
    },
    {
      id: "q_pf_4",
      world: "passiv_fehler",
      topicDe: "🚗 Achtung: Raucherautos! (S. 9)",
      questionDe: "Was passiert laut dem „Achtung“-Hinweis auf Seite 9, wenn ein Kind in einem Raucherauto sitzt und die Fenster zu sind?",
      questionEs: "¿Qué ocurre según la advertencia «Achtung» de la página 9 cuando un niño va en un auto de fumadores con las ventanas cerradas?",
      tipEs: "💡 Tipp auf Spanisch: Lee la última frase de la página 9.",
      svgSpec: { type: "passive_smoking_car" },
      options: [
        { textDe: "Es gibt dort besonders viele schädliche Stoffe: Das Kind nimmt so viele Schadstoffe ein, als hätte es selbst eine Zigarette geraucht!", textEs: "Hay muchísimas sustancias dañinas: ¡el niño absorbe tantos tóxicos como si él mismo hubiera fumado un cigarrillo!", correct: true },
        { textDe: "Die Klimaanlage verwandelt den Rauch sofort in reinen Sauerstoff", textEs: "El aire acondicionado convierte el humo en oxígeno puro", correct: false },
        { textDe: "Der Rauch bleibt nur am Lenkrad kleben und erreicht das Kind nicht", textEs: "El humo se pega solo al volante y no llega al niño", correct: false },
        { textDe: "Geschlossene Fenster schützen das Kind vor dem Rauch im Auto", textEs: "Las ventanas cerradas protegen al niño del humo dentro del auto", correct: false }
      ],
      explanationDe: "Seite 9 unten: „Achtung: In Raucherautos gibt es besonders viele schädliche Stoffe, wenn die Fenster zu sind. Ein Kind nimmt so viele Schadstoffe ein, als hätte es selbst eine Zigarette geraucht.“",
      explanationEs: "Con las ventanas cerradas en un auto donde fuman, el niño inhala tantos tóxicos como si hubiera fumado un cigarrillo él mismo."
    },
    {
      id: "q_pf_5",
      world: "passiv_fehler",
      topicDe: "🎨 Gasaustausch-Modell Seite 10 (Normal)",
      questionDe: "Im oberen Bild auf Seite 10 („normaler Gasaustausch“) bekommt die Zelle Sauerstoff und Nährstoffe. Was entsteht dadurch in der Zelle (im gelben Stern)?",
      questionEs: "En el dibujo superior de la página 10 («intercambio gaseoso normal»), la célula recibe oxígeno y nutrientes. ¿Qué se produce con ello en la célula (en la estrella)?",
      tipEs: "💡 Tipp auf Spanisch: Mira la palabra escrita al lado de la estrella de la célula en el dibujo de arriba de la página 10.",
      svgSpec: { type: "page10_normal_clean" },
      options: [
        { textDe: "Energie (und als Abfallstoff wird Kohlenstoffdioxid zur Lunge abtransportiert)", textEs: "Energía (y como desecho se lleva el dióxido de carbono hacia el pulmón)", correct: true },
        { textDe: "Teer und Nikotin", textEs: "Alquitrán y nicotina", correct: false },
        { textDe: "Knochenmark und Blutplättchen", textEs: "Médula ósea y plaquetas", correct: false },
        { textDe: "Kohlenstoffmonoxid", textEs: "Monóxido de carbono", correct: false }
      ],
      explanationDe: "Im oberen Schaubild auf Seite 10 sieht man: Sauerstoff + Nährstoffe gehen in die Zelle → es entsteht ENERGIE, und Kohlenstoffdioxid fließt zurück zur Lunge.",
      explanationEs: "Con Sauerstoff + Nährstoffe la célula produce «Energie» y libera «Kohlenstoffdioxid»."
    },
    {
      id: "q_pf_6",
      world: "passiv_fehler",
      topicDe: "🎨 Gasaustausch eines Rauchers (S. 10, Frage 1–3)",
      questionDe: "Auf Seite 10 sollst du den Gasaustausch eines Rauchers mit 3 Farben einzeichnen: BRAUN, LILA und GRAU. Welche Farb-Zuordnung ist 100 % richtig?",
      questionEs: "En la página 10 debes pintar el intercambio gaseoso de un fumador con 3 colores: CAFÉ (braun), LILA y GRIS (grau). ¿Qué combinación es 100 % correcta?",
      tipEs: "💡 Tipp auf Spanisch: Revisa las preguntas 1, 2 y 3 de la página 10.",
      svgSpec: { type: "smoker_alveolus_clean" },
      options: [
        { textDe: "BRAUN = Teer in den Lungenbläschen · LILA = Nikotin verengt die Blutgefäße · GRAU = Weg des Gases Kohlenmonoxid bis zur Zelle", textEs: "CAFÉ = Alquitrán en los alvéolos · LILA = Nicotina estrecha los vasos · GRIS = Camino del monóxido de carbono hasta la célula", correct: true },
        { textDe: "BRAUN = Nikotin im Herzen · LILA = Teer an den Zähnen · GRAU = Sauerstoff in der Zelle", textEs: "CAFÉ = Nicotina · LILA = Alquitrán · GRIS = Oxígeno", correct: false },
        { textDe: "BRAUN = Kohlenmonoxid · LILA = Blutplasma · GRAU = Weiße Blutkörperchen", textEs: "CAFÉ = Monóxido · LILA = Plasma · GRIS = Glóbulos blancos", correct: false },
        { textDe: "BRAUN = Sauerstoff · LILA = Kohlendioxid · GRAU = Nährstoffe", textEs: "CAFÉ = Oxígeno · LILA = CO₂ · GRIS = Nutrientes", correct: false }
      ],
      explanationDe: "Genau wie in Aufgabe 1–3 auf Seite 10: 1. Teer in den Lungenbläschen = braun; 2. Nikotin verengt die Blutgefäße = lila; 3. Weg von Kohlenmonoxid von den Lungenbläschen zur Zelle = grau!",
      explanationEs: "1. Teer = braun (en Lungenbläschen), 2. Nikotin = lila (estrecha Blutgefäße), 3. Kohlenmonoxid = grau (de Lungenbläschen a Zelle)."
    },
    {
      id: "q_pf_7",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Fehlersuche Seite 11 — Satz 1",
      questionDe: "Im Schulbuch-Text auf Seite 11 steht: „1. Wenn Du atmest, dann kommt Wasser in die Lunge.“ Wie lautet der korrigierte Satz?",
      questionEs: "En el texto con errores de la página 11 dice: «1. Wenn Du atmest, dann kommt Wasser in die Lunge.» ¿Cómo es la oración corregida?",
      tipEs: "💡 Tipp auf Spanisch: Si entrara agua nos ahogaríamos; al respirar entra aire / oxígeno.",
      svgSpec: { type: "error_detective_card", num: 1 },
      options: [
        { textDe: "Wenn du atmest, dann kommt Luft (oder: Sauerstoff) in die Lunge.", textEs: "Cuando respiras, entra aire (u oxígeno) a los pulmones.", correct: true },
        { textDe: "Wenn du atmest, dann kommt Blutplasma in die Lunge.", textEs: "Cuando respiras, entra plasma a los pulmones.", correct: false },
        { textDe: "Wenn du atmest, dann kommt Wasser in das Herz.", textEs: "Cuando respiras, entra agua al corazón.", correct: false },
        { textDe: "Der Satz ist richtig, beim Atmen kommt immer Wasser in die Lunge.", textEs: "La frase es correcta.", correct: false }
      ],
      explanationDe: "Das Wort „Wasser“ ist falsch! Richtig heißt es: „Wenn du atmest, dann kommt Luft (Sauerstoff) in die Lunge.“",
      explanationEs: "El error es «Wasser»; la corrección es «Luft» (o «Sauerstoff»)."
    },
    {
      id: "q_pf_8",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Fehlersuche Seite 11 — Satz 2",
      questionDe: "Satz 2 auf Seite 11 lautet: „Die Lungenbläschen geben den Sauerstoff an die Zellen ab.“ Warum ist dieser Satz falsch und wie korrigiert man ihn?",
      questionEs: "La oración 2 de la página 11 dice: «Die Lungenbläschen geben den Sauerstoff an die Zellen ab.» ¿Por qué es falsa y cómo se corrige?",
      tipEs: "💡 Tipp auf Spanisch: Los alvéolos están en los pulmones, no tocan las células del pie o del brazo. ¿Quién lleva el oxígeno entre medio?",
      svgSpec: { type: "error_detective_card", num: 2 },
      options: [
        { textDe: "Die Lungenbläschen geben den Sauerstoff an das BLUT ab — und das Blut (die Blutgefäße) gibt den Sauerstoff an die Zellen ab!", textEs: "Los alvéolos entregan el oxígeno a la SANGRE, y la sangre (los vasos sanguíneos) lo entrega a las células", correct: true },
        { textDe: "Die Lungenbläschen geben Kohlenmonoxid an die Knochen ab", textEs: "Los alvéolos entregan monóxido a los huesos", correct: false },
        { textDe: "Die Flimmerhärchen geben den Sauerstoff an die Haare ab", textEs: "Los cilios entregan el oxígeno al pelo", correct: false },
        { textDe: "Die Zellen geben den Sauerstoff an die Lungenbläschen ab", textEs: "Las células entregan oxígeno a los alvéolos", correct: false }
      ],
      explanationDe: "Auf Seite 11 hast du „Lungenbläschen“ markiert und korrigiert: „Die Blutgefäße (oder: Das Blut) geben Sauerstoff an die Zellen ab“ (bzw. „Die Lungenbläschen geben den Sauerstoff ans Blut ab“).",
      explanationEs: "Los alvéolos pasan el oxígeno a la sangre, y la sangre/vasos sanguíneos (Blutgefäße) se lo entregan a las células."
    },
    {
      id: "q_pf_9",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Fehlersuche Seite 11 — Welcher Satz hat KEINEN Fehler?",
      questionDe: "Auf Seite 11 stehen 6 Sätze, aber der Autor hat nur 5 Fehler gemacht. Welcher der 6 Sätze ist komplett RICHTIG?",
      questionEs: "En la página 11 hay 6 oraciones, pero el autor cometió solo 5 errores. ¿Cuál de las 6 oraciones está completamente CORRECTA?",
      tipEs: "💡 Tipp auf Spanisch: En tu guía pusiste «Richtig» en el número 3.",
      svgSpec: { type: "error_detective_card", num: 3 },
      options: [
        { textDe: "Satz 3: „Das Blut transportiert den Sauerstoff zu den Zellen.“", textEs: "Oración 3: «La sangre transporta el oxígeno hacia las células.»", correct: true },
        { textDe: "Satz 1: „Wenn Du atmest, dann kommt Wasser in die Lunge.“", textEs: "Oración 1: «Cuando respiras, entra agua al pulmón.»", correct: false },
        { textDe: "Satz 5: „Das Nikotin macht die Blutgefäße breiter.“", textEs: "Oración 5: «La nicotina hace los vasos más anchos.»", correct: false },
        { textDe: "Satz 6: „Der Teer klebt in den Lungenbläschen. In die Blutgefäße kommt mehr Sauerstoff.“", textEs: "Oración 6: «A los vasos entra más oxígeno.»", correct: false }
      ],
      explanationDe: "Satz 3 („Das Blut transportiert den Sauerstoff zu den Zellen.“) ist vollkommen richtig!",
      explanationEs: "La oración 3 es la única que no tiene ningún error."
    },
    {
      id: "q_pf_10",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Fehlersuche Seite 11 — Satz 4 & Deutsch-Tipp",
      questionDe: "Satz 4 lautet: „Der Teer bleibt an den Flimmerhärchen kleben. So können sie besser arbeiten.“ Wie korrigiert man „besser arbeiten“ auf gutem Deutsch?",
      questionEs: "La oración 4 dice: «Der Teer bleibt an den Flimmerhärchen kleben. So können sie besser arbeiten.» ¿Cómo se corrige «besser arbeiten» en buen alemán?",
      tipEs: "💡 Tipp auf Spanisch: ¡Ojo con la ortografía! Se escribe «Flimmerhärchen» y el opuesto de «besser arbeiten» es «schlechter arbeiten» o «nicht richtig arbeiten».",
      svgSpec: { type: "error_detective_card", num: 4 },
      options: [
        { textDe: "„Der Teer bleibt an den Flimmerhärchen kleben. So können sie schlechter (oder: nicht richtig) arbeiten.“", textEs: "«...Así trabajan peor (o: no pueden trabajar bien).»", correct: true },
        { textDe: "„Der Teer bleibt an den Flimmerhärchen kleben. So können sie schneller und sauberer arbeiten.“", textEs: "«...Así trabajan más rápido y limpio.»", correct: false },
        { textDe: "„Der Sauerstoff bleibt an den Flimmerhärchen kleben.“", textEs: "«El oxígeno se queda pegado en los cilios.»", correct: false },
        { textDe: "„Der Teer wäscht die Flimmerhärchen sauber.“", textEs: "«El alquitrán lava los cilios.»", correct: false }
      ],
      explanationDe: "Durch den klebrigen Teer können die Flimmerhärchen schlechter arbeiten (oder: sich nicht richtig bewegen).",
      explanationEs: "El alquitrán impide que los Flimmerhärchen se muevan: «So können sie schlechter (nicht richtig) arbeiten»."
    },
    {
      id: "q_pf_11",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Fehlersuche Seite 11 — Satz 5",
      questionDe: "Satz 5 lautet: „Das Nikotin macht die Blutgefäße breiter (anchos). Das Blut bewegt sich langsamer...“ Welches Wort ist falsch und wie heißt es richtig?",
      questionEs: "La oración 5 dice: «Das Nikotin macht die Blutgefäße breiter (anchos)...» ¿Qué palabra es incorrecta y cómo debe decir?",
      tipEs: "💡 Tipp auf Spanisch: Lo contrario de «breiter» (más anchos) es «enger» / «schmaler» / «dünner» (más estrechos/delgados).",
      svgSpec: { type: "error_detective_card", num: 5 },
      options: [
        { textDe: "„breiter“ ist falsch! Richtig: „Das Nikotin macht die Blutgefäße enger (oder: dünner / schmaler).“", textEs: "¡«breiter» es falso! Correcto: «La nicotina hace los vasos sanguíneos más estrechos / delgados.»", correct: true },
        { textDe: "„langsamer“ ist falsch! Durch Nikotin fließt doppelt so viel Sauerstoff zu den Zellen.", textEs: "«langsamer» es falso; fluye el doble de oxígeno.", correct: false },
        { textDe: "„Nikotin“ ist falsch! Richtig: „Das Wasser macht die Blutgefäße breiter.“", textEs: "«Nikotin» es falso; el agua los ensancha.", correct: false },
        { textDe: "Der Satz hat keinen Fehler.", textEs: "La oración no tiene ningún error.", correct: false }
      ],
      explanationDe: "Nikotin verengt die Blutgefäße! Also: „Das Nikotin macht die Blutgefäße enger (dünner).“",
      explanationEs: "La nicotina estrecha los vasos sanguíneos: «macht die Blutgefäße enger / dünner»."
    },
    {
      id: "q_pf_12",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Fehlersuche Seite 11 — Satz 6",
      questionDe: "Satz 6 lautet: „Der Teer klebt in den Lungenbläschen. In die Blutgefäße kommt mehr Sauerstoff.“ Wie heißt der zweite Satz richtig?",
      questionEs: "La oración 6 dice: «Der Teer klebt in den Lungenbläschen. In die Blutgefäße kommt mehr Sauerstoff.» ¿Cómo debe decir la segunda frase?",
      tipEs: "💡 Tipp auf Spanisch: Lo contrario de «mehr» (más) es «weniger» (menos) o «nicht genug» (no suficiente).",
      svgSpec: { type: "error_detective_card", num: 6 },
      options: [
        { textDe: "„In die Blutgefäße kommt weniger (oder: nicht genug) Sauerstoff.“", textEs: "«A los vasos sanguíneos entra menos (o: no suficiente) oxígeno.»", correct: true },
        { textDe: "„In die Blutgefäße kommt doppelt so viel Sauerstoff.“", textEs: "«A los vasos entra el doble de oxígeno.»", correct: false },
        { textDe: "„In die Blutgefäße kommt überhaupt kein Blut mehr.“", textEs: "«A los vasos ya no entra nada de sangre.»", correct: false },
        { textDe: "„Der Teer verschwindet beim Ausatmen sofort.“", textEs: "«El alquitrán desaparece al exhalar.»", correct: false }
      ],
      explanationDe: "Wenn Teer die Lungenbläschen verklebt, ist der Gasaustausch blockiert: „In die Blutgefäße kommt weniger Sauerstoff.“",
      explanationEs: "El alquitrán bloquea los alvéolos, por lo que pasa MENOS oxígeno a la sangre: «weniger Sauerstoff»."
    },
    {
      id: "q_pf_13",
      world: "passiv_fehler",
      topicDe: "🔗 Zusammenhänge verstehen: Rauchen & Zellatmung",
      questionDe: "Warum bekommt eine Muskelzelle bei einem starken Raucher weniger Energie als bei einem Nichtraucher?",
      questionEs: "¿Por qué una célula muscular de un fumador recibe menos energía que la de un no fumador?",
      tipEs: "💡 Tipp auf Spanisch: Combina lo que hacen los 3 tóxicos (Teer, Nikotin, Kohlenmonoxid) sobre el camino del oxígeno hacia la célula.",
      svgSpec: { type: "smoker_alveolus_clean" },
      options: [
        { textDe: "Weil Teer die Lungenbläschen verklebt, Kohlenmonoxid schneller als O₂ ins Blut geht und Nikotin die Blutgefäße verengt — so kommt viel weniger Sauerstoff für die Zellatmung an!", textEs: "Porque el alquitrán tapa los alvéolos, el CO gana al O₂ en la sangre y la nicotina estrecha los vasos — ¡así llega mucho menos O₂ para producir energía!", correct: true },
        { textDe: "Weil Raucher keine Lungenarterie und keine Lungenvene mehr haben", textEs: "Porque los fumadores ya no tienen arteria ni vena pulmonar", correct: false },
        { textDe: "Weil der Rauch das Knochenmark sofort in Wasser verwandelt", textEs: "Porque el humo transforma la médula ósea en agua", correct: false },
        { textDe: "Raucher haben sogar mehr Energie in den Zellen als Nichtraucher", textEs: "Los fumadores tienen más energía en las células", correct: false }
      ],
      explanationDe: "Alle drei Schadstoffe bremsen die Sauerstoffversorgung der Zellen: 1. Teer blockiert die Aufnahme im Lungenbläschen, 2. CO verdrängt O₂ im Blut, 3. Nikotin macht die Gefäße eng.",
      explanationEs: "Los 3 venenos del tabaco atacan en equipo el transporte de oxígeno hasta la célula."
    },
    {
      id: "q_pf_14",
      world: "passiv_fehler",
      topicDe: "🫁 Was passiert mit dem Kohlenstoffdioxid beim Raucher? (S. 7)",
      questionDe: "Wenn Teer in den Lungenbläschen klebt, kommt nicht genug Sauerstoff ins Blut. Was passiert gleichzeitig mit dem Kohlenstoffdioxid (CO₂)?",
      questionEs: "Cuando el alquitrán se pega en los alvéolos, no entra suficiente oxígeno a la sangre. ¿Qué pasa al mismo tiempo con el dióxido de carbono (CO₂)?",
      tipEs: "💡 Tipp auf Spanisch: Lee la última línea de la página 7.",
      svgSpec: { type: "smoker_alveolus_clean" },
      options: [
        { textDe: "Das Kohlenstoffdioxid kann schlechter abgegeben werden und bleibt im Blut!", textEs: "El dióxido de carbono no puede salir bien y ¡se queda en la sangre!", correct: true },
        { textDe: "Das Kohlenstoffdioxid verwandelt sich automatisch in frischen Sauerstoff", textEs: "El CO₂ se transforma automáticamente en oxígeno fresco", correct: false },
        { textDe: "Das Kohlenstoffdioxid verschwindet durch die Haut", textEs: "El CO₂ desaparece por la piel", correct: false },
        { textDe: "Im Blut eines Rauchers gibt es überhaupt kein Kohlenstoffdioxid", textEs: "En la sangre de un fumador no hay nada de CO₂", correct: false }
      ],
      explanationDe: "Seite 7 unten: „Der Gasaustausch wird schwieriger: Es kommt nicht genug Sauerstoff ins Blut und der Kohlenstoffdioxid bleibt im Blut.“",
      explanationEs: "Como el intercambio de gases está bloqueado por el alquitrán, el CO₂ tampoco puede salir bien hacia el pulmón y se queda en la sangre."
    },
    {
      id: "q_pf_15",
      world: "passiv_fehler",
      topicDe: "🔤 Rechtschreib-Check für die Probe!",
      questionDe: "Welche Schreibweise dieser 4 wichtigen Begriffe für die Naturkunde-Probe ist 100 % fehlerfrei?",
      questionEs: "¿Cuál de estas 4 escrituras de conceptos clave para la prueba de Naturkunde está 100 % libre de faltas de ortografía?",
      tipEs: "💡 Tipp auf Spanisch: Fíjate bien en las dobles consonantes («mm», «ff», «tt») y en las diéresis («ä», «ö»).",
      svgSpec: { type: "vocab_spelling_card" },
      options: [
        { textDe: "die Flimmerhärchen · die Blutplättchen · die Lungenbläschen · der Sauerstoff", textEs: "Escritura 100 % correcta en alemán", correct: true },
        { textDe: "die Flimerherchen · die Blutplätchen · die Lungenbleschen · der Sauerstof", textEs: "Con errores de consonantes dobles y Umlaute", correct: false },
        { textDe: "die Flimmerharchen · die Blutplatchen · die Lungenblaschen · der Sauerschtov", textEs: "Sin diéresis (ä)", correct: false },
        { textDe: "die Vlimmerhärchen · die Plutblättchen · die Lungenbläschen · der Zauerstoff", textEs: "Letras iniciales cambiadas", correct: false }
      ],
      explanationDe: "Super wichtig für die volle Punktzahl: Flimmerhärchen (mit mm und ä), Blutplättchen (mit tt und ä), Lungenbläschen (mit ä) und Sauerstoff (mit ff)!",
      explanationEs: "En el cuaderno aparecían «Blutplätchen» (con una t) y «Flimerherchen». Recordar «Blutplättchen» y «Flimmerhärchen» asegura el 7,0."
    },
    {
      id: "q_pf_16",
      world: "passiv_fehler",
      topicDe: "🏆 Meister-Frage: Der komplette Weg eines Sauerstoff-Moleküls",
      questionDe: "Verfolge den Weg des Sauerstoffs vom Einatmen bis zur Muskelzelle! Welche Reihenfolge stimmt genau?",
      questionEs: "¡Sigue el camino del oxígeno desde que inhalas hasta la célula muscular! ¿Qué orden es exactamente el correcto?",
      tipEs: "💡 Tipp auf Spanisch: Aire → Alvéolo → Vena pulmonar → Corazón izquierdo → Arteria corporal → Capilar → Célula muscular.",
      svgSpec: { type: "page4_numbered_clean" },
      options: [
        { textDe: "Einatmen → Lunge (Lungenbläschen) → Lungenvene → linke Herzhälfte → Körperarterie → Kapillaren → Muskelzelle", textEs: "Inhalar → Pulmón (alvéolos) → Vena pulmonar → Mitad izq. del corazón → Arteria corporal → Capilares → Célula muscular", correct: true },
        { textDe: "Einatmen → Lunge → Lungenarterie → rechte Herzhälfte → Körpervene → Muskelzelle", textEs: "Inhalar → Pulmón → Arteria pulmonar → Mitad derecha → Vena corporal...", correct: false },
        { textDe: "Einatmen → Knochenmark → rechte Herzkammer → Lungenbläschen → Nase", textEs: "Inhalar → Médula ósea → Ventrículo derecho...", correct: false },
        { textDe: "Einatmen → Muskelzelle → Körperarterie → linke Herzhälfte → Lunge", textEs: "Inhalar → Célula muscular → Arteria corporal...", correct: false }
      ],
      explanationDe: "Meisterhaft! Von den Lungenbläschen geht das sauerstoffreiche Blut über die Lungenvene in die linke Herzhälfte, von dort über die Körperarterie und die Kapillaren in die Muskelzelle!",
      explanationEs: "Ese es el recorrido completo y exacto del oxígeno en las páginas 3, 4 y 6."
    }
  ]
};
