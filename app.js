const SECTIONS = {
  "6.2": { title: "6.2 Volumetric Efficiency", tags: ["Airflow","Engines","Gases","Reciprocating engines"], md:
`Volumetric efficiency measures how well a naturally aspirated four-stroke engine "breathes" — how much fresh charge it actually draws in compared with the swept volume at a reference density.

$$\\eta_v = \\frac{2\\dot m_a}{\\rho_{a,0} V_d N}$$

Here $\\dot m_a$ is the air mass flow rate, $V_d$ the displaced volume, $N$ the crankshaft speed, and $\\rho_{a,0}$ the reference air density (ambient or inlet manifold). The factor 2 appears because each cylinder fills once every two revolutions.

**Study notes**

- Using ambient density gives an *overall* figure for the whole intake system.
- Using manifold density isolates the cylinder, port, and valve.
- Typical wide-open-throttle values lie roughly between 0.8 and 0.95.` },
  "6.2.1": { title: "6.2.1 Quasi-Static Effects", tags: ["Thermodynamics","Fuel vapor"], md:
`Quasi-static effects are those that would exist even with very slow flow: fuel vapor and water vapor displacing air, the ratio of exhaust to inlet pressure, and the compression ratio.

$$\\eta_v \\propto \\frac{p_i}{p_0}\\left(1 - \\frac{p_e/p_i - 1}{\\gamma (r_c - 1)}\\right)$$

A higher exhaust back-pressure leaves more residual gas, which reduces room for fresh charge.` },
  "6.2.2": { title: "6.2.2 Intake and Exhaust Flow Resistances", tags: ["Pressure loss","Fluids"], md:
`Each component (air filter, throttle, manifold, port, valve) causes a pressure drop that scales roughly with the square of the local velocity:

$$\\Delta p_j \\approx \\xi_j \\, \\rho \\, \\frac{v_j^2}{2}$$

Because velocity scales with mean piston speed, losses grow quickly at high engine speed.` },
  "6.2.5": { title: "6.2.5 Airflow Choking at Intake Valve", tags: ["Compressible flow","Valves"], md:
`At high speed the flow through the minimum valve area can approach sonic conditions. A common design check is the Mach index $Z$:

$$Z = \\frac{A_p\\, \\bar S_p}{C_i A_i\\, a_0}$$

Volumetric efficiency drops sharply once $Z$ exceeds about 0.6.` }
};

const SYSTEM = `You write concise textbook sections for engineering students. Default domain: internal combustion engines, thermodynamics, and fluid mechanics, unless the question is clearly about something else.
Format: Markdown. Start with a single "# " heading naming the topic (no section number). Then a line "Tags: a, b, c" with 3-5 short topic tags. Then explanatory prose, optional "## " subsections, bullet lists where helpful, and equations in LaTeX ($...$ inline, $$...$$ display). Define every symbol. Show worked steps for numeric problems.
Write in neutral textbook voice. No greetings, no questions back to the reader, no disclaimers, no mention of being an AI.`;

const $ = s => document.querySelector(s);
const page = $("#page");
const esc = s => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cfg = () => ({ base: localStorage.sr_base || "https://api.openai.com/v1", model: localStorage.sr_model || "gpt-4o-mini", key: localStorage.sr_key || "" });

