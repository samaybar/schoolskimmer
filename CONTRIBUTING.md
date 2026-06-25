# SchoolSkimmer — build notes & how to add a school

This file exists so a future session (Claude or a person) can pick the project up
cold and extend it without rediscovering how it works. If you're an AI assistant
helping with this repo, **read this file first**, then `data/schools.js` and
`lib/render.js`.

---

## What this site is

A small, data-driven site giving high-school seniors plain, factual guides to
selective colleges. Tone is deliberately **factual, not promotional** — it frames
features as things to weigh, links every claim to an official source, and carries
a disclaimer that the site is independent and unaffiliated.

Live at `www.schoolskimmer.com` (custom domain on Railway).

Pages:
- `/`            homepage — one card per school + link to compare
- `/<slug>`      one guide per school (e.g. `/williams`, `/amherst`, `/wesleyan`)
- `/compare`     side-by-side comparison (table on desktop, stacked cards on mobile)
- 404 for unknown slugs

## Architecture (deliberately minimal)

```
server.js          Express app. Routes: /, /compare, /:slug, 404. Also redirects
                   old per-school subdomains (e.g. williams.schoolskimmer.com)
                   to /<slug>.
data/schools.js    THE SINGLE SOURCE OF TRUTH. One object per school + an `order`
                   array. Adding a school = adding one object here. No other file
                   needs new content.
lib/render.js      Pure string-template rendering. Shared <head>/CSS, header,
                   footer, and the renderHome / renderSchool / renderCompare
                   functions. Loops over `order` and the school objects — it does
                   NOT hardcode school names, so it scales to N schools.
package.json       Express only. `npm start` runs server.js.
```

No framework, no build step, no database. Node + Express serving server-rendered
HTML strings. It deploys on Railway from this GitHub repo; every push to `main`
auto-redeploys.

## How to add a school (the whole recipe)

1. **Research current facts.** Pull from the college's own official sites plus
   recent admissions reporting. Get: enrollment, student–faculty ratio, the
   academic structure, the ONE signature/distinctive feature, calendar, setting,
   admit rate (label it with the class year), testing policy, financial-aid
   posture, athletics, and visit programs. Verify a real, current **official**
   YouTube video ID for the campus tour (search for it and confirm it resolves —
   do not guess an ID, and avoid the deprecated `videoseries?list=` embed format,
   which renders as "unavailable").

2. **Add one object to `data/schools.js`**, keyed by slug. Copy an existing
   school object as the template and keep the same shape. Required fields:
   - `slug, name, shortName, mascot, town, setting`
   - `accent, accentDeep` — a distinct hex color pair (each school reads
     differently; e.g. Williams purple `#500082`, Amherst violet `#3f1d70`,
     Wesleyan cardinal `#8a1c1c`)
   - `founded, tagline, summary`
   - `stats[]` — exactly 4 `{n, l}` pairs for the hero stat strip
   - `compare{}` — **keys must match the other schools' compare keys exactly**,
     or that row shows "—". Currently the 12 keys are: Undergrad enrollment,
     Student–faculty ratio, Academic structure, Signature feature, Calendar,
     Setting, Consortium, Admit rate (Class of 'NN), Testing policy, Financial
     aid, Need-blind, Athletics.
   - `video {id, title, caption}` — the tour video. Optional `video2` for a
     second embed (Williams uses one in its visit section via `useVideo2: true`).
   - `sections[]` — the six guide sections. Standard order: Academics (`01`),
     signature feature (`02`), Cost & aid (`03`), Campus life (`04`), Visiting
     (`05`), Applying (`06`). Each section supports: `id, num, eyebrow, h,
     body[], subhead, list[], body2[], callout{h, body}, links[{href,t,d}]`,
     and `useVideo2`. Only `id/num/eyebrow/h` are really needed; the rest are
     optional and render only if present.

3. **Add the slug to the `order` array** at the bottom of `data/schools.js`.
   Order controls appearance on the homepage and the column order in compare.

4. **Check the comparison copy.** `renderCompare()` in `lib/render.js` has two
   pieces of hand-written prose — the hero `lead` and the two "short version"
   paragraphs. These summarize the specific schools, so update them to include
   the new school (the rest of compare is generated automatically). The compare
   `<h1>` is auto-built from shortNames; no change needed there.

5. **Validate locally before pushing:**
   ```
   node -e 'const r=require("./lib/render"); ["/", ...].forEach(()=>0);
     console.log(!!r.renderSchool("<slug>"), r.renderSchool("nope")===null)'
   ```
   Or just confirm `renderSchool("<slug>")` returns a string, `renderHome()`
   lists the new card, and `renderCompare()` shows the new column + a mobile
   `.ccard` for it.

6. **Push to the repo and let Railway redeploy.** Use the GitHub MCP tools:
   `create-or-update-file` for whole files, `patch-file` for small surgical
   edits (preferred — sends only the diff). Then confirm the deploy with the
   Railway MCP `get-status` (look for SUCCESS). Note: the combined connector's
   tools sometimes need a `tool_search` to load before they can be called.

## Conventions worth preserving

- **Factual tone.** No hype. Each school's signature feature is presented as a
  genuine consideration with tradeoffs, not a selling point. Always end the
  "applying" section with honest "ask yourself" framing.
- **Every claim links to an official source.** Prefer the college's own `.edu`
  pages and the Net Price Calculator over third-party aggregators.
- **Design system.** Fraunces (serif display), Inter (body), IBM Plex Mono
  (labels/eyebrows). Warm paper background, per-school accent color. Keep it.
- **Mobile compare.** The compare view swaps the desktop table for stacked
  per-school cards under 640px — don't reintroduce a wide table-only layout.
- **Disclaimer stays.** The footer's independence/unaffiliated disclaimer should
  remain on every page.

## Deploy facts (for reference)

- GitHub repo: `samaybar/schoolskimmer`
- Railway project: `schoolskimmer` (ID `4d5d1c1a-e890-4759-8709-b293e0f561b3`)
- Service: `web` (ID `60878994-e8d3-4d76-8608-1da92fc92022`)
- Custom domain `www.schoolskimmer.com` is attached in the Railway dashboard
  (Settings → Networking). The MCP connector can create Railway-generated
  domains but custom-domain reassignment is done in the dashboard.

## A prompt you can paste to resume this work

> I want to add a new school to my SchoolSkimmer site (repo `samaybar/schoolskimmer`,
> deployed on Railway). Read `CONTRIBUTING.md` in the repo first — it explains the
> data-driven architecture and the exact steps. The school is **<NAME>**. Please
> research current official facts (enrollment, ratio, academic structure, signature
> feature, admit rate for the latest class, aid, athletics, visit programs) and a
> valid official campus-tour YouTube video, add the school object to
> `data/schools.js` plus its slug to `order`, update the compare prose in
> `lib/render.js`, validate, push via the GitHub MCP, and confirm the Railway deploy.
