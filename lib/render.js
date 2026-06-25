// Rendering layer. Pure string templates — no framework needed.
const { schools, order } = require("../data/schools");

function esc(s) {
  return String(s);
}

function head(title, desc, accent, accentDeep) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
  :root {
    --ink: #1c1a17; --paper: #f6f3ec; --paper-2: #efe9dd;
    --accent: ${accent || "#500082"}; --accent-deep: ${accentDeep || "#36005a"};
    --gold: #b88a2e; --rule: #d6cdba; --muted: #6a635a;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--paper); color: var(--ink);
    font-family: "Inter", system-ui, sans-serif; font-size: 17px; line-height: 1.6;
    -webkit-font-smoothing: antialiased; }
  a { color: var(--accent); text-decoration: none; border-bottom: 1px solid color-mix(in srgb, var(--accent) 30%, transparent); }
  a:hover { border-bottom-color: var(--accent); }
  .wrap { max-width: 880px; margin: 0 auto; padding: 0 24px; }

  header.site { border-bottom: 1px solid var(--rule); background: var(--paper);
    position: sticky; top: 0; z-index: 10; backdrop-filter: blur(6px); }
  header.site .bar { display: flex; align-items: baseline; justify-content: space-between;
    padding: 14px 0; gap: 16px; }
  .brand { font-family: "Fraunces", serif; font-size: 17px; font-weight: 600;
    color: var(--ink); border-bottom: none; letter-spacing: -0.01em; }
  .brand span { color: var(--accent); }
  nav.toc { display: flex; gap: 18px; flex-wrap: wrap; }
  nav.toc a { font-family: "IBM Plex Mono", monospace; font-size: 12px;
    letter-spacing: 0.04em; color: var(--muted); border-bottom: none; }
  nav.toc a:hover { color: var(--accent); }

  .eyebrow { font-family: "IBM Plex Mono", monospace; font-size: 12px;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); margin: 0 0 18px; }
  h1 { font-family: "Fraunces", serif; font-weight: 500;
    font-size: clamp(34px, 6vw, 56px); line-height: 1.05; letter-spacing: -0.01em; margin: 0 0 20px; }
  .lead { font-size: 19px; max-width: 62ch; margin: 0 0 8px; }
  .note { color: var(--muted); font-size: 15px; max-width: 62ch; }

  .hero { padding: 64px 0 40px; border-bottom: 1px solid var(--rule); }

  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
    border: 1px solid var(--rule); border-radius: 4px; margin: 36px 0 0;
    overflow: hidden; background: var(--paper-2); }
  .stat { padding: 18px 16px; border-right: 1px solid var(--rule); }
  .stat:last-child { border-right: none; }
  .stat .n { font-family: "Fraunces", serif; font-size: 26px; color: var(--accent-deep);
    display: block; line-height: 1; }
  .stat .l { font-family: "IBM Plex Mono", monospace; font-size: 11px; text-transform: uppercase;
    letter-spacing: 0.06em; color: var(--muted); margin-top: 8px; display: block; }
  @media (max-width: 640px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
    .stat:nth-child(2) { border-right: none; }
    .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--rule); }
  }

  section { padding: 52px 0; border-bottom: 1px solid var(--rule); }
  .sec-num { font-family: "IBM Plex Mono", monospace; font-size: 12px; color: var(--gold);
    letter-spacing: 0.1em; display: block; margin-bottom: 10px; }
  h2 { font-family: "Fraunces", serif; font-weight: 500; font-size: clamp(26px, 4vw, 34px);
    line-height: 1.15; margin: 0 0 18px; letter-spacing: -0.01em; }
  h3 { font-family: "Inter", sans-serif; font-weight: 600; font-size: 18px; margin: 28px 0 8px; }
  p { margin: 0 0 16px; }
  ul { margin: 0 0 16px; padding-left: 22px; }
  li { margin-bottom: 8px; }

  .video { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;
    border-radius: 6px; border: 1px solid var(--rule); margin: 20px 0 8px; background: #000; }
  .video iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
  .caption { font-family: "IBM Plex Mono", monospace; font-size: 12px; color: var(--muted); margin: 0 0 8px; }

  .callout { background: var(--paper-2); border-left: 3px solid var(--accent);
    padding: 18px 20px; border-radius: 0 4px 4px 0; margin: 24px 0; }
  .callout h3 { margin-top: 0; }
  .callout p:last-child { margin-bottom: 0; }

  .links { list-style: none; padding: 0; margin: 16px 0 0; }
  .links li { border-top: 1px solid var(--rule); padding: 12px 0; display: flex;
    justify-content: space-between; align-items: baseline; gap: 12px; }
  .links li:last-child { border-bottom: 1px solid var(--rule); }
  .links .desc { color: var(--muted); font-size: 14px; }
  .links a { border-bottom: none; font-weight: 500; }

  /* Homepage cards */
  .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin: 36px 0 0; }
  @media (max-width: 640px) { .cards { grid-template-columns: 1fr; } }
  .card { border: 1px solid var(--rule); border-radius: 6px; padding: 24px; background: var(--paper-2);
    display: block; border-bottom: 1px solid var(--rule); transition: transform .12s ease; }
  .card:hover { transform: translateY(-2px); border-color: var(--card-accent, var(--accent)); }
  .card .name { font-family: "Fraunces", serif; font-size: 24px; font-weight: 600;
    color: var(--ink); margin: 0 0 4px; }
  .card .place { font-family: "IBM Plex Mono", monospace; font-size: 12px; color: var(--muted);
    text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 14px; }
  .card .tag { color: var(--ink); margin: 0 0 16px; font-size: 15px; }
  .card .go { font-family: "IBM Plex Mono", monospace; font-size: 12px; letter-spacing: 0.06em;
    color: var(--card-accent, var(--accent)); }

  /* Compare table */
  .ctable { width: 100%; border-collapse: collapse; margin: 28px 0 0; font-size: 15px; }
  .ctable th, .ctable td { text-align: left; padding: 14px 14px; border-bottom: 1px solid var(--rule);
    vertical-align: top; }
  .ctable thead th { font-family: "Fraunces", serif; font-size: 19px; font-weight: 600; }
  .ctable thead th.feat { font-family: "IBM Plex Mono", monospace; font-size: 11px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
  .ctable tbody th { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 500;
    color: var(--muted); width: 30%; }
  .ctable td { color: var(--ink); }
  @media (max-width: 640px) {
    .ctable { font-size: 13.5px; }
    .ctable th, .ctable td { padding: 10px 8px; }
    .ctable tbody th { width: 34%; }
  }

  footer { padding: 40px 0 60px; color: var(--muted); font-size: 14px; }
  .disclaimer { font-family: "IBM Plex Mono", monospace; font-size: 12px; line-height: 1.6; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .card:hover { transform: none; } }
</style>
</head>
<body>`;
}

function siteHeader(current) {
  const navLinks = order
    .map((s) => `<a href="/${s}">${schools[s].shortName}</a>`)
    .join("\n      ");
  return `<header class="site">
  <div class="wrap bar">
    <a class="brand" href="/">School<span>Skimmer</span></a>
    <nav class="toc">
      <a href="/">Home</a>
      ${navLinks}
      <a href="/compare">Compare</a>
    </nav>
  </div>
</header>`;
}

function disclaimer() {
  return `<footer class="wrap">
  <p class="disclaimer">SchoolSkimmer is an independent, informational guide for prospective students. It is not affiliated with, endorsed by, or operated by any college shown. Every fact links to an official college page — verify current figures and deadlines there before deciding. Videos are embedded from each college's official YouTube channel.</p>
</footer>
</body>
</html>`;
}

function videoBlock(v) {
  if (!v) return "";
  return `    <div class="video">
      <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" loading="lazy" allowfullscreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <p class="caption">${v.caption}</p>`;
}

