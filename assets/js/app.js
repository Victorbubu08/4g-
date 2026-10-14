/* =========================================================
   MANUAL DO CORRETOR — APLICAÇÃO
   Conteúdo fica em data.js. Aqui ficam rotas, telas e ícones.
   ========================================================= */

const ICONS = {
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01M15 10h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  table: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11"/>',
};

const icon = (name) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.book}</svg>`;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const brl = (n) => (isFinite(n) ? n : 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/* ---------- Progresso (salvo no navegador) ---------- */
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem("mdc:" + key)) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("mdc:" + key, JSON.stringify(value)); } catch { /* sem storage */ }
  },
};
const lessonKey = (modId, i) => `${modId}/${i}`;
const doneSet = () => new Set(store.get("done", []));
const isDone = (modId, i) => doneSet().has(lessonKey(modId, i));
function toggleDone(modId, i) {
  const s = doneSet();
  const k = lessonKey(modId, i);
  s.has(k) ? s.delete(k) : s.add(k);
  store.set("done", [...s]);
}
function moduleProgress(mod) {
  const done = mod.aulas.filter((_, i) => isDone(mod.id, i)).length;
  return { done, total: mod.aulas.length, pct: mod.aulas.length ? Math.round((done / mod.aulas.length) * 100) : 0 };
}
function totalProgress() {
  const total = MODULOS.reduce((t, m) => t + m.aulas.length, 0);
  const done = MODULOS.reduce((t, m) => t + moduleProgress(m).done, 0);
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}
function nextLesson() {
  for (const m of MODULOS) {
    const i = m.aulas.findIndex((_, idx) => !isDone(m.id, idx));
    if (i !== -1) return { mod: m, i };
  }
  return { mod: MODULOS[0], i: 0 };
}

/* ---------- Vídeo ---------- */
function embedUrl(url) {
  if (!url) return "";
  let m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (m) return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1`;
  m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;
  return url; // Panda Video e outros: cole o link de embed direto
}

/* ---------- Componentes ---------- */
function moduleCard(mod, idx) {
  const p = moduleProgress(mod);
  return `
    <a class="mod" href="#/modulo/${mod.id}/0" style="--c:${mod.cor}">
      <span class="mod-num">${String(idx + 1).padStart(2, "0")}</span>
      <span class="mod-icon">${icon(mod.icone)}</span>
      <h3>${esc(mod.titulo)}</h3>
      <p>${esc(mod.subtitulo)}</p>
      <div class="mod-foot">
        <span>${p.total} aulas</span>
        <div class="bar"><span style="width:${p.pct}%"></span></div>
        <span>${p.pct}%</span>
      </div>
    </a>`;
}

function bonusCard(b) {
  return `
    <a class="bonus" href="${esc(b.link)}" target="_blank" rel="noopener">
      <span class="bonus-icon">${icon(b.icone)}</span>
      <div>
        <h3>${esc(b.titulo)}</h3>
        <p>${esc(b.descricao)}</p>
        <span class="tag">${esc(b.tag)}</span>
      </div>
    </a>`;
}

function tipCard(d, withNav = false) {
  return `
    <div class="tip">
      <span class="tip-icon">${icon("bulb")}</span>
      <div>
        <span class="cat">${esc(d.categoria)}</span>
        <p>${esc(d.texto)}</p>
      </div>
      ${withNav ? `<div class="tip-nav">
        <button class="icon-btn" data-tip="-1" aria-label="Dica anterior">${icon("left")}</button>
        <button class="icon-btn" data-tip="1" aria-label="Próxima dica">${icon("right")}</button>
      </div>` : ""}
    </div>`;
}

function sectionHead(title, sub, link, linkText) {
  return `
    <div class="section-head">
      <div><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ""}</div>
      ${link ? `<a class="link" href="${link}">${linkText} →</a>` : ""}
    </div>`;
}

/* ---------- Telas ---------- */
const dayIndex = Math.floor(Date.now() / 86400000);
let tipIndex = dayIndex % DICAS.length;

