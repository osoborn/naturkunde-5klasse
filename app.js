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

    // Modul 1C: Vocab
    vocabErrorIds: new Set(),
    vocabOnlyErrors: false,

    // Modul 2: Blut & Blutkreislauf (Format 2 Comic + Format 5 Richtig/Falsch)
    activeBrush: "rot",
    comicColors: {
      comic_rote: "",
      comic_weisse: "",
      comic_plaettchen: "",
      comic_plasma: ""
    },
    tfSelections: {},

    // Modul 3: Tabakkonsum (Format 3 Smoker Paint)
    smokerPaint: {
      teer: true,
      nikotin: true,
      co: true
    },

    // Modul 4: Große End-Probe (Arena)
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

    if (state.solvedCount >= 3) unlockGiftSilent("gift_blood_drop");
    if (state.streak >= 5) unlockGiftSilent("gift_strong_heart");
    if (state.streak >= 10) unlockGiftSilent("gift_rocket");
    if (state.points >= 260) unlockGiftSilent("gift_dolphin");

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

  function recordGradeAndBuildCertificate(moduleNameDe, correct, total, specialGiftIds = []) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const notaChile = computeChileanGrade(correct, total);
    const deGrade = computeGermanNote(pct);
    const tier = getEmojiTierForNota(notaChile);
    const toneClass = notaChile >= 6.0 ? "grade-excellent" : notaChile >= 4.5 ? "grade-good" : "grade-warn";

    if (notaChile >= 5.0 && Array.isArray(specialGiftIds)) {
      specialGiftIds.forEach((gid) => unlockGiftSilent(gid));
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
    if (state.solvedCount >= 40) {
      rankText = "👑 Rang 5: Naturkunde-Königin (Note 7,0!)";
    } else if (state.solvedCount >= 28) {
      rankText = "🕵️‍♀️ Rang 4: 5-Fehler-Meisterdetektivin";
    } else if (state.solvedCount >= 16) {
      rankText = "🫀 Rang 3: Herz- & Kreislauf-Ärztin";
    } else if (state.solvedCount >= 6) {
      rankText = "🛡️ Rang 2: Immun-Ritterin";
    }

    const headerRank = document.getElementById("header-rank-pill");
    if (headerRank) headerRank.textContent = rankText;
    const arenaRank = document.getElementById("arena-rank-badge");
    if (arenaRank) arenaRank.textContent = rankText;
  }

  // =========================================================================
  // 2. HEADER, SPANISCH-TOGGLE, TABS & UMLAUTS
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
  // 3. MODUL 1: HEFT, KLAPPKARTEN (S. 5–6) & VOKABEL-TRAINER
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

    const cert = recordGradeAndBuildCertificate("Heft-Klappkarten (Seite 5 & 6)", correct, total, ["gift_microscope"]);
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
  // 4. MODUL 2: BLUT & BLUTKREISLAUF (5 FRAGEFORMATE · SEITEN 1 BIS 6)
  // =========================================================================
  function initTab2BlutKreislauf() {
    // Format 1: Baum-Schema (Seite 1)
    DATA.blutSchemaSlots.forEach((slot) => {
      const sel = document.getElementById(`sel-${slot.id}`);
      if (!sel) return;
      const shuffled = [...slot.optionsDe].sort(() => Math.random() - 0.5);
      sel.innerHTML =
        `<option value="">— Begriff wählen —</option>` +
        shuffled.map((opt) => `<option value="${opt}">${opt}</option>`).join("");
    });

    // Format 2: Comic-Figuren (Seite 2)
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

    // Format 3: Nummern 1–5 (Seite 4, Aufgabe 1)
    const numList = document.getElementById("kr-numbers-list");
    numList.innerHTML = DATA.kreislaufNumbersTask
      .map((item) => {
        const opts = item.optionsDe.map((o) => `<option value="${o}">${o}</option>`).join("");
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

    // Format 4a: 6 Gefäße/Herzhälften (Seite 4, Aufgabe 2)
    const lblList = document.getElementById("kr-labels-list");
    lblList.innerHTML = DATA.kreislaufLabelsTask
      .map((item, idx) => {
        const opts = item.optionsDe.map((o) => `<option value="${o}">${o}</option>`).join("");
        return `
          <div class="task-row-card">
            <div class="task-row-header">
              <strong>${idx + 1}. ${item.posDe}</strong>
            </div>
            <select id="sel-${item.id}" class="task-select" aria-label="${item.posDe}">
              <option value="">— Richtigen Begriff wählen —</option>
              ${opts}
            </select>
            <small class="es-sub" lang="es">💡 ${item.tipEs}</small>
            <div class="slot-feedback" id="fb-${item.id}" hidden></div>
          </div>
        `;
      })
      .join("");

    // Format 4b: 4 Gasaustausch-Sätze (Seite 4, Aufgabe 2)
    const gsList = document.getElementById("kr-gasaustausch-list");
    gsList.innerHTML = DATA.gasaustauschSortingTask
      .map((item) => {
        const opts = item.options.map((o) => `<option value="${o}">${o}</option>`).join("");
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

    // Format 5: 8 Richtig/Falsch-Karten
    renderBlutKreislaufTrueFalse();

    document.getElementById("btn-bk-evaluate-all").addEventListener("click", evaluateTab2BlutKreislauf);
    document.getElementById("btn-bk-reset-all").addEventListener("click", () => {
      state.comicColors = {
        comic_rote: "",
        comic_weisse: "",
        comic_plaettchen: "",
        comic_plasma: ""
      };
      state.tfSelections = {};
      document.getElementById("bk-grade-banner").hidden = true;
      initTab2BlutKreislauf();
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
      <svg viewBox="0 0 520 270" aria-label="Interaktives Ausmal-Schema zu Seite 2">
        <rect x="2" y="2" width="516" height="266" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>

        <!-- d) Das Blutplasma (Flüssigkeit im Blutgefäß) -->
        <g class="comic-click-zone" data-target="comic_plasma" style="cursor:pointer;">
          <path d="M 35 140 Q 260 200 485 150 L 485 245 Q 260 268 35 235 Z"
                fill="${cPlasma}" stroke="#64748b" stroke-width="2.2"/>
          <text x="260" y="252" text-anchor="middle" font-size="11.5" font-weight="900" fill="#334155">
            💧 d) Blutplasma (hier klicken zum Anmalen!)
          </text>
        </g>

        <!-- c) Blutplättchen ("P") als Bauarbeiter oben an der Mauerlücke -->
        <g class="comic-click-zone" data-target="comic_plaettchen" style="cursor:pointer;">
          <rect x="175" y="12" width="170" height="84" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="4,3"/>
          <rect x="190" y="64" width="140" height="26" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
          <circle cx="215" cy="36" r="10" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <rect x="202" y="46" width="26" height="24" rx="5" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <text x="215" y="63" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">P</text>

          <circle cx="260" cy="32" r="10" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <rect x="247" y="42" width="26" height="24" rx="5" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <text x="260" y="59" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">P</text>

          <circle cx="305" cy="36" r="10" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <rect x="292" y="46" width="26" height="24" rx="5" fill="${cPlaettchen}" stroke="#1e293b" stroke-width="2"/>
          <text x="305" y="63" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">P</text>
          <text x="260" y="86" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">🧱 c) Blutplättchen (P)</text>
        </g>

        <!-- a) Rote Blutkörperchen ("R") mit Sauerstoff-Ringen -->
        <g class="comic-click-zone" data-target="comic_rote" style="cursor:pointer;">
          <circle cx="220" cy="128" r="15" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <circle cx="220" cy="128" r="5.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="208" y="145" width="24" height="24" rx="5" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <text x="220" y="162" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">R</text>

          <circle cx="280" cy="134" r="15" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <circle cx="280" cy="134" r="5.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="268" y="151" width="24" height="24" rx="5" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <text x="280" y="168" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">R</text>

          <circle cx="340" cy="128" r="15" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <circle cx="340" cy="128" r="5.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="328" y="145" width="24" height="24" rx="5" fill="${cRote}" stroke="#0f172a" stroke-width="2"/>
          <text x="340" y="162" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">R</text>
          <text x="280" y="190" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">🔴 a) Rote Blutkörperchen (R)</text>
        </g>

        <!-- b) Weiße Blutkörperchen (Helm "W" + Schwert + Schild "B") -->
        <g class="comic-click-zone" data-target="comic_weisse" style="cursor:pointer;">
          <path d="M 62 174 Q 78 156 94 174 Z" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <text x="78" y="172" text-anchor="middle" font-size="9" font-weight="900" fill="#0f172a">W</text>
          <circle cx="78" cy="184" r="9.5" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <line x1="56" y1="164" x2="56" y2="204" stroke="#475569" stroke-width="3.5"/>
          <path d="M 86 184 L 114 184 L 114 208 Q 100 222 86 208 Z" fill="${cWeisseB}" stroke="#0f172a" stroke-width="2.2"/>
          <text x="100" y="205" text-anchor="middle" font-size="14" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">B</text>

          <path d="M 132 180 Q 148 162 164 180 Z" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <text x="148" y="178" text-anchor="middle" font-size="9" font-weight="900" fill="#0f172a">W</text>
          <circle cx="148" cy="190" r="9.5" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <line x1="126" y1="170" x2="126" y2="210" stroke="#475569" stroke-width="3.5"/>
          <path d="M 156 190 L 184 190 L 184 214 Q 170 228 156 214 Z" fill="${cWeisseB}" stroke="#0f172a" stroke-width="2.2"/>
          <text x="170" y="211" text-anchor="middle" font-size="14" font-weight="900" fill="#ffffff" style="paint-order:stroke;stroke:#0f172a;stroke-width:3px;">B</text>
          <text x="122" y="232" text-anchor="middle" font-size="10.5" font-weight="900" fill="#0f172a">🛡️ b) Weiße Blutkörperchen („B“)</text>
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
        <small class="es-sub" lang="es">💡 ${t.tipEs}</small>
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

  function renderBlutKreislaufTrueFalse() {
    const grid = document.getElementById("bk-truefalse-grid");
    if (!grid) return;
    grid.innerHTML = DATA.blutKreislaufTrueFalse
      .map(
        (item, idx) => `
        <div class="tf-card" data-tf-id="${item.id}">
          <div>
            <strong>${idx + 1}. ${item.statementDe}</strong>
            <span class="es-sub" lang="es">${item.statementEs}</span>
          </div>
          <div class="tf-btn-row">
            <button type="button" class="tf-choice-btn" data-tf-id="${item.id}" data-val="true">✅ Richtig</button>
            <button type="button" class="tf-choice-btn" data-tf-id="${item.id}" data-val="false">❌ Falsch</button>
          </div>
          <div class="slot-feedback" id="fb-${item.id}" hidden></div>
        </div>
      `
      )
      .join("");

    grid.querySelectorAll(".tf-choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tfId = btn.dataset.tfId;
        const val = btn.dataset.val === "true";
        state.tfSelections[tfId] = val;
        const card = btn.closest(".tf-card");
        card.querySelectorAll(".tf-choice-btn").forEach((b) => {
          b.classList.remove("selected", "input-ok", "input-err");
        });
        btn.classList.add("selected");
      });
    });
  }

  function evaluateTab2BlutKreislauf() {
    let correct = 0;
    const total =
      DATA.blutSchemaSlots.length +
      DATA.comicColoringTargets.length +
      DATA.kreislaufNumbersTask.length +
      DATA.kreislaufLabelsTask.length +
      DATA.gasaustauschSortingTask.length +
      DATA.blutKreislaufTrueFalse.length;

    // 1. Blut-Schema (5)
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
        fb.textContent = `✗ Richtig ist: ${slot.correctDe}`;
      }
    });

    // 2. Comic-Figuren (4)
    DATA.comicColoringTargets.forEach((t) => {
      const sel = document.getElementById(`sel-${t.id}`);
      const fb = document.getElementById(`fb-${t.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === t.expectedColor) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig (${t.expectedColor}): ${t.roleExplanationDe}`;
        awardSuccess("comic_" + t.id, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtige Farbe ist „${t.expectedColor}“! ${t.roleExplanationDe}`;
      }
    });

    // 3. Kreislauf-Nummern 1–5 (5)
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

    // 4a. 6 Gefäße/Herzhälften (6)
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

    // 4b. 4 Gasaustausch-Sätze (4)
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

    // 5. 8 Richtig/Falsch-Karten (8)
    DATA.blutKreislaufTrueFalse.forEach((item) => {
      const userChoice = state.tfSelections[item.id];
      const fb = document.getElementById(`fb-${item.id}`);
      const card = document.querySelector(`.tf-card[data-tf-id="${item.id}"]`);
      const btns = card.querySelectorAll(".tf-choice-btn");
      fb.hidden = false;

      btns.forEach((b) => {
        b.classList.remove("input-ok", "input-err");
        const bVal = b.dataset.val === "true";
        if (bVal === item.isTrue) {
          b.classList.add("input-ok");
        } else if (userChoice === bVal) {
          b.classList.add("input-err");
        }
      });

      if (userChoice === item.isTrue) {
        correct += 1;
        fb.style.color = "#15803d";
        fb.textContent = `✓ ${item.explanationDe}`;
        awardSuccess("tf_bk_" + item.id, 10);
      } else {
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ ${item.explanationDe}`;
      }
    });

    const cert = recordGradeAndBuildCertificate(
      "Modul 2: Das Blut & Der Blutkreislauf (Seiten 1 bis 6)",
      correct,
      total,
      ["gift_plasma_sun", "gift_immune_knight", "gift_platelet_builder", "gift_fresh_lungs"]
    );
    const banner = document.getElementById("bk-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });

    showGiftModal({
      emojis: cert.tier.emojis,
      titleDe: cert.tier.titleDe,
      descDe: cert.tier.giftDe,
      descEs: `${cert.tier.titleEs} · ${cert.tier.giftEs}`,
      gradeText: `Note (Blut & Blutkreislauf): ${cert.notaChile.toFixed(1)} (${correct} / ${total} richtig · ${cert.pct}%)`
    });
  }

  // =========================================================================
  // 5. MODUL 3: TABAKKONSUM & PASSIVRAUCHEN (4 FRAGEFORMATE · SEITEN 7 BIS 11)
  // =========================================================================
  function initTab3Tabak() {
    // Format 1: Schadstoff-Zuordnung (Nikotin, Teer, Kohlenstoffmonoxid)
    const matchContainer = document.getElementById("schadstoff-matching-list");
    matchContainer.innerHTML = DATA.schadstoffMatchingItems
      .map(
        (item, idx) => `
        <div class="task-row-card">
          <div class="task-row-header">
            <strong>${idx + 1}. ${item.clueDe}</strong>
          </div>
          <small class="es-sub" lang="es">${item.clueEs}</small>
          <select id="sel-${item.id}" class="task-select mt-xs" aria-label="${item.clueDe}">
            <option value="">— Welcher Schadstoff ist das? —</option>
            <option value="Nikotin">🟣 Nikotin (nicotina)</option>
            <option value="Teer">🟤 Teer (alquitrán)</option>
            <option value="Kohlenstoffmonoxid">⚪ Kohlenstoffmonoxid / Kohlenmonoxid (monóxido de carbono)</option>
          </select>
          <div class="slot-feedback" id="fb-${item.id}" hidden></div>
        </div>
      `
      )
      .join("");

    // Format 2: Ankreuz-Checkliste der 8 gesundheitlichen Folgen
    const checkGrid = document.getElementById("folgen-checkbox-grid");
    const shuffledFolgen = [...DATA.folgenCheckboxes].sort(() => Math.random() - 0.5);
    checkGrid.innerHTML = shuffledFolgen
      .map(
        (fc) => `
        <label class="check-card-label" id="lbl-${fc.id}">
          <input type="checkbox" class="folgen-chk" data-fc-id="${fc.id}">
          <div>
            <strong>${fc.textDe}</strong>
            <span class="es-sub" lang="es">${fc.textEs}</span>
          </div>
        </label>
      `
      )
      .join("");

    // Format 3: Seite 10 (Gasaustausch eines Rauchers)
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

    // Format 4: Seite 11 (5-Fehler-Detektiv)
    renderFiveErrorsTasks();

    document.getElementById("btn-tabak-evaluate").addEventListener("click", evaluateTab3Tabak);
    document.getElementById("btn-tabak-reset").addEventListener("click", () => {
      document.getElementById("tabak-grade-banner").hidden = true;
      initTab3Tabak();
    });
  }

  function renderSmokerGasaustauschSvg() {
    const stage = document.getElementById("smoker-gasaustausch-svg");
    if (!stage) return;

    const showTeer = state.smokerPaint.teer;
    const showNikotin = state.smokerPaint.nikotin;
    const showCo = state.smokerPaint.co;

    stage.innerHTML = `
      <svg viewBox="0 0 460 250" aria-label="Gasaustausch eines Rauchers (Seite 10)">
        <rect x="2" y="2" width="456" height="246" rx="12" fill="#ffffff" stroke="#cbd5e1"/>

        <!-- Lungenbläschen oben in der Mitte -->
        <path d="M 225 16 L 225 50" stroke="#475569" stroke-width="18" stroke-linecap="round"/>
        <circle cx="225" cy="82" r="36" fill="#fef2f2" stroke="#334155" stroke-width="2.5"/>
        <text x="315" y="58" font-size="12" font-weight="900" fill="#0f172a">Lungenbläschen</text>

        <!-- 1. BRAUN: Teer klebt in den Lungenbläschen -->
        ${
          showTeer
            ? `
          <path d="M 195 72 A 30 30 0 1 0 255 72" fill="none" stroke="#78350f" stroke-width="10" stroke-linecap="round"/>
          <text x="328" y="78" font-size="11.5" font-weight="900" fill="#78350f">🟤 1. Der Teer (braun)</text>
          <text x="328" y="92" font-size="10" font-weight="700" fill="#78350f">klebt im Lungenbläschen!</text>
        `
            : ""
        }

        <!-- Blutgefäß-Schleife von Lungenbläschen zur Zelle und zurück zur Lunge -->
        <path d="M 225 120 C 385 120, 395 205, 225 210 C 75 210, 75 90, 187 82"
              fill="none" stroke="#334155" stroke-width="17" stroke-linecap="round"/>
        <path d="M 225 120 C 385 120, 395 205, 225 210 C 75 210, 75 90, 187 82"
              fill="none" stroke="#f8fafc" stroke-width="12" stroke-linecap="round"/>

        <!-- 2. LILA: Nikotin verengt die Blutgefäße -->
        ${
          showNikotin
            ? `
          <path d="M 275 125 C 365 134, 368 188, 265 202" fill="none" stroke="#9333ea" stroke-width="9" stroke-dasharray="10,4"/>
          <text x="358" y="144" font-size="11.5" font-weight="900" fill="#7e22ce">🟣 2. Nikotin (lila)</text>
          <text x="358" y="158" font-size="10" font-weight="700" fill="#7e22ce">verengt Blutgefäß!</text>
        `
            : ""
        }

        <!-- 3. GRAU: Kohlenstoffmonoxid (CO) schneller als Sauerstoff von Lungenbläschen zur Zelle -->
        ${
          showCo
            ? `
          <path d="M 225 96 L 225 120 C 350 120, 360 195, 190 205"
                fill="none" stroke="#64748b" stroke-width="6" stroke-dasharray="6,4"/>
          <circle cx="295" cy="140" r="6.5" fill="#475569"/>
          <circle cx="322" cy="172" r="6.5" fill="#475569"/>
          <circle cx="255" cy="202" r="6.5" fill="#475569"/>
          <text x="245" y="236" font-size="11" font-weight="900" fill="#475569">
            ⚪ 3. Kohlenmonoxid (grau): schneller als Sauerstoff!
          </text>
        `
            : ""
        }

        <circle cx="225" cy="89" r="5" fill="#ef4444"/>
        <circle cx="252" cy="122" r="5" fill="#ef4444"/>

        <!-- Zelle (Stern unten links) -->
        <polygon points="135,164 147,184 170,180 156,198 168,217 145,214 132,232 124,210 102,212 116,194 105,176 126,180"
                 fill="#fef08a" stroke="#ca8a04" stroke-width="2.2"/>
        <circle cx="140" cy="198" r="9.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
        <text x="140" y="202" text-anchor="middle" font-size="10" font-weight="900" fill="#0f172a">N</text>
        <text x="72" y="232" font-size="12" font-weight="900" fill="#0f172a">Zelle</text>
        <text x="86" y="68" font-size="11" font-weight="800" fill="#2563eb">↖ zur Lunge</text>
      </svg>
    `;
  }

  function renderSmokerQuestions() {
    const container = document.getElementById("smoker-questions-list");
    if (!container) return;
    container.innerHTML = DATA.smokerModelSteps
      .map((step) => {
        const optsHtml = step.options
          .map((o) => `<option value="${o.correct ? "1" : "0"}">${o.textDe}</option>`)
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
              <span class="step-badge">Satz ${s.num}</span>
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

  function evaluateTab3Tabak() {
    let correct = 0;
    const total =
      DATA.schadstoffMatchingItems.length +
      DATA.folgenCheckboxes.length +
      DATA.smokerModelSteps.length +
      DATA.fiveErrorsSentences.length;

    // 1. Schadstoff-Zuordnung (7)
    DATA.schadstoffMatchingItems.forEach((item) => {
      const sel = document.getElementById(`sel-${item.id}`);
      const fb = document.getElementById(`fb-${item.id}`);
      fb.hidden = false;
      sel.classList.remove("input-ok", "input-err");
      if (sel.value === item.correctSubstance) {
        correct += 1;
        sel.classList.add("input-ok");
        fb.style.color = "#15803d";
        fb.textContent = `✓ Richtig: ${item.correctSubstance}`;
        awardSuccess("sm_match_" + item.id, 10);
      } else {
        sel.classList.add("input-err");
        fb.style.color = "#b91c1c";
        fb.textContent = `✗ Richtig ist: ${item.correctSubstance}`;
      }
    });

    // 2. 12 Folgen-Checkboxen (8 echte angekreuzt, 4 falsche nicht angekreuzt)
    DATA.folgenCheckboxes.forEach((fc) => {
      const chk = document.querySelector(`.folgen-chk[data-fc-id="${fc.id}"]`);
      const lbl = document.getElementById(`lbl-${fc.id}`);
      lbl.classList.remove("input-ok", "input-err");
      const isChecked = Boolean(chk && chk.checked);
      if (isChecked === fc.isRealConsequence) {
        correct += 1;
        lbl.classList.add("input-ok");
        awardSuccess("fc_" + fc.id, 6);
      } else {
        lbl.classList.add("input-err");
      }
    });

    // 3. Seite 10 Smoker-Modell (3)
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

    // 4. Seite 11 5-Fehler-Detektiv (6)
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

    const cert = recordGradeAndBuildCertificate(
      "Modul 3: Tabakkonsum, Passivrauchen, Seite 10 & 5-Fehler (S. 7–11)",
      correct,
      total,
      ["gift_no_smoke", "gift_detective"]
    );
    const banner = document.getElementById("tabak-grade-banner");
    banner.hidden = false;
    banner.innerHTML = cert.html;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });

    showGiftModal({
      emojis: cert.tier.emojis,
      titleDe: cert.tier.titleDe,
      descDe: cert.tier.giftDe,
      descEs: `${cert.tier.titleEs} · ${cert.tier.giftEs}`,
      gradeText: `Note (Tabakkonsum S. 7–11): ${cert.notaChile.toFixed(1)} (${correct} / ${total} richtig · ${cert.pct}%)`
    });
  }

  // =========================================================================
  // 6. MODUL 4: GROSSE END-PROBE (NOTE 1,0–7,0 MIT BILDERN & GESCHENK-EMOJIS)
  // =========================================================================
  function buildArenaQuestionVisual(q) {
    const src = q.imageSrc || "img/heart_realistic.jpg";
    const cap = q.imageCaptionDe || q.topicDe;
    return `
      <img src="${src}" alt="${cap}" loading="lazy">
      <div class="arena-visual-caption">${cap}</div>
    `;
  }

  function initTab4Arena() {
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

    if (state.arenaSolvedSet.size >= 30) unlockGiftSilent("gift_unicorn");
    if (state.arenaSolvedSet.size >= 40) unlockGiftSilent("gift_trophy");

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

    document.getElementById("arena-arcade-visual").innerHTML = buildArenaQuestionVisual(item);
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

    const cert = recordGradeAndBuildCertificate("End-Probe (Spiel-Show)", correct, total);
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
          <img class="quiz-card-img" src="${q.imageSrc || "img/heart_realistic.jpg"}" alt="${q.imageCaptionDe || q.topicDe}" loading="lazy">
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

    const cert = recordGradeAndBuildCertificate("Große End-Probe (Ganze Liste)", correct, total);
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
  // 7. MODUL 5: GESCHENK-EMOJIS & NOTEN-SKALA (1,0 BIS 7,0)
  // =========================================================================
  function initTab5Gifts() {
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
  // 8. INITIALISIERUNG
  // =========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndTabs();
    initTab1Heft();
    initTab2BlutKreislauf();
    initTab3Tabak();
    initTab4Arena();
    initTab5Gifts();
    updateGlobalHeader();
  });
})();
