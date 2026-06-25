const express = require("express");
const { renderHome, renderSchool, renderCompare, schools } = require("./lib/render");
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect old per-school subdomains (e.g. williams.schoolskimmer.com) to /<slug>.
app.use((req, res, next) => {
  const host = (req.headers.host || "").split(":")[0];
  const sub = host.split(".")[0];
  if (schools[sub] && req.path === "/") {
    return res.redirect(301, `https://www.schoolskimmer.com/${sub}`);
  }
  next();
});

app.get("/", (req, res) => res.type("html").send(renderHome()));
app.get("/compare", (req, res) => res.type("html").send(renderCompare()));
app.get("/healthz", (req, res) => res.send("ok"));

app.get("/:slug", (req, res, next) => {
  const html = renderSchool(req.params.slug);
  if (!html) return next();
  res.type("html").send(html);
});

app.use((req, res) => res.status(404).type("html").send(
  `<!doctype html><meta charset="utf-8"><title>Not found</title>` +
  `<div style="font-family:system-ui;max-width:560px;margin:80px auto;padding:0 24px">` +
  `<h1 style="font-weight:600">Page not found</h1>` +
  `<p>That school isn't on SchoolSkimmer yet. <a href="/">Back to the homepage</a>.</p></div>`
));

app.listen(PORT, () => console.log(`SchoolSkimmer running on ${PORT}`));
