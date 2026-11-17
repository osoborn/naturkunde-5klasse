(function () {
  "use strict";

  const DATA = window.NATURKUNDE_DATA;

  const state = {
    showSpanish: true,
    solvedCount: 0,
    streak: 0,
    points: 0,
    solvedIds: new Set(),
    unlockedGifts: new Set(["gift_blood_drop"]),
    gradeHistory: [],
    lastFocusedInput: null,

    // Tab 1C: Vocab
    vocabErrorIds: new Set(),
    vocabOnlyErrors: false,

    // Tab 2: Comic Coloring
    activeBrush: "rot",
    comicColors: {
      comic_rote: "",
      comic_weisse: "",
      comic_plaettchen: "",
      comic_plasma: ""
    },

    // Tab 4: Smoker model paint toggles
    smokerPaint: {
      teer: true,
      nikotin: true,
      co: true
    },

    // Tab 5: Arena
    arenaView: "arcade",
    arenaWorld: "exam20",
    arenaItems: [],
    arenaIndex: 0,
    arenaCombo: 0,
    arenaSolvedSet: new Set(),
    arenaErrorIds: new Set(),
    arenaOnlyErrors: false,
    arenaSoundOn: true
  };

  // =========================================================================
  // 1. AUDIO, CONFETTI, NOTEN (1,0–7,0) & EMOJI-GESCHENKE
  // =========================================================================
  let audioCtx = null;

  function playChime(type) {
    if (!state.arenaSoundOn) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const now = audioCtx.currentTime;
      if (type === "ok") {
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.065);
          gain.gain.setValueAtTime(0.11, now + idx * 0.065);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.065 + 0.22);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.065);
          osc.stop(now + idx * 0.065 + 0.23);
        });
      } else if (type === "gift") {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.13, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.32);
        });
      } else if (type === "err") {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.23);
      }
    } catch (_) {
      // AudioContext optional
    }
  }

  function triggerConfetti(layerId = "arena-confetti-layer") {
    const layer = document.getElementById(layerId);
    if (!layer) return;
    layer.innerHTML = "";
    const colors = ["#e11d48", "#8b5cf6", "#0284c7", "#16a34a", "#eab308", "#f97316"];
    for (let i = 0; i < 20; i += 1) {
      const dot = document.createElement("span");
      dot.className = "confetti-dot";
      dot.style.left = `${18 + Math.random() * 64}%`;
      dot.style.top = `${22 + Math.random() * 42}%`;
      dot.style.backgroundColor = colors[i % colors.length];
      const dx = Math.round((Math.random() - 0.5) * 230);
      const dy = Math.round(-45 - Math.random() * 125);
      dot.style.setProperty("--dx", `${dx}px`);
      dot.style.setProperty("--dy", `${dy}px`);
      layer.appendChild(dot);
    }
  }

  function computeChileanGrade(correct, total) {
    if (total <= 0) return 1.0;
    const pct = (correct / total) * 100;
    const raw = pct < 60 ? 1.0 + 3.0 * (pct / 60) : 4.0 + 3.0 * ((pct - 60) / 40);
    return Math.min(7.0, Math.max(1.0, Math.round(raw * 10) / 10));
  }

  function computeGermanNote(pct) {
    if (pct >= 92) return { note: "1 (Sehr gut)", labelEs: "Sobresaliente" };
    if (pct >= 80) return { note: "2 (Gut)", labelEs: "Muy bien" };
    if (pct >= 65) return { note: "3 (Befriedigend)", labelEs: "Bien / Satisfactorio" };
    if (pct >= 50) return { note: "4 (Ausreichend)", labelEs: "Suficiente" };
    if (pct >= 30) return { note: "5 (Mangelhaft)", labelEs: "Insuficiente" };
    return { note: "6 (Ungenügend)", labelEs: "Deficiente" };
  }

  function getEmojiTierForNota(nota) {
    for (const tier of DATA.gradeEmojiScale) {
      if (nota >= tier.minNota) return tier;
    }
    return DATA.gradeEmojiScale[DATA.gradeEmojiScale.length - 1];
  }

  function normalizeText(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function awardSuccess(uniqueKey, pts = 12) {
    state.streak += 1;
    if (!uniqueKey || !state.solvedIds.has(uniqueKey)) {
      if (uniqueKey) state.solvedIds.add(uniqueKey);
      state.solvedCount += 1;
      state.points += pts;
    } else {
      state.points += 3;
    }

    // Automatische Geschenk-Freischaltungen nach Punkten / Serie
    if (state.solvedCount >= 3) unlockGiftSilent("gift_blood_drop");
    if (state.streak >= 5) unlockGiftSilent("gift_strong_heart");
    if (state.streak >= 10) unlockGiftSilent("gift_rocket");
    if (state.points >= 250) unlockGiftSilent("gift_dolphin");

    DATA.collectibleGifts.forEach((g) => {
      if (state.points >= g.pointsCost) {
        unlockGiftSilent(g.id);
      }
    });

    updateGlobalHeader();
  }

  function registerMistake() {
    state.streak = 0;
    updateGlobalHeader();
  }

  function unlockGiftSilent(giftId) {
    if (!state.unlockedGifts.has(giftId)) {
      state.unlockedGifts.add(giftId);
      renderGiftsTab();
      updateGlobalHeader();
      return true;
    }
    return false;
  }

  function showGiftModal({ emojis, titleDe, descDe, descEs, gradeText }) {
    const dialog = document.getElementById("gift-celebration-dialog");
    if (!dialog) return;
    document.getElementById("gift-dialog-emojis").textContent = emojis || "🎁🌟👑";
    document.getElementById("gift-dialog-title").textContent = titleDe || "🎉 Geschenk-Emoji für dich!";
    document.getElementById("gift-dialog-desc-de").textContent = descDe || "";
    document.getElementById("gift-dialog-desc-es").textContent = descEs || "";

    const gradeBox = document.getElementById("gift-dialog-grade-box");
    if (gradeText) {
      gradeBox.hidden = false;
      gradeBox.textContent = gradeText;
    } else {
      gradeBox.hidden = true;
    }

    playChime("gift");
    if (typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    }
  }

  function recordGradeAndBuildCertificate(moduleNameDe, correct, total, specialGiftId = null) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const notaChile = computeChileanGrade(correct, total);
    const deGrade = computeGermanNote(pct);
    const tier = getEmojiTierForNota(notaChile);
    const toneClass = notaChile >= 6.0 ? "grade-excellent" : notaChile >= 4.5 ? "grade-good" : "grade-warn";

    if (specialGiftId && notaChile >= 5.0) {
      unlockGiftSilent(specialGiftId);
    }
    if (notaChile >= 5.5) unlockGiftSilent("gift_owl");
    if (notaChile >= 6.5) unlockGiftSilent("gift_diamond");
    if (notaChile >= 7.0) unlockGiftSilent("gift_crown_70");

    state.gradeHistory.unshift({
      moduleDe: moduleNameDe,
      nota: notaChile.toFixed(1),
      deNote: deGrade.note,
      emojis: tier.emojis,
      score: `${correct}/${total} (${pct}%)`
    });

    updateGlobalHeader();
    renderGiftsTab();

    return {
      notaChile,
      pct,
      tier,
      html: `
        <h3>🏆 Zeugnis &amp; Emoji-Geschenk — ${moduleNameDe}</h3>
        <div class="grade-boxes-row">
          <div class="grade-big-box ${toneClass}">
            <span class="grade-label">Chilenische Note (1,0 – 7,0)</span>
            <strong class="grade-number">${notaChile.toFixed(1)}</strong>
            <span class="grade-sub">60% Anspruch · DS Santiago</span>
          </div>
          <div class="grade-big-box ${toneClass}">
            <span class="grade-label">Emoji-Bewertung &amp; Geschenk</span>
            <div class="grade-emojis">${tier.emojis}</div>
            <span class="grade-sub">${tier.titleDe}</span>
          </div>
          <div class="grade-big-box ${toneClass}">
            <span class="grade-label">Deutsche Schulnote</span>
            <strong class="grade-number">${deGrade.note}</strong>
            <span class="grade-sub">${deGrade.labelEs}</span>
          </div>
          <div class="grade-big-box">
            <span class="grade-label">Erreichte Punkte</span>
            <strong class="grade-number">${correct} / ${total}</strong>
            <span class="grade-sub">${pct}% richtig gelöst</span>
          </div>
        </div>
        <div class="gift-reward-banner">
          <div>${tier.giftDe}</div>
          <span class="es-sub" lang="es">${tier.titleEs} · ${tier.giftEs}</span>
        </div>
      `
    };
  }

  function updateGlobalHeader() {
    document.getElementById("global-correct-count").textContent = state.solvedCount;
    document.getElementById("global-streak-count").textContent = state.streak;
    document.getElementById("global-points-count").textContent = state.points;
    document.getElementById("header-gifts-count").textContent = `${state.unlockedGifts.size} / ${DATA.collectibleGifts.length}`;

    const liveGradeEl = document.getElementById("global-live-grade");
    if (state.gradeHistory.length > 0) {
      liveGradeEl.textContent = `${state.gradeHistory[0].nota} ${state.gradeHistory[0].emojis.slice(0, 2)}`;
    } else {
      liveGradeEl.textContent = "—";
    }

    let rankText = "🐣 Rang 1: Blut-Entdeckerin";
    if (state.solvedCount >= 45) {
      rankText = "👑 Rang 5: Naturkunde-Königin (Note 7,0!)";
    } else if (state.solvedCount >= 30) {
      rankText = "🕵️‍♀️ Rang 4: 5-Fehler-Meisterdetektivin";
    } else if (state.solvedCount >= 18) {
      rankText = "🫀 Rang 3: Herz- & Kreislauf-Ärztin";
    } else if (state.solvedCount >= 7) {
      rankText = "🛡️ Rang 2: Immun-Ritterin";
    }

    const headerRank = document.getElementById("header-rank-pill");
    if (headerRank) headerRank.textContent = rankText;
    const arenaRank = document.getElementById("arena-rank-badge");
    if (arenaRank) arenaRank.textContent = rankText;
  }

  // =========================================================================
  // 2. HEADER, SPANISCH-TOGGLE, TABS (MODERN WEB GUIDANCE `tabs`) & UMLAUTS
  // =========================================================================
  function initHeaderAndTabs() {
    const btnLang = document.getElementById("btn-toggle-es");
    const langText = document.getElementById("lang-toggle-text");
    btnLang.addEventListener("click", () => {
      state.showSpanish = !state.showSpanish;
      document.body.classList.toggle("show-es", state.showSpanish);
      btnLang.setAttribute("aria-pressed", String(state.showSpanish));
      langText.textContent = state.showSpanish
        ? "Spanisch-Hilfe & Tipps: AN"
        : "Spanisch-Hilfe: AUS (100% Deutsch)";
    });

    document.getElementById("btn-open-gift-modal").addEventListener("click", () => {
      const targetBtn = document.getElementById("tabbtn-geschenke");
      if (targetBtn) targetBtn.click();
    });

    const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
    const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

    function activateTab(selectedBtn) {
      const targetId = selectedBtn.dataset.tab;
      for (const tab of tabBtns) {
        const isSelected = tab === selectedBtn;
        tab.classList.toggle("active", isSelected);
        tab.setAttribute("aria-selected", String(isSelected));
        tab.toggleAttribute("focusgroupstart", isSelected);
      }
      for (const panel of tabPanels) {
        const isMatch = panel.id === targetId;
        panel.classList.toggle("active", isMatch);
        panel.hidden = !isMatch;
      }
      try {
        selectedBtn.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
      } catch (_) {
        selectedBtn.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    }

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => activateTab(btn));
    });

    // Umlaut-Buttons für Vokabel-Inputs
    document.querySelectorAll(".umlaut-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ch = btn.dataset.char;
        const input = state.lastFocusedInput;
        if (!input || input.disabled) return;
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? input.value.length;
        input.value = input.value.slice(0, start) + ch + input.value.slice(end);
        input.focus();
        input.setSelectionRange(start + ch.length, start + ch.length);
      });
    });
  }

  // =========================================================================
  // 3. TAB 1: HEFT-KARTEN, KLAPPKARTEN (S. 5–6) & VOKABEL-TABELLE
  // =========================================================================
  function initTab1Heft() {
    const viewBtns = document.querySelectorAll("[data-heft-view]");
    const viewPosters = document.getElementById("heft-view-posters");
    const viewKlapp = document.getElementById("heft-view-klappkarten");
    const viewVocab = document.getElementById("heft-view-vocab");

    viewBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        viewBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const mode = btn.dataset.heftView;
        viewPosters.hidden = mode !== "posters";
        viewKlapp.hidden = mode !== "klappkarten";
        viewVocab.hidden = mode !== "vocab";
      });
    });

    // Abkürzungs-Chips rendern
    const abbrContainer = document.getElementById("abbr-chips-container");
    abbrContainer.innerHTML = DATA.abbreviationsList
      .map(
        (a) =>
          `<span class="info-chip"><strong>${a.abbr}</strong> = ${a.fullDe} <span class="es-inline" lang="es">(${a.fullEs})</span></span>`
      )
      .join("");

    renderKlappkarten();
    document.getElementById("btn-kk-evaluate").addEventListener("click", evaluateKlappkarten);
    document.getElementById("btn-kk-reset").addEventListener("click", () => {
      document.getElementById("kk-grade-banner").hidden = true;
      renderKlappkarten();
    });

    // Vokabel-Tabelle
    renderVocabTable();
    document.getElementById("vocab-block-select").addEventListener("change", () => {
      state.vocabOnlyErrors = false;
      renderVocabTable();
    });
    document.getElementById("vocab-mode-select").addEventListener("change", renderVocabTable);
    document.getElementById("btn-vocab-check").addEventListener("click", evaluateVocabTable);
    document.getElementById("btn-vocab-reset").addEventListener("click", () => {
      state.vocabOnlyErrors = false;
      document.getElementById("vocab-grade-banner").hidden = true;
      renderVocabTable();
    });
    document.getElementById("btn-vocab-retry").addEventListener("click", () => {
      if (state.vocabErrorIds.size === 0) return;
      state.vocabOnlyErrors = true;
      renderVocabTable();
    });
  }

  function renderKlappkarten() {
    const container = document.getElementById("klappkarten-container");
    container.innerHTML = "";

    DATA.klappkarten.forEach((card) => {
      const article = document.createElement("article");
      article.className = "klapp-card";

      const rowsHtml = card.rows
        .map((row) => {
          const shuffled = row.optionsDe
            .map((text, idx) => ({ text, isCorrect: idx === row.correctIdx }))
            .sort(() => Math.random() - 0.5);

          const optsHtml = [
            `<option value="">— Vollständigen Satz auf Deutsch wählen —</option>`,
            ...shuffled.map(
              (o) => `<option value="${o.isCorrect ? "1" : "0"}">${o.text}</option>`
            )
          ].join("");

          return `
            <div class="klapp-row-box" data-row-id="${row.id}">
              <div class="klapp-clues">
                <span class="klapp-clue-left">${row.leftClueDe}</span>
                <span class="klapp-clue-right">${row.rightClueDe}</span>
              </div>
              <select class="task-select kk-select" data-row-id="${row.id}" aria-label="${row.leftClueDe}">
                ${optsHtml}
              </select>
              <small class="es-sub" lang="es">💡 Tipp: ${row.tipEs}</small>
              <div class="slot-feedback kk-fb" hidden></div>
            </div>
          `;
        })
        .join("");

      article.innerHTML = `
        <div class="klapp-card-header">
          <h4>${card.titleDe}</h4>
          <span class="es-sub" lang="es">${card.titleEs}</span>
        </div>
        <div class="klapp-rows-list">${rowsHtml}</div>
      `;
      container.appendChild(article);
    });
  }

  function evaluateKlappkarten() {
    let correct = 0;
    let total = 0;

    DATA.klappkarten.forEach((card) => {
      card.rows.forEach((row) => {
        total += 1;
        const box = document.querySelector(`.klapp-row-box[data-row-id="${row.id}"]`);
        const sel = box.querySelector(".kk-select");
        const fb = box.querySelector(".kk-fb");
        fb.hidden = false;
        sel.classList.remove("input-ok", "input-err");

        if (sel.value === "1") {
          correct += 1;
          sel.classList.add("input-ok");
          fb.style.color = "#15803d";
          fb.textContent = `✓ Richtig: ${row.fullSentenceDe}`;
          awardSuccess("kk_" + row.id, 10);
        } else {
          sel.classList.add("input-err");
          fb.style.color = "#b91c1c";
          fb.textContent = `✗ Richtige Lösung: ${row.fullSentenceDe}`;
        }
      });
    });

    const cert = recordGradeAndBuildCertificate("Heft-Klappkarten (Seite 5 & 6)", correct, total, "gift_microscope");
    const banner = document.getElementById("kk-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderVocabTable() {
    const tbody = document.getElementById("vocab-tbody");
    const blockFilter = document.getElementById("vocab-block-select").value;
    const mode = document.getElementById("vocab-mode-select").value;
    tbody.innerHTML = "";

    let items = DATA.vocabItems.filter((it) => blockFilter === "all" || it.block === blockFilter);
    if (state.vocabOnlyErrors && state.vocabErrorIds.size > 0) {
      items = items.filter((it) => state.vocabErrorIds.has(it.id));
    }

    let currentBlock = "";
    items.forEach((item, idx) => {
      if (item.block !== currentBlock) {
        currentBlock = item.block;
        const blockTr = document.createElement("tr");
        blockTr.className = "block-row";
        blockTr.innerHTML = `<td colspan="5">${currentBlock}</td>`;
        tbody.appendChild(blockTr);
      }

      const tr = document.createElement("tr");
      tr.dataset.vocabId = item.id;

      let colDeHtml = `<strong>${item.termDe}</strong>`;
      let colEsHtml = `<span>${item.termEs}</span><small class="es-sub" lang="es">💡 ${item.tipEs}</small>`;

      if (mode === "ask_de") {
        colDeHtml = `<input type="text" class="vocab-input" data-vid="${item.id}" data-lang="de" placeholder="Auf Deutsch schreiben..." aria-label="Deutscher Begriff für ${item.termEs}">`;
      } else if (mode === "ask_es") {
        colEsHtml = `<input type="text" class="vocab-input" data-vid="${item.id}" data-lang="es" placeholder="En español..." aria-label="Spanische Bedeutung für ${item.termDe}">`;
      }

      tr.innerHTML = `
        <td><strong>${idx + 1}</strong></td>
        <td>${colDeHtml}</td>
        <td>${colEsHtml}</td>
        <td>${item.hintDe}</td>
        <td class="vocab-status-cell" id="vstatus-${item.id}">${mode === "study" ? "📖" : "—"}</td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll(".vocab-input").forEach((inp) => {
      inp.addEventListener("focus", () => {
        state.lastFocusedInput = inp;
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          evaluateVocabTable();
        }
      });
    });
  }

  function evaluateVocabTable() {
    const mode = document.getElementById("vocab-mode-select").value;
    if (mode === "study") return;

    const inputs = Array.from(document.querySelectorAll("#vocab-tbody .vocab-input"));
    if (inputs.length === 0) return;

    let correct = 0;
    inputs.forEach((inp) => {
      const vid = inp.dataset.vid;
      const lang = inp.dataset.lang;
      const item = DATA.vocabItems.find((it) => it.id === vid);
      const statusCell = document.getElementById(`vstatus-${vid}`);
      const userVal = normalizeText(inp.value);

      const accepted = (lang === "de" ? item.synonymsDe : item.synonymsEs).map(normalizeText);
      const isOk = userVal.length > 0 && accepted.some((acc) => userVal === acc || userVal.includes(acc));

      inp.classList.remove("input-ok", "input-err");
      if (isOk) {
        correct += 1;
        inp.classList.add("input-ok");
        statusCell.innerHTML = `<strong>✅ Richtig!</strong>`;
        state.vocabErrorIds.delete(vid);
        awardSuccess("vocab_" + vid, 8);
      } else {
        inp.classList.add("input-err");
        const expected = lang === "de" ? item.termDe : item.termEs;
        statusCell.innerHTML = `<span style="color:#b91c1c;font-weight:700;">✗ Lösung: ${expected}</span>`;
        state.vocabErrorIds.add(vid);
      }
    });

    const retryBtn = document.getElementById("btn-vocab-retry");
    retryBtn.hidden = state.vocabErrorIds.size === 0;

    const cert = recordGradeAndBuildCertificate("Vokabel- & Begriffe-Trainer", correct, inputs.length);
    const banner = document.getElementById("vocab-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // =========================================================================
  // 4. TAB 2: DAS BLUT — SCHEMA (SEITE 1) & COMIC-FIGUREN (SEITE 2)
  // =========================================================================
  function initTab2Blut() {
    // 1. Schema-Selects füllen
    DATA.blutSchemaSlots.forEach((slot) => {
      const sel = document.getElementById(`sel-${slot.id}`);
      if (!sel) return;
      const shuffled = [...slot.optionsDe].sort(() => Math.random() - 0.5);
      sel.innerHTML =
        `<option value="">— Begriff wählen —</option>` +
        shuffled.map((opt) => `<option value="${opt}">${opt}</option>`).join("");
    });

    // 2. Pinsel-Buttons für das Comic-Bild
    const brushBtns = document.querySelectorAll(".brush-btn");
    brushBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        brushBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeBrush = btn.dataset.brush;
      });
    });

    renderComicSvg();
    renderComicControls();

    document.getElementById("btn-blut-evaluate").addEventListener("click", evaluateTab2Blut);
    document.getElementById("btn-blut-reset").addEventListener("click", () => {
      state.comicColors = {
        comic_rote: "",
        comic_weisse: "",
        comic_plaettchen: "",
        comic_plasma: ""
      };
      document.getElementById("blut-grade-banner").hidden = true;
      initTab2Blut();
      document.querySelectorAll("#tab-blut .slot-feedback").forEach((el) => {
        el.hidden = true;
      });
      document.querySelectorAll("#tab-blut select").forEach((s) => {
        s.classList.remove("input-ok", "input-err");
      });
    });
  }

  function getHexForColorName(colorName, defaultHex = "#f8fafc") {
    if (colorName === "rot") return "#ef4444";
    if (colorName === "blau") return "#3b82f6";
    if (colorName === "braun") return "#b45309";
    if (colorName === "gelb") return "#fde047";
    return defaultHex;
  }

  function renderComicSvg() {
    const stage = document.getElementById("comic-svg-stage");
    if (!stage) return;

    const cRote = getHexForColorName(state.comicColors.comic_rote, "#e2e8f0");
    const cWeisseB = getHexForColorName(state.comicColors.comic_weisse, "#e2e8f0");
    const cPlaettchen = getHexForColorName(state.comicColors.comic_plaettchen, "#e2e8f0");
    const cPlasma = getHexForColorName(state.comicColors.comic_plasma, "#f8fafc");

    stage.innerHTML = `
      <svg viewBox="0 0 520 300" aria-label="Die Bestandteile des Blutes als Comic-Figuren (Seite 2)">
        <rect x="2" y="2" width="516" height="296" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>

        <!-- d) Das Blutplasma (Flüssigkeit im Blutgefäß) -->
        <g class="comic-click-zone" data-target="comic_plasma" style="cursor:pointer;">
          <path d="M 35 155 Q 260 220 485 165 L 485 268 Q 260 295 35 255 Z"
                fill="${cPlasma}" stroke="#64748b" stroke-width="2.2"/>
          <text x="260" y="276" text-anchor="middle" font-size="12" font-weight="900" fill="#334155">
            💧 d) Blutplasma (hier klicken zum Anmalen!)
          </text>
        </g>

        <!-- Blutgefäß-Backsteinmauer links und rechts -->
        <g fill="#f1f5f9" stroke="#334155" stroke-width="2">
          <rect x="25" y="105" width="135" height="55" rx="4"/>
          <line x1="25" y1="123" x2="160" y2="123"/><line x1="25" y1="141" x2="160" y2="141"/>
          <line x1="65" y1="105" x2="65" y2="123"/><line x1="115" y1="105" x2="115" y2="123"/>
          <line x1="90" y1="123" x2="90" y2="141"/>
          <rect x="360" y="110" width="135" height="60" rx="4"/>
          <line x1="360" y1="130" x2="495" y2="130"/><line x1="360" y1="150" x2="495" y2="150"/>
          <line x1="405" y1="110" x2="405" y2="130"/><line x1="450" y1="130" x2="450" y2="150"/>
        </g>

        <!-- c) Blutplättchen ("P") als Bauarbeiter oben an der Mauerlücke -->
        <g class="comic-click-zone" data-target="comic_plaettchen" style="cursor:pointer;">
          <rect x="175" y="16" width="170" height="92" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="4,3"/>
          <!-- Mauer-Reparaturstelle -->
          <rect x="190" y="72" width="140" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
          <!-- 3 Bauarbeiter mit P -->
          <circle cx="215" cy="42" r="11" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <rect x="202" y="53" width="26" height="26" rx="6" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <text x="215" y="71" text-anchor="middle" font-size="14" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">P</text>

          <circle cx="260" cy="38" r="11" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <rect x="247" y="49" width="26" height="26" rx="6" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <text x="260" y="67" text-anchor="middle" font-size="14" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">P</text>

          <circle cx="305" cy="42" r="11" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <rect x="292" y="53" width="26" height="26" rx="6" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <text x="305" y="71" text-anchor="middle" font-size="14" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">P</text>
          <text x="260" y="100" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">🧱 c) Blutplättchen (P)</text>
        </g>

        <!-- a) Rote Blutkörperchen ("R") mit Sauerstoff-Ringen -->
        <g class="comic-click-zone" data-target="comic_rote" style="cursor:pointer;">
          <!-- Figur R1 -->
          <circle cx="215" cy="142" r="16" fill="${cRote}" stroke="#0f172a" stroke-width="2.2"/>
          <circle cx="215" cy="142" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="203" y="160" width="24" height="26" rx="5" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <text x="215" y="178" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">R</text>

          <!-- Figur R2 -->
          <circle cx="275" cy="148" r="16" fill="${cRote}" stroke="#0f172a" stroke-width="2.2"/>
          <circle cx="275" cy="148" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="263" y="166" width="24" height="26" rx="5" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <text x="275" y="184" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">R</text>

          <!-- Figur R3 -->
          <circle cx="335" cy="142" r="16" fill="${cRote}" stroke="#0f172a" stroke-width="2.2"/>
          <circle cx="335" cy="142" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="323" y="160" width="24" height="26" rx="5" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <text x="335" y="178" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">R</text>
          <text x="275" y="205" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">🔴 a) Rote Blutkörperchen (R)</text>
        </g>

        <!-- b) Weiße Blutkörperchen (Helm "W" + Schwert + Schild "B") -->
        <g class="comic-click-zone" data-target="comic_weisse" style="cursor:pointer;">
          <!-- Wächter 1 -->
          <path d="M 62 192 Q 78 174 94 192 Z" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <text x="78" y="190" text-anchor="middle" font-size="9" font-weight="900" fill="#0f172a">W</text>
          <circle cx="78" cy="202" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <!-- Schwert -->
          <line x1="56" y1="180" x2="56" y2="222" stroke="#475569" stroke-width="3.5"/>
          <line x1="49" y1="210" x2="63" y2="210" stroke="#0f172a" stroke-width="2.5"/>
          <!-- Schild mit B -->
          <path d="M 86 202 L 114 202 L 114 226 Q 100 240 86 226 Z" fill="${cWeisseB}" stroke="#0f172a" stroke-width="2.2"/>
          <text x="100" y="224" text-anchor="middle" font-size="15" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">B</text>

          <!-- Wächter 2 -->
          <path d="M 132 198 Q 148 180 164 198 Z" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <text x="148" y="196" text-anchor="middle" font-size="9" font-weight="900" fill="#0f172a">W</text>
          <circle cx="148" cy="208" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <line x1="126" y1="186" x2="126" y2="228" stroke="#475569" stroke-width="3.5"/>
          <line x1="119" y1="216" x2="133" y2="216" stroke="#0f172a" stroke-width="2.5"/>
          <path d="M 156 208 L 184 208 L 184 232 Q 170 246 156 232 Z" fill="${cWeisseB}" stroke="#0f172a" stroke-width="2.2"/>
          <text x="170" y="230" text-anchor="middle" font-size="15" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">B</text>

          <text x="122" y="254" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">🛡️ b) Weiße Blutkörperchen (Schild „B“)</text>
        </g>
      </svg>
    `;

    stage.querySelectorAll(".comic-click-zone").forEach((zone) => {
      zone.addEventListener("click", () => {
        const targetId = zone.dataset.target;
        state.comicColors[targetId] = state.activeBrush;
        const sel = document.getElementById(`sel-${targetId}`);
        if (sel) sel.value = state.activeBrush;
        renderComicSvg();
      });
    });
  }

  function renderComicControls() {
    const list = document.getElementById("comic-controls-list");
    if (!list) return;
    list.innerHTML = "";

    DATA.comicColoringTargets.forEach((t) => {
      const row = document.createElement("div");
      row.className = "task-row-card";
      row.innerHTML = `
        <div class="task-row-header">
          <strong>${t.nameDe}</strong>
          <span class="step-badge">${t.letterBadge}</span>
        </div>
        <select id="sel-${t.id}" class="task-select comic-color-select" data-target="${t.id}" aria-label="${t.nameDe}">
          <option value="">— Farbe wählen —</option>
          <option value="rot" ${state.comicColors[t.id] === "rot" ? "selected" : ""}>🔴 rot (rojo)</option>
          <option value="blau" ${state.comicColors[t.id] === "blau" ? "selected" : ""}>🔵 blau (azul)</option>
          <option value="braun" ${state.comicColors[t.id] === "braun" ? "selected" : ""}>🟤 braun (café)</option>
          <option value="gelb" ${state.comicColors[t.id] === "gelb" ? "selected" : ""}>🟡 gelb (amarillo)</option>
        </select>
        <small class="es-sub" lang="es">${t.tipEs}</small>
        <div class="slot-feedback" id="fb-${t.id}" hidden></div>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll(".comic-color-select").forEach((sel) => {
      sel.addEventListener("change", () => {
        const tid = sel.dataset.target;
        state.comicColors[tid] = sel.value;
        renderComicSvg();
      });
    });
  }

  function evaluateTab2Blut() {
    let correct = 0;
    const total = DATA.blutSchemaSlots.length + DATA.comicColoringTargets.length;

    // 1. Schema prüfen
    DATA.blutSchemaSlots.forEach((slot) => {
      const sel = document.getElementById(`sel-${slot.id}`);
      const fb = document.getElementById(`fb-${slot.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");

      if (sel.value === slot.correctDe) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig: ${slot.correctDe}`;
        awardSuccess("blut_slot_" + slot.id, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtig wäre: ${slot.correctDe}`;
      }
    });

    // 2. Comic prüfen
    DATA.comicColoringTargets.forEach((t) => {
      const sel = document.getElementById(`sel-${t.id}`);
      const fb = document.getElementById(`fb-${t.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");

      if (sel.value === t.expectedColor) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Super (${t.expectedColor}): ${t.roleExplanationDe}`;
        awardSuccess("comic_" + t.id, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtige Farbe ist „${t.expectedColor}“! ${t.roleExplanationDe}`;
      }
    });

    unlockGiftSilent("gift_plasma_sun");
    if (correct >= 7) unlockGiftSilent("gift_immune_knight");
    if (correct === total) unlockGiftSilent("gift_platelet_builder");

    const cert = recordGradeAndBuildCertificate("Das Blut: Schema & Comic-Figuren (S. 1 & 2)", correct, total, "gift_immune_knight");
    const banner = document.getElementById("blut-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // =========================================================================
  // 5. TAB 3: DER BLUTKREISLAUF — SCHEMA BESCHRIFTEN (SEITE 3 & 4)
  // =========================================================================
  function initTab3Kreislauf() {
    renderPage4KreislaufSvg();

    // 1. Nummern 1–5
    const numList = document.getElementById("kr-numbers-list");
    numList.innerHTML = DATA.kreislaufNumbersTask
      .map((item) => {
        const opts = item.optionsDe
          .map((o) => `<option value="${o}">${o}</option>`)
          .join("");
        return `
          <div class="task-row-card">
            <div class="task-row-header">
              <strong>Nummer ${item.num} im Schema (Seite 4):</strong>
              <span class="step-badge">Nr. ${item.num}</span>
            </div>
            <select id="sel-kr-num-${item.num}" class="task-select" aria-label="Begriff für Nummer ${item.num}">
              <option value="">— Begriff für Nr. ${item.num} wählen —</option>
              ${opts}
            </select>
            <small class="es-sub" lang="es">💡 ${item.tipEs}</small>
            <div class="slot-feedback" id="fb-kr-num-${item.num}" hidden></div>
          </div>
        `;
      })
      .join("");

    // 2. 6 Beschriftungen (Gefäße & Herzhälften)
    const lblList = document.getElementById("kr-labels-list");
    lblList.innerHTML = DATA.kreislaufLabelsTask
      .map((item, idx) => {
        const opts = item.optionsDe
          .map((o) => `<option value="${o}">${o}</option>`)
          .join("");
        return `
          <div class="task-row-card">
            <div class="task-row-header">
              <strong>${idx + 1}. ${item.posDe}</strong>
            </div>
            <select id="sel-${item.id}" class="task-select" aria-label="${item.posDe}">
              <option value="">— Richtigen Fachbegriff wählen —</option>
              ${opts}
            </select>
            <small class="es-sub" lang="es">💡 ${item.tipEs}</small>
            <div class="slot-feedback" id="fb-${item.id}" hidden></div>
          </div>
        `;
      })
      .join("");

    // 3. 4 Gasaustausch-Sätze
    const gsList = document.getElementById("kr-gasaustausch-list");
    gsList.innerHTML = DATA.gasaustauschSortingTask
      .map((item) => {
        const opts = item.options
          .map((o) => `<option value="${o}">${o}</option>`)
          .join("");
        return `
          <div class="task-row-card">
            <div class="task-row-header">
              <strong>„${item.sentenceDe}“</strong>
            </div>
            <small class="es-sub" lang="es">Traducción: «${item.sentenceEs}»</small>
            <select id="sel-${item.id}" class="task-select mt-xs" aria-label="${item.sentenceDe}">
              <option value="">— Wo passiert das im Schema? —</option>
              ${opts}
            </select>
            <div class="slot-feedback" id="fb-${item.id}" hidden></div>
          </div>
        `;
      })
      .join("");

    document.getElementById("btn-kr-evaluate").addEventListener("click", evaluateTab3Kreislauf);
    document.getElementById("btn-kr-reset").addEventListener("click", () => {
      document.getElementById("kr-grade-banner").hidden = true;
      initTab3Kreislauf();
    });
  }

  function renderPage4KreislaufSvg() {
    const stage = document.getElementById("kreislauf-page4-svg");
    if (!stage) return;

    stage.innerHTML = `
      <svg viewBox="0 0 420 340" aria-label="Schema des Blutkreislaufs von Seite 4 mit Nummern 1 bis 5">
        <rect x="2" y="2" width="416" height="336" rx="12" fill="#ffffff" stroke="#cbd5e1"/>

        <!-- 1: Ein-/Ausatmung Pfeile oben -->
        <line x1="204" y1="14" x2="204" y2="54" stroke="#0284c7" stroke-width="3"/>
        <polygon points="204,58 199,48 209,48" fill="#0284c7"/>
        <line x1="216" y1="54" x2="216" y2="14" stroke="#64748b" stroke-width="3"/>
        <polygon points="216,10 211,20 221,20" fill="#64748b"/>
        <circle cx="176" cy="28" r="12" fill="#0f172a"/>
        <text x="176" y="33" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">1</text>

        <!-- 2: Lunge (hellblaues Organ oben) -->
        <path d="M 155 105 Q 155 55 210 55 Q 265 55 265 105 Q 265 128 210 128 Q 155 128 155 105 Z"
              fill="#e0f2fe" stroke="#38bdf8" stroke-width="2.5"/>
        <circle cx="136" cy="76" r="12" fill="#0f172a"/>
        <text x="136" y="81" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">2</text>

        <!-- 3: Lungenkreislauf (Obere Schleife: links blau = Lungenarterie, rechts rot = Lungenvene) -->
        <path d="M 192 175 L 192 136 L 98 136 L 98 92 L 182 92"
              fill="none" stroke="#2563eb" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 238 92 L 322 92 L 322 136 L 228 136 L 228 175"
              fill="none" stroke="#dc2626" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Kapillchnetz & Pfeile in der Lunge -->
        <ellipse cx="210" cy="92" rx="30" ry="12" fill="#ffffff" stroke="#475569" stroke-width="2"/>
        <text x="210" y="96" text-anchor="middle" font-size="9.5" font-weight="900" fill="#0f172a">Gasaustausch</text>
        <circle cx="72" cy="114" r="12" fill="#0f172a"/>
        <text x="72" y="119" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">3</text>
        <text x="115" y="80" font-size="10" font-weight="800" fill="#1d4ed8">Lungenarterie (blau)</text>
        <text x="305" y="80" text-anchor="middle" font-size="10" font-weight="800" fill="#b91c1c">Lungenvene (rot)</text>

        <!-- 4: Herz in der Mitte (links im Bild = rechte Herzhälfte blau; rechts im Bild = linke Herzhälfte rot mit *) -->
        <path d="M 176 175 L 210 175 L 210 232 Q 178 220 176 175 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2.5"/>
        <path d="M 210 175 L 244 175 Q 242 220 210 232 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="2.5"/>
        <text x="226" y="206" text-anchor="middle" font-size="16" font-weight="900" fill="#ffffff">*</text>
        <circle cx="154" cy="204" r="12" fill="#0f172a"/>
        <text x="154" y="209" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">4</text>

        <!-- Körperkreislauf (Untere Schleife: rechts rot = Körperarterie, links blau = Körpervene) -->
        <path d="M 232 215 L 332 215 L 332 282 L 238 282"
              fill="none" stroke="#dc2626" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 182 282 L 88 282 L 88 215 L 188 215"
              fill="none" stroke="#2563eb" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="342" y="252" font-size="10" font-weight="800" fill="#b91c1c">Körperarterie</text>
        <text x="24" y="252" font-size="10" font-weight="800" fill="#1d4ed8">Körpervene</text>

        <!-- 5: Muskelzellen unten -->
        <path d="M 48 302 Q 210 268 372 302 Q 210 332 48 302 Z" fill="#fecdd3" stroke="#be123c" stroke-width="2.2"/>
        <ellipse cx="210" cy="282" rx="30" ry="11" fill="#ffffff" stroke="#475569" stroke-width="2"/>
        <circle cx="154" cy="306" r="12" fill="#0f172a"/>
        <text x="154" y="311" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">5</text>
      </svg>
    `;
  }

  function evaluateTab3Kreislauf() {
    let correct = 0;
    const total =
      DATA.kreislaufNumbersTask.length +
      DATA.kreislaufLabelsTask.length +
      DATA.gasaustauschSortingTask.length;

    DATA.kreislaufNumbersTask.forEach((item) => {
      const sel = document.getElementById(`sel-kr-num-${item.num}`);
      const fb = document.getElementById(`fb-kr-num-${item.num}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === item.correctDe) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig: Nr. ${item.num} = ${item.correctDe}`;
        awardSuccess("kr_num_" + item.num, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtig ist: Nr. ${item.num} = ${item.correctDe}`;
      }
    });

    DATA.kreislaufLabelsTask.forEach((item) => {
      const sel = document.getElementById(`sel-${item.id}`);
      const fb = document.getElementById(`fb-${item.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === item.correctDe) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig: ${item.correctDe}`;
        awardSuccess("kr_lbl_" + item.id, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtig ist: ${item.correctDe}`;
      }
    });

    DATA.gasaustauschSortingTask.forEach((item) => {
      const sel = document.getElementById(`sel-${item.id}`);
      const fb = document.getElementById(`fb-${item.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === item.correctLocation) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig (${item.correctLocation}): ${item.explanationDe}`;
        awardSuccess("kr_gs_" + item.id, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Ort: ${item.correctLocation} — ${item.explanationDe}`;
      }
    });

    const cert = recordGradeAndBuildCertificate("Blutkreislauf-Labor (Seite 3 & 4)", correct, total, "gift_fresh_lungs");
    const banner = document.getElementById("kr-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // =========================================================================
  // 6. TAB 4: RAUCHER-MODELL (SEITE 10) & 5-FEHLER-DETEKTIV (SEITE 11)
  // =========================================================================
  function initTab4Tabak() {
    document.querySelectorAll(".smoker-paint-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.paint;
        state.smokerPaint[key] = !state.smokerPaint[key];
        btn.classList.toggle("active", state.smokerPaint[key]);
        btn.setAttribute("aria-pressed", String(state.smokerPaint[key]));
        renderSmokerGasaustauschSvg();
      });
    });

    renderSmokerGasaustauschSvg();
    renderSmokerQuestions();
    renderFiveErrorsTasks();

    document.getElementById("btn-tabak-evaluate").addEventListener("click", evaluateTab4Tabak);
    document.getElementById("btn-tabak-reset").addEventListener("click", () => {
      document.getElementById("tabak-grade-banner").hidden = true;
      initTab4Tabak();
    });
  }

  function renderSmokerGasaustauschSvg() {
    const stage = document.getElementById("smoker-gasaustausch-svg");
    if (!stage) return;

    const showTeer = state.smokerPaint.teer;
    const showNikotin = state.smokerPaint.nikotin;
    const showCo = state.smokerPaint.co;

    stage.innerHTML = `
      <svg viewBox="0 0 460 265" aria-label="Gasaustausch eines Rauchers (Seite 10)">
        <rect x="2" y="2" width="456" height="261" rx="12" fill="#ffffff" stroke="#cbd5e1"/>

        <!-- Lungenbläschen oben in der Mitte -->
        <path d="M 225 18 L 225 55" stroke="#475569" stroke-width="18" stroke-linecap="round"/>
        <circle cx="225" cy="88" r="38" fill="#fef2f2" stroke="#334155" stroke-width="2.5"/>
        <text x="315" y="64" font-size="12" font-weight="900" fill="#0f172a">Lungenbläschen</text>

        <!-- 1. BRAUN: Teer klebt in den Lungenbläschen -->
        ${
          showTeer
            ? `
          <path d="M 193 78 A 32 32 0 1 0 257 78" fill="none" stroke="#78350f" stroke-width="11" stroke-linecap="round"/>
          <text x="328" y="84" font-size="11.5" font-weight="900" fill="#78350f">🟤 1. Der Teer (braun)</text>
          <text x="328" y="98" font-size="10" font-weight="700" fill="#78350f">blockiert Sauerstoff!</text>
        `
            : ""
        }

        <!-- Blutgefäß-Schleife von Lungenbläschen zur Zelle und zurück zur Lunge -->
        <path d="M 225 128 C 385 128, 395 215, 225 220 C 75 220, 75 95, 185 88"
              fill="none" stroke="#334155" stroke-width="18" stroke-linecap="round"/>
        <path d="M 225 128 C 385 128, 395 215, 225 220 C 75 220, 75 95, 185 88"
              fill="none" stroke="#f8fafc" stroke-width="13" stroke-linecap="round"/>

        <!-- 2. LILA: Nikotin verengt die Blutgefäße -->
        ${
          showNikotin
            ? `
          <path d="M 275 133 C 365 142, 368 198, 265 212" fill="none" stroke="#9333ea" stroke-width="9" stroke-dasharray="10,4"/>
          <text x="358" y="152" font-size="11.5" font-weight="900" fill="#7e22ce">🟣 2. Nikotin (lila)</text>
          <text x="358" y="166" font-size="10" font-weight="700" fill="#7e22ce">verengt Blutgefäß!</text>
        `
            : ""
        }

        <!-- 3. GRAU: Kohlenstoffmonoxid (CO) schneller als Sauerstoff von Lungenbläschen zur Zelle -->
        ${
          showCo
            ? `
          <path d="M 225 102 L 225 128 C 350 128, 360 205, 190 215"
                fill="none" stroke="#64748b" stroke-width="6" stroke-dasharray="6,4"/>
          <circle cx="295" cy="148" r="7" fill="#475569"/>
          <circle cx="322" cy="182" r="7" fill="#475569"/>
          <circle cx="255" cy="212" r="7" fill="#475569"/>
          <text x="245" y="246" font-size="11" font-weight="900" fill="#475569">
            ⚪ 3. Kohlenmonoxid (grau): schneller als Sauerstoff!
          </text>
        `
            : ""
        }

        <!-- Rote Sauerstoff-Punkte (weniger wegen Teer & CO) -->
        <circle cx="225" cy="95" r="5.5" fill="#ef4444"/>
        <circle cx="252" cy="130" r="5" fill="#ef4444"/>

        <!-- Zelle (Stern unten links) -->
        <polygon points="135,172 147,192 170,188 156,206 168,225 145,222 132,240 124,218 102,220 116,202 105,184 126,188"
                 fill="#fef08a" stroke="#ca8a04" stroke-width="2.2"/>
        <circle cx="140" cy="206" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
        <text x="140" y="210" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">N</text>
        <text x="72" y="238" font-size="12" font-weight="900" fill="#0f172a">Zelle (wenig Energie!)</text>
        <text x="86" y="72" font-size="11" font-weight="800" fill="#2563eb">↖ zur Lunge (CO₂)</text>
      </svg>
    `;
  }

  function renderSmokerQuestions() {
    const container = document.getElementById("smoker-questions-list");
    if (!container) return;
    container.innerHTML = DATA.smokerModelSteps
      .map((step) => {
        const optsHtml = step.options
          .map((o, idx) => `<option value="${o.correct ? "1" : "0"}">${o.textDe}</option>`)
          .join("");
        return `
          <div class="task-row-card">
            <div class="task-row-header">
              <strong>${step.questionDe}</strong>
            </div>
            <small class="es-sub" lang="es">💡 ${step.tipEs}</small>
            <select id="sel-${step.id}" class="task-select mt-xs" aria-label="${step.questionDe}">
              <option value="">— Antwort und Farbe auswählen —</option>
              ${optsHtml}
            </select>
            <div class="slot-feedback" id="fb-${step.id}" hidden></div>
          </div>
        `;
      })
      .join("");
  }

  function renderFiveErrorsTasks() {
    const container = document.getElementById("five-errors-list");
    if (!container) return;
    container.innerHTML = DATA.fiveErrorsSentences
      .map((s) => {
        const optsHtml = s.optionsDe
          .map((txt, idx) => `<option value="${idx === s.correctIdx ? "1" : "0"}">${txt}</option>`)
          .join("");
        return `
          <div class="task-row-card">
            <div class="task-row-header">
              <strong>${s.originalDe}</strong>
              <span class="step-badge">${s.hasError ? "Fehler suchen" : "Prüfen"}</span>
            </div>
            <small class="es-sub" lang="es">Texto del libro: «${s.originalEs}»</small>
            <select id="sel-err-${s.num}" class="task-select mt-xs" aria-label="Satz ${s.num} korrigieren">
              <option value="">— Fehler &amp; richtigen Satz auf Deutsch wählen —</option>
              ${optsHtml}
            </select>
            <small class="es-sub" lang="es">${s.tipEs}</small>
            <div class="slot-feedback" id="fb-err-${s.num}" hidden></div>
          </div>
        `;
      })
      .join("");
  }

  function evaluateTab4Tabak() {
    let correct = 0;
    const total = DATA.smokerModelSteps.length + DATA.fiveErrorsSentences.length;

    DATA.smokerModelSteps.forEach((step) => {
      const sel = document.getElementById(`sel-${step.id}`);
      const fb = document.getElementById(`fb-${step.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === "1") {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig: ${step.effectDe}`;
        awardSuccess("sm_" + step.id, 12);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Lösung: ${step.effectDe}`;
      }
    });

    DATA.fiveErrorsSentences.forEach((s) => {
      const sel = document.getElementById(`sel-err-${s.num}`);
      const fb = document.getElementById(`fb-err-${s.num}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === "1") {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Perfekt: ${s.correctedDe}`;
        awardSuccess("err5_" + s.num, 12);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtige Korrektur: ${s.correctedDe}`;
      }
    });

    unlockGiftSilent("gift_no_smoke");
    if (correct >= 7) unlockGiftSilent("gift_detective");

    const cert = recordGradeAndBuildCertificate("Tabak-Labor (S. 10) & 5-Fehler-Detektiv (S. 11)", correct, total, "gift_detective");
    const banner = document.getElementById("tabak-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // =========================================================================
  // 7. TAB 5: GROSSE PRÜFUNGS-ARENA (64 FRAGEN + ZUFALLS-GENERATOR)
  // =========================================================================
  function buildArenaQuestionSvg(spec) {
    const type = (spec && spec.type) || "blood_tube_split";

    switch (type) {
      case "blood_tube_split":
        return `<svg viewBox="0 0 340 190" aria-label="Reagenzglas mit Blutplasma und festem Teil">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="135" y="22" width="70" height="145" rx="35" fill="#f8fafc" stroke="#334155" stroke-width="3"/>
          <!-- Flüssiger Teil oben (gelb) -->
          <path d="M 138 45 L 202 45 L 202 102 L 138 102 Z" fill="#fde047"/>
          <!-- Fester Teil unten (rot/weiß/braun) -->
          <path d="M 138 102 L 202 102 L 202 135 A 32 32 0 0 1 138 135 Z" fill="#dc2626"/>
          <line x1="212" y1="72" x2="255" y2="72" stroke="#ca8a04" stroke-width="2"/>
          <text x="260" y="76" font-size="12" font-weight="900" fill="#854d0e">55% Flüssig</text>
          <line x1="212" y1="125" x2="255" y2="125" stroke="#dc2626" stroke-width="2"/>
          <text x="260" y="129" font-size="12" font-weight="900" fill="#991b1b">45% Fest</text>
          <text x="72" y="98" text-anchor="middle" font-size="13" font-weight="900" fill="#0f172a">DAS BLUT</text>
        </svg>`;

      case "blood_schema_blank":
        return `<svg viewBox="0 0 340 190" aria-label="Schema der Bestandteile des Blutes">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="125" y="14" width="90" height="30" rx="6" fill="#be123c"/>
          <text x="170" y="34" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">BLUT</text>
          <line x1="150" y1="44" x2="85" y2="74" stroke="#334155" stroke-width="2.2"/>
          <line x1="190" y1="44" x2="255" y2="74" stroke="#334155" stroke-width="2.2"/>
          <rect x="25" y="74" width="120" height="32" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
          <text x="85" y="95" text-anchor="middle" font-size="13" font-weight="900" fill="#854d0e">? (flüssig)</text>
          <rect x="195" y="74" width="120" height="32" rx="6" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
          <text x="255" y="95" text-anchor="middle" font-size="13" font-weight="900" fill="#9f1239">? (3 Zellarten)</text>
          <line x1="230" y1="106" x2="115" y2="140" stroke="#334155" stroke-width="1.8"/>
          <line x1="255" y1="106" x2="210" y2="140" stroke="#334155" stroke-width="1.8"/>
          <line x1="280" y1="106" x2="295" y2="140" stroke="#334155" stroke-width="1.8"/>
          <rect x="75" y="140" width="80" height="28" rx="5" fill="#f1f5f9" stroke="#64748b"/>
          <rect x="170" y="140" width="80" height="28" rx="5" fill="#f1f5f9" stroke="#64748b"/>
          <rect x="260" y="140" width="70" height="28" rx="5" fill="#f1f5f9" stroke="#64748b"/>
        </svg>`;

      case "blood_cells_trio":
        return `<svg viewBox="0 0 340 190" aria-label="Die drei festen Bestandteile des Blutes">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <circle cx="75" cy="88" r="32" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
          <circle cx="75" cy="88" r="12" fill="#fca5a5"/>
          <text x="75" y="145" text-anchor="middle" font-size="11.5" font-weight="900" fill="#991b1b">Typ 1 (O₂ / CO₂)</text>
          <circle cx="175" cy="88" r="32" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
          <circle cx="175" cy="88" r="14" fill="#93c5fd"/>
          <text x="175" y="145" text-anchor="middle" font-size="11.5" font-weight="900" fill="#1e40af">Typ 2 (Abwehr)</text>
          <polygon points="270,62 292,76 285,104 256,108 248,80" fill="#d97706" stroke="#78350f" stroke-width="2.5"/>
          <text x="270" y="145" text-anchor="middle" font-size="11.5" font-weight="900" fill="#78350f">Typ 3 (Gerinnung)</text>
        </svg>`;

      case "bone_marrow_stem":
        return `<svg viewBox="0 0 340 190" aria-label="Langer Knochen mit rotem Knochenmark">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Knochenform -->
          <path d="M 55 48 C 35 28, 75 15, 92 38 L 155 112 C 175 130, 145 165, 125 142 L 62 68 C 42 75, 35 58, 55 48 Z"
                fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
          <circle cx="72" cy="52" r="16" fill="#dc2626"/>
          <line x1="88" y1="52" x2="215" y2="45" stroke="#dc2626" stroke-width="2.5"/>
          <line x1="88" y1="52" x2="215" y2="95" stroke="#2563eb" stroke-width="2.5"/>
          <line x1="88" y1="52" x2="215" y2="145" stroke="#b45309" stroke-width="2.5"/>
          <circle cx="245" cy="45" r="15" fill="#ef4444"/>
          <circle cx="245" cy="95" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <polygon points="245,132 260,145 248,158 232,150" fill="#b45309"/>
        </svg>`;

      case "single_cell_red":
        return `<svg viewBox="0 0 340 190" aria-label="Rotes Blutkörperchen transportiert O2 und CO2">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <ellipse cx="170" cy="95" rx="58" ry="42" fill="#ef4444" stroke="#991b1b" stroke-width="3.5"/>
          <ellipse cx="170" cy="95" rx="26" ry="16" fill="#fca5a5"/>
          <text x="72" y="55" font-size="15" font-weight="900" fill="#0284c7">O₂ ──►</text>
          <text x="235" y="148" font-size="15" font-weight="900" fill="#475569">◄── CO₂</text>
        </svg>`;

      case "single_cell_white":
        return `<svg viewBox="0 0 340 190" aria-label="Weißes Blutkörperchen kämpft gegen Viren und Bakterien">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <circle cx="135" cy="95" r="40" fill="#eff6ff" stroke="#1d4ed8" stroke-width="3.5"/>
          <text x="135" y="102" text-anchor="middle" font-size="26">🛡️</text>
          <text x="235" y="78" font-size="28">🦠</text>
          <text x="255" y="125" font-size="26">👾</text>
          <line x1="182" y1="95" x2="218" y2="95" stroke="#dc2626" stroke-width="3"/>
        </svg>`;

      case "single_cell_platelet":
        return `<svg viewBox="0 0 340 190" aria-label="Blutplättchen verschließen eine Wunde">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <line x1="40" y1="65" x2="140" y2="65" stroke="#be123c" stroke-width="8"/>
          <line x1="200" y1="65" x2="300" y2="65" stroke="#be123c" stroke-width="8"/>
          <line x1="40" y1="135" x2="300" y2="135" stroke="#be123c" stroke-width="8"/>
          <!-- Wundverschluss durch Plättchen -->
          <polygon points="145,55 170,48 195,55 190,78 150,78" fill="#b45309" stroke="#451a03" stroke-width="2"/>
          <text x="170" y="112" text-anchor="middle" font-size="13" font-weight="900" fill="#78350f">🧱 Wunde reparieren!</text>
        </svg>`;

      case "comic_preview_p":
      case "comic_preview_wb":
      case "comic_preview_r":
        return `<svg viewBox="0 0 340 190" aria-label="Comic-Figuren des Blutes">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="28" y="34" width="84" height="118" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
          <text x="70" y="88" text-anchor="middle" font-size="28" font-weight="900" fill="#e11d48">R</text>
          <text x="70" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="#881337">O₂-Ringe</text>

          <rect x="128" y="34" width="84" height="118" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="170" y="88" text-anchor="middle" font-size="28" font-weight="900" fill="#1d4ed8">W / B</text>
          <text x="170" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">Schwert &amp; Schild</text>

          <rect x="228" y="34" width="84" height="118" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
          <text x="270" y="88" text-anchor="middle" font-size="28" font-weight="900" fill="#78350f">P</text>
          <text x="270" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="#78350f">Mauer bauen</text>
        </svg>`;

      case "vessel_cross_section":
        return `<svg viewBox="0 0 340 190" aria-label="Röhre mit Blutzellen">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <path d="M 45 55 L 220 55 L 220 135 L 45 135 Z" fill="#991b1b"/>
          <ellipse cx="220" cy="95" rx="22" ry="40" fill="#fecdd3" stroke="#7f1d1d" stroke-width="4"/>
          <circle cx="255" cy="75" r="12" fill="#ef4444"/>
          <circle cx="285" cy="98" r="13" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
          <polygon points="258,118 272,124 264,136" fill="#b45309"/>
          <text x="130" y="42" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">Wie heißt diese Röhre?</text>
        </svg>`;

      case "heart_liters":
      case "heart_chambers":
        return `<svg viewBox="0 0 340 190" aria-label="Das menschliche Herz">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <path d="M 110 52 L 170 52 L 170 150 Q 112 135 110 52 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2.5"/>
          <path d="M 170 52 L 230 52 Q 228 135 170 150 Z" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/>
          <line x1="112" y1="88" x2="228" y2="88" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="4,3"/>
          <text x="140" y="75" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">Oben</text>
          <text x="200" y="75" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">Oben</text>
          <text x="142" y="116" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">Unten</text>
          <text x="198" y="116" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">Unten *</text>
        </svg>`;

      case "symbol_arterie":
        return `<svg viewBox="0 0 340 190" aria-label="Symbol Herz Pfeil zum Menschen">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="35" y="45" width="270" height="100" rx="14" fill="#fff1f2" stroke="#f43f5e" stroke-width="2.5"/>
          <text x="85" y="108" text-anchor="middle" font-size="40">♡</text>
          <line x1="125" y1="95" x2="210" y2="95" stroke="#0f172a" stroke-width="5"/>
          <polygon points="222,95 204,84 204,106" fill="#0f172a"/>
          <text x="258" y="108" text-anchor="middle" font-size="38">🧍</text>
        </svg>`;

      case "symbol_vene":
        return `<svg viewBox="0 0 340 190" aria-label="Symbol Mensch Pfeil zum Herzen">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="35" y="45" width="270" height="100" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5"/>
          <text x="85" y="108" text-anchor="middle" font-size="38">🧍</text>
          <line x1="125" y1="95" x2="210" y2="95" stroke="#0f172a" stroke-width="5"/>
          <polygon points="222,95 204,84 204,106" fill="#0f172a"/>
          <text x="258" y="108" text-anchor="middle" font-size="40">♡</text>
        </svg>`;

      case "symbol_kapillare":
      case "vessel_symbols_table":
        return `<svg viewBox="0 0 340 190" aria-label="Netzwerk zwischen Arterie und Vene">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <line x1="35" y1="95" x2="115" y2="95" stroke="#dc2626" stroke-width="10" stroke-linecap="round"/>
          <path d="M 115 95 C 145 55, 195 55, 225 95 C 195 135, 145 135, 115 95 Z" fill="none" stroke="#9333ea" stroke-width="3"/>
          <line x1="115" y1="95" x2="225" y2="95" stroke="#9333ea" stroke-width="2.5"/>
          <line x1="170" y1="65" x2="170" y2="125" stroke="#9333ea" stroke-width="2.5"/>
          <line x1="225" y1="95" x2="305" y2="95" stroke="#2563eb" stroke-width="10" stroke-linecap="round"/>
          <text x="72" y="135" text-anchor="middle" font-size="12" font-weight="900" fill="#dc2626">Arterien</text>
          <text x="170" y="155" text-anchor="middle" font-size="13" font-weight="900" fill="#7e22ce">? (Netz)</text>
          <text x="268" y="135" text-anchor="middle" font-size="12" font-weight="900" fill="#2563eb">Venen</text>
        </svg>`;

      case "kreislauf_clean_diagram":
      case "page4_numbered_clean":
        return `<svg viewBox="0 0 340 200" aria-label="Doppelter Blutkreislauf mit Nummern 1 bis 5">
          <rect x="2" y="2" width="336" height="196" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <line x1="170" y1="10" x2="170" y2="34" stroke="#0284c7" stroke-width="2.5"/>
          <circle cx="148" cy="20" r="9" fill="#0f172a"/><text x="148" y="24" text-anchor="middle" font-size="10" font-weight="900" fill="#fff">1</text>
          <ellipse cx="170" cy="54" rx="42" ry="20" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <circle cx="114" cy="48" r="9" fill="#0f172a"/><text x="114" y="52" text-anchor="middle" font-size="10" font-weight="900" fill="#fff">2</text>
          <path d="M 156 102 L 156 80 L 88 80 L 88 54 L 145 54" fill="none" stroke="#2563eb" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 195 54 L 252 54 L 252 80 L 184 80 L 184 102" fill="none" stroke="#dc2626" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="66" cy="68" r="9" fill="#0f172a"/><text x="66" y="72" text-anchor="middle" font-size="10" font-weight="900" fill="#fff">3</text>
          <rect x="148" y="102" width="22" height="32" fill="#3b82f6"/>
          <rect x="170" y="102" width="22" height="32" fill="#ef4444"/>
          <text x="181" y="123" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">*</text>
          <circle cx="130" cy="118" r="9" fill="#0f172a"/><text x="130" y="122" text-anchor="middle" font-size="10" font-weight="900" fill="#fff">4</text>
          <path d="M 184 134 L 258 134 L 258 168 L 195 168" fill="none" stroke="#dc2626" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 145 168 L 82 168 L 82 134 L 156 134" fill="none" stroke="#2563eb" stroke-width="7" stroke-linejoin="round"/>
          <ellipse cx="170" cy="174" rx="75" ry="14" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
          <circle cx="170" cy="174" r="9" fill="#0f172a"/><text x="170" y="178" text-anchor="middle" font-size="10" font-weight="900" fill="#fff">5</text>
        </svg>`;

      case "cell_respiration":
      case "page10_normal_clean":
        return `<svg viewBox="0 0 340 190" aria-label="Zellatmung in der Körperzelle">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <polygon points="170,32 188,68 228,62 202,94 222,128 182,122 165,156 150,120 110,124 134,92 114,58 152,66"
                   fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
          <text x="170" y="98" text-anchor="middle" font-size="13" font-weight="900" fill="#854d0e">ZELLE</text>
          <text x="58" y="55" font-size="12" font-weight="900" fill="#16a34a">S... + N... ──►</text>
          <text x="268" y="145" text-anchor="middle" font-size="12" font-weight="900" fill="#2563eb">──► Ko...</text>
        </svg>`;

      case "alveolus_normal":
        return `<svg viewBox="0 0 340 190" aria-label="Gasaustausch im Lungenbläschen">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <circle cx="170" cy="82" r="44" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
          <path d="M 75 142 Q 170 165 265 142" fill="none" stroke="#dc2626" stroke-width="14" stroke-linecap="round"/>
          <line x1="155" y1="95" x2="155" y2="136" stroke="#dc2626" stroke-width="3"/>
          <line x1="185" y1="136" x2="185" y2="95" stroke="#2563eb" stroke-width="3"/>
          <text x="170" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#0369a1">Lungenbläschen</text>
        </svg>`;

      case "cigarette_three_poisons":
        return `<svg viewBox="0 0 340 190" aria-label="Zigarette und Rauch">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="55" y="115" width="55" height="22" rx="3" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
          <rect x="110" y="115" width="145" height="22" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <rect x="255" y="115" width="16" height="22" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
          <path d="M 268 105 Q 250 75 278 52 Q 298 34 265 18" fill="none" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
          <circle cx="95" cy="56" r="24" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2"/>
          <text x="95" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="#6b21a8">1. ?</text>
          <circle cx="165" cy="56" r="24" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
          <text x="165" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="#78350f">2. ?</text>
          <circle cx="235" cy="56" r="24" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
          <text x="235" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="#334155">3. ?</text>
        </svg>`;

      case "everyday_poisons_icons":
        return `<svg viewBox="0 0 340 190" aria-label="Alltagsverwendung der 3 Schadstoffe">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="20" y="38" width="90" height="114" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
          <text x="65" y="92" text-anchor="middle" font-size="36">🚜</text>
          <text x="65" y="128" text-anchor="middle" font-size="10.5" font-weight="800" fill="#14532d">Insektizide</text>

          <rect x="125" y="38" width="90" height="114" rx="10" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="170" y="92" text-anchor="middle" font-size="36">🚗💨</text>
          <text x="170" y="128" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">Abgase</text>

          <rect x="230" y="38" width="90" height="114" rx="10" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
          <text x="275" y="92" text-anchor="middle" font-size="36">🛣️</text>
          <text x="275" y="128" text-anchor="middle" font-size="10.5" font-weight="800" fill="#78350f">Straßenbau</text>
        </svg>`;

      case "co_no_adelantar":
        return `<svg viewBox="0 0 340 190" aria-label="Schild NO ADELANTAR bei Kohlenstoffmonoxid">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="110" y="18" width="120" height="154" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="170" cy="76" r="42" fill="#ffffff" stroke="#dc2626" stroke-width="8"/>
          <line x1="140" y1="46" x2="200" y2="106" stroke="#dc2626" stroke-width="7"/>
          <text x="154" y="84" text-anchor="middle" font-size="20">🚗</text>
          <text x="186" y="84" text-anchor="middle" font-size="20">🚙</text>
          <text x="170" y="140" text-anchor="middle" font-size="14" font-weight="900" fill="#0f172a">NO</text>
          <text x="170" y="158" text-anchor="middle" font-size="13" font-weight="900" fill="#0f172a">ADELANTAR</text>
        </svg>`;

      case "vessel_narrowing_nikotin":
        return `<svg viewBox="0 0 340 190" aria-label="Normal weites vs. verengtes Blutgefäß">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <!-- Oben normal -->
          <path d="M 45 36 L 265 36 L 265 78 L 45 78 Z" fill="#fecdd3" stroke="#991b1b" stroke-width="3"/>
          <circle cx="265" cy="57" r="21" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
          <!-- Unten verengt -->
          <path d="M 45 112 L 130 112 Q 175 128 265 126 L 265 144 Q 175 142 130 156 L 45 156 Z" fill="#f3e8ff" stroke="#7e22ce" stroke-width="3"/>
          <circle cx="265" cy="135" r="21" fill="#7e22ce"/>
          <circle cx="265" cy="135" r="7" fill="#ef4444"/>
        </svg>`;

      case "brain_heart_nikotin":
      case "consequences_overview":
        return `<svg viewBox="0 0 340 190" aria-label="Herz und Gehirn unter Nikotin-Einfluss">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <circle cx="105" cy="95" r="48" fill="#fff1f2" stroke="#e11d48" stroke-width="2.5"/>
          <text x="105" y="108" text-anchor="middle" font-size="42">💓</text>
          <circle cx="235" cy="95" r="48" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2.5"/>
          <text x="235" y="108" text-anchor="middle" font-size="42">🧠</text>
        </svg>`;

      case "passive_smoking_car":
        return `<svg viewBox="0 0 340 190" aria-label="Passivrauchen und Raucherauto">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="55" y="45" width="230" height="100" rx="18" fill="#f1f5f9" stroke="#475569" stroke-width="3"/>
          <text x="115" y="108" text-anchor="middle" font-size="38">🚬💨</text>
          <text x="215" y="108" text-anchor="middle" font-size="38">👧😷</text>
          <text x="170" y="170" text-anchor="middle" font-size="12" font-weight="900" fill="#b91c1c">Passivrauchen (Fenster zu!)</text>
        </svg>`;

      case "error_detective_card":
      case "vocab_spelling_card":
      case "smoker_alveolus_clean":
      default:
        return `<svg viewBox="0 0 340 190" aria-label="Naturkunde Detektiv-Karte">
          <rect x="2" y="2" width="336" height="186" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
          <rect x="65" y="28" width="210" height="134" rx="16" fill="#fefce8" stroke="#eab308" stroke-width="2.5" stroke-dasharray="6,4"/>
          <text x="170" y="92" text-anchor="middle" font-size="44">🕵️‍♀️🔬</text>
          <text x="170" y="132" text-anchor="middle" font-size="13" font-weight="900" fill="#854d0e">
            ${spec && spec.num ? `Schulbuch-Satz Nr. ${spec.num} prüfen!` : "Naturkunde-Detektiv"}
          </text>
        </svg>`;
    }
  }

  function generateRandomMixQuestions() {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const stamp = Date.now();

    // 1. Zufällige Blutmenge-Rechenfrage (Seite 3: Kinder 3–4 L, Erwachsene 5 L)
    const numAdults = pick([2, 3, 4, 5]);
    const totalAdultLiters = numAdults * 5;

    // 2. Zufällige Abkürzungs-Frage (Seite 5)
    const chosenAbbr = pick(DATA.abbreviationsList);
    const wrongAbbrs = DATA.abbreviationsList
      .filter((a) => a.abbr !== chosenAbbr.abbr)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const dynamicSet = [
      {
        id: "dyn_liters_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Blutmenge berechnen (Neu generiert · S. 3)",
        questionDe: `Auf Seite 3 steht, dass ein Erwachsener 5 Liter Blut im Körper hat. Wie viel Liter Blut haben ${numAdults} Erwachsene zusammen?`,
        questionEs: `En la página 3 dice que un adulto tiene 5 litros de sangre. ¿Cuántos litros de sangre tienen ${numAdults} adultos en total?`,
        tipEs: "💡 Tipp auf Spanisch: Adultos = 5 litros cada uno (niños = 3 o 4 litros).",
        svgSpec: { type: "heart_liters" },
        options: [
          { textDe: `Zusammen ${totalAdultLiters} Liter Blut (5 Liter pro Erwachsener)`, textEs: `${totalAdultLiters} litros en total`, correct: true },
          { textDe: `Zusammen ${numAdults * 2} Liter Blut`, textEs: `${numAdults * 2} litros en total`, correct: false },
          { textDe: `Zusammen ${numAdults * 10} Liter Blut`, textEs: `${numAdults * 10} litros en total`, correct: false },
          { textDe: `Zusammen ${totalAdultLiters + 5} Liter Blut`, textEs: `${totalAdultLiters + 5} litros en total`, correct: false }
        ],
        explanationDe: `Jeder Erwachsene hat 5 Liter Blut: ${numAdults} × 5 Liter = ${totalAdultLiters} Liter Blut!`,
        explanationEs: `${numAdults} adultos × 5 litros = ${totalAdultLiters} litros.`
      },
      {
        id: "dyn_abbr_" + stamp,
        world: "random_mix",
        topicDe: "🎲 Heft-Abkürzung knacken (Neu generiert · S. 5)",
        questionDe: `In deinem Heft (Seite 5 rechts) hast du für die Klappkarten Abkürzungen aufgeschrieben. Wofür steht die Abkürzung „${chosenAbbr.abbr}“?`,
        questionEs: `En la página 5 de tu cuaderno anotaste abreviaturas para las tarjetas plegables. ¿Qué significa «${chosenAbbr.abbr}»?`,
        tipEs: `💡 Tipp auf Spanisch: Significa «${chosenAbbr.fullEs}» en alemán.`,
        svgSpec: { type: "vocab_spelling_card" },
        options: [
          { textDe: chosenAbbr.fullDe, textEs: chosenAbbr.fullEs, correct: true },
          ...wrongAbbrs.map((w) => ({ textDe: w.fullDe, textEs: w.fullEs, correct: false }))
        ],
        explanationDe: `Auf Seite 5 steht: „${chosenAbbr.abbr}“ = ${chosenAbbr.fullDe}!`,
        explanationEs: `«${chosenAbbr.abbr}» corresponde a ${chosenAbbr.fullDe} (${chosenAbbr.fullEs}).`
      }
    ];

    const sampled = [...DATA.arenaQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 18);

    return [...dynamicSet, ...sampled];
  }

  function initTab5Arena() {
    const soundBtn = document.getElementById("btn-arena-sound");
    soundBtn.addEventListener("click", () => {
      state.arenaSoundOn = !state.arenaSoundOn;
      soundBtn.setAttribute("aria-pressed", String(state.arenaSoundOn));
      soundBtn.textContent = state.arenaSoundOn ? "🔊 Sound: AN" : "🔇 Sound: AUS";
    });

    document.querySelectorAll("[data-arena-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-arena-view]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.arenaView = btn.dataset.arenaView;
        document.getElementById("arena-view-arcade").hidden = state.arenaView !== "arcade";
        document.getElementById("arena-view-list").hidden = state.arenaView !== "list";
      });
    });

    const worldsBar = document.getElementById("arena-worlds-bar");
    worldsBar.querySelectorAll("[data-world]").forEach((btn) => {
      btn.addEventListener("click", () => {
        worldsBar.querySelectorAll("[data-world]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.arenaWorld = btn.dataset.world;
        state.arenaOnlyErrors = false;
        buildArenaDeck(true);
      });
    });

    document.getElementById("btn-arena-retry-errors").addEventListener("click", () => {
      if (state.arenaErrorIds.size === 0) return;
      state.arenaOnlyErrors = true;
      buildArenaDeck(false);
    });

    document.getElementById("btn-arena-shuffle").addEventListener("click", () => {
      state.arenaOnlyErrors = false;
      buildArenaDeck(true);
    });

    document.getElementById("btn-arena-prev").addEventListener("click", () => {
      if (state.arenaItems.length === 0) return;
      state.arenaIndex = (state.arenaIndex - 1 + state.arenaItems.length) % state.arenaItems.length;
      renderArenaArcadeCard();
    });

    document.getElementById("btn-arena-next").addEventListener("click", () => {
      if (state.arenaItems.length === 0) return;
      if (state.arenaIndex < state.arenaItems.length - 1) {
        state.arenaIndex += 1;
        renderArenaArcadeCard();
      } else {
        evaluateArenaArcadeMode();
      }
    });

    document.getElementById("btn-arena-grade-now").addEventListener("click", evaluateArenaArcadeMode);
    document.getElementById("btn-arena-evaluate-list").addEventListener("click", evaluateArenaListMode);

    // Tastatur-Shortcuts im Spiel-Show-Modus (1-4 / A-D und Pfeiltasten)
    document.addEventListener("keydown", (e) => {
      const panel = document.getElementById("tab-arena");
      if (!panel || panel.hidden || state.arenaView !== "arcade") return;
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

      const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
      const lower = e.key.toLowerCase();
      if (Object.prototype.hasOwnProperty.call(keyMap, lower)) {
        const btns = document.querySelectorAll("#arena-arcade-options .arena-opt-btn");
        if (btns[keyMap[lower]]) {
          e.preventDefault();
          btns[keyMap[lower]].click();
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        document.getElementById("btn-arena-next").click();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        document.getElementById("btn-arena-prev").click();
      }
    });

    buildArenaDeck(true);
  }

  function buildArenaDeck(shuffleOrder = false) {
    const allQ = DATA.arenaQuestions;
    let list = [];

    if (state.arenaOnlyErrors && state.arenaErrorIds.size > 0) {
      list = allQ.filter((q) => state.arenaErrorIds.has(q.id));
    } else if (state.arenaWorld === "random_mix") {
      list = generateRandomMixQuestions();
    } else if (state.arenaWorld === "exam20") {
      const pickWorld = (w, n) =>
        allQ
          .filter((q) => q.world === w)
          .sort(() => Math.random() - 0.5)
          .slice(0, n);
      list = [
        ...pickWorld("blut", 5),
        ...pickWorld("kreislauf", 5),
        ...pickWorld("tabak", 5),
        ...pickWorld("passiv_fehler", 5)
      ].sort(() => Math.random() - 0.5);
    } else if (state.arenaWorld === "all") {
      list = [...allQ];
      if (shuffleOrder) list.sort(() => Math.random() - 0.5);
    } else {
      list = allQ.filter((q) => q.world === state.arenaWorld);
      if (shuffleOrder) list.sort(() => Math.random() - 0.5);
    }

    state.arenaItems = list.map((q) => ({
      ...q,
      shuffledOptions: [...q.options].sort(() => Math.random() - 0.5),
      selectedIdx: null
    }));
    state.arenaIndex = 0;

    document.getElementById("arena-arcade-certificate").hidden = true;
    document.getElementById("arena-list-certificate").hidden = true;

    renderArenaArcadeCard();
    renderArenaListCards();
    updateArenaStatsAndErrors();
  }

  function updateArenaStatsAndErrors() {
    document.getElementById("arena-combo-val").textContent = `${state.arenaCombo}x`;
    document.getElementById("arena-stars-val").textContent = `${state.arenaSolvedSet.size} / ${DATA.arenaQuestions.length}`;

    if (state.arenaSolvedSet.size >= 35) unlockGiftSilent("gift_unicorn");
    if (state.arenaSolvedSet.size >= 50) unlockGiftSilent("gift_trophy");

    const answered = state.arenaItems.filter((q) => q.selectedIdx !== null);
    const right = answered.filter((q) => q.shuffledOptions[q.selectedIdx]?.correct).length;
    const liveNotaEl = document.getElementById("arena-live-nota");
    if (answered.length > 0) {
      const liveNota = computeChileanGrade(right, answered.length);
      const tier = getEmojiTierForNota(liveNota);
      liveNotaEl.textContent = `${liveNota.toFixed(1)} ${tier.emojis.slice(0, 2)}`;
    } else {
      liveNotaEl.textContent = "—";
    }

    const errBtn = document.getElementById("btn-arena-retry-errors");
    document.getElementById("arena-error-count").textContent = state.arenaErrorIds.size;
    errBtn.hidden = state.arenaErrorIds.size === 0;
  }

  function renderArenaArcadeCard() {
    if (state.arenaItems.length === 0) return;
    const item = state.arenaItems[state.arenaIndex];
    const total = state.arenaItems.length;

    document.getElementById("arena-arcade-step-badge").textContent = `Frage ${state.arenaIndex + 1} / ${total}`;
    document.getElementById("arena-arcade-topic-badge").textContent = item.topicDe;

    const pct = Math.round(((state.arenaIndex + 1) / total) * 100);
    document.getElementById("arena-progress-fill").style.setProperty("--progress-pct", `${pct}%`);

    const rightCount = state.arenaItems.filter(
      (q) => q.selectedIdx !== null && q.shuffledOptions[q.selectedIdx]?.correct
    ).length;
    document.getElementById("arena-arcade-live-score").textContent = `✓ ${rightCount} / ${total} richtig`;

    document.getElementById("arena-arcade-svg").innerHTML = buildArenaQuestionSvg(item.svgSpec);
    document.getElementById("arena-arcade-q-de").textContent = item.questionDe;
    document.getElementById("arena-arcade-q-es").textContent = item.questionEs;
    document.getElementById("arena-arcade-tip-es").textContent = item.tipEs || "";

    const optsContainer = document.getElementById("arena-arcade-options");
    optsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    const fb = document.getElementById("arena-arcade-feedback");
    fb.hidden = true;

    item.shuffledOptions.forEach((opt, oIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "arena-opt-btn";
      const showSub = opt.textEs && opt.textEs !== opt.textDe;
      btn.innerHTML = `
        <span class="arena-opt-letter">${letters[oIdx] || "•"}</span>
        <div>
          <div><strong>${opt.textDe}</strong></div>
          ${showSub ? `<small class="es-sub" lang="es">${opt.textEs}</small>` : ""}
        </div>
      `;

      if (item.selectedIdx !== null) {
        if (opt.correct) btn.classList.add("correct-choice");
        else if (oIdx === item.selectedIdx) btn.classList.add("wrong-choice");
      }

      btn.addEventListener("click", () => {
        item.selectedIdx = oIdx;
        optsContainer.querySelectorAll(".arena-opt-btn").forEach((b, idx) => {
          b.classList.remove("correct-choice", "wrong-choice");
          if (item.shuffledOptions[idx].correct) b.classList.add("correct-choice");
        });

        fb.hidden = false;
        if (opt.correct) {
          btn.classList.add("correct-choice");
          state.arenaCombo += 1;
          state.arenaSolvedSet.add(item.id);
          state.arenaErrorIds.delete(item.id);
          playChime("ok");
          triggerConfetti("arena-confetti-layer");
          awardSuccess("arena_" + item.id, 15);
          fb.className = "feedback-banner ok";
          fb.innerHTML = `<strong>🎉 Richtig! (Combo ${state.arenaCombo}x 🔥)</strong> ${item.explanationDe}<span class="es-sub" lang="es">${item.explanationEs}</span>`;
        } else {
          btn.classList.add("wrong-choice");
          state.arenaCombo = 0;
          state.arenaErrorIds.add(item.id);
          playChime("err");
          registerMistake();
          fb.className = "feedback-banner err";
          fb.innerHTML = `<strong>✗ Erklärung:</strong> ${item.explanationDe}<span class="es-sub" lang="es">${item.explanationEs}</span>`;
        }

        const updatedRight = state.arenaItems.filter(
          (q) => q.selectedIdx !== null && q.shuffledOptions[q.selectedIdx]?.correct
        ).length;
        document.getElementById("arena-arcade-live-score").textContent = `✓ ${updatedRight} / ${total} richtig`;
        updateArenaStatsAndErrors();
      });

      optsContainer.appendChild(btn);
    });

    if (item.selectedIdx !== null) {
      const chosen = item.shuffledOptions[item.selectedIdx];
      fb.hidden = false;
      fb.className = chosen.correct ? "feedback-banner ok" : "feedback-banner err";
      fb.innerHTML = `<strong>${chosen.correct ? "✓ Richtig:" : "✗ Erklärung:"}</strong> ${item.explanationDe}<span class="es-sub" lang="es">${item.explanationEs}</span>`;
    }
  }

  function evaluateArenaArcadeMode() {
    const total = state.arenaItems.length;
    if (total === 0) return;
    const correct = state.arenaItems.filter(
      (q) => q.selectedIdx !== null && q.shuffledOptions[q.selectedIdx]?.correct
    ).length;

    const cert = recordGradeAndBuildCertificate("Prüfungs-Arena (Spiel-Show)", correct, total);
    const banner = document.getElementById("arena-arcade-certificate");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });

    showGiftModal({
      emojis: cert.tier.emojis,
      titleDe: cert.tier.titleDe,
      descDe: cert.tier.giftDe,
      descEs: `${cert.tier.titleEs} · ${cert.tier.giftEs}`,
      gradeText: `Chilenische Note: ${cert.notaChile.toFixed(1)} (${correct} / ${total} richtig · ${cert.pct}%)`
    });
  }

  function renderArenaListCards() {
    const container = document.getElementById("arena-list-container");
    if (!container) return;
    container.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    state.arenaItems.forEach((q, qIdx) => {
      const card = document.createElement("article");
      card.className = "quiz-card arena-list-card";
      card.dataset.qid = q.id;

      const optsHtml = q.shuffledOptions
        .map((opt, oIdx) => {
          const showSub = opt.textEs && opt.textEs !== opt.textDe;
          return `
            <button type="button" class="arena-opt-btn arena-list-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
              <span class="arena-opt-letter">${letters[oIdx] || "•"}</span>
              <div>
                <div><strong>${opt.textDe}</strong></div>
                ${showSub ? `<small class="es-sub" lang="es">${opt.textEs}</small>` : ""}
              </div>
            </button>
          `;
        })
        .join("");

      card.innerHTML = `
        <div>
          <div class="card-top-meta">
            <span class="step-badge">Frage ${qIdx + 1} / ${state.arenaItems.length}</span>
            <span class="source-tag">${q.topicDe}</span>
          </div>
          <h3>${q.questionDe}</h3>
          <p class="es-sub" lang="es">${q.questionEs}</p>
          <div class="quiz-card-svg">${buildArenaQuestionSvg(q.svgSpec)}</div>
          <div class="arena-options-grid">${optsHtml}</div>
          <div class="spanish-tip-banner es-sub" lang="es">${q.tipEs || ""}</div>
        </div>
        <div class="feedback-banner arena-list-fb" hidden></div>
      `;
      container.appendChild(card);
    });

    container.querySelectorAll(".arena-list-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIdx = Number(btn.dataset.qidx);
        const oIdx = Number(btn.dataset.oidx);
        const qItem = state.arenaItems[qIdx];
        qItem.selectedIdx = oIdx;

        const card = btn.closest(".arena-list-card");
        card.querySelectorAll(".arena-list-opt-btn").forEach((b, idx) => {
          b.classList.remove("correct-choice", "wrong-choice");
          if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
        });

        const chosen = qItem.shuffledOptions[oIdx];
        const fb = card.querySelector(".arena-list-fb");
        fb.hidden = false;

        if (chosen.correct) {
          btn.classList.add("correct-choice");
          state.arenaCombo += 1;
          state.arenaSolvedSet.add(qItem.id);
          state.arenaErrorIds.delete(qItem.id);
          playChime("ok");
          awardSuccess("arena_" + qItem.id, 15);
          fb.className = "feedback-banner arena-list-fb ok";
          fb.innerHTML = `<strong>✓ Richtig!</strong> ${qItem.explanationDe}<span class="es-sub" lang="es">${qItem.explanationEs}</span>`;
        } else {
          btn.classList.add("wrong-choice");
          state.arenaCombo = 0;
          state.arenaErrorIds.add(qItem.id);
          playChime("err");
          registerMistake();
          fb.className = "feedback-banner arena-list-fb err";
          fb.innerHTML = `<strong>✗ Erklärung:</strong> ${qItem.explanationDe}<span class="es-sub" lang="es">${qItem.explanationEs}</span>`;
        }

        updateArenaStatsAndErrors();
      });
    });
  }

  function evaluateArenaListMode() {
    let correct = 0;
    const total = state.arenaItems.length;
    if (total === 0) return;

    const cards = document.querySelectorAll(".arena-list-card");
    state.arenaItems.forEach((qItem, qIdx) => {
      const card = cards[qIdx];
      if (!card) return;
      const fb = card.querySelector(".arena-list-fb");
      const btns = card.querySelectorAll(".arena-list-opt-btn");
      const chosen = qItem.selectedIdx !== null ? qItem.shuffledOptions[qItem.selectedIdx] : null;

      btns.forEach((b, idx) => {
        if (qItem.shuffledOptions[idx].correct) b.classList.add("correct-choice");
      });

      if (chosen && chosen.correct) {
        correct += 1;
        state.arenaErrorIds.delete(qItem.id);
      } else {
        if (qItem.selectedIdx !== null && btns[qItem.selectedIdx]) {
          btns[qItem.selectedIdx].classList.add("wrong-choice");
        }
        state.arenaErrorIds.add(qItem.id);
        fb.hidden = false;
        fb.className = "feedback-banner arena-list-fb err";
        fb.innerHTML = `<strong>Lösung:</strong> ${qItem.explanationDe}<span class="es-sub" lang="es">${qItem.explanationEs}</span>`;
      }
    });

    const cert = recordGradeAndBuildCertificate("Prüfungs-Arena (Ganze Probe)", correct, total);
    const banner = document.getElementById("arena-list-certificate");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
    updateArenaStatsAndErrors();

    showGiftModal({
      emojis: cert.tier.emojis,
      titleDe: cert.tier.titleDe,
      descDe: cert.tier.giftDe,
      descEs: `${cert.tier.titleEs} · ${cert.tier.giftEs}`,
      gradeText: `Chilenische Note: ${cert.notaChile.toFixed(1)} (${correct} / ${total} richtig · ${cert.pct}%)`
    });
  }

  // =========================================================================
  // 8. TAB 6: GESCHENK-SCHATZKISTE & NOTEN-SKALA (1,0 BIS 7,0)
  // =========================================================================
  function initTab6Gifts() {
    const scaleGrid = document.getElementById("grade-scale-showcase");
    if (scaleGrid) {
      scaleGrid.innerHTML = DATA.gradeEmojiScale
        .map(
          (tier) => `
          <div class="scale-tier-card">
            <div class="scale-tier-emojis">${tier.emojis}</div>
            <strong>${tier.titleDe}</strong>
            <span class="es-sub" lang="es">${tier.titleEs}</span>
            <p style="margin:0.35rem 0 0;font-size:0.84rem;color:#475569;">${tier.giftDe}</p>
          </div>
        `
        )
        .join("");
    }

    document.getElementById("btn-unwrap-next-gift").addEventListener("click", () => {
      const nextLocked = DATA.collectibleGifts.find((g) => !state.unlockedGifts.has(g.id));
      if (!nextLocked) {
        showGiftModal({
          emojis: "👑🦄🏆💎🌟",
          titleDe: "Alle 16 Geschenk-Emojis freigeschaltet!",
          descDe: "Wahnsinn! Du hast die komplette Naturkunde-Schatzkiste gesammelt!",
          descEs: "¡Increíble! ¡Ya desbloqueaste los 16 premios de Emojis de Naturkunde!"
        });
        return;
      }

      if (state.points >= nextLocked.pointsCost) {
        unlockGiftSilent(nextLocked.id);
        showGiftModal({
          emojis: `${nextLocked.emoji} 🎁 ✨`,
          titleDe: `Neues Geschenk: ${nextLocked.nameDe}!`,
          descDe: `Du hast „${nextLocked.nameDe}“ (${nextLocked.emoji}) freigeschaltet!`,
          descEs: `¡Desbloqueaste «${nextLocked.nameEs}» (${nextLocked.emoji})!`
        });
      } else {
        const needed = nextLocked.pointsCost - state.points;
        showGiftModal({
          emojis: `${nextLocked.emoji} 🔒`,
          titleDe: `Nächstes Geschenk: ${nextLocked.nameDe}`,
          descDe: `Dir fehlen nur noch ${needed} Punkte ⭐ (oder: ${nextLocked.unlockHintDe})!`,
          descEs: `Te faltan solo ${needed} puntos ⭐ para abrir «${nextLocked.nameEs}».`
        });
      }
    });

    renderGiftsTab();
  }

  function renderGiftsTab() {
    const tag = document.getElementById("gifts-progress-tag");
    if (tag) {
      tag.textContent = `${state.unlockedGifts.size} von ${DATA.collectibleGifts.length} Geschenken freigeschaltet`;
    }

    const histContainer = document.getElementById("session-grades-history");
    if (histContainer && state.gradeHistory.length > 0) {
      histContainer.innerHTML = state.gradeHistory
        .map(
          (h) =>
            `<span class="history-pill">${h.emojis} <strong>Note ${h.nota}</strong> · ${h.moduleDe} (${h.score})</span>`
        )
        .join("");
    }

    const grid = document.getElementById("gifts-collection-grid");
    if (!grid) return;
    grid.innerHTML = "";

    DATA.collectibleGifts.forEach((gift) => {
      const isUnlocked = state.unlockedGifts.has(gift.id);
      const tile = document.createElement("div");
      tile.className = `gift-tile ${isUnlocked ? "unlocked" : "locked"}`;
      tile.innerHTML = `
        <div class="gift-tile-emoji">${isUnlocked ? gift.emoji : "🎁🔒"}</div>
        <h4>${gift.nameDe}</h4>
        <span class="es-sub" lang="es">${gift.nameEs}</span>
        <small style="display:block;margin-top:0.35rem;font-weight:700;color:${isUnlocked ? "#be123c" : "#64748b"};">
          ${isUnlocked ? "✅ Freigeschaltet! (Klicken zum Feiern)" : `🔒 Ziel: ${gift.unlockHintDe} (${gift.pointsCost} ⭐)`}
        </small>
      `;

      if (isUnlocked) {
        tile.addEventListener("click", () => {
          showGiftModal({
            emojis: `${gift.emoji} 🎉 🌟`,
            titleDe: `Dein Geschenk-Emoji: ${gift.nameDe}`,
            descDe: `Du hast dieses Geschenk bereits verdient: ${gift.unlockHintDe}!`,
            descEs: `Premio en tu colección: «${gift.nameEs}» (${gift.emoji}).`
          });
        });
      }

      grid.appendChild(tile);
    });
  }

  // =========================================================================
  // 9. INITIALISIERUNG
  // =========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndTabs();
    initTab1Heft();
    initTab2Blut();
    initTab3Kreislauf();
    initTab4Tabak();
    initTab5Arena();
    initTab6Gifts();
    updateGlobalHeader();
  });
})();