function viewHome() {
  const tp = totalProgress();
  const nx = nextLesson();
  const checks = store.get("checklist", []);
  return `
    <section class="hero">
      <span class="eyebrow">${esc(SITE.edicao)}</span>
      <h1>Bem-vindo ao ${esc(SITE.nome)}</h1>
      <p>${esc(SITE.slogan)}</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="#/modulo/${nx.mod.id}/${nx.i}">${icon("play")}${tp.done ? "Continuar de onde parei" : "Começar agora"}</a>
        <a class="btn btn-ghost" style="width:auto" href="#/bonus">${icon("gift")}Ver bônus</a>
      </div>
      <div class="progress">
        <div class="progress-top"><span>Seu progresso</span><span>${tp.done}/${tp.total} aulas · ${tp.pct}%</span></div>
        <div class="bar"><span style="width:${tp.pct}%"></span></div>
      </div>
    </section>

    <section class="section">
      ${sectionHead("Dica do dia", "Uma dica prática por dia para aplicar no seu trabalho", "#/dicas", "Todas as dicas")}
      <div id="tip-box">${tipCard(DICAS[tipIndex], true)}</div>
    </section>

    <section class="section">
      ${sectionHead("Módulos", "Siga na ordem ou vá direto ao que você precisa agora", "#/modulos", "Ver todos")}
      <div class="grid">${MODULOS.slice(0, 6).map(moduleCard).join("")}</div>
    </section>

    <section class="section">
      ${sectionHead("Primeiros passos", "Seu plano de ação para a primeira semana")}
      <div class="checklist">
        ${CHECKLIST.map((c, i) => `
          <label class="check-item">
            <input type="checkbox" data-check="${i}" ${checks.includes(i) ? "checked" : ""}>
            <span class="box">${icon("check")}</span>
            <span>${esc(c)}</span>
          </label>`).join("")}
      </div>
    </section>

    <section class="section">
      ${sectionHead("Bônus exclusivos", "Materiais prontos para usar no dia a dia", "#/bonus", "Ver todos")}
      <div class="grid">${BONUS.slice(0, 3).map(bonusCard).join("")}</div>
    </section>

    ${ctaBlock()}`;
}

function ctaBlock() {
  return `
    <section class="cta">
      <div>
        <h3>Ficou com alguma dúvida?</h3>
        <p>Fale com o suporte ou troque experiências com outros corretores na comunidade.</p>
      </div>
      <div class="hero-actions" style="margin:0">
        <a class="btn btn-gold" href="${esc(SITE.comunidadeLink)}" target="_blank" rel="noopener">${icon("users")}Comunidade</a>
        <a class="btn btn-ghost" style="width:auto" href="https://wa.me/${esc(SITE.suporteWhatsapp)}" target="_blank" rel="noopener">${icon("message")}Suporte</a>
      </div>
    </section>`;
}

function viewModulos() {
  return `
    <header class="page-title">
      <span class="eyebrow">Conteúdo</span>
      <h1>Módulos</h1>
      <p>${MODULOS.length} módulos com ${MODULOS.reduce((t, m) => t + m.aulas.length, 0)} aulas, da captação ao pós-venda.</p>
    </header>
    <div class="grid">${MODULOS.map(moduleCard).join("")}</div>`;
}

function viewModulo(modId, aulaIdx) {
  const mi = MODULOS.findIndex((m) => m.id === modId);
  if (mi === -1) return viewNotFound();
  const mod = MODULOS[mi];
  const i = Math.min(Math.max(parseInt(aulaIdx, 10) || 0, 0), mod.aulas.length - 1);
  const aula = mod.aulas[i];
  const p = moduleProgress(mod);
  const done = isDone(mod.id, i);
  const src = embedUrl(aula.video);

  const prev = i > 0 ? `#/modulo/${mod.id}/${i - 1}` : mi > 0 ? `#/modulo/${MODULOS[mi - 1].id}/${MODULOS[mi - 1].aulas.length - 1}` : null;
  const next = i < mod.aulas.length - 1 ? `#/modulo/${mod.id}/${i + 1}` : mi < MODULOS.length - 1 ? `#/modulo/${MODULOS[mi + 1].id}/0` : null;

  return `
    <div class="crumb"><a href="#/modulos">Módulos</a>${icon("right")}<span>${esc(mod.titulo)}</span></div>
    <div class="lesson-layout">
      <div>
        <div class="player">
          ${src
            ? `<iframe src="${esc(src)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(aula.titulo)}"></iframe>`
            : `<div class="player-empty"><span class="tip-icon">${icon("play")}</span><strong>Aula em produção</strong><br><small>O vídeo desta aula será publicado em breve.</small></div>`}
        </div>
        <div class="lesson-head">
          <div>
            <span class="eyebrow">Módulo ${mi + 1} · Aula ${i + 1}</span>
            <h1>${esc(aula.titulo)}</h1>
          </div>
          <button class="btn ${done ? "btn-ok" : "btn-gold"}" data-done="${mod.id}/${i}">
            ${icon("check")}${done ? "Aula concluída" : "Marcar como concluída"}
          </button>
        </div>
        ${aula.descricao ? `<p class="lesson-desc">${esc(aula.descricao)}</p>` : ""}
        ${aula.materiais && aula.materiais.length ? `
          <div class="materials">
            <strong>Materiais da aula</strong>
            ${aula.materiais.map((m) => `<a href="${esc(m.link)}" target="_blank" rel="noopener">${icon("download")}${esc(m.titulo)}</a>`).join("")}
          </div>` : ""}
        <div class="lesson-nav">
          ${prev ? `<a class="btn btn-ghost" href="${prev}">${icon("left")}Aula anterior</a>` : "<span></span>"}
          ${next ? `<a class="btn btn-gold" href="${next}">Próxima aula${icon("right")}</a>` : ""}
        </div>
      </div>
      <aside class="playlist">
        <div class="playlist-head">
          <h3>${esc(mod.titulo)}</h3>
          <div class="progress-top"><span>${p.done}/${p.total} aulas</span><span>${p.pct}%</span></div>
          <div class="bar"><span style="width:${p.pct}%"></span></div>
        </div>
        ${mod.aulas.map((a, idx) => `
          <a href="#/modulo/${mod.id}/${idx}" class="${idx === i ? "current" : ""} ${isDone(mod.id, idx) ? "done" : ""}">
            <span class="n">${isDone(mod.id, idx) ? icon("check") : idx + 1}</span>
            <span>${esc(a.titulo)}</span>
            ${a.duracao ? `<small>${esc(a.duracao)}</small>` : ""}
          </a>`).join("")}
      </aside>
    </div>`;
}