// --- rendering: pull math out, run marked, sanitize, put KaTeX back
function renderMd(md) {
  const math = [];
  const stash = (tex, display) => { math.push({ tex, display }); return `@@MATH${math.length - 1}@@`; };
  md = md.replace(/```math\s*\n([\s\S]*?)```/g, (_, t) => "\n\n" + stash(t, true) + "\n\n")
         .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => stash(t, true))
         .replace(/\\\[([\s\S]+?)\\\]/g, (_, t) => stash(t, true))
         .replace(/\\\(([\s\S]+?)\\\)/g, (_, t) => stash(t, false))
         .replace(/(^|[^\\$])\$([^\s$](?:[^$\n]*?[^\s$])?)\$/g, (_, p, t) => p + stash(t, false));
  let html = DOMPurify.sanitize(marked.parse(md.replace(/<(?=[a-zA-Z\/!])/g, "&lt;")));
  return html.replace(/@@MATH(\d+)@@/g, (_, i) => {
    const m = math[+i];
    try { return katex.renderToString(m.tex, { displayMode: m.display, throwOnError: false, output: "html" }); }
    catch { return `<code>${esc(m.tex)}</code>`; }
  });
}
function show({ title, tags, md, label }) {
  const body = renderMd(md);
  const answer = label
    ? `<section class="ai-block"><div class="label">${esc(label)}</div><h2>${esc(title)}</h2>${body}</section>`
    : `<h1>${esc(title.toUpperCase())}</h1>${body}`;
  const ctx = c => `<section class="context"><h2>${esc(c.heading)}</h2>${renderMd(c.md)}</section>`;
  page.innerHTML =
    `<div class="related">Topics related to this chapter</div>
     <div class="tags">${tags.map(t => `<a href="#">${esc(t)}</a>`).join("<span>|</span>")}</div>
     ${label ? ctx(CONTEXT_BEFORE) + answer + ctx(CONTEXT_AFTER) : answer}`;
  $("#scroll").scrollTop = 0;
  $("#crumb-b").textContent = title + " \u203A";
  const ch = /^\d+/.exec(title) && CHAPTER(title.split(/\s/)[0]);
  if (ch) $("#crumb-a").textContent = "\u2039 Ch. " + ch[1];
}

// --- TOC
let tempCount = 0;
function buildToc() {
  $("#toc").innerHTML = TOC.map(([id, t, sub]) => `<a href="#" data-id="${id}" class="${sub ? "sub" + (id.split(".").length > 2 ? " sub2" : "") : "chap"}">${esc(t)}</a>`).join("");
}
function activate(el) { document.querySelectorAll("#toc a").forEach(a => a.classList.toggle("active", a === el)); }
$("#toc").addEventListener("click", e => {
  const a = e.target.closest("a"); if (!a) return; e.preventDefault(); activate(a);
  const s = SECTIONS[a.dataset.id] || answers[a.dataset.id] || stub(a.dataset.id); if (s) show(s);
});
const answers = {};
function addTemp(sec) {
  const id = "ans" + (++tempCount); answers[id] = sec;
  const a = document.createElement("a"); a.href = "#"; a.dataset.id = id; a.className = "sub temp"; a.textContent = sec.title;
  let list = $("#toc .temp-head");
  if (!list) { list = document.createElement("div"); list.className = "temp-head"; list.textContent = "Your AI study notes"; $("#toc").prepend(list); }
  list.after(a); activate(a); a.scrollIntoView({ block: "nearest" });
}

// --- search / ask
const wrap = $("#search-wrap"), q = $("#q");
$("#search-btn").onclick = () => {
  if (!wrap.classList.contains("open")) { wrap.classList.add("open"); q.focus(); return; }
  if (q.value.trim()) ask(q.value.trim()); else wrap.classList.remove("open");
};
q.addEventListener("keydown", e => { if (e.key === "Enter" && q.value.trim()) ask(q.value.trim()); if (e.key === "Escape") wrap.classList.remove("open"); });