function renderSection(sec, school) {
  let out = `  <section id="${sec.id}">
    <span class="sec-num">${sec.num} / ${sec.eyebrow}</span>
    <h2>${sec.h}</h2>
`;
  (sec.body || []).forEach((p) => (out += `    <p>${p}</p>\n`));
  if (sec.subhead) out += `    <h3>${sec.subhead}</h3>\n`;
  if (sec.list) {
    out += "    <ul>\n";
    sec.list.forEach((li) => (out += `      <li>${li}</li>\n`));
    out += "    </ul>\n";
  }
  (sec.body2 || []).forEach((p) => (out += `    <p>${p}</p>\n`));
  if (sec.useVideo2 && school.video2) out += videoBlock(school.video2) + "\n";
  if (sec.callout) {
    out += `    <div class="callout">
      <h3>${sec.callout.h}</h3>
      <p>${sec.callout.body}</p>
    </div>\n`;
  }
  if (sec.links) {
    out += '    <ul class="links">\n';
    sec.links.forEach(
      (l) =>
        (out += `      <li><a href="${l.href}">${l.t}</a><span class="desc">${l.d}</span></li>\n`)
    );
    out += "    </ul>\n";
  }
  out += "  </section>\n";
  return out;
}

function renderSchool(slug) {
  const s = schools[slug];
  if (!s) return null;
  const other = order.find((o) => o !== slug);
  let html = head(
    `${s.name} — SchoolSkimmer`,
    `What a prospective high school senior should look at when considering ${s.name}: academics, the signature feature, cost and aid, campus life, and how to visit.`,
    s.accent,
    s.accentDeep
  );
  html += siteHeader(slug);
  html += `
<div class="hero wrap">
  <p class="eyebrow">For the prospective student</p>
  <h1>${s.name}</h1>
  <p class="lead">${s.summary}</p>
  <p class="note">Figures below are drawn from ${s.shortName}'s official sites and recent admissions data. Always check the official pages for the most current numbers. ${
    other ? `Deciding between schools? <a href="/compare">See the side-by-side comparison</a>.` : ""
  }</p>
  <div class="stats">
    ${s.stats.map((st) => `<div class="stat"><span class="n">${st.n}</span><span class="l">${st.l}</span></div>`).join("\n    ")}
  </div>
</div>

<main class="wrap">
  <section id="overview">
    <span class="sec-num">00 / Start here</span>
    <h2>A look at campus</h2>
    <p>Before reading further, it's worth seeing the place. This is the college's official tour video.</p>
${videoBlock(s.video)}
  </section>
`;
  s.sections.forEach((sec) => (html += renderSection(sec, s)));
  html += `</main>
`;
  html += disclaimer();
  return html;
}