function viewBonus() {
  return `
    <header class="page-title">
      <span class="eyebrow">Exclusivo para membros</span>
      <h1>Bônus</h1>
      <p>Scripts, modelos, checklists e planilhas para aplicar hoje mesmo no seu dia a dia de corretor.</p>
    </header>
    <div class="grid">${BONUS.map(bonusCard).join("")}</div>`;
}

let tipFilter = "Todas";
function viewDicas() {
  const cats = ["Todas", ...new Set(DICAS.map((d) => d.categoria))];
  const list = tipFilter === "Todas" ? DICAS : DICAS.filter((d) => d.categoria === tipFilter);
  return `
    <header class="page-title">
      <span class="eyebrow">Na prática</span>
      <h1>Dicas do Corretor</h1>
      <p>Dicas rápidas e diretas, separadas por etapa da venda.</p>
    </header>
    <div class="filters">${cats.map((c) => `<button class="chip ${c === tipFilter ? "active" : ""}" data-filter="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div class="tips-list">${list.map((d) => tipCard(d)).join("")}</div>`;
}

function viewFerramentas() {
  return `
    <header class="page-title">
      <span class="eyebrow">Calculadoras</span>
      <h1>Ferramentas do Corretor</h1>
      <p>Contas rápidas para usar no atendimento, na captação e no planejamento.</p>
    </header>

    <div class="tool" data-tool="comissao">
      <h3>${icon("percent")}Calculadora de comissão</h3>
      <p>Descubra quanto você recebe de verdade em cada venda.</p>
      <div class="fields">
        <label class="f">Valor do imóvel (R$)<input type="number" name="valor" value="500000" min="0"></label>
        <label class="f">Comissão total (%)<input type="number" name="pct" value="6" step="0.1" min="0"></label>
        <label class="f">Sua parte da comissão (%)<input type="number" name="split" value="50" step="1" min="0" max="100"></label>
        <label class="f">Impostos (%)<input type="number" name="imp" value="6" step="0.1" min="0"></label>
      </div>
      <div class="results" data-out></div>
    </div>

    <div class="tool section" data-tool="financiamento">
      <h3>${icon("wallet")}Simulador de financiamento</h3>
      <p>Estimativa de parcelas para mostrar ao cliente durante o atendimento.</p>
      <div class="fields">
        <label class="f">Valor do imóvel (R$)<input type="number" name="valor" value="400000" min="0"></label>
        <label class="f">Entrada (R$)<input type="number" name="entrada" value="80000" min="0"></label>
        <label class="f">Juros ao ano (%)<input type="number" name="juros" value="11" step="0.1" min="0"></label>
        <label class="f">Prazo (anos)<input type="number" name="prazo" value="30" min="1" max="35"></label>
        <label class="f">Sistema
          <select name="sistema"><option value="sac">SAC</option><option value="price">Price</option></select>
        </label>
      </div>
      <div class="results" data-out></div>
      <p class="note">Simulação aproximada, sem seguros e taxas do banco. Use apenas como referência.</p>
    </div>

    <div class="tool section" data-tool="custos">
      <h3>${icon("receipt")}Custos de compra</h3>
      <p>Quanto o comprador precisa separar além da entrada.</p>
      <div class="fields">
        <label class="f">Valor do imóvel (R$)<input type="number" name="valor" value="400000" min="0"></label>
        <label class="f">ITBI (%)<input type="number" name="itbi" value="3" step="0.1" min="0"></label>
        <label class="f">Escritura e registro (%)<input type="number" name="cart" value="1.5" step="0.1" min="0"></label>
      </div>
      <div class="results" data-out></div>
      <p class="note">Alíquotas variam por município e estado. Confirme na prefeitura e no cartório da cidade.</p>
    </div>`;
}