let busy = false;
async function ask(question) {
  if (busy) return;
  const { base, model, key } = cfg();
  if (!key) {
    show({ title: "Search", tags: ["Settings"], md:
      `To answer questions here, add an API key first.

1. Get a key from **Gemini** ([aistudio.google.com/apikey](https://aistudio.google.com/apikey)), **Groq** ([console.groq.com/keys](https://console.groq.com/keys)), **OpenAI**, or **OpenRouter**.
2. Click **⋮** Settings, paste the key, and set that provider's base URL and model (see the help box in Settings).
3. Click **Save**, then search again.` });
    page.querySelector("h1, h2").insertAdjacentHTML("afterend", `<p class="notice">No API key is set for this browser.</p>`);
    return;
  }
  busy = true;
  page.innerHTML = `<p class="muted">Retrieving section…</p><div class="skel">${"<div></div>".repeat(3)}<div style="width:60%"></div>${"<div></div>".repeat(4)}<div style="width:40%"></div></div>`;
  try {
    const url = base.replace(/\/+$/, "") + "/chat/completions";
    const body = JSON.stringify({ model, temperature: 0.3, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: question }] });
    let r, j;
    for (let attempt = 0; attempt < 3; attempt++) {
      r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + key }, body });
      j = await r.json().catch(() => ({}));
      if (r.ok) break;
      if ((r.status === 503 || r.status === 429) && attempt < 2) {
        page.querySelector(".muted").textContent = `Model busy — retrying (${attempt + 2}/3)…`;
        await new Promise(res => setTimeout(res, 1500 * (attempt + 1)));
        continue;
      }
      const detail = j.error?.message || j.message || (typeof j.error === "string" ? j.error : "") || (Array.isArray(j) && j[0]?.error?.message) || JSON.stringify(j).slice(0, 200);
      throw new Error((detail ? detail + " — " : "") + `HTTP ${r.status}`);
    }
    if (!r.ok) {
      const detail = j.error?.message || j.message || JSON.stringify(j).slice(0, 200);
      throw new Error((detail ? detail + " — " : "") + `HTTP ${r.status}`);
    }
    let md = j.choices?.[0]?.message?.content || "";
    let title = question, tags = ["Study notes"];
    md = md.replace(/^\s*#\s+(.+)\n/, (_, t) => { title = t.trim(); return ""; });
    md = md.replace(/^\s*Tags:\s*(.+)\n/im, (_, t) => { tags = t.split(",").map(s => s.trim()).filter(Boolean).slice(0, 6); return ""; });
    const sec = { title, tags, md, label: "AI-generated study notes" };
    show(sec); addTemp(sec);
  } catch (err) {
    show({ title: "Section unavailable", tags: ["Settings"], md:
      `The request could not be completed:\n\n\`${String(err.message).slice(0, 300)}\`\n\nCheck the API key, base URL, and model under **⋮ Settings**. If the provider blocks browser requests (CORS), use one that allows them.` });
  } finally { busy = false; }
}

// --- settings modal
const PRESETS = {
  gemini: { base: "https://generativelanguage.googleapis.com/v1beta/openai/", model: "gemini-3.8-flash" },
  groq: { base: "https://api.groq.com/openai/v1", model: "llama-3.3-70b-versatile" },
  openai: { base: "https://api.openai.com/v1", model: "gpt-4o-mini" }
};
const modal = $("#modal");
document.querySelectorAll("#presets [data-preset]").forEach(btn => {
  btn.onclick = () => {
    const p = PRESETS[btn.dataset.preset];
    if (!p) return;
    $("#s-base").value = p.base;
    $("#s-model").value = p.model;
  };
});
$("#menu").onclick = () => { const c = cfg(); $("#s-base").value = c.base; $("#s-model").value = c.model; $("#s-key").value = c.key; modal.hidden = false; };
$("#s-cancel").onclick = () => modal.hidden = true;
$("#s-clear").onclick = () => { localStorage.removeItem("sr_key"); $("#s-key").value = ""; };
$("#s-save").onclick = () => {
  localStorage.sr_base = $("#s-base").value.trim() || "https://api.openai.com/v1";
  localStorage.sr_model = $("#s-model").value.trim() || "gpt-4o-mini";
  const k = $("#s-key").value.trim(); k ? localStorage.sr_key = k : localStorage.removeItem("sr_key");
  modal.hidden = true;
};
modal.onclick = e => { if (e.target === modal) modal.hidden = true; };

// --- misc toolbar
$("#collapse").onclick = () => document.body.classList.toggle("collapsed");
$("#fs").onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
$("#print").onclick = () => window.print();
if (innerWidth < 900) document.body.classList.add("collapsed");

buildToc(); activate(document.querySelector('#toc a[data-id="6.2"]')); show(SECTIONS["6.2"]);
