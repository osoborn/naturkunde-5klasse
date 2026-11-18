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
      unlockHintDe: "Beantworte deine ersten 3 Aufgaben richtig",
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
      unlockHintDe: "Meistere die Aufgaben zu Blut & Blutkreislauf",
      pointsCost: 85
    },
    {
      id: "gift_strong_heart",
      emoji: "🫀",
      nameDe: "Unermüdlicher Herz-Muskel",
      nameEs: "Músculo Cardíaco Incansable",
      unlockHintDe: "Erreiche eine 5er-Serie (Combo 5x 🔥)",
      pointsCost: 110
    },
    {
      id: "gift_fresh_lungs",
      emoji: "🫁",
      nameDe: "Saubere Lungenbläschen",
      nameEs: "Alvéolos Pulmonares Limpios",
      unlockHintDe: "Beschrifte das Kreislauf-Schema von Seite 4",
      pointsCost: 140
    },
    {
      id: "gift_microscope",
      emoji: "🔬",
      nameDe: "Kapillaren-Mikroskop",
      nameEs: "Microscopio de Capilares",
      unlockHintDe: "Löse alle 3 Klappkarten aus dem Heft (Seite 5–6)",
      pointsCost: 170
    },
    {
      id: "gift_no_smoke",
      emoji: "🚭",
      nameDe: "Rauchfrei-Schutzschild",
      nameEs: "Escudo Protector Libre de Humo",
      unlockHintDe: "Löse das Raucher-Gasaustausch-Modell (Seite 10)",
      pointsCost: 200
    },
    {
      id: "gift_detective",
      emoji: "🕵️‍♀️",
      nameDe: "5-Fehler-Meisterdetektivin",
      nameEs: "Detective Maestra de los 5 Errores",
      unlockHintDe: "Finde und korrigiere alle 5 Schulbuch-Fehler (Seite 11)",
      pointsCost: 230
    },
    {
      id: "gift_dolphin",
      emoji: "🐬",
      nameDe: "Frischer Atem-Delfin",
      nameEs: "Delfín de Aire Puro",
      unlockHintDe: "Sammle 260 Punkte beim Üben",
      pointsCost: 260
    },
    {
      id: "gift_owl",
      emoji: "🦉",
      nameDe: "Weise Naturkunde-Eule",
      nameEs: "Búho Sabio de Ciencias Naturales",
      unlockHintDe: "Erreiche mindestens Note 5,5 in einer Auswertung",
      pointsCost: 310
    },
    {
      id: "gift_rocket",
      emoji: "🚀",
      nameDe: "Kreislauf-Turbo-Rakete",
      nameEs: "Cohete Turbo Circulatorio",
      unlockHintDe: "Erreiche eine 10er-Serie (Combo 10x 🔥)",
      pointsCost: 360
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
      unlockHintDe: "Beantworte 30 Prüfungsfragen richtig",
      pointsCost: 480
    },
    {
      id: "gift_trophy",
      emoji: "🏆",
      nameDe: "Goldener Vitacura-Pokal (DS Santiago)",
      nameEs: "Copa Dorada DS Santiago (Vitacura)",
      unlockHintDe: "Beantworte 45 Prüfungsfragen richtig",
      pointsCost: 550
    },
    {
      id: "gift_crown_70",
      emoji: "👑",
      nameDe: "Königin der Note 7,0!",
      nameEs: "¡Reina de la Nota 7,0!",
      unlockHintDe: "Schaffe eine glatte Note 7,0 (100%)!",
      pointsCost: 650
    }
  ],

  // =========================================================================
  // 2. VOKABELN & SCHLÜSSELBEGRIFFE (STRENG NACH DEN 11 SEITEN DES HEFTES)
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
      hintDe: "Das Blut ist ein „flüssiges Gewebe“. Es besteht aus einem flüssigen Teil und einem festen Teil.",
      tipEs: "Primera frase de la página 1: «Das Blut ist ein flüssiges Gewebe»."
    },
    {
      id: "v_plasma",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "das Blutplasma",
      synonymsDe: ["blutplasma", "das blutplasma", "plasma"],
      termEs: "el plasma sanguíneo (parte líquida amarilla)",
      synonymsEs: ["plasma", "plasma sanguineo", "el plasma sanguineo", "parte liquida"],
      hintDe: "Der flüssige Teil des Blutes (im Comic gelb). Wichtigste Funktion: Transport von verschiedenen Stoffen. In ihm leben die Blutkörperchen und die Blutplättchen.",
      tipEs: "Parte líquida de la sangre; transporta diversas sustancias y en él viven los glóbulos y las plaquetas."
    },
    {
      id: "v_knochenmark",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "das Knochenmark",
      synonymsDe: ["knochenmark", "das knochenmark", "knochenmark der langen knochen"],
      termEs: "la médula ósea (de los huesos largos)",
      synonymsEs: ["medula osea", "la medula osea", "medula"],
      hintDe: "Das Blut bildet sich im Knochenmark der langen Knochen.",
      tipEs: "«Knochen» = hueso, «Mark» = médula. Donde se forma la sangre en los huesos largos."
    },
    {
      id: "v_rote_bk",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "die roten Blutkörperchen",
      synonymsDe: ["rote blutkörperchen", "die roten blutkörperchen", "rote blutzellen", "rotes blutkörperchen"],
      termEs: "los glóbulos rojos",
      synonymsEs: ["globulos rojos", "los globulos rojos"],
      hintDe: "Gehören zum festen Teil. Ihre Funktion ist der Transport von Sauerstoff und Kohlenstoffdioxid.",
      tipEs: "En la página 1 viene traducido entre paréntesis: «(glóbulos rojos)». En el esquema también pusiste «Rote Blutzellen»."
    },
    {
      id: "v_weisse_bk",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "die weißen Blutkörperchen",
      synonymsDe: ["weiße blutkörperchen", "die weißen blutkörperchen", "weiße blutzellen", "weisse blutkoerperchen", "weißes blutkörperchen"],
      termEs: "los glóbulos blancos",
      synonymsEs: ["globulos blancos", "los globulos blancos"],
      hintDe: "Gehören zum festen Teil. Sie kämpfen gegen Viren und Bakterien.",
      tipEs: "En la página 1 viene entre paréntesis: «(glóbulos blancos)». Luchan contra virus y bacterias."
    },
    {
      id: "v_blutplaettchen",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "die Blutplättchen",
      synonymsDe: ["blutplättchen", "die blutplättchen", "blutplaettchen"],
      termEs: "las plaquetas",
      synonymsEs: ["plaquetas", "las plaquetas"],
      hintDe: "Gehören zum festen Teil. Sie reparieren zerstörte Blutgefäße und verhindern, dass das Blut weiter fließt (es gerinnt).",
      tipEs: "En la página 1 viene entre paréntesis: «(plaquetas)». Reparan los vasos sanguíneos rotos."
    },
    {
      id: "v_gerinnen",
      block: "1. Das Blut (Seite 1–2)",
      termDe: "es gerinnt",
      synonymsDe: ["es gerinnt", "gerinnen", "gerinnt"],
      termEs: "se coagula (coagular)",
      synonymsEs: ["se coagula", "coagular", "coagula"],
      hintDe: "Wenn die Blutplättchen zerstörte Blutgefäße reparieren, fließt das Blut nicht weiter: Also, es gerinnt.",
      tipEs: "En la página 1 dice literalmente: «Also, es gerinnt (se coagula)»."
    },

    // Block 2: Herz & Blutgefäße (Seite 3–6)
    {
      id: "v_blutgefaesse",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Blutgefäße",
      synonymsDe: ["blutgefäße", "die blutgefäße", "blutgefaesse", "das blutgefäß"],
      termEs: "los vasos sanguíneos (tubos / Röhren)",
      synonymsEs: ["vasos sanguineos", "los vasos sanguineos", "tubos"],
      hintDe: "Blutgefäße sind Röhren (tubos), die Blut zu allen Teilen des Körpers transportieren: Arterien, Venen und Kapillaren.",
      tipEs: "En la página 3 dice: «Blutgefäße sind Röhren (tubos)»."
    },
    {
      id: "v_arterien",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Arterien",
      synonymsDe: ["arterien", "die arterien", "arterie", "die arterie"],
      termEs: "las arterias (del corazón a las células)",
      synonymsEs: ["arterias", "las arterias", "arteria"],
      hintDe: "Arterien transportieren Blut VOM Herzen ZU den Körperzellen. Symbol: ♡ ──► 🧍",
      tipEs: "Transportan sangre DESDE el corazón HACIA las células del cuerpo."
    },
    {
      id: "v_venen",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Venen",
      synonymsDe: ["venen", "die venen", "vene", "die vene"],
      termEs: "las venas (de los órganos al corazón)",
      synonymsEs: ["venas", "las venas", "vena"],
      hintDe: "Venen transportieren das Blut VON den Organen (Körperzellen) ZUM Herzen. Symbol: 🧍 ──► ♡",
      tipEs: "Transportan sangre DESDE los órganos/células HACIA el corazón."
    },
    {
      id: "v_kapillaren",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Kapillaren",
      synonymsDe: ["kapillaren", "die kapillaren", "kapillare", "die kapillare"],
      termEs: "los capilares (microscópicos, intercambio gaseoso)",
      synonymsEs: ["capilares", "los capilares", "capilar"],
      hintDe: "Kapillaren sind mikroskopisch klein. Sie verbinden die Arterien und Venen. Hier findet der Gasaustausch statt.",
      tipEs: "Son microscópicos, unen arterias y venas y ahí ocurre el intercambio de gases."
    },
    {
      id: "v_herzkammer",
      block: "2. Herz & Blutgefäße (Seite 3–6)",
      termDe: "die Herzkammer",
      synonymsDe: ["herzkammer", "die herzkammer", "herzkammern", "die herzkammern", "herzhälfte"],
      termEs: "el ventrículo / cámara del corazón",
      synonymsEs: ["ventriculo", "el ventriculo", "camara del corazon", "ventriculos", "mitad del corazon"],
      hintDe: "Es gibt eine rechte und eine linke Herzkammer (bzw. Herzhälfte; oben im Herzen liegen die Vorhöfe).",
      tipEs: "En las páginas 3, 4 y 6 se nombran «rechte/linke Herzhälfte» y «rechte/linke Herzkammer»."
    },

    // Block 3: Blutkreislauf & Gasaustausch (Seite 3–6)
    {
      id: "v_sauerstoffreich",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "sauerstoffreiches Blut",
      synonymsDe: ["sauerstoffreich", "sauerstoffreiches blut", "viel sauerstoff", "blut mit viel sauerstoff"],
      termEs: "sangre rica en oxígeno (hat viel Sauerstoff)",
      synonymsEs: ["rico en oxigeno", "sangre rica en oxigeno", "con mucho oxigeno"],
      hintDe: "Blut, das viel Sauerstoff hat (kommt aus der Lunge in die linke Herzhälfte und wird in den Körperkreislauf gepumpt).",
      tipEs: "En tu hoja (pág. 3) está anotado a mano: «hat viel Sauerstoff / rico en oxígeno»."
    },
    {
      id: "v_sauerstoffarm",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "sauerstoffarmes Blut",
      synonymsDe: ["sauerstoffarm", "sauerstoffarmes blut", "wenig sauerstoff"],
      termEs: "sangre pobre en oxígeno (wenig Sauerstoff)",
      synonymsEs: ["pobre en oxigeno", "sangre pobre en oxigeno", "con poco oxigeno"],
      hintDe: "Blut mit wenig Sauerstoff und viel Kohlenstoffdioxid (fließt von den Zellen zum rechten Herzen und dann zur Lunge).",
      tipEs: "En tu hoja (pág. 3) está anotado a mano: «wenig Sauerstoff / pobre en oxígeno»."
    },
    {
      id: "v_koerperkreislauf",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "der Körperkreislauf",
      synonymsDe: ["körperkreislauf", "der körperkreislauf", "koerperkreislauf"],
      termEs: "la circulación corporal",
      synonymsEs: ["circulacion corporal", "la circulacion corporal", "circuito corporal"],
      hintDe: "Die linke Herzkammer pumpt sauerstoffreiches Blut zu den Körperzellen; nach der Zellatmung fließt das sauerstoffarme Blut zur rechten Herzkammer zurück.",
      tipEs: "Circuito entre el corazón (lado izquierdo → lado derecho) y las células del cuerpo."
    },
    {
      id: "v_lungenkreislauf",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "der Lungenkreislauf",
      synonymsDe: ["lungenkreislauf", "der lungenkreislauf"],
      termEs: "la circulación pulmonar",
      synonymsEs: ["circulacion pulmonar", "la circulacion pulmonar", "circuito pulmonar"],
      hintDe: "Die rechte Herzhälfte pumpt sauerstoffarmes Blut über die Lungenarterie zu den Lungenbläschen; nach dem Gasaustausch fließt es über die Lungenvene in die linke Herzhälfte.",
      tipEs: "Circuito superior (nº 3 en la pág. 4) entre el corazón y los pulmones."
    },
    {
      id: "v_lungenblaeschen",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "die Lungenbläschen",
      synonymsDe: ["lungenbläschen", "die lungenbläschen", "lungenblaeschen", "bläschen"],
      termEs: "los alvéolos pulmonares",
      synonymsEs: ["alveolos", "los alveolos", "alveolos pulmonares"],
      hintDe: "Hier in der Lunge machen die Lungenbläschen den Gasaustausch: Das Blut gibt Kohlenstoffdioxid ab und nimmt Sauerstoff auf.",
      tipEs: "Pequeños saquitos en los pulmones donde ocurre el Gasaustausch."
    },
    {
      id: "v_gasaustausch",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "der Gasaustausch",
      synonymsDe: ["gasaustausch", "der gasaustausch"],
      termEs: "el intercambio gaseoso",
      synonymsEs: ["intercambio gaseoso", "el intercambio gaseoso", "intercambio de gases"],
      hintDe: "Findet in den Lungenbläschen und in den Kapillaren statt (Austausch von Sauerstoff und Kohlenstoffdioxid).",
      tipEs: "Intercambio de oxígeno (Sauerstoff) y dióxido de carbono (Kohlenstoffdioxid)."
    },
    {
      id: "v_zellatmung",
      block: "3. Kreislauf & Gasaustausch (Seite 3–6)",
      termDe: "die Zellatmung",
      synonymsDe: ["zellatmung", "die zellatmung"],
      termEs: "la respiración celular",
      synonymsEs: ["respiracion celular", "la respiracion celular"],
      hintDe: "Die Zellen nehmen Sauerstoff (S) und Nährstoffe (N) auf, gewinnen Energie und geben Kohlenstoffdioxid (Ko) ab.",
      tipEs: "Ocurre en las células del cuerpo (pág. 3 y Klappkarte 3 de la pág. 6)."
    },

    // Block 4: Tabakkonsum & Passivrauchen (Seite 7–11)
    {
      id: "v_nikotin",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Nikotin",
      synonymsDe: ["nikotin", "das nikotin"],
      termEs: "la nicotina (veneno en insecticidas, estrecha vasos y da adicción)",
      synonymsEs: ["nicotina", "la nicotina"],
      hintDe: "Befindet sich in einigen Insektiziden (tötet Insekten). Verengt die Blutgefäße, macht sie hart und steif (Raucherbein), Herz klopft schneller, zerstört Nervenzellen im Gehirn und macht süchtig.",
      tipEs: "En la página 8 dice: «Nikotin ist ein Gift (veneno)». En la página 10 se pinta en LILA."
    },
    {
      id: "v_teer",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "der Teer",
      synonymsDe: ["teer", "der teer"],
      termEs: "el alquitrán (usado en calles, pega pelillos y alvéolos)",
      synonymsEs: ["alquitran", "el alquitran"],
      hintDe: "Wird als Bindemittel im Straßenbau benutzt (klebrig im Sommer). Bleibt an den Flimmerhärchen und in den Lungenbläschen kleben → Gasaustausch wird schwieriger!",
      tipEs: "En la página 7 está anotado «alquitrán». En la página 10 se pinta en CAFÉ (braun)."
    },
    {
      id: "v_kohlenmonoxid",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Kohlenstoffmonoxid",
      synonymsDe: ["kohlenstoffmonoxid", "kohlenmonoxid", "das kohlenstoffmonoxid", "das kohlenmonoxid"],
      termEs: "el monóxido de carbono (combustión, más rápido que el oxígeno)",
      synonymsEs: ["monoxido de carbono", "el monoxido de carbono"],
      hintDe: "Entsteht aus der Verbrennung von Kohle, Gas oder Benzin. Gelangt durch die Lungenbläschen ins Blut und ist schneller als Sauerstoff (NO ADELANTAR)!",
      tipEs: "En las páginas 7, 8 y 10 aparece como «Kohlenmonoxid» y «Kohlenstoffmonoxid». Se pinta en GRIS (grau)."
    },
    {
      id: "v_flimmerhaerchen",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "die Flimmerhärchen",
      synonymsDe: ["flimmerhärchen", "die flimmerhärchen", "flimmerhaerchen"],
      termEs: "los pelillos (cilios) de las vías respiratorias",
      synonymsEs: ["pelillos", "los pelillos", "cilios"],
      hintDe: "Teer bleibt an den Flimmerhärchen der Atemwege kleben. Sie können sich dann nicht richtig bewegen und die Atemwege nicht sauber machen.",
      tipEs: "En la página 7 viene traducido entre paréntesis: «Flimmerhärchen (pelillos) der Atemwege»."
    },
    {
      id: "v_raucherbein",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Raucherbein",
      synonymsDe: ["raucherbein", "das raucherbein"],
      termEs: "la pierna de fumador",
      synonymsEs: ["pierna de fumador", "la pierna de fumador"],
      hintDe: "Wenn sich die Blutgefäße durch Nikotin verengen und hart/steif werden, bleibt kein Platz mehr für das Blut und ein Zeh, Fuß oder Bein kann absterben.",
      tipEs: "Explicado en el punto 3 de Nikotin en la página 8."
    },
    {
      id: "v_passivrauchen",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "das Passivrauchen",
      synonymsDe: ["passivrauchen", "das passivrauchen", "passivraucher"],
      termEs: "el tabaquismo pasivo (inhalar el humo de otros)",
      synonymsEs: ["tabaquismo pasivo", "fumador pasivo", "respirar humo"],
      hintDe: "Wenn man den Rauch einer angezündeten Zigarette einatmet. Für Kinder besonders gefährlich (atmen schneller + Körper kann Giftstoffe schlechter abbauen).",
      tipEs: "Explicado en la página 9 («Passivraucher»)."
    },
    {
      id: "v_abwehrkraefte",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "die Abwehrkräfte",
      synonymsDe: ["abwehrkräfte", "die abwehrkräfte", "abwehrkraefte"],
      termEs: "las defensas",
      synonymsEs: ["defensas", "las defensas"],
      hintDe: "Mit der Zeit werden die Abwehrkräfte der Kinder durch Passivrauchen schwächer und die Kinder werden dann oft krank.",
      tipEs: "En la página 9 viene traducido entre paréntesis: «Abwehrkräfte (defensas)»."
    },
    {
      id: "v_giftstoffe_abbauen",
      block: "4. Tabakkonsum & Passivrauchen (Seite 7–11)",
      termDe: "Giftstoffe abbauen",
      synonymsDe: ["giftstoffe abbauen", "abbauen"],
      termEs: "descomponer-eliminar sustancias tóxicas",
      synonymsEs: ["descomponer", "eliminar", "descomponer eliminar"],
      hintDe: "Der Körper von Kindern kann die Giftstoffe aus dem Zigarettenrauch schlechter abbauen als ein Erwachsener.",
      tipEs: "En la página 9 viene traducido entre paréntesis: «abbauen (descomponer-eliminar)»."
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
    { abbr: "Herzk.", fullDe: "Herzkammer", fullEs: "Ventrículo / cámara del corazón" },
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
            "transportieren nur Luft durch den Mund"
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
            "Die Lungenbläschen machen den Gasaustausch (Blut gibt Kohlenstoffdioxid ab und nimmt Sauerstoff auf)",
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
          tipEs: "En el cuaderno (pág. 6) completaste con «K...» (Körperzellen)."
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
            "Das sauerstoffarme Blut (mit viel Kohlenstoffdioxid) fließt zur rechten Herzkammer zurück",
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
  // 4. MODUL 2: DAS BLUT & DER BLUTKREISLAUF (VERSCHIEDENE FRAGEFORMATE · S. 1–6)
  // =========================================================================
  blutSchemaSlots: [
    {
      id: "slot_plasma",
      positionLabelDe: "Box links oben (Flüssiger Teil)",
      correctDe: "Blutplasma",
      hintEs: "Parte líquida de la sangre (transporta diversas sustancias).",
      optionsDe: ["Blutplasma", "fester Teil", "Knochenmark", "Lungenbläschen"]
    },
    {
      id: "slot_fest",
      positionLabelDe: "Box rechts oben (Zweiter Hauptteil)",
      correctDe: "fester Teil",
      hintEs: "Parte sólida compuesta por los 3 tipos de células/plaquetas.",
      optionsDe: ["fester Teil", "flüssiger Teil", "Wasserteil", "Gasaustausch"]
    },
    {
      id: "slot_plaettchen",
      positionLabelDe: "Box 1 unten (Reparieren Gefäße / es gerinnt)",
      correctDe: "Blutplättchen",
      hintEs: "Plaquetas: reparan vasos sanguíneos rotos para que la sangre coagule (gerinnt).",
      optionsDe: ["Blutplättchen", "Rote Blutkörperchen", "Weiße Blutkörperchen", "Flimmerhärchen"]
    },
    {
      id: "slot_weisse",
      positionLabelDe: "Box 2 unten (Kämpfen gegen Viren & Bakterien)",
      correctDe: "Weiße Blutkörperchen (Weiße Blutzellen)",
      hintEs: "Glóbulos blancos: luchan contra virus y bacterias.",
      optionsDe: ["Weiße Blutkörperchen (Weiße Blutzellen)", "Rote Blutkörperchen (Rote Blutzellen)", "Blutplättchen", "Blutplasma"]
    },
    {
      id: "slot_rote",
      positionLabelDe: "Box 3 unten (Transportieren Sauerstoff & Kohlenstoffdioxid)",
      correctDe: "Rote Blutkörperchen (Rote Blutzellen)",
      hintEs: "Glóbulos rojos: transportan oxígeno y dióxido de carbono.",
      optionsDe: ["Rote Blutkörperchen (Rote Blutzellen)", "Weiße Blutkörperchen (Weiße Blutzellen)", "Blutplättchen", "Nervenzellen"]
    }
  ],

  comicColoringTargets: [
    {
      id: "comic_rote",
      letterBadge: "R",
      nameDe: "a) Male die roten Blutkörperchen an (Figuren mit „R“)",
      taskDe: "Male die roten Blutkörperchen rot an.",
      tipEs: "Instrucción 2a de la página 2: «Male die roten Blutkörperchen rot an.»",
      expectedColor: "rot",
      roleExplanationDe: "Die roten Blutkörperchen („R“) werden ROT angemalt — sie transportieren Sauerstoff und Kohlenstoffdioxid."
    },
    {
      id: "comic_weisse",
      letterBadge: "W / B",
      nameDe: "b) Male das „B“ der weißen Blutkörperchen an (Ritter mit Helm „W“ & Schild „B“)",
      taskDe: "Male das „B“ der weißen Blutkörperchen blau an.",
      tipEs: "Instrucción 2b de la página 2: «Male das B der weißen Blutkörperchen blau an.»",
      expectedColor: "blau",
      roleExplanationDe: "Das „B“ der weißen Blutkörperchen wird BLAU angemalt — sie kämpfen gegen Viren und Bakterien!"
    },
    {
      id: "comic_plaettchen",
      letterBadge: "P",
      nameDe: "c) Male die Blutplättchen an (Bauarbeiter mit „P“ an der Mauer)",
      taskDe: "Male die Blutplättchen braun an.",
      tipEs: "Instrucción 2c de la página 2: «Male die Blutplättchen braun an.»",
      expectedColor: "braun",
      roleExplanationDe: "Die Blutplättchen („P“) werden BRAUN angemalt — sie reparieren zerstörte Blutgefäße, damit das Blut gerinnt."
    },
    {
      id: "comic_plasma",
      letterBadge: "💧",
      nameDe: "d) Welche Farbe hat das Blutplasma (die Flüssigkeit)?",
      taskDe: "Das Blutplasma ist gelb!",
      tipEs: "Instrucción 2d de la página 2: «Das Blutplasma ist gelb!»",
      expectedColor: "gelb",
      roleExplanationDe: "Das Blutplasma ist GELB — in ihm leben die Blutkörperchen und Blutplättchen, und es transportiert Stoffe."
    }
  ],

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
      tipEs: "Nº 2 apunta directamente al pulmón (Lunge).",
      optionsDe: ["Lunge", "Ein-/Ausatmung", "Lungenkreislauf", "Herz", "Muskelzellen"]
    },
    {
      num: 3,
      correctDe: "Lungenkreislauf",
      tipEs: "Nº 3 señala el circuito superior entre el corazón y los pulmones (Lungenkreislauf).",
      optionsDe: ["Lungenkreislauf", "Herz", "Lunge", "Muskelzellen", "Ein-/Ausatmung"]
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
      posDe: "Gefäß oben links: pumpt sauerstoffarmes Blut VOM rechten Herzen ZUR Lunge",
      correctDe: "Lungenarterie",
      tipEs: "Sale DEL corazón derecho hacia el pulmón → Lungenarterie.",
      optionsDe: ["Lungenarterie", "Lungenvene", "Körperarterie", "Körpervene", "rechte Herzhälfte", "linke Herzhälfte"]
    },
    {
      id: "lbl_lungenvene",
      posDe: "Gefäß oben rechts: bringt Blut mit viel Sauerstoff VON der Lunge in die linke Herzhälfte",
      correctDe: "Lungenvene",
      tipEs: "Viene DESDE el pulmón HACIA el corazón izquierdo → Lungenvene.",
      optionsDe: ["Lungenvene", "Lungenarterie", "Körperarterie", "Körpervene", "rechte Herzhälfte", "linke Herzhälfte"]
    },
    {
      id: "lbl_rechte_herz",
      posDe: "Herzhälfte links im Bild (blau): pumpt das sauerstoffarme Blut in den Lungenkreislauf",
      correctDe: "rechte Herzhälfte",
      tipEs: "El lado azul (a la izquierda del papel) es la mitad DERECHA del corazón (rechte Herzhälfte).",
      optionsDe: ["rechte Herzhälfte", "linke Herzhälfte", "Lungenarterie", "Körpervene", "Lungenvene", "Körperarterie"]
    },
    {
      id: "lbl_linke_herz",
      posDe: "Herzhälfte rechts im Bild mit Stern (*) (rot): pumpt sauerstoffreiches Blut in den Körperkreislauf",
      correctDe: "linke Herzhälfte",
      tipEs: "El lado con el asterisco (*) en tu guía es la mitad IZQUIERDA (linke Herzhälfte / linke Herzkammer).",
      optionsDe: ["linke Herzhälfte", "rechte Herzhälfte", "Körperarterie", "Lungenvene", "Körpervene", "Lungenarterie"]
    },
    {
      id: "lbl_koerperarterie",
      posDe: "Gefäß unten rechts: transportiert sauerstoffreiches Blut VOM linken Herzen ZU den Muskelzellen",
      correctDe: "Körperarterie",
      tipEs: "Sale DEL corazón izquierdo hacia las células musculares → Körperarterie.",
      optionsDe: ["Körperarterie", "Körpervene", "Lungenarterie", "Lungenvene", "linke Herzhälfte", "rechte Herzhälfte"]
    },
    {
      id: "lbl_koerpervene",
      posDe: "Gefäß unten links: bringt sauerstoffarmes Blut VON den Muskelzellen zurück ZUM rechten Herzen",
      correctDe: "Körpervene",
      tipEs: "Regresa DESDE las células musculares HACIA el corazón derecho → Körpervene.",
      optionsDe: ["Körpervene", "Körperarterie", "Lungenvene", "Lungenarterie", "rechte Herzhälfte", "linke Herzhälfte"]
    }
  ],

  gasaustauschSortingTask: [
    {
      id: "gs_1",
      sentenceDe: "Das Blut nimmt Sauerstoff auf.",
      sentenceEs: "La sangre toma oxígeno.",
      correctLocation: "Lunge (Nr. 2 — Lungenbläschen)",
      options: ["Lunge (Nr. 2 — Lungenbläschen)", "Muskelzellen / Körperzellen (Nr. 5)"],
      explanationDe: "In den Lungenbläschen der Lunge nimmt das Blut Sauerstoff auf."
    },
    {
      id: "gs_2",
      sentenceDe: "Das Blut gibt Kohlenstoffdioxid ab.",
      sentenceEs: "La sangre entrega dióxido de carbono.",
      correctLocation: "Lunge (Nr. 2 — Lungenbläschen)",
      options: ["Lunge (Nr. 2 — Lungenbläschen)", "Muskelzellen / Körperzellen (Nr. 5)"],
      explanationDe: "In den Lungenbläschen der Lunge gibt das Blut Kohlenstoffdioxid ab."
    },
    {
      id: "gs_3",
      sentenceDe: "Die Zelle nimmt Sauerstoff auf.",
      sentenceEs: "La célula toma oxígeno.",
      correctLocation: "Muskelzellen / Körperzellen (Nr. 5)",
      options: ["Muskelzellen / Körperzellen (Nr. 5)", "Lunge (Nr. 2 — Lungenbläschen)"],
      explanationDe: "Unten in den Muskelzellen nimmt die Zelle den Sauerstoff für die Zellatmung auf."
    },
    {
      id: "gs_4",
      sentenceDe: "Die Zelle gibt Kohlenstoffdioxid ab.",
      sentenceEs: "La célula entrega dióxido de carbono.",
      correctLocation: "Muskelzellen / Körperzellen (Nr. 5)",
      options: ["Muskelzellen / Körperzellen (Nr. 5)", "Lunge (Nr. 2 — Lungenbläschen)"],
      explanationDe: "Bei der Zellatmung in den Muskelzellen gibt die Zelle das Kohlenstoffdioxid ab."
    }
  ],

  // Neues Frageformat C in Modul 2: Richtig oder Falsch (Wahr/Falsch-Karten zu Seite 1–6)
  blutKreislaufTrueFalse: [
    {
      id: "tf_bk_1",
      statementDe: "Das Blut bildet sich im Knochenmark der langen Knochen.",
      statementEs: "La sangre se forma en la médula ósea de los huesos largos.",
      isTrue: true,
      explanationDe: "Richtig! Auf Seite 1 steht: „Das Blut bildet sich im Knochenmark der langen Knochen.“"
    },
    {
      id: "tf_bk_2",
      statementDe: "Kinder haben 5 Liter Blut und Erwachsene haben 3 oder 4 Liter Blut.",
      statementEs: "Los niños tienen 5 litros de sangre y los adultos tienen 3 o 4 litros.",
      isTrue: false,
      explanationDe: "Falsch! Es ist genau umgekehrt (Seite 3): Kinder haben 3 oder 4 Liter Blut. Erwachsene haben 5 Liter!"
    },
    {
      id: "tf_bk_3",
      statementDe: "Die weißen Blutkörperchen kämpfen gegen Viren und Bakterien.",
      statementEs: "Los glóbulos blancos luchan contra los virus y las bacterias.",
      isTrue: true,
      explanationDe: "Richtig! Das ist die Hauptaufgabe der weißen Blutkörperchen (Seite 1)."
    },
    {
      id: "tf_bk_4",
      statementDe: "Arterien transportieren das Blut VON den Organen ZUM Herzen zurück.",
      statementEs: "Las arterias transportan la sangre DESDE los órganos HACIA el corazón.",
      isTrue: false,
      explanationDe: "Falsch! Arterien transportieren Blut VOM Herzen ZU den Körperzellen (♡ ──► 🧍). Die Venen transportieren es VON den Organen ZUM Herzen!"
    },
    {
      id: "tf_bk_5",
      statementDe: "Kapillaren sind mikroskopisch klein, verbinden Arterien und Venen, und hier findet der Gasaustausch statt.",
      statementEs: "Los capilares son microscópicos, conectan arterias y venas, y aquí ocurre el intercambio gaseoso.",
      isTrue: true,
      explanationDe: "Richtig! Genau so steht es auf Seite 3 unter „Kapillaren“."
    },
    {
      id: "tf_bk_6",
      statementDe: "Die rechte Herzhälfte pumpt das sauerstoffarme Blut über die Lungenarterie zu den Lungenbläschen der Lungen.",
      statementEs: "La mitad derecha del corazón bombea la sangre pobre en oxígeno por la arteria pulmonar hacia los alvéolos.",
      isTrue: true,
      explanationDe: "Richtig! Das ist Schritt 2a des Lungenkreislaufs auf Seite 3."
    },
    {
      id: "tf_bk_7",
      statementDe: "Die Blutplättchen transportieren Sauerstoff und Kohlenstoffdioxid.",
      statementEs: "Las plaquetas transportan oxígeno y dióxido de carbono.",
      isTrue: false,
      explanationDe: "Falsch! Die ROTEN Blutkörperchen transportieren Sauerstoff und Kohlenstoffdioxid. Die Blutplättchen reparieren zerstörte Blutgefäße (es gerinnt)."
    },
    {
      id: "tf_bk_8",
      statementDe: "Das Blut mit viel Sauerstoff fließt über die Lungenvene in die linke Herzhälfte.",
      statementEs: "La sangre con mucho oxígeno fluye por la vena pulmonar hacia la mitad izquierda del corazón.",
      isTrue: true,
      explanationDe: "Richtig! Das ist Schritt 2c auf Seite 3."
    }
  ],

  // =========================================================================
  // 5. MODUL 3: TABAKKONSUM & PASSIVRAUCHEN (VERSCHIEDENE FRAGEFORMATE · S. 7–11)
  // =========================================================================
  // Format A: Zuordnungs-Matrix (Nikotin vs. Teer vs. Kohlenstoffmonoxid, Seite 7 & 8)
  schadstoffMatchingItems: [
    {
      id: "sm_match_1",
      clueDe: "Befindet sich in einigen Insektiziden (tötet Insekten) [Foto: Traktor auf dem Feld]",
      clueEs: "Se encuentra en algunos insecticidas (mata insectos) [Foto: tractor]",
      correctSubstance: "Nikotin"
    },
    {
      id: "sm_match_2",
      clueDe: "Entsteht aus der Verbrennung von Kohle, Gas oder Benzin [Foto: Auto-Auspuff]",
      clueEs: "Se produce por la combustión de carbón, gas o bencina [Foto: tubo de escape]",
      correctSubstance: "Kohlenstoffmonoxid"
    },
    {
      id: "sm_match_3",
      clueDe: "Wird als Bindemittel im Straßenbau benutzt und wird klebrig, wenn es heiß ist (im Sommer) [Foto: Straße]",
      clueEs: "Se usa como aglutinante en la construcción de calles y se pone pegajoso en verano [Foto: asfalto]",
      correctSubstance: "Teer"
    },
    {
      id: "sm_match_4",
      clueDe: "Bleibt an den Flimmerhärchen der Atemwege und in den Lungenbläschen kleben (es kommt nicht genug Sauerstoff ins Blut)",
      clueEs: "Se queda pegado en los pelillos de las vías respiratorias y en los alvéolos pulmonares",
      correctSubstance: "Teer"
    },
    {
      id: "sm_match_5",
      clueDe: "Gelangt durch die Lungenbläschen ins Blut und ist SCHNELLER als Sauerstoff [Schild: NO ADELANTAR]",
      clueEs: "Entra por los alvéolos a la sangre y es MÁS RÁPIDO que el oxígeno [Señal: NO ADELANTAR]",
      correctSubstance: "Kohlenstoffmonoxid"
    },
    {
      id: "sm_match_6",
      clueDe: "Verengt zuerst die Blutgefäße, macht sie danach hart und steif, sodass ein Zeh, Fuß oder Bein absterben kann (Raucherbein)",
      clueEs: "Primero estrecha los vasos sanguíneos, luego los pone duros y rígidos pudiendo causar «pierna de fumador»",
      correctSubstance: "Nikotin"
    },
    {
      id: "sm_match_7",
      clueDe: "Ist ein Gift (veneno): Das Herz klopft schneller, es zerstört Nervenzellen im Gehirn, macht süchtig und macht die Nerven krank",
      clueEs: "Es un veneno: el corazón late más rápido, destruye células nerviosas en el cerebro y produce adicción",
      correctSubstance: "Nikotin"
    }
  ],

  // Format B: Multi-Select Checkboxen — Die 8 gesundheitlichen Folgen von Seite 8 (+ 4 falsche Distraktoren)
  folgenCheckboxes: [
    { id: "fc_1", textDe: "Husten", textEs: "Tos", isRealConsequence: true },
    { id: "fc_2", textDe: "Lungenkrankheiten", textEs: "Enfermedades pulmonares", isRealConsequence: true },
    { id: "fc_3", textDe: "Krebs (cáncer)", textEs: "Cáncer", isRealConsequence: true },
    { id: "fc_4", textDe: "Finger und Zähne werden gelb", textEs: "Dedos y dientes se ponen amarillos", isRealConsequence: true },
    { id: "fc_5", textDe: "Konzentrationsprobleme (wegen weniger O₂)", textEs: "Problemas de concentración (por menos O₂)", isRealConsequence: true },
    { id: "fc_6", textDe: "Man wird schneller müde", textEs: "Uno se cansa más rápido", isRealConsequence: true },
    { id: "fc_7", textDe: "Man riecht schlecht", textEs: "Uno huele mal", isRealConsequence: true },
    { id: "fc_8", textDe: "Die Organe bekommen zu wenig Blut und können absterben", textEs: "Los órganos reciben muy poca sangre y pueden morir", isRealConsequence: true },
    { id: "fc_wrong_1", textDe: "Die Blutgefäße werden breiter und elastischer", textEs: "Los vasos sanguíneos se vuelven más anchos y elásticos", isRealConsequence: false },
    { id: "fc_wrong_2", textDe: "Die Flimmerhärchen können besser arbeiten", textEs: "Los cilios pueden trabajar mejor", isRealConsequence: false },
    { id: "fc_wrong_3", textDe: "Es kommt mehr Sauerstoff in die Blutgefäße", textEs: "Entra más oxígeno a los vasos sanguíneos", isRealConsequence: false },
    { id: "fc_wrong_4", textDe: "Die Abwehrkräfte (defensas) werden stärker", textEs: "Las defensas se vuelven más fuertes", isRealConsequence: false }
  ],

  // Format C: Seite 10 (Gasaustausch eines Rauchers) & Seite 11 (5-Fehler-Detektiv)
  smokerModelSteps: [
    {
      id: "sm_teer",
      stepNum: 1,
      questionDe: "1. Wo bleibt Teer im Atmungssystem kleben? Male es in braun. (/1)",
      tipEs: "Pregunta 1 de la página 10: ¿Dónde se queda pegado el alquitrán y de qué color se pinta?",
      correctColor: "braun",
      options: [
        {
          textDe: "In den Lungenbläschen (und an den Flimmerhärchen) — in BRAUN anmalen!",
          textEs: "En los alvéolos pulmonares (y pelillos) — pintar de CAFÉ (braun).",
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
      questionDe: "2. Wie wirkt Nikotin auf die Blutgefäße? Male es in lila. (/1)",
      tipEs: "Pregunta 2 de la página 10: ¿Cómo actúa la nicotina sobre los vasos sanguíneos y de qué color se pinta?",
      correctColor: "lila",
      options: [
        {
          textDe: "Die Blutgefäße verengen sich (werden enger, hart und steif) — in LILA anmalen!",
          textEs: "Los vasos sanguíneos se estrechan (se vuelven duros y rígidos) — pintar de LILA.",
          correct: true
        },
        {
          textDe: "Die Blutgefäße werden breiter (anchos) — in BLAU anmalen!",
          textEs: "Los vasos sanguíneos se vuelven más anchos — pintar de azul.",
          correct: false
        },
        {
          textDe: "Die Blutgefäße verschwinden komplett — in WEISS anmalen!",
          textEs: "Los vasos desaparecen — pintar de blanco.",
          correct: false
        }
      ],
      effectDe: "Nikotin verengt die Blutgefäße (in lila eingezeichnet). Dadurch fließt das Blut langsamer und Körperteile können absterben (Raucherbein)!"
    },
    {
      id: "sm_co",
      stepNum: 3,
      questionDe: "3. Welches Gas kommt außer Sauerstoff und Kohlendioxid auch ins Blut rein? Male den Weg dieses Gases von den Lungenbläschen bis zur Zelle in grau. (/1)",
      tipEs: "Pregunta 3 de la página 10: ¿Qué gas entra además a la sangre y se pinta en GRIS desde los alvéolos hasta la célula?",
      correctColor: "grau",
      options: [
        {
          textDe: "Kohlenstoffmonoxid (Kohlenmonoxid) — es ist schneller als Sauerstoff (Weg in GRAU)!",
          textEs: "Monóxido de carbono — es más rápido que el oxígeno (camino en GRIS).",
          correct: true
        },
        {
          textDe: "Blutplasma — es ist flüssig (Weg in GELB)!",
          textEs: "Plasma sanguíneo — camino en amarillo.",
          correct: false
        },
        {
          textDe: "Wasser — es kommt beim Atmen rein (Weg in BLAU)!",
          textEs: "Agua — camino en azul.",
          correct: false
        }
      ],
      effectDe: "Kohlenstoffmonoxid gelangt durch die Lungenbläschen ins Blut. Da es schneller als Sauerstoff ist, wird weniger Sauerstoff zu den Zellen transportiert!"
    }
  ],

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
      tipEs: "En tu guía marcaste «Wasser» y escribiste: «Wenn du atmest, dann kommt Luft in die Lunge.» ¡Muy bien!"
    },
    {
      num: 2,
      originalDe: "2. Die Lungenbläschen geben den Sauerstoff an die Zellen ab.",
      originalEs: "2. Los alvéolos pulmonares entregan el oxígeno directamente a las células.",
      hasError: true,
      wrongWordDe: "Lungenbläschen / an die Zellen",
      correctedDe: "Die Blutgefäße (oder: Das Blut) geben den Sauerstoff an die Zellen ab. (Bzw.: Die Lungenbläschen geben den Sauerstoff an das Blut ab.)",
      optionsDe: [
        "Fehler! Korrektur: Die Blutgefäße (das Blut) geben den Sauerstoff an die Zellen ab (oder: Die Lungenbläschen geben den Sauerstoff ans Blut ab).",
        "Kein Fehler! Die Lungenbläschen wandern selbst zu den Fußzellen.",
        "Fehler! Korrektur: Die Lungenbläschen geben Kohlenmonoxid an die Haare ab.",
        "Fehler! Korrektur: Die Zähne geben den Sauerstoff an die Zellen ab."
      ],
      correctIdx: 0,
      tipEs: "En tu guía marcaste «Lungenbläschen» y escribiste: «Die Blutgefäße geben Sauerstoff an die Zellen ab.»"
    },
    {
      num: 3,
      originalDe: "3. Das Blut transportiert den Sauerstoff zu den Zellen.",
      originalEs: "3. La sangre transporta el oxígeno hacia las células.",
      hasError: false,
      wrongWordDe: "Kein Fehler (Richtig!)",
      correctedDe: "3. Richtig! Das Blut transportiert den Sauerstoff zu den Zellen.",
      optionsDe: [
        "Kein Fehler! Dieser Satz ist richtig („3. Richtig“ — es gibt nur 5 Fehler in den 6 Sätzen!).",
        "Fehler: „Sauerstoff“ → Das Blut transportiert nur Teer zu den Zellen.",
        "Fehler: „Das Blut“ → Die Knochen transportieren den Sauerstoff zu den Zellen.",
        "Fehler: „Zellen“ → Das Blut transportiert den Sauerstoff aus dem Körper hinaus."
      ],
      correctIdx: 0,
      tipEs: "Hay 6 oraciones pero el texto dice «Er hat 5 Fehler gemacht». La oración 3 es la única CORRECTA («3. Richtig»)."
    },
    {
      num: 4,
      originalDe: "4. Der Teer bleibt an den Flimmerhärchen kleben. So können sie besser arbeiten.",
      originalEs: "4. El alquitrán se queda pegado en los pelillos. Así pueden trabajar mejor.",
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
      tipEs: "💡 Tip de alemán: Recuerda escribir «Flimmerhärchen» (con mm y ä) y «schlechter arbeiten» o «nicht richtig arbeiten»."
    },
    {
      num: 5,
      originalDe: "5. Das Nikotin macht die Blutgefäße breiter (anchos). Das Blut bewegt sich langsamer und die Zellen erhalten weniger Nährstoffe und weniger Sauerstoff.",
      originalEs: "5. La nicotina hace los vasos sanguíneos más anchos. La sangre se mueve más lento...",
      hasError: true,
      wrongWordDe: "breiter (anchos)",
      correctedDe: "Das Nikotin macht die Blutgefäße enger / dünner (verengt die Blutgefäße). Das Blut bewegt sich langsamer...",
      optionsDe: [
        "Fehler: „breiter“ → Korrektur: Das Nikotin macht die Blutgefäße enger / dünner (verengt die Blutgefäße).",
        "Kein Fehler! Nikotin macht die Blutgefäße riesig breit.",
        "Fehler: „Nikotin“ → Der Sauerstoff macht die Blutgefäße breiter.",
        "Fehler: „langsamer“ → Das Blut bewegt sich gar nicht durch das Herz."
      ],
      correctIdx: 0,
      tipEs: "En tu hoja marcaste «breiter» y escribiste: «Das Nikotin macht die Blutgefäße dünner (oder: enger)»."
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
        "Fehler: „Sauerstoff“ → In die Blutgefäße kommt mehr Kohlenmonoxid."
      ],
      correctIdx: 0,
      tipEs: "En tu hoja marcaste «mehr Sauerstoff» y escribiste: «In die Blutgefäße kommt weniger Sauerstoff»."
    }
  ],

  // =========================================================================
  // 6. MODUL 4: GROSSE END-PROBE (NOTE 1,0–7,0 · 100% TREU ZUM ARBEITSBLATT)
  // =========================================================================
  arenaQuestions: [
    // =======================================================================
    // WELT 1: DAS BLUT & COMIC-FIGUREN (15 FRAGEN, SEITE 1–2)
    // =======================================================================
    {
      id: "q_blut_1",
      world: "blut",
      topicDe: "🩸 Das Blut — Grundbegriff (S. 1)",
      questionDe: "Wie wird das Blut im ersten Satz auf Seite 1 beschrieben?",
      questionEs: "¿Cómo se describe la sangre en la primera frase de la página 1?",
      tipEs: "💡 Tipp auf Spanisch: «flüssig» = líquido, «das Gewebe» = el tejido.",
      imageSrc: "img/blood_components_realistic.jpg",
      imageCaptionDe: "Das Blut in unseren Blutgefäßen",
      options: [
        { textDe: "Als ein „flüssiges Gewebe“", textEs: "Como un «tejido líquido»", correct: true },
        { textDe: "Als ein „fester Knochen“", textEs: "Como un «hueso sólido»", correct: false },
        { textDe: "Als ein „gasförmiger Muskel“", textEs: "Como un «músculo gaseoso»", correct: false },
        { textDe: "Als „reines Wasser ohne Zellen“", textEs: "Como «agua pura sin células»", correct: false }
      ],
      explanationDe: "Auf Seite 1 steht: „Das Blut ist ein flüssiges Gewebe. Es besteht aus einem flüssigen Teil, dem Blutplasma und einem festen Teil.“",
      explanationEs: "La sangre es un «flüssiges Gewebe» (tejido líquido)."
    },
    {
      id: "q_blut_2",
      world: "blut",
      topicDe: "🩸 Hauptteile des Blutes (S. 1)",
      questionDe: "Aus welchen zwei Hauptteilen besteht das Blut laut Seite 1?",
      questionEs: "¿De qué dos partes principales consta la sangre según la página 1?",
      tipEs: "💡 Tipp auf Spanisch: Mira las dos ramas principales del esquema de la Actividad 1.",
      imageSrc: "img/blood_components_realistic.jpg",
      imageCaptionDe: "Flüssiger Teil und fester Teil des Blutes",
      options: [
        { textDe: "Aus einem flüssigen Teil (dem Blutplasma) und einem festen Teil", textEs: "De una parte líquida (el plasma sanguíneo) y una parte sólida", correct: true },
        { textDe: "Aus Luft und Knochenmark", textEs: "De aire y médula ósea", correct: false },
        { textDe: "Aus Arterien und Venen", textEs: "De arterias y venas", correct: false },
        { textDe: "Aus Teer und Nikotin", textEs: "De alquitrán y nicotina", correct: false }
      ],
      explanationDe: "Seite 1: „Es besteht aus einem flüssigen Teil, dem Blutplasma und einem festen Teil.“",
      explanationEs: "Se divide en «Blutplasma» (parte líquida) y «fester Teil» (parte sólida)."
    },
    {
      id: "q_blut_3",
      world: "blut",
      topicDe: "🩸 Fester Teil des Blutes (S. 1)",
      questionDe: "Welche drei Bestandteile gehören zum FESTEN Teil des Blutes?",
      questionEs: "¿Qué tres componentes pertenecen a la parte SÓLIDA (fester Teil) de la sangre?",
      tipEs: "💡 Tipp auf Spanisch: Son los dos tipos de glóbulos (rojos y blancos) más las plaquetas.",
      imageSrc: "img/heft_blutgefaess_cells.jpg",
      imageCaptionDe: "Originalbild von Seite 1: Blutgefäß mit Blutzellen",
      options: [
        { textDe: "Die roten und weißen Blutkörperchen (Blutzellen), und die Blutplättchen", textEs: "Los glóbulos rojos y blancos, y las plaquetas", correct: true },
        { textDe: "Das Blutplasma, das Wasser und der Sauerstoff", textEs: "El plasma sanguíneo, el agua y el oxígeno", correct: false },
        { textDe: "Die Arterien, die Venen und die Kapillaren", textEs: "Las arterias, las venas y los capilares", correct: false },
        { textDe: "Das Herz, die Lunge und die Muskelzellen", textEs: "El corazón, el pulmón y las células musculares", correct: false }
      ],
      explanationDe: "Seite 1: „Zum festen Teil gehören die roten und weißen Blutkörperchen, und die Blutplättchen.“",
      explanationEs: "A la parte sólida pertenecen los glóbulos rojos, los glóbulos blancos y las plaquetas."
    },
    {
      id: "q_blut_4",
      world: "blut",
      topicDe: "🦴 Wo bildet sich das Blut? (S. 1)",
      questionDe: "Wo im Körper bildet sich das Blut?",
      questionEs: "¿En qué parte del cuerpo se forma la sangre?",
      tipEs: "💡 Tipp auf Spanisch: «Knochenmark der langen Knochen» = médula ósea de los huesos largos.",
      imageSrc: "img/heft_knochenmark.jpg",
      imageCaptionDe: "Originalbild von Seite 1: Knochenmark im langen Knochen",
      options: [
        { textDe: "Im Knochenmark der langen Knochen", textEs: "En la médula ósea de los huesos largos", correct: true },
        { textDe: "In den Lungenbläschen der Lunge", textEs: "En los alvéolos de los pulmones", correct: false },
        { textDe: "In der linken Herzkammer", textEs: "En el ventrículo izquierdo del corazón", correct: false },
        { textDe: "In den Flimmerhärchen der Atemwege", textEs: "En los pelillos de las vías respiratorias", correct: false }
      ],
      explanationDe: "Seite 1: „Das Blut bildet sich im Knochenmark der langen Knochen.“",
      explanationEs: "La sangre se forma en la médula ósea de los huesos largos."
    },
    {
      id: "q_blut_5",
      world: "blut",
      topicDe: "🧪 Funktion vom Blutplasma (S. 1)",
      questionDe: "Was ist die wichtigste Funktion vom Blutplasma und wer lebt in ihm?",
      questionEs: "¿Cuál es la función más importante del plasma sanguíneo y quiénes viven en él?",
      tipEs: "💡 Tipp auf Spanisch: Transporta distintas sustancias (Stoffe) y en él viven las células sanguíneas.",
      imageSrc: "img/blood_components_realistic.jpg",
      imageCaptionDe: "Gelbes Blutplasma mit Blutzellen",
      options: [
        { textDe: "Der Transport von verschiedenen Stoffen; in ihm leben die Blutkörperchen und die Blutplättchen", textEs: "El transporte de diversas sustancias; en él viven los glóbulos y las plaquetas", correct: true },
        { textDe: "Der Kampf gegen Viren und Bakterien", textEs: "La lucha contra virus y bacterias", correct: false },
        { textDe: "Das Pumpen des Blutes durch den Körper wie ein Muskel", textEs: "Bombear la sangre por el cuerpo como un músculo", correct: false },
        { textDe: "Das Verkleben der Flimmerhärchen", textEs: "Pegar los cilios respiratorios", correct: false }
      ],
      explanationDe: "Seite 1: „Die wichtigste Funktion vom Blutplasma ist der Transport von verschiedenen Stoffen. In ihm leben die Blutkörperchen und die Blutplättchen.“",
      explanationEs: "El plasma transporta distintas sustancias y en él viven los glóbulos y las plaquetas."
    },
    {
      id: "q_blut_6",
      world: "blut",
      topicDe: "🔴 Rote Blutkörperchen (S. 1)",
      questionDe: "Was ist die Funktion der roten Blutkörperchen (glóbulos rojos)?",
      questionEs: "¿Cuál es la función de los glóbulos rojos (rote Blutkörperchen)?",
      tipEs: "💡 Tipp auf Spanisch: Transportan los dos gases de la respiración.",
      imageSrc: "img/heft_blutgefaess_cells.jpg",
      imageCaptionDe: "Rote Blutkörperchen im Blutgefäß",
      options: [
        { textDe: "Der Transport von Sauerstoff und Kohlenstoffdioxid", textEs: "El transporte de oxígeno y dióxido de carbono", correct: true },
        { textDe: "Sie kämpfen gegen Viren und Bakterien", textEs: "Luchan contra virus y bacterias", correct: false },
        { textDe: "Sie reparieren zerstörte Blutgefäße, damit das Blut gerinnt", textEs: "Reparan vasos sanguíneos dañados para que coagule", correct: false },
        { textDe: "Sie bilden das Knochenmark", textEs: "Forman la médula ósea", correct: false }
      ],
      explanationDe: "Seite 1: „Die Funktion der roten Blutkörperchen (glóbulos rojos) ist der Transport von Sauerstoff und Kohlenstoffdioxid.“",
      explanationEs: "Los glóbulos rojos transportan Sauerstoff (oxígeno) y Kohlenstoffdioxid (dióxido de carbono)."
    },
    {
      id: "q_blut_7",
      world: "blut",
      topicDe: "🛡️ Weiße Blutkörperchen (S. 1)",
      questionDe: "Welche Aufgabe haben die weißen Blutkörperchen (glóbulos blancos)?",
      questionEs: "¿Qué función tienen los glóbulos blancos (weiße Blutkörperchen)?",
      tipEs: "💡 Tipp auf Spanisch: «kämpfen gegen...» = luchar contra...",
      imageSrc: "img/heft_blutgefaess_cells.jpg",
      imageCaptionDe: "Weiße Blutkörperchen im Blut",
      options: [
        { textDe: "Sie kämpfen gegen Viren und Bakterien", textEs: "Luchan contra los virus y las bacterias", correct: true },
        { textDe: "Sie transportieren Sauerstoff und Kohlenstoffdioxid", textEs: "Transportan oxígeno y dióxido de carbono", correct: false },
        { textDe: "Sie reparieren zerstörte Blutgefäße", textEs: "Reparan vasos sanguíneos destruidos", correct: false },
        { textDe: "Sie verengen die Blutgefäße beim Rauchen", textEs: "Estrechan los vasos sanguíneos al fumar", correct: false }
      ],
      explanationDe: "Seite 1: „Die weißen Blutkörperchen (glóbulos blancos) kämpfen gegen Viren und Bakterien.“",
      explanationEs: "Los glóbulos blancos luchan contra los virus y las bacterias."
    },
    {
      id: "q_blut_8",
      world: "blut",
      topicDe: "🩹 Blutplättchen & Gerinnung (S. 1)",
      questionDe: "Was machen die Blutplättchen (plaquetas)?",
      questionEs: "¿Qué hacen las plaquetas (Blutplättchen)?",
      tipEs: "💡 Tipp auf Spanisch: «reparieren zerstörte Blutgefäße» y «es gerinnt (se coagula)».",
      imageSrc: "img/blood_components_realistic.jpg",
      imageCaptionDe: "Blutplättchen reparieren die Gefäßwand",
      options: [
        { textDe: "Sie reparieren zerstörte Blutgefäße und verhindern, dass das Blut weiter fließt (es gerinnt)", textEs: "Reparan los vasos sanguíneos dañados e impiden que la sangre siga saliendo (se coagula)", correct: true },
        { textDe: "Sie kämpfen mit Schwertern gegen Viren und Bakterien", textEs: "Luchan contra virus y bacterias", correct: false },
        { textDe: "Sie transportieren Sauerstoff von der Lunge zu den Zellen", textEs: "Transportan oxígeno del pulmón a las células", correct: false },
        { textDe: "Sie machen das Blut gelb und flüssig", textEs: "Hacen que la sangre sea amarilla y líquida", correct: false }
      ],
      explanationDe: "Seite 1: „Die Blutplättchen (plaquetas) reparieren zerstörte Blutgefäße und verhindern, dass das Blut nicht weiter fließt. Also, es gerinnt (se coagula).“",
      explanationEs: "Las plaquetas reparan los vasos sanguíneos rotos logrando que la sangre se coagule (es gerinnt)."
    },
    {
      id: "q_blut_9",
      world: "blut",
      topicDe: "🎨 Comic-Figuren auf Seite 2 — Blutplättchen („P“)",
      questionDe: "Schau auf das Original-Comicbild von Seite 2: Welche Figuren reparieren oben die Backsteinmauer des Blutgefäßes und mit welcher Farbe werden sie angemalt?",
      questionEs: "Mira el dibujo original del cómic de la página 2: ¿Qué figuras reparan arriba el muro de ladrillos del vaso sanguíneo y de qué color se pintan?",
      tipEs: "💡 Tipp auf Spanisch: Tienen la letra «P» en la espalda (Aufgabe 2c).",
      imageSrc: "img/heft_comic_figuren.jpg",
      imageCaptionDe: "Originalbild Seite 2: Die Bestandteile des Blutes als Comic-Figuren",
      options: [
        { textDe: "Die Blutplättchen („P“) — man malt sie BRAUN an", textEs: "Las plaquetas («P») — se pintan de CAFÉ (braun)", correct: true },
        { textDe: "Die roten Blutkörperchen („R“) — man malt sie ROT an", textEs: "Los glóbulos rojos («R») — se pintan de rojo", correct: false },
        { textDe: "Die weißen Blutkörperchen („W / B“) — man malt sie BLAU an", textEs: "Los glóbulos blancos («W / B») — se pintan de azul", correct: false },
        { textDe: "Das Blutplasma — man malt es GELB an", textEs: "El plasma sanguíneo — se pinta de amarillo", correct: false }
      ],
      explanationDe: "Aufgabe 2c auf Seite 2: „Male die Blutplättchen braun an.“ Die Bauarbeiter mit dem „P“ reparieren das zerstörte Blutgefäß!",
      explanationEs: "Los albañiles con la «P» son los Blutplättchen y se pintan de color café (braun)."
    },
    {
      id: "q_blut_10",
      world: "blut",
      topicDe: "🎨 Comic-Figuren auf Seite 2 — Alle 4 Farben",
      questionDe: "Welche Farb-Zuordnung für Aufgabe 2 (a bis d) auf Seite 2 ist komplett richtig?",
      questionEs: "¿Qué combinación de colores para la Actividad 2 (a hasta d) de la página 2 es completamente correcta?",
      tipEs: "💡 Tipp auf Spanisch: a) rote Blutkörperchen · b) „B“ der weißen Blutkörperchen · c) Blutplättchen · d) Blutplasma.",
      imageSrc: "img/heft_comic_figuren.jpg",
      imageCaptionDe: "Aufgabe 2a–d auf Seite 2",
      options: [
        { textDe: "Rote Blutkörperchen = rot · „B“ der weißen Blutkörperchen = blau · Blutplättchen = braun · Blutplasma = gelb", textEs: "Glóbulos rojos = rojo · «B» de glóbulos blancos = azul · Plaquetas = café · Plasma = amarillo", correct: true },
        { textDe: "Rote Blutkörperchen = gelb · Weiße Blutkörperchen = braun · Blutplättchen = blau · Blutplasma = rot", textEs: "Glóbulos rojos = amarillo · Blancos = café...", correct: false },
        { textDe: "Rote Blutkörperchen = rot · Weiße Blutkörperchen = grün · Blutplättchen = lila · Blutplasma = grau", textEs: "Glóbulos rojos = rojo · Blancos = verde...", correct: false },
        { textDe: "Alle vier Bestandteile werden rot angemalt", textEs: "Los cuatro componentes se pintan de rojo", correct: false }
      ],
      explanationDe: "Seite 2: a) Male die roten Blutkörperchen rot an. b) Male das „B“ der weißen Blutkörperchen blau an. c) Male die Blutplättchen braun an. d) Das Blutplasma ist gelb!",
      explanationEs: "a) rot, b) blau, c) braun, d) gelb."
    },
    {
      id: "q_blut_11",
      world: "blut",
      topicDe: "🎨 Comic-Figuren auf Seite 2 — Warum Schwerter & Ringe?",
      questionDe: "Warum tragen die Figuren mit dem „R“ im Comic Ringe mit einer „2“ (O₂) und die Figuren mit dem „W“ Schwerter und Schilde?",
      questionEs: "¿Por qué las figuras con la «R» en el cómic llevan aros con un «2» (O₂) y las figuras con la «W» llevan espadas y escudos?",
      tipEs: "💡 Tipp auf Spanisch: Relaciónalo con la función de los glóbulos rojos y blancos de la página 1.",
      imageSrc: "img/heft_comic_figuren.jpg",
      imageCaptionDe: "Figuren R (O₂) und W (Schwert & Schild B)",
      options: [
        { textDe: "Weil die roten Blutkörperchen (R) Sauerstoff (O₂) transportieren und die weißen Blutkörperchen (W) gegen Viren und Bakterien kämpfen", textEs: "Porque los glóbulos rojos (R) transportan oxígeno (O₂) y los glóbulos blancos (W) luchan contra virus y bacterias", correct: true },
        { textDe: "Weil die roten Blutkörperchen gegen Viren kämpfen und die weißen Blutkörperchen Sauerstoff tragen", textEs: "Porque los rojos luchan contra virus y los blancos llevan oxígeno", correct: false },
        { textDe: "Weil beide das kaputte Blutgefäß zumauern", textEs: "Porque ambos reparan el muro del vaso sanguíneo", correct: false },
        { textDe: "Weil sie im Knochenmark schlafen", textEs: "Porque duermen en la médula ósea", correct: false }
      ],
      explanationDe: "Genau darum stellt der Comic sie so dar: „R“ transportiert Sauerstoff (O₂), „W“ kämpft gegen Krankheitserreger (Viren & Bakterien), und „P“ repariert die Mauer!",
      explanationEs: "El cómic representa visualmente la función exacta de cada célula sanguínea de la página 1."
    },
    {
      id: "q_blut_12",
      world: "blut",
      topicDe: "🩸 Was bedeutet „Also, es gerinnt“? (S. 1)",
      questionDe: "Auf Seite 1 steht bei den Blutplättchen: „Also, es gerinnt (se coagula).“ Wann passiert das?",
      questionEs: "En la página 1 dice sobre las plaquetas: «Also, es gerinnt (se coagula)». ¿Cuándo ocurre esto?",
      tipEs: "💡 Tipp auf Spanisch: Ocurre cuando un vaso sanguíneo se rompe y las plaquetas lo reparan.",
      imageSrc: "img/blood_components_realistic.jpg",
      imageCaptionDe: "Blutgerinnung durch Blutplättchen",
      options: [
        { textDe: "Wenn die Blutplättchen zerstörte Blutgefäße reparieren und verhindern, dass das Blut weiter fließt", textEs: "Cuando las plaquetas reparan vasos sanguíneos dañados e impiden que la sangre siga fluyendo", correct: true },
        { textDe: "Wenn die roten Blutkörperchen Sauerstoff in der Lunge aufnehmen", textEs: "Cuando los glóbulos rojos toman oxígeno en el pulmón", correct: false },
        { textDe: "Wenn das Blutplasma Nährstoffe zu den Zellen bringt", textEs: "Cuando el plasma lleva nutrientes a las células", correct: false },
        { textDe: "Wenn man Luft einatmet und ausatmet", textEs: "Cuando uno inhala y exhala aire", correct: false }
      ],
      explanationDe: "Die Blutplättchen reparieren zerstörte Blutgefäße und sorgen dafür, dass das Blut gerinnt.",
      explanationEs: "Las plaquetas reparan los vasos rotos haciendo que la sangre se coagule."
    },

    // =======================================================================
    // WELT 2: HERZ, BLUTGEFÄSSE & BLUTKREISLAUF (16 FRAGEN, SEITE 3–6)
    // =======================================================================
    {
      id: "q_kr_1",
      world: "kreislauf",
      topicDe: "🫀 Das Herz & Blutmenge (S. 3)",
      questionDe: "Welcher Muskel arbeitet das ganze Leben lang ohne eine Pause zu machen, und wie viel Liter Blut haben Kinder und Erwachsene?",
      questionEs: "¿Qué músculo trabaja toda la vida sin hacer pausa, y cuántos litros de sangre tienen los niños y los adultos?",
      tipEs: "💡 Tipp auf Spanisch: Lee las dos primeras líneas de la página 3 («Der Blutkreislauf»).",
      imageSrc: "img/heart_realistic.jpg",
      imageCaptionDe: "Das menschliche Herz — ein Muskel ohne Pause",
      options: [
        { textDe: "Das Herz! Kinder haben 3 oder 4 Liter Blut. Erwachsene haben 5 Liter.", textEs: "¡El corazón! Los niños tienen 3 o 4 litros de sangre. Los adultos tienen 5 litros.", correct: true },
        { textDe: "Die Lunge! Kinder haben 1 Liter Blut. Erwachsene haben 10 Liter.", textEs: "¡El pulmón! Niños 1 litro, adultos 10 litros.", correct: false },
        { textDe: "Das Herz! Kinder haben 5 Liter Blut. Erwachsene haben 3 oder 4 Liter.", textEs: "¡El corazón! Niños 5 litros, adultos 3 o 4 litros.", correct: false },
        { textDe: "Das Knochenmark! Alle Menschen haben genau 2 Liter Blut.", textEs: "¡La médula ósea! Todos tienen 2 litros.", correct: false }
      ],
      explanationDe: "Seite 3: „In deinem Körper arbeitet ein Muskel das ganze Leben lang, ohne eine Pause zu machen! Das ist das Herz. Es pumpt das Blut durch den Körper. Kinder haben 3 oder 4 Liter Blut. Erwachsene haben 5 Liter.“",
      explanationEs: "El corazón trabaja sin pausa; los niños tienen 3 o 4 litros de sangre y los adultos 5 litros."
    },
    {
      id: "q_kr_2",
      world: "kreislauf",
      topicDe: "🩸 Die 3 Arten von Blutgefäßen (S. 3)",
      questionDe: "Blutgefäße sind Röhren (tubos), die Blut zu allen Teilen des Körpers transportieren. Welche drei Arten von Blutgefäßen gibt es?",
      questionEs: "Los vasos sanguíneos son tubos que transportan sangre a todas partes del cuerpo. ¿Qué tres tipos de vasos sanguíneos existen?",
      tipEs: "💡 Tipp auf Spanisch: Mira la tabla superior derecha de la página 3.",
      imageSrc: "img/heft_gefaesse_tabelle.jpg",
      imageCaptionDe: "Original-Tabelle von Seite 3: Die drei Blutgefäße",
      options: [
        { textDe: "Arterien, Venen und Kapillaren", textEs: "Arterias, venas y capilares", correct: true },
        { textDe: "Lungenbläschen, Flimmerhärchen und Knochenmark", textEs: "Alvéolos, pelillos y médula ósea", correct: false },
        { textDe: "Vorhöfe, Herzkammern und Muskelzellen", textEs: "Aurículas, ventrículos y células musculares", correct: false },
        { textDe: "Blutplasma, Blutplättchen und Blutzellen", textEs: "Plasma, plaquetas y células sanguíneas", correct: false }
      ],
      explanationDe: "Seite 3: „Der menschliche Blutkreislauf besteht aus drei Arten von Blutgefäßen: Arterien, Venen und Kapillaren.“",
      explanationEs: "Los tres tipos de Blutgefäße son Arterien, Venen y Kapillaren."
    },
    {
      id: "q_kr_3",
      world: "kreislauf",
      topicDe: "➡️ Richtung der Arterien (S. 3 & 6)",
      questionDe: "Schau auf das erste Symbol [ ♡ ──► 🧍 ] in der Tabelle von Seite 3. Welche Blutgefäße sind gemeint und wohin transportieren sie das Blut?",
      questionEs: "Mira el primer símbolo [ ♡ ──► 🧍 ] en la tabla de la página 3. ¿A qué vasos sanguíneos se refiere y hacia dónde transportan la sangre?",
      tipEs: "💡 Tipp auf Spanisch: En la Klappkarte 1 dice: «Arterie: transportiert Bl... von H... zu K...».",
      imageSrc: "img/heft_gefaesse_tabelle.jpg",
      imageCaptionDe: "Tabelle Seite 3: Richtung des Blutes",
      options: [
        { textDe: "Die Arterien — sie transportieren Blut VOM Herzen ZU den Körperzellen", textEs: "Las arterias — transportan sangre DESDE el corazón HACIA las células del cuerpo", correct: true },
        { textDe: "Die Venen — sie transportieren Blut VON den Organen ZUM Herzen", textEs: "Las venas — desde los órganos hacia el corazón", correct: false },
        { textDe: "Die Kapillaren — sie transportieren Luft in die Nase", textEs: "Los capilares — transportan aire a la nariz", correct: false },
        { textDe: "Die Lungenbläschen — sie atmen Sauerstoff ein", textEs: "Los alvéolos — inhalan oxígeno", correct: false }
      ],
      explanationDe: "Seite 3: „Arterien transportieren Blut VOM Herzen ZU den Körperzellen.“ (Symbol: ♡ ──► 🧍).",
      explanationEs: "Las arterias llevan sangre DESDE el corazón HACIA las células del cuerpo."
    },
    {
      id: "q_kr_4",
      world: "kreislauf",
      topicDe: "⬅️ Richtung der Venen (S. 3 & 6)",
      questionDe: "Schau auf das zweite Symbol [ 🧍 ──► ♡ ] in der Tabelle von Seite 3. Welches Blutgefäß wird hier beschrieben?",
      questionEs: "Mira el segundo símbolo [ 🧍 ──► ♡ ] en la tabla de la página 3. ¿Qué vaso sanguíneo se describe aquí?",
      tipEs: "💡 Tipp auf Spanisch: En la Klappkarte 1 dice: «Vene: tr... Bl... von K... zu H...».",
      imageSrc: "img/heft_gefaesse_tabelle.jpg",
      imageCaptionDe: "Zweite Zeile der Tabelle auf Seite 3",
      options: [
        { textDe: "Die Vene — sie transportiert das Blut VON den Organen (Körperzellen) ZUM Herzen", textEs: "La vena — transporta la sangre DESDE los órganos (células) HACIA el corazón", correct: true },
        { textDe: "Die Arterie — sie transportiert das Blut VOM Herzen ZU den Körperzellen", textEs: "La arteria — del corazón a las células", correct: false },
        { textDe: "Das Knochenmark — es bildet Blut im Knochen", textEs: "La médula ósea — forma sangre", correct: false },
        { textDe: "Das Blutplasma — es ist gelb", textEs: "El plasma sanguíneo — es amarillo", correct: false }
      ],
      explanationDe: "Seite 3: „Venen transportieren das Blut VON den Organen ZUM Herzen.“ (Symbol: 🧍 ──► ♡).",
      explanationEs: "Las venas regresan la sangre DESDE los órganos/células HACIA el corazón."
    },
    {
      id: "q_kr_5",
      world: "kreislauf",
      topicDe: "🔬 Die Kapillaren (S. 3)",
      questionDe: "Wie sind die Kapillaren aufgebaut und was findet in ihnen statt?",
      questionEs: "¿Cómo son los capilares y qué ocurre dentro de ellos?",
      tipEs: "💡 Tipp auf Spanisch: Son el tercer punto de la página 3 y la tercera fila de la tabla (`Arterien ──► Venen`).",
      imageSrc: "img/alveoli_gas_exchange_realistic.jpg",
      imageCaptionDe: "Mikroskopisch kleine Kapillaren zwischen Arterie und Vene",
      options: [
        { textDe: "Sie sind mikroskopisch klein, verbinden die Arterien und Venen, und hier findet der Gasaustausch statt", textEs: "Son microscópicos, conectan las arterias y venas, y aquí ocurre el intercambio gaseoso", correct: true },
        { textDe: "Sie sind die größten Röhren direkt am Herzen ohne Gasaustausch", textEs: "Son los tubos más grandes junto al corazón sin intercambio gaseoso", correct: false },
        { textDe: "Sie pumpen als starker Muskel das Blut durch die Lunge", textEs: "Bombean como un músculo la sangre por el pulmón", correct: false },
        { textDe: "Sie bilden im Knochenmark die Blutplättchen", textEs: "Forman las plaquetas en la médula ósea", correct: false }
      ],
      explanationDe: "Seite 3: „Kapillaren sind mikroskopisch klein. Sie verbinden die Arterien und Venen. Hier findet der Gasaustausch statt.“",
      explanationEs: "Los capilares son microscópicos, unen arterias y venas, y en ellos ocurre el Gasaustausch."
    },
    {
      id: "q_kr_6",
      world: "kreislauf",
      topicDe: "🫀 Körperkreislauf — Start (S. 3 & 6)",
      questionDe: "Welche Herzkammer (Herzhälfte) pumpt das sauerstoffreiche Blut in den Körperkreislauf zu den Körperzellen?",
      questionEs: "¿Qué ventrículo (mitad del corazón) bombea la sangre rica en oxígeno hacia la circulación corporal (a las células)?",
      tipEs: "💡 Tipp auf Spanisch: Revisa la Klappkarte 3 («der Körperkreislauf») en la página 6.",
      imageSrc: "img/heart_realistic.jpg",
      imageCaptionDe: "Rechte Herzhälfte (blau) und linke Herzhälfte (rot)",
      options: [
        { textDe: "Die linke Herzkammer (linke Herzhälfte)", textEs: "El ventrículo izquierdo (mitad izquierda del corazón)", correct: true },
        { textDe: "Die rechte Herzkammer (rechte Herzhälfte)", textEs: "El ventrículo derecho (mitad derecha del corazón)", correct: false },
        { textDe: "Die Lungenarterie", textEs: "La arteria pulmonar", correct: false },
        { textDe: "Die Körpervene", textEs: "La vena corporal", correct: false }
      ],
      explanationDe: "Klappkarte 3 (Seite 6): „Die linke Herzkammer pumpt sauerstoffreiches Blut zu den Körperzellen.“",
      explanationEs: "El ventrículo izquierdo (linke Herzkammer) bombea la sangre rica en oxígeno hacia las células del cuerpo."
    },
    {
      id: "q_kr_7",
      world: "kreislauf",
      topicDe: "⚡ Zellatmung in den Zellen (S. 3, 6 & 10)",
      questionDe: "Was passiert bei der Zellatmung in den Körperzellen (Klappkarte 3 auf Seite 6 & Schaubild Seite 10)?",
      questionEs: "¿Qué ocurre durante la respiración celular (Zellatmung) en las células del cuerpo (pág. 6 y 10)?",
      tipEs: "💡 Tipp auf Spanisch: «nehmen S... und N... auf und geben Ko... ab».",
      imageSrc: "img/heft_gasaustausch_normal.jpg",
      imageCaptionDe: "Originalbild Seite 10: Sauerstoff + Nährstoffe → Energie & Kohlenstoffdioxid",
      options: [
        { textDe: "Die Zellen nehmen Sauerstoff (S) und Nährstoffe (N) auf (für Energie) und geben Kohlenstoffdioxid (Ko) ab", textEs: "Las células toman oxígeno y nutrientes (para energía) y liberan dióxido de carbono", correct: true },
        { textDe: "Die Zellen nehmen Kohlenstoffdioxid auf und geben frischen Sauerstoff ab", textEs: "Las células toman CO₂ y liberan oxígeno fresco", correct: false },
        { textDe: "Die Zellen bilden neue rote und weiße Blutkörperchen", textEs: "Las células forman nuevos glóbulos rojos y blancos", correct: false },
        { textDe: "Die Zellen nehmen Teer und Nikotin auf", textEs: "Las células toman alquitrán y nicotina", correct: false }
      ],
      explanationDe: "Seite 3 (1a) & Seite 6: „Die Zellen machen die Zellatmung: Sie nehmen Sauerstoff und Nährstoffe auf und geben Kohlenstoffdioxid ab.“",
      explanationEs: "Las células toman Sauerstoff y Nährstoffe para producir Energie y entregan Kohlenstoffdioxid a la sangre."
    },
    {
      id: "q_kr_8",
      world: "kreislauf",
      topicDe: "🔄 Körperkreislauf — Rückweg zum Herzen (S. 3 & 6)",
      questionDe: "Wohin fließt das sauerstoffarme Blut mit viel Kohlenstoffdioxid, nachdem es bei den Körperzellen war (Schritt 1b & Klappkarte 3)?",
      questionEs: "¿Hacia dónde fluye la sangre pobre en oxígeno con mucho CO₂ después de pasar por las células del cuerpo?",
      tipEs: "💡 Tipp auf Spanisch: Regresa por la Körpervene a la mitad derecha del corazón.",
      imageSrc: "img/heft_koerper_kreislauf.jpg",
      imageCaptionDe: "Originalbild Seite 3: Der menschliche Blutkreislauf",
      options: [
        { textDe: "Es fließt (über die Körpervene) zum Herzen in die rechte Herzkammer (rechte Herzhälfte) zurück", textEs: "Fluye (por la vena corporal) de regreso al corazón hacia el ventrículo derecho", correct: true },
        { textDe: "Es fließt direkt in die linke Herzkammer", textEs: "Fluye directamente al ventrículo izquierdo", correct: false },
        { textDe: "Es fließt durch die Nase nach draußen", textEs: "Sale directamente por la nariz", correct: false },
        { textDe: "Es bleibt für immer in den Muskelzellen", textEs: "Se queda para siempre en las células musculares", correct: false }
      ],
      explanationDe: "Seite 3 (1b) & Seite 6: „Das sauerstoffarme Blut mit viel Kohlenstoffdioxid fließt zum Herzen (zur rechten Herzkammer) zurück.“",
      explanationEs: "Regresa a la cámara derecha del corazón (rechte Herzkammer / rechte Herzhälfte)."
    },
    {
      id: "q_kr_9",
      world: "kreislauf",
      topicDe: "🫁 Lungenkreislauf — Schritt 2a (S. 3 & 6)",
      questionDe: "Wie beginnt der Lungenkreislauf (Schritt 2a auf Seite 3)?",
      questionEs: "¿Cómo comienza la circulación pulmonar (paso 2a en la página 3)?",
      tipEs: "💡 Tipp auf Spanisch: Lee el punto «2a» de la página 3.",
      imageSrc: "img/heft_koerper_kreislauf.jpg",
      imageCaptionDe: "Schritt 2a im Lungenkreislauf (Seite 3)",
      options: [
        { textDe: "Die rechte Herzhälfte pumpt das sauerstoffarme Blut über die Lungenarterie zu den Lungenbläschen der Lungen", textEs: "La mitad derecha del corazón bombea la sangre pobre en O₂ por la arteria pulmonar a los alvéolos", correct: true },
        { textDe: "Die linke Herzhälfte pumpt sauerstoffreiches Blut über die Lungenvene zur Lunge", textEs: "La mitad izquierda bombea sangre rica en O₂ por la vena pulmonar al pulmón", correct: false },
        { textDe: "Die Lunge pumpt das Blut über die Körperarterie zu den Muskeln", textEs: "El pulmón bombea la sangre por la arteria corporal a los músculos", correct: false },
        { textDe: "Die rechte Herzhälfte pumpt sauerstoffreiches Blut zu den Körperzellen", textEs: "La mitad derecha bombea sangre rica en O₂ a las células", correct: false }
      ],
      explanationDe: "Seite 3 (2a): „Die rechte Herzhälfte pumpt das sauerstoffarme Blut über die Lungenarterie zu den Lungenbläschen der Lungen.“",
      explanationEs: "La mitad derecha bombea la sangre pobre en oxígeno por la Lungenarterie hacia los Lungenbläschen."
    },
    {
      id: "q_kr_10",
      world: "kreislauf",
      topicDe: "🫁 Lungenkreislauf — Schritt 2b (S. 3 & 4)",
      questionDe: "Was passiert beim Gasaustausch in den Lungenbläschen der Lungen (Schritt 2b auf Seite 3)?",
      questionEs: "¿Qué ocurre en los alvéolos pulmonares durante el intercambio gaseoso (paso 2b en la página 3)?",
      tipEs: "💡 Tipp auf Spanisch: «Hier gibt das Blut ... ab und nimmt ... auf.»",
      imageSrc: "img/alveoli_gas_exchange_realistic.jpg",
      imageCaptionDe: "Gasaustausch an den Lungenbläschen",
      options: [
        { textDe: "Hier gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf", textEs: "Aquí la sangre libera dióxido de carbono y absorbe oxígeno", correct: true },
        { textDe: "Hier gibt das Blut Sauerstoff ab und nimmt Kohlenstoffdioxid auf", textEs: "Aquí la sangre libera oxígeno y absorbe dióxido de carbono", correct: false },
        { textDe: "Hier bildet sich das Blut im Knochenmark", textEs: "Aquí se forma la sangre en la médula ósea", correct: false },
        { textDe: "Hier kämpfen die Blutplättchen gegen Bakterien", textEs: "Aquí las plaquetas luchan contra las bacterias", correct: false }
      ],
      explanationDe: "Seite 3 (2b): „Hier gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf.“",
      explanationEs: "En los alvéolos la sangre entrega el Kohlenstoffdioxid y toma Sauerstoff."
    },
    {
      id: "q_kr_11",
      world: "kreislauf",
      topicDe: "🫁 Lungenkreislauf — Schritt 2c (S. 3)",
      questionDe: "Wie geht es in Schritt 2c nach den Lungenbläschen weiter?",
      questionEs: "¿Cómo continúa el recorrido en el paso 2c después de los alvéolos pulmonares?",
      tipEs: "💡 Tipp auf Spanisch: Lee el punto «2c» de la página 3.",
      imageSrc: "img/heart_realistic.jpg",
      imageCaptionDe: "Rückfluss von der Lunge ins linke Herz",
      options: [
        { textDe: "Das Blut mit viel Sauerstoff fließt über die Lungenvene in die linke Herzhälfte", textEs: "La sangre con mucho oxígeno fluye por la vena pulmonar hacia la mitad izquierda del corazón", correct: true },
        { textDe: "Das sauerstoffarme Blut fließt über die Lungenarterie in die rechte Herzhälfte", textEs: "La sangre pobre en oxígeno fluye por la arteria pulmonar a la mitad derecha", correct: false },
        { textDe: "Das Blut fließt von der Lunge direkt ohne Herz in die Beine", textEs: "La sangre va del pulmón directo a las piernas sin pasar por el corazón", correct: false },
        { textDe: "Das Blut fließt über die Körpervene in die Luftröhre", textEs: "La sangre fluye por la vena corporal a la tráquea", correct: false }
      ],
      explanationDe: "Seite 3 (2c): „Das Blut mit viel Sauerstoff fließt über die Lungenvene in die linke Herzhälfte.“",
      explanationEs: "La sangre rica en oxígeno vuelve por la Lungenvene a la mitad izquierda del corazón (linke Herzhälfte)."
    },
    {
      id: "q_kr_12",
      world: "kreislauf",
      topicDe: "🔢 Schema Seite 4 — Nummern 1 bis 5",
      questionDe: "Schau auf das Original-Schema von Seite 4: Welche Begriffe gehören zu den Nummern 1, 2, 3, 4 und 5?",
      questionEs: "Mira el esquema original de la página 4: ¿Qué conceptos corresponden a los números 1, 2, 3, 4 y 5?",
      tipEs: "💡 Tipp auf Spanisch: 1 arriba en las flechas de aire, 2 el órgano pulmonar, 3 el circuito superior, 4 en el centro y 5 abajo en el músculo.",
      imageSrc: "img/heft_schema_seite4.jpg",
      imageCaptionDe: "Original-Schema von Seite 4 (Aufgabe 1)",
      options: [
        { textDe: "1 = Ein-/Ausatmung · 2 = Lunge · 3 = Lungenkreislauf · 4 = Herz · 5 = Muskelzellen", textEs: "1 = Inhalación/Exhalación · 2 = Pulmón · 3 = Circulación pulmonar · 4 = Corazón · 5 = Células musculares", correct: true },
        { textDe: "1 = Lunge · 2 = Herz · 3 = Muskelzellen · 4 = Lungenkreislauf · 5 = Ein-/Ausatmung", textEs: "1 = Pulmón · 2 = Corazón · 3 = Células musculares...", correct: false },
        { textDe: "1 = Ein-/Ausatmung · 2 = Herz · 3 = Körperkreislauf · 4 = Lunge · 5 = Knochenmark", textEs: "1 = Respiración · 2 = Corazón · 3 = Circulación corporal...", correct: false },
        { textDe: "1 = Muskelzellen · 2 = Herz · 3 = Lungenkreislauf · 4 = Lunge · 5 = Ein-/Ausatmung", textEs: "De abajo hacia arriba", correct: false }
      ],
      explanationDe: "Aufgabe 1 auf Seite 4: 1 = Ein-/Ausatmung, 2 = Lunge, 3 = Lungenkreislauf, 4 = Herz, 5 = Muskelzellen.",
      explanationEs: "Ese es el orden exacto de los números 1 a 5 en la página 4."
    },
    {
      id: "q_kr_13",
      world: "kreislauf",
      topicDe: "🔄 Seite 4 Aufgabe 2 — Lunge vs. Zelle",
      questionDe: "Auf Seite 4 (Aufgabe 2) stehen vier Sätze zum Gasaustausch. Welche zwei Sätze gehören oben zur LUNGE (Nr. 2) und welche zwei unten zu den MUSKELZELLEN (Nr. 5)?",
      questionEs: "En la página 4 (Actividad 2) hay cuatro frases sobre el intercambio gaseoso. ¿Cuáles dos van arriba en el PULMÓN (nº 2) y cuáles dos abajo en las CÉLULAS MUSCULARES (nº 5)?",
      tipEs: "💡 Tipp auf Spanisch: En el pulmón es la SANGRE («Das Blut...») la que toma O₂ y suelta CO₂; en el músculo es la CÉLULA («Die Zelle...»).",
      imageSrc: "img/heft_schema_seite4.jpg",
      imageCaptionDe: "Gasaustausch oben in der Lunge (2) und unten in den Muskelzellen (5)",
      options: [
        { textDe: "Lunge (2): „Das Blut nimmt Sauerstoff auf“ & „Das Blut gibt Kohlenstoffdioxid ab“ · Muskelzellen (5): „Die Zelle nimmt Sauerstoff auf“ & „Die Zelle gibt Kohlenstoffdioxid ab“", textEs: "Pulmón (2): La sangre toma O₂ y da CO₂ · Músculo (5): La célula toma O₂ y da CO₂", correct: true },
        { textDe: "Lunge (2): „Die Zelle gibt Kohlenstoffdioxid ab“ · Muskelzellen (5): „Das Blut nimmt Sauerstoff auf“", textEs: "Invertido entre pulmón y célula", correct: false },
        { textDe: "Alle vier Sätze gehören nur zum Herzen (Nr. 4)", textEs: "Las cuatro frases van solo en el corazón", correct: false },
        { textDe: "In der Lunge nimmt das Blut Kohlenstoffdioxid auf und gibt Sauerstoff ab", textEs: "En el pulmón la sangre toma CO₂ y entrega O₂", correct: false }
      ],
      explanationDe: "Genau so hast du es auf Seite 4 gelöst: Oben in der Lunge (2) tauscht das BLUT die Gase mit der Atemluft; unten (5) nimmt die ZELLE den Sauerstoff auf und gibt Kohlenstoffdioxid ab!",
      explanationEs: "Arriba en la Lunge: «Das Blut nimmt Sauerstoff auf / gibt Kohlenstoffdioxid ab». Abajo en las Muskelzellen: «Die Zelle nimmt Sauerstoff auf / gibt Kohlenstoffdioxid ab»."
    },
    {
      id: "q_kr_14",
      world: "kreislauf",
      topicDe: "🔤 Heft-Abkürzungen (S. 5 & 6)",
      questionDe: "Auf Seite 5 hast du die Abkürzungen für die Klappkarten aufgeschrieben. Welche Bedeutung ist komplett richtig?",
      questionEs: "En la página 5 anotaste las abreviaturas para las tarjetas plegables. ¿Cuál significado es completamente correcto?",
      tipEs: "💡 Tipp auf Spanisch: Bl = Blut · H = Herz · K = Körperzellen · S = Sauerstoff · N = Nährstoffe · Ko = Kohlenstoffdioxid.",
      imageSrc: "img/heart_realistic.jpg",
      imageCaptionDe: "Abkürzungen aus deinem Heft (Seite 5)",
      options: [
        { textDe: "Bl = Blut · H = Herz · K = Körperzellen · Tr = transportiert · S = Sauerstoff · N = Nährstoffe · Ko = Kohlenstoffdioxid", textEs: "Todas las abreviaturas de la página 5 correctas", correct: true },
        { textDe: "Bl = Bein · H = Hals · K = Kopf · S = Sonne · N = Nase · Ko = Kohle", textEs: "Palabras inventadas", correct: false },
        { textDe: "S = Kohlenstoffdioxid · Ko = Sauerstoff · N = Nikotin", textEs: "Gases invertidos", correct: false },
        { textDe: "re = linke · li = rechte · Herzk = Lungenbläschen", textEs: "Direcciones invertidas", correct: false }
      ],
      explanationDe: "Genau diese Liste steht rechts auf Seite 5 deines Heftes (dazu noch: re = rechte, li = linke, Herzk = Herzkammer, Bl = Bläschen)!",
      explanationEs: "Esa es la lista exacta de abreviaturas escrita en la página 5."
    },

    // =======================================================================
    // WELT 3: TABAKKONSUM — NIKOTIN, TEER, KOHLENMONOXID & FOLGEN (15 FRAGEN, S. 7–8)
    // =======================================================================
    {
      id: "q_tab_1",
      world: "tabak",
      topicDe: "🚬 Was ist Rauchen? (S. 7)",
      questionDe: "Was enthält eine Zigarette und was passiert, wenn sie angezündet wird (Seite 7)?",
      questionEs: "¿Qué contiene un cigarrillo y qué ocurre cuando se enciende (página 7)?",
      tipEs: "💡 Tipp auf Spanisch: Lee el primer recuadro de la página 7 («Was ist Rauchen?»).",
      imageSrc: "img/smoking_damage_realistic.jpg",
      imageCaptionDe: "Zigarettenrauch und seine Schadstoffe",
      options: [
        { textDe: "Sie enthält Tabakblätter und andere Stoffe; sie wird verbrannt und der Rauch wird durch den Mund bis in die Lungen eingeatmet", textEs: "Contiene hojas de tabaco y otras sustancias; se quema y el humo se inhala por la boca hasta los pulmones", correct: true },
        { textDe: "Sie enthält nur reines Wasser, das die Lunge sauber macht", textEs: "Contiene solo agua pura que limpia el pulmón", correct: false },
        { textDe: "Sie enthält Nährstoffe für die Zellatmung", textEs: "Contiene nutrientes para la respiración celular", correct: false },
        { textDe: "Der Rauch bleibt nur im Mund und kommt nicht in die Lungen", textEs: "El humo se queda solo en la boca y no llega a los pulmones", correct: false }
      ],
      explanationDe: "Seite 7: „Eine Zigarette enthält Tabakblätter, aber auch andere Stoffe. Die Zigarette wird an einer Seite angezündet und verbrannt. Der Rauch, der daraus entsteht, wird durch den Mund bis in die Lungen eingeatmet.“",
      explanationEs: "El humo de las hojas de tabaco quemadas se inhala por la boca hasta los pulmones."
    },
    {
      id: "q_tab_2",
      world: "tabak",
      topicDe: "☠️ Welche 3 schädlichen Stoffe sind im Rauch? (S. 7)",
      questionDe: "Durch die Verbrennung der Tabakblätter entstehen viele schädliche Stoffe im Rauch. Welche drei werden auf Seite 7 fett gedruckt genannt?",
      questionEs: "Por la combustión de las hojas de tabaco se producen muchas sustancias dañinas en el humo. ¿Cuáles tres se nombran en negrita en la página 7?",
      tipEs: "💡 Tipp auf Spanisch: Están bajo el subtítulo «Aber was ist genau in diesem Rauch drin?».",
      imageSrc: "img/heft_tabak_alltag.jpg",
      imageCaptionDe: "Originalbilder von Seite 7: Nikotin, Kohlenstoffmonoxid und Teer",
      options: [
        { textDe: "Nikotin, Teer und Kohlenmonoxid (Kohlenstoffmonoxid)", textEs: "Nicotina, alquitrán y monóxido de carbono", correct: true },
        { textDe: "Sauerstoff, Blutplasma und Nährstoffe", textEs: "Oxígeno, plasma sanguíneo y nutrientes", correct: false },
        { textDe: "Rote Blutkörperchen, weiße Blutkörperchen und Blutplättchen", textEs: "Glóbulos rojos, blancos y plaquetas", correct: false },
        { textDe: "Arterien, Venen und Kapillaren", textEs: "Arterias, venas y capilares", correct: false }
      ],
      explanationDe: "Seite 7: „Durch die Verbrennung dieser Blätter entstehen viele schädliche Stoffe. Und all diese Stoffe sind im Rauch enthalten. Einige sind Nikotin, Teer und Kohlenmonoxid.“",
      explanationEs: "Las tres sustancias principales son Nikotin, Teer y Kohlenmonoxid (Kohlenstoffmonoxid)."
    },
    {
      id: "q_tab_3",
      world: "tabak",
      topicDe: "🚜 Nikotin im Alltag (S. 7)",
      questionDe: "Wofür wird Nikotin im Alltag benutzt (siehe das erste Foto mit dem Traktor auf Seite 7)?",
      questionEs: "¿Para qué se usa la nicotina en la vida cotidiana (mira la primera foto con el tractor en la página 7)?",
      tipEs: "💡 Tipp auf Spanisch: En tu guía escribiste al lado: «tötet Insekten» (mata insectos).",
      imageSrc: "img/heft_tabak_alltag.jpg",
      imageCaptionDe: "Links auf Seite 7: Traktor sprüht Insektizide (Nikotin)",
      options: [
        { textDe: "Es befindet sich in einigen Insektiziden (tötet Insekten)", textEs: "Se encuentra en algunos insecticidas (mata insectos)", correct: true },
        { textDe: "Als Bindemittel im Straßenbau", textEs: "Como aglutinante en la construcción de calles", correct: false },
        { textDe: "Es entsteht aus der Verbrennung von Kohle, Gas oder Benzin", textEs: "Surge de la combustión de carbón, gas o bencina", correct: false },
        { textDe: "Als Medizin gegen Kopfschmerzen", textEs: "Como remedio para el dolor de cabeza", correct: false }
      ],
      explanationDe: "Seite 7: „Nikotin: Befindet sich in einigen Insektiziden (tötet Insekten).“",
      explanationEs: "La nicotina se encuentra en algunos insecticidas."
    },
    {
      id: "q_tab_4",
      world: "tabak",
      topicDe: "🚗 Kohlenstoffmonoxid im Alltag (S. 7)",
      questionDe: "Wie entsteht Kohlenstoffmonoxid im Alltag (mittleres Foto mit dem Auto-Auspuff auf Seite 7)?",
      questionEs: "¿Cómo se origina el monóxido de carbono en la vida diaria (foto central del tubo de escape en la página 7)?",
      tipEs: "💡 Tipp auf Spanisch: «Verbrennung von Kohle, Gas oder Benzin».",
      imageSrc: "img/heft_tabak_alltag.jpg",
      imageCaptionDe: "Mitte auf Seite 7: Auto-Auspuff (Kohlenstoffmonoxid)",
      options: [
        { textDe: "Es entsteht aus der Verbrennung von Kohle, Gas oder Benzin", textEs: "Surge de la combustión de carbón, gas o bencina", correct: true },
        { textDe: "Es befindet sich in Insektiziden für Pflanzen", textEs: "Se encuentra en insecticidas para plantas", correct: false },
        { textDe: "Es wird als klebriges Bindemittel im Straßenbau benutzt", textEs: "Se usa como aglutinante pegajoso en las calles", correct: false },
        { textDe: "Es entsteht beim Einatmen von frischer Luft", textEs: "Surge al inhalar aire fresco", correct: false }
      ],
      explanationDe: "Seite 7: „Kohlenstoffmonoxid: Entsteht aus der Verbrennung von Kohle, Gas oder Benzin.“",
      explanationEs: "Se produce por la combustión de carbón (Kohle), gas (Gas) o bencina (Benzin)."
    },
    {
      id: "q_tab_5",
      world: "tabak",
      topicDe: "🛣️ Teer im Alltag (S. 7)",
      questionDe: "Wofür wird Teer (alquitrán) im Alltag benutzt (rechtes Foto mit der Straße auf Seite 7)?",
      questionEs: "¿Para qué se utiliza el alquitrán (Teer) en la vida diaria (foto derecha de la calle en la página 7)?",
      tipEs: "💡 Tipp auf Spanisch: «Bindemittel im Straßenbau» y «klebrig, wenn es heiß ist (im Sommer)».",
      imageSrc: "img/heft_tabak_alltag.jpg",
      imageCaptionDe: "Rechts auf Seite 7: Teer im Straßenbau",
      options: [
        { textDe: "Er wird als Bindemittel im Straßenbau benutzt und wird klebrig, wenn es heiß ist (im Sommer)", textEs: "Se usa como aglutinante en la construcción de calles y se pone pegajoso cuando hace calor (en verano)", correct: true },
        { textDe: "Er befindet sich in Insektiziden gegen Insekten", textEs: "Se encuentra en insecticidas contra insectos", correct: false },
        { textDe: "Er entsteht nur aus Benzin im Automotor", textEs: "Surge solo de la bencina en el motor", correct: false },
        { textDe: "Er transportiert Sauerstoff im Blut", textEs: "Transporta oxígeno en la sangre", correct: false }
      ],
      explanationDe: "Seite 7: „Teer: Wird als Bindemittel im Straßenbau benutzt. Außerdem wird es klebrig, wenn es heiß ist (im Sommer).“",
      explanationEs: "El alquitrán se usa como aglutinante en el asfalto de las calles y se vuelve pegajoso con el calor."
    },
    {
      id: "q_tab_6",
      world: "tabak",
      topicDe: "🫁 Warum ist Teer schädlich? — Flimmerhärchen (S. 7)",
      questionDe: "Was macht der Teer mit den Flimmerhärchen (pelillos) der Atemwege?",
      questionEs: "¿Qué hace el alquitrán con los pelillos (Flimmerhärchen) de las vías respiratorias?",
      tipEs: "💡 Tipp auf Spanisch: Lee las dos primeras líneas bajo «Teer» al final de la página 7.",
      imageSrc: "img/smoking_damage_realistic.jpg",
      imageCaptionDe: "Teer verklebt die Flimmerhärchen und Lungenbläschen",
      options: [
        { textDe: "Er bleibt an den Flimmerhärchen kleben; sie können sich dann nicht richtig bewegen und die Atemwege nicht sauber machen", textEs: "Se queda pegado en los pelillos; no pueden moverse bien ni limpiar las vías respiratorias", correct: true },
        { textDe: "Er hilft den Flimmerhärchen, besser und schneller zu arbeiten", textEs: "Ayuda a los pelillos a trabajar mejor y más rápido", correct: false },
        { textDe: "Er verengt die Blutgefäße im Bein", textEs: "Estrecha los vasos sanguíneos en la pierna", correct: false },
        { textDe: "Er zerstört die Nervenzellen im Gehirn", textEs: "Destruye las células nerviosas en el cerebro", correct: false }
      ],
      explanationDe: "Seite 7 unten: „Er bleibt an den Flimmerhärchen (pelillos) der Atemwege kleben. Diese können sich dann nicht richtig bewegen und auch nicht die Atemwege sauber machen.“",
      explanationEs: "Al pegarse en los Flimmerhärchen, estos ya no pueden moverse bien ni limpiar las vías respiratorias."
    },
    {
      id: "q_tab_7",
      world: "tabak",
      topicDe: "🫁 Warum ist Teer schädlich? — Lungenbläschen (S. 7)",
      questionDe: "Was ist laut Seite 7 „das Schlimmste“ beim Teer?",
      questionEs: "¿Qué es «lo peor» (das Schlimmste) del alquitrán según la página 7?",
      tipEs: "💡 Tipp auf Spanisch: Lee las dos últimas líneas de la página 7.",
      imageSrc: "img/smoking_damage_realistic.jpg",
      imageCaptionDe: "Teer blockiert den Gasaustausch in den Lungenbläschen",
      options: [
        { textDe: "Er bleibt in den Lungenbläschen kleben: Der Gasaustausch wird schwieriger, es kommt nicht genug Sauerstoff ins Blut und der Kohlenstoffdioxid bleibt im Blut", textEs: "Se queda pegado en los alvéolos: el intercambio gaseoso se vuelve más difícil, no entra suficiente oxígeno a la sangre y el CO₂ se queda en la sangre", correct: true },
        { textDe: "Er sorgt dafür, dass mehr Sauerstoff in die Blutgefäße kommt", textEs: "Hace que entre más oxígeno a los vasos sanguíneos", correct: false },
        { textDe: "Er macht die Blutgefäße breiter", textEs: "Hace los vasos sanguíneos más anchos", correct: false },
        { textDe: "Er macht das Herz langsamer", textEs: "Hace que el corazón lata más lento", correct: false }
      ],
      explanationDe: "Seite 7 unten: „Das Schlimmste: Er bleibt in den Lungenbläschen kleben. Der Gasaustausch wird schwieriger: Es kommt nicht genug Sauerstoff ins Blut und der Kohlenstoffdioxid bleibt im Blut.“",
      explanationEs: "Se pega en los Lungenbläschen dificultando el Gasaustausch: no entra suficiente oxígeno y el CO₂ se queda en la sangre."
    },
    {
      id: "q_tab_8",
      world: "tabak",
      topicDe: "🚫 Kohlenstoffmonoxid & „NO ADELANTAR“ (S. 8)",
      questionDe: "Wie wirkt Kohlenstoffmonoxid im Körper (oben auf Seite 8 neben dem Schild „NO ADELANTAR“)?",
      questionEs: "¿Cómo actúa el monóxido de carbono en el cuerpo (arriba en la página 8 junto a la señal «NO ADELANTAR»)?",
      tipEs: "💡 Tipp auf Spanisch: «Er ist schneller als Sauerstoff.»",
      imageSrc: "img/heft_no_adelantar_nikotin.jpg",
      imageCaptionDe: "Originalbild Seite 8: Schild NO ADELANTAR & verengtes Blutgefäß",
      options: [
        { textDe: "Er gelangt durch die Lungenbläschen ins Blut und ist schneller als Sauerstoff — so wird weniger Sauerstoff zu den Zellen transportiert", textEs: "Entra por los alvéolos a la sangre y es más rápido que el oxígeno — así se transporta menos oxígeno a las células", correct: true },
        { textDe: "Er bleibt außen an den Zähnen kleben und kommt nicht ins Blut", textEs: "Se queda pegado en los dientes y no entra a la sangre", correct: false },
        { textDe: "Er ist langsamer als Sauerstoff, sodass mehr Sauerstoff ankommt", textEs: "Es más lento que el oxígeno", correct: false },
        { textDe: "Er repariert zerstörte Blutgefäße wie die Blutplättchen", textEs: "Repara los vasos sanguíneos como las plaquetas", correct: false }
      ],
      explanationDe: "Seite 8: „Kohlenstoffmonoxid: Er gelangt durch Lungenbläschen ins Blut. Er ist schneller als Sauerstoff. So wird weniger Sauerstoff zu den Zellen transportiert.“",
      explanationEs: "El monóxido de carbono entra a la sangre por los alvéolos y, como es más rápido que el oxígeno, llega menos oxígeno a las células."
    },
    {
      id: "q_tab_9",
      world: "tabak",
      topicDe: "🩸 Nikotin — Wirkung auf die Blutgefäße & Raucherbein (S. 8)",
      questionDe: "Was passiert durch Nikotin mit den Blutgefäßen (Punkte 1 bis 3 auf Seite 8)?",
      questionEs: "¿Qué ocurre con los vasos sanguíneos por efecto de la nicotina (puntos 1 a 3 de la página 8)?",
      tipEs: "💡 Tipp auf Spanisch: 1. verengen sich · 2. hart und steif · 3. kein Platz mehr für das Blut → Raucherbein.",
      imageSrc: "img/heft_no_adelantar_nikotin.jpg",
      imageCaptionDe: "Verengtes Blutgefäß auf Seite 8",
      options: [
        { textDe: "1. Zuerst verengen sich die Blutgefäße · 2. Danach werden sie hart und steif · 3. Es bleibt kein Platz mehr für das Blut und ein Zeh, Fuß oder Bein kann absterben (Raucherbein)", textEs: "1. Primero se estrechan · 2. Luego se ponen duros y rígidos · 3. No queda espacio para la sangre y un dedo, pie o pierna puede morir (Raucherbein)", correct: true },
        { textDe: "Die Blutgefäße werden breiter, weicher und es fließt mehr Blut durch", textEs: "Los vasos se hacen más anchos y blandos", correct: false },
        { textDe: "Die Blutgefäße verwandeln sich in Lungenbläschen", textEs: "Los vasos se transforman en alvéolos", correct: false },
        { textDe: "Nikotin wirkt nur an den Haaren und nicht an den Blutgefäßen", textEs: "La nicotina actúa solo en el pelo", correct: false }
      ],
      explanationDe: "Seite 8 unter Nikotin: „1. Zuerst verengen sich die Blutgefäße. 2. Danach werden die Blutgefäße hart und steif. 3. Mit der Zeit bleibt in diesen Blutgefäßen kein Platz mehr für das Blut und der Körperteil, z. B. ein Zeh, Fuß oder Bein, kann absterben (das nennt man Raucherbein).“",
      explanationEs: "La nicotina estrecha los vasos sanguíneos, los vuelve duros y rígidos y puede provocar el Raucherbein."
    },
    {
      id: "q_tab_10",
      world: "tabak",
      topicDe: "🧠 Nikotin — Herz & Gehirn (S. 8)",
      questionDe: "Was bewirkt das Gift Nikotin am Herzen und im Gehirn (Seite 8)?",
      questionEs: "¿Qué provoca el veneno nicotina en el corazón y en el cerebro (página 8)?",
      tipEs: "💡 Tipp auf Spanisch: Lee el punto 4 y el párrafo en negrita bajo «Nikotin» en la página 8.",
      imageSrc: "img/smoking_damage_realistic.jpg",
      imageCaptionDe: "Wirkung von Nikotin im Körper",
      options: [
        { textDe: "Das Herz klopft schneller; Nikotin ist ein Gift: Es zerstört Nervenzellen im Gehirn, macht süchtig und macht die Nerven krank", textEs: "El corazón late más rápido; la nicotina es un veneno: destruye neuronas en el cerebro, vuelve adicto y enferma los nervios", correct: true },
        { textDe: "Das Herz klopft langsamer und es entstehen neue Nervenzellen im Gehirn", textEs: "El corazón late más lento y nacen nuevas neuronas", correct: false },
        { textDe: "Es stärkt die Abwehrkräfte und schützt das Gehirn", textEs: "Fortalece las defensas y protege el cerebro", correct: false },
        { textDe: "Es macht die Zähne weiß und gesund", textEs: "Blanquea los dientes", correct: false }
      ],
      explanationDe: "Seite 8: „4. Das Herz klopft schneller. Nikotin ist ein Gift (veneno). Es zerstört Nervenzellen im Gehirn. Es macht süchtig und macht die Nerven krank.“",
      explanationEs: "El corazón late más rápido y la nicotina destruye células nerviosas en el cerebro, causando adicción (macht süchtig)."
    },
    {
      id: "q_tab_11",
      world: "tabak",
      topicDe: "📋 Gesundheitliche Folgen des Tabakkonsums (S. 8)",
      questionDe: "Aufgabe 1 auf Seite 8 lautet: „Nenne 3 gesundheitliche Folgen des Rauchens.“ Welche dieser Antworten nennt ausschließlich richtige Folgen aus der Liste von Seite 8?",
      questionEs: "La Actividad 1 de la página 8 pide nombrar consecuencias para la salud de fumar. ¿Cuál de estas respuestas nombra únicamente consecuencias reales de la lista de la página 8?",
      tipEs: "💡 Tipp auf Spanisch: Revisa los 8 puntos con viñeta de la página 8.",
      imageSrc: "img/smoking_damage_realistic.jpg",
      imageCaptionDe: "Gesundheitliche Folgen des Tabakkonsums (Seite 8)",
      options: [
        { textDe: "Husten, Lungenkrankheiten, Krebs, gelbe Finger und Zähne, Konzentrationsprobleme (wegen weniger O₂), schneller müde, man riecht schlecht, Organe bekommen zu wenig Blut und können absterben", textEs: "Las 8 consecuencias exactas de la página 8", correct: true },
        { textDe: "Bessere Konzentration, mehr Sauerstoff im Blut und breitere Blutgefäße", textEs: "Mejor concentración, más oxígeno y vasos más anchos", correct: false },
        { textDe: "Stärkere Abwehrkräfte, weiße Zähne und gesunde Lungenbläschen", textEs: "Defensas más fuertes y dientes blancos", correct: false },
        { textDe: "Mehr Energie bei der Zellatmung und saubere Flimmerhärchen", textEs: "Más energía celular y cilios limpios", correct: false }
      ],
      explanationDe: "Auf Seite 8 stehen genau diese 8 gesundheitlichen Folgen des Tabakkonsums!",
      explanationEs: "Cualquiera de esas 8 consecuencias te da el puntaje completo en la Aufgabe 1 de la página 8."
    },

    // =======================================================================
    // WELT 4: PASSIVRAUCHEN, SEITE 10 & 5-FEHLER-TEXT SEITE 11 (14 FRAGEN)
    // =======================================================================
    {
      id: "q_pf_1",
      world: "passiv_fehler",
      topicDe: "🚭 Was ist „Passivrauchen“? (S. 9)",
      questionDe: "Was nennt man laut Seite 9 „Passivrauchen“?",
      questionEs: "¿A qué se le llama «Passivrauchen» según la página 9?",
      tipEs: "💡 Tipp auf Spanisch: Lee el inicio de «Passivraucher» en la página 9.",
      imageSrc: "img/heft_passivrauchen_kind.jpg",
      imageCaptionDe: "Originalbild Seite 9: Passivrauchen",
      options: [
        { textDe: "Wenn man den Rauch (humo) einer angezündeten Zigarette von anderen einatmet, obwohl man selbst nicht raucht", textEs: "Cuando uno inhala el humo de un cigarrillo encendido de otros aunque uno mismo no fume", correct: true },
        { textDe: "Wenn man im Unterricht über Tabak liest", textEs: "Cuando uno lee sobre el tabaco en clases", correct: false },
        { textDe: "Wenn man draußen an der frischen Luft Sport macht", textEs: "Cuando uno hace deporte al aire libre", correct: false },
        { textDe: "Wenn man Wasser trinkt", textEs: "Cuando uno toma agua", correct: false }
      ],
      explanationDe: "Seite 9: „Hast du schon den Rauch (humo) einer angezündeten Zigarette eingeatmet? Ist deine Antwort ja? Dann hast du leider doch geraucht. Das nennt man Passivrauchen.“",
      explanationEs: "Inhalar el humo del cigarrillo de otros se llama «Passivrauchen»."
    },
    {
      id: "q_pf_2",
      world: "passiv_fehler",
      topicDe: "👧 Warum ist Passivrauchen für KINDER besonders gefährlich? (S. 9)",
      questionDe: "Warum ist für Kinder das Einatmen von fremdem Rauch besonders gefährlich? (Nenne die 2 Gründe von Seite 9!)",
      questionEs: "¿Por qué es especialmente peligroso para los niños inhalar humo ajeno? (¡Nombra las 2 razones de la página 9!)",
      tipEs: "💡 Tipp auf Spanisch: 1) «weil sie schneller als Erwachsene atmen» y 2) «weil ihr Körper die Giftstoffe schlechter abbauen kann».",
      imageSrc: "img/heft_passivrauchen_kind.jpg",
      imageCaptionDe: "Passivrauchen bei Kindern (Seite 9)",
      options: [
        { textDe: "1. Weil sie schneller als Erwachsene atmen (also mehr Rauch kommt rein) und 2. weil ihr Körper die Giftstoffe schlechter abbauen (descomponer-eliminar) kann", textEs: "1. Porque respiran más rápido que los adultos (entra más humo) y 2. porque su cuerpo puede descomponer/eliminar peor las sustancias tóxicas", correct: true },
        { textDe: "1. Weil Kinder langsamer atmen und 2. weil sie 5 Liter Blut haben", textEs: "1. Porque respiran más lento y 2. tienen 5 litros de sangre", correct: false },
        { textDe: "1. Weil Kinder keine weißen Blutkörperchen haben und 2. weil sie kein Blutplasma haben", textEs: "Porque no tienen glóbulos blancos ni plasma", correct: false },
        { textDe: "Passivrauchen ist nicht schädlich, nur aktives Rauchen ist schädlich", textEs: "El humo pasivo no es dañino", correct: false }
      ],
      explanationDe: "Seite 9: „Das Passivrauchen ist fast so schädlich wie das aktive Rauchen. Für Kinder ist das Einatmen von fremdem Rauch besonders gefährlich, weil sie schneller als Erwachsene atmen (also mehr Rauch kommt rein) und weil ihr Körper die Giftstoffe schlechter abbauen (descomponer-eliminar) kann.“",
      explanationEs: "1. Respiran más rápido (entra más humo) y 2. su cuerpo descompone/elimina peor los venenos (Giftstoffe schlechter abbauen)."
    },
    {
      id: "q_pf_3",
      world: "passiv_fehler",
      topicDe: "🤒 Folgen für Kinder & Raucherautos (S. 9)",
      questionDe: "Welche Folgen bekommen Kinder beim Passivrauchen und was passiert in Raucherautos, wenn die Fenster zu sind (Seite 9)?",
      questionEs: "¿Qué consecuencias sufren los niños por el humo pasivo y qué pasa en los autos de fumadores cuando las ventanas están cerradas (página 9)?",
      tipEs: "💡 Tipp auf Spanisch: Lee los dos últimos párrafos de la página 9.",
      imageSrc: "img/heft_passivrauchen_kind.jpg",
      imageCaptionDe: "Achtung: Raucherautos mit geschlossenen Fenstern (Seite 9)",
      options: [
        { textDe: "Augenschmerzen, starker Husten, Kopfschmerzen, schneller müde, Abwehrkräfte werden schwächer (oft krank); im Raucherauto nimmt ein Kind so viele Schadstoffe ein, als hätte es selbst eine Zigarette geraucht", textEs: "Dolor de ojos, tos fuerte, dolor de cabeza, cansancio, defensas más débiles; en el auto con ventanas cerradas inhala tantos tóxicos como si hubiera fumado un cigarrillo", correct: true },
        { textDe: "Die Abwehrkräfte werden stärker und im Raucherauto ist die Luft besonders sauber", textEs: "Las defensas se fortalecen y el aire en el auto es limpio", correct: false },
        { textDe: "Die Kinder werden nur kurz müde, aber ihre Abwehrkräfte bleiben gleich stark", textEs: "Solo se cansan un poco pero sus defensas no cambian", correct: false },
        { textDe: "Wenn die Fenster zu sind, kommen gar keine Schadstoffe zum Kind", textEs: "Con las ventanas cerradas no llegan tóxicos al niño", correct: false }
      ],
      explanationDe: "Seite 9 unten: „Die Kinder bekommen Augenschmerzen und starken Husten. Sie leiden unter Kopfschmerzen und werden schneller müde. Mit der Zeit werden ihre Abwehrkräfte (defensas) schwächer und die Kinder werden dann oft krank. Achtung: In Raucherautos gibt es besonders viele schädliche Stoffe, wenn die Fenster zu sind. Ein Kind nimmt so viele Schadstoffe ein, als hätte es selbst eine Zigarette geraucht.“",
      explanationEs: "Exactamente como dice el final de la página 9."
    },
    {
      id: "q_pf_4",
      world: "passiv_fehler",
      topicDe: "🎨 Seite 10: Gasaustausch eines Rauchers (Fragen 1–3)",
      questionDe: "Schau auf deine gelöste Zeichnung von Seite 10: Wie werden Teer, Nikotin und das zusätzliche Gas beim Raucher eingezeichnet?",
      questionEs: "Mira tu dibujo resuelto de la página 10: ¿Cómo se pintan el alquitrán, la nicotina y el gas adicional en el fumador?",
      tipEs: "💡 Tipp auf Spanisch: 1. Teer = braun · 2. Nikotin = lila · 3. Kohlenmonoxid = grau.",
      imageSrc: "img/heft_gasaustausch_raucher.jpg",
      imageCaptionDe: "Originalbild Seite 10: Deine Lösung zum Gasaustausch eines Rauchers",
      options: [
        { textDe: "1. Teer klebt in den Lungenbläschen (in BRAUN) · 2. Nikotin verengt die Blutgefäße (in LILA) · 3. Kohlenmonoxid geht von den Lungenbläschen bis zur Zelle (in GRAU, schneller als Sauerstoff)", textEs: "1. Alquitrán en los alvéolos (CAFÉ) · 2. Nicotina estrecha vasos (LILA) · 3. Monóxido de carbono hasta la célula (GRIS)", correct: true },
        { textDe: "1. Teer in LILA · 2. Nikotin in GRAU · 3. Sauerstoff in BRAUN", textEs: "Colores intercambiados", correct: false },
        { textDe: "1. Teer im Herzen · 2. Nikotin macht die Blutgefäße breiter · 3. Wasser fließt zur Zelle", textEs: "Conceptos falsos", correct: false },
        { textDe: "Beim Raucher sieht der Gasaustausch genauso aus wie beim Nichtraucher", textEs: "Se ve igual que en un no fumador", correct: false }
      ],
      explanationDe: "Auf Seite 10 hast du genau das eingezeichnet: Der Teer (braun) im Lungenbläschen, Nikotin (lila) am verengten Blutgefäß und Kohlenmonoxid (grau: „ist schneller als Sauerstoff“) auf dem Weg zur Zelle!",
      explanationEs: "1. Teer en braun, 2. Nikotin en lila y 3. Kohlenmonoxid en grau."
    },
    {
      id: "q_pf_5",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Seite 11: Fehlersuche — Satz 1 & Satz 2",
      questionDe: "Auf Seite 11 stehen: „1. Wenn Du atmest, dann kommt Wasser in die Lunge.“ und „2. Die Lungenbläschen geben den Sauerstoff an die Zellen ab.“ Wie lauten die Korrekturen?",
      questionEs: "En la página 11 aparecen las oraciones 1 y 2 con errores. ¿Cómo se corrigen?",
      tipEs: "💡 Tipp auf Spanisch: En la 1 cambia «Wasser» por «Luft» y en la 2 cambia «Lungenbläschen» por «Blutgefäße / das Blut» (o «an das Blut ab»).",
      imageSrc: "img/alveoli_gas_exchange_realistic.jpg",
      imageCaptionDe: "Atmung (Luft in die Lunge) und Sauerstofftransport durch das Blut",
      options: [
        { textDe: "1. Wenn du atmest, dann kommt Luft (Sauerstoff) in die Lunge. · 2. Die Blutgefäße (das Blut) geben den Sauerstoff an die Zellen ab (bzw. die Lungenbläschen geben ihn ans Blut ab).", textEs: "1. Entra aire (oxígeno) al pulmón · 2. Los vasos sanguíneos (la sangre) entregan el oxígeno a las células", correct: true },
        { textDe: "Beide Sätze sind schon richtig und haben keinen Fehler.", textEs: "Ambas frases están correctas", correct: false },
        { textDe: "1. Wenn du atmest, kommt Teer in die Lunge. · 2. Die Knochen geben Sauerstoff ab.", textEs: "Correcciones falsas", correct: false },
        { textDe: "1. Wenn du atmest, kommt Blutplasma in die Lunge.", textEs: "Entra plasma al pulmón", correct: false }
      ],
      explanationDe: "Genau so hast du Satz 1 und Satz 2 auf Seite 11 korrigiert!",
      explanationEs: "1) «Luft» en vez de «Wasser» y 2) «Die Blutgefäße / Das Blut» en vez de «Die Lungenbläschen»."
    },
    {
      id: "q_pf_6",
      world: "passiv_fehler",
      topicDe: "🕵️‍♀️ Seite 11: Fehlersuche — Satz 3, 4, 5 & 6",
      questionDe: "Schau auf die Sätze 3 bis 6 von Seite 11: Welcher Satz ist RICHTIG, und welche Wörter müssen in Satz 4, 5 und 6 korrigiert werden?",
      questionEs: "Mira las oraciones 3 a 6 de la página 11: ¿Cuál oración es CORRECTA y qué palabras deben corregirse en las oraciones 4, 5 y 6?",
      tipEs: "💡 Tipp auf Spanisch: La 3 es Richtig; en la 4 «besser» → «schlechter / nicht richtig»; en la 5 «breiter» → «enger / dünner»; en la 6 «mehr Sauerstoff» → «weniger Sauerstoff».",
      imageSrc: "img/smoking_damage_realistic.jpg",
      imageCaptionDe: "Die Fehler in Satz 4, 5 und 6 auf Seite 11",
      options: [
        { textDe: "Satz 3 ist RICHTIG! · Satz 4: Flimmerhärchen können schlechter (nicht richtig) arbeiten · Satz 5: Nikotin macht die Blutgefäße enger (dünner) · Satz 6: In die Blutgefäße kommt weniger Sauerstoff", textEs: "Oración 3 correcta · 4: trabajan peor · 5: vasos más estrechos/delgados · 6: entra menos oxígeno", correct: true },
        { textDe: "Satz 4 ist richtig und Satz 3 ist falsch", textEs: "La 4 es correcta y la 3 es falsa", correct: false },
        { textDe: "Satz 5: Nikotin macht die Blutgefäße breiter · Satz 6: Es kommt mehr Sauerstoff rein", textEs: "Deja los errores sin corregir", correct: false },
        { textDe: "Alle 6 Sätze auf Seite 11 sind falsch", textEs: "Las 6 oraciones son falsas", correct: false }
      ],
      explanationDe: "Perfekt! Satz 3 („Das Blut transportiert den Sauerstoff zu den Zellen.“) ist der einzige richtige Satz; in 4, 5 und 6 waren genau das Gegenteil („besser“, „breiter“, „mehr Sauerstoff“) die Fehler!",
      explanationEs: "¡Dominas los 6 puntos de la página 11 a la perfección!"
    }
  ]
};