function viewNotFound() {
  return `<header class="page-title"><h1>Página não encontrada</h1><p><a class="link" href="#/">Voltar ao início →</a></p></header>`;
}

/* ---------- Calculadoras ---------- */
const result = (label, value) => `<div class="result"><small>${label}</small><strong>${value}</strong></div>`;
const CALC = {
  comissao(v) {
    const total = v.valor * v.pct / 100;
    const parte = total * v.split / 100;
    const imp = parte * v.imp / 100;
    return result("Comissão total", brl(total)) + result("Sua parte (bruto)", brl(parte)) +
           result("Impostos", brl(imp)) + result("Você recebe", brl(parte - imp));
  },
  financiamento(v) {
    const pv = Math.max(v.valor - v.entrada, 0);
    const n = Math.round(v.prazo * 12);
    const r = Math.pow(1 + v.juros / 100, 1 / 12) - 1;
    let first, last, total;
    if (v.sistema === "price") {
      first = last = r ? pv * r / (1 - Math.pow(1 + r, -n)) : pv / n;
      total = first * n;
    } else {
      const amort = pv / n;
      first = amort + pv * r;
      last = amort + amort * r;
      total = pv + r * amort * n * (n + 1) / 2;
    }
    return result("Valor financiado", brl(pv)) + result("1ª parcela", brl(first)) +
           result("Última parcela", brl(last)) + result("Total de juros", brl(total - pv)) +
           result("Renda mínima (30%)", brl(first / 0.3));
  },
  custos(v) {
    const itbi = v.valor * v.itbi / 100;
    const cart = v.valor * v.cart / 100;
    return result("ITBI", brl(itbi)) + result("Escritura e registro", brl(cart)) + result("Total estimado", brl(itbi + cart));
  },
};
function runTool(el) {
  const v = {};
  el.querySelectorAll("input, select").forEach((f) => { v[f.name] = f.tagName === "SELECT" ? f.value : parseFloat(f.value) || 0; });
  el.querySelector("[data-out]").innerHTML = CALC[el.dataset.tool](v);
}

/* ---------- Roteador ---------- */
const app = document.getElementById("app");
function render() {
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const route = parts[0] || "home";
  const views = { home: viewHome, modulos: viewModulos, bonus: viewBonus, dicas: viewDicas, ferramentas: viewFerramentas };
  app.innerHTML = route === "modulo" ? viewModulo(parts[1], parts[2]) : (views[route] || viewNotFound)();
  const active = route === "modulo" ? "modulos" : route;
  document.querySelectorAll("[data-route]").forEach((a) => a.classList.toggle("active", a.dataset.route === active));
  app.querySelectorAll("[data-tool]").forEach(runTool);
}

app.addEventListener("input", (e) => {
  const tool = e.target.closest("[data-tool]");
  if (tool) runTool(tool);
});
app.addEventListener("change", (e) => {
  if (e.target.dataset.check !== undefined) {
    const i = Number(e.target.dataset.check);
    const s = new Set(store.get("checklist", []));
    e.target.checked ? s.add(i) : s.delete(i);
    store.set("checklist", [...s]);
  }
});
app.addEventListener("click", (e) => {
  const t = e.target.closest("[data-done], [data-tip], [data-filter]");
  if (!t) return;
  if (t.dataset.done) {
    const [m, i] = t.dataset.done.split("/");
    toggleDone(m, Number(i));
    render();
  } else if (t.dataset.tip) {
    tipIndex = (tipIndex + Number(t.dataset.tip) + DICAS.length) % DICAS.length;
    document.getElementById("tip-box").innerHTML = tipCard(DICAS[tipIndex], true);
  } else if (t.dataset.filter) {
    tipFilter = t.dataset.filter;
    render();
  }
});

window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });

/* ---------- Inicialização ---------- */
document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
document.querySelectorAll("[data-site]").forEach((el) => { el.textContent = SITE[el.dataset.site]; });
document.getElementById("suporte-link").href = `https://wa.me/${SITE.suporteWhatsapp}`;
render();