function renderHome() {
  let html = head(
    "SchoolSkimmer — A factual guide to top colleges",
    "Plain, factual guides for high school seniors deciding between selective colleges. Academics, cost, campus life, and how to visit — with links to every official source.",
    "#500082",
    "#36005a"
  );
  html += siteHeader("home");
  html += `
<div class="hero wrap">
  <p class="eyebrow">For high school seniors</p>
  <h1>Look past the brochure.</h1>
  <p class="lead">SchoolSkimmer gives you plain, factual guides to selective colleges — what's actually distinctive about each, what it costs, and how to see it for yourself. Every claim links to the college's own pages so you can verify it.</p>
  <p class="note">No rankings hype, no sales pitch. Just the things worth looking at before you apply.</p>
  <div class="cards">
    ${order
      .map((slug) => {
        const s = schools[slug];
        return `<a class="card" href="/${slug}" style="--card-accent:${s.accent}">
      <p class="name">${s.name}</p>
      <p class="place">${s.town}</p>
      <p class="tag">${s.tagline}</p>
      <span class="go">Read the guide →</span>
    </a>`;
      })
      .join("\n    ")}
  </div>
  <p class="note" style="margin-top:28px;">Choosing between them? <a href="/compare">Compare side by side →</a></p>
</div>
`;
  html += disclaimer();
  return html;
}

function renderCompare() {
  const cols = order.map((s) => schools[s]);
  // Union of compare keys, in the order of the first school.
  const keys = Object.keys(cols[0].compare);
  let rows = keys
    .map((k) => {
      const cells = cols
        .map(
          (s, i) =>
            `<td class="col-${i}" style="border-left:3px solid ${s.accent}">${s.compare[k] || "—"}</td>`
        )
        .join("");
      return `      <tr><th>${k}</th>${cells}</tr>`;
    })
    .join("\n");

  let html = head(
    "Compare colleges — SchoolSkimmer",
    "A side-by-side factual comparison of selective liberal arts colleges: enrollment, academic structure, cost, aid, and admissions.",
    "#500082",
    "#36005a"
  );
  html += siteHeader("compare");
  html += `
<div class="hero wrap">
  <p class="eyebrow">Side by side</p>
  <h1>${cols.map((c) => c.shortName).join(" vs. ")}</h1>
  <p class="lead">Two of the most selective liberal arts colleges in the country, 40 minutes apart and longtime rivals. They look similar from a distance; the differences that matter are below.</p>
  <p class="note">Read the full guides: ${order.map((s) => `<a href="/${s}">${schools[s].shortName}</a>`).join(" · ")}</p>
</div>

<main class="wrap">
  <section style="border-bottom:none;">
    <table class="ctable">
      <thead>
        <tr>
          <th class="feat">Feature</th>
          ${cols.map((c) => `<th>${c.shortName}</th>`).join("\n          ")}
        </tr>
      </thead>
      <tbody>
${rows}
      </tbody>
    </table>
    <h3>The short version</h3>
    <p>The cleanest way to tell them apart is academic philosophy. <strong>Williams</strong> gives you structure — distribution requirements across divisions, plus its Oxford-style tutorials and a January Winter Study term. <strong>Amherst</strong> gives you freedom — an open curriculum with essentially no requirements, plus access to four neighboring colleges. Pick the one whose answer to "how much should a college tell me what to take?" matches yours.</p>
    <p>On the practical axes they're close: both are NESCAC Division III, both meet full financial need without loans, both are test-optional, both admit well under 10%. Amherst's need-blind policy extends to international applicants, which can matter if you're applying from abroad. Williams sits in the mountains; Amherst sits in a livelier valley with the five-college scene next door.</p>
  </section>
</main>
`;
  html += disclaimer();
  return html;
}

module.exports = { renderHome, renderSchool, renderCompare, schools, order };
