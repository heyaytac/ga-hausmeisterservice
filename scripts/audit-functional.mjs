import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox"],
});
const p = await b.newPage();
const log = (ok, msg) => console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);

// --- gate 44: hero essentials inside the fold on a 13" laptop
await p.setViewport({ width: 1280, height: 800 });
for (const path of [
  "/",
  "/leistungen/winterdienst",
  "/hausmeisterservice/koblenz",
]) {
  await p.goto("http://localhost:3111" + path, { waitUntil: "networkidle0" });
  const r = await p.evaluate(() => {
    const h1 = document.querySelector("h1");
    const cta = document.querySelector(
      ".hero__body .actions .btn, .hero__actions .btn",
    );
    const lede = document.querySelector(".hero__body .lede");
    return {
      h1: h1?.getBoundingClientRect().bottom,
      cta: cta?.getBoundingClientRect().bottom,
      lede: lede?.getBoundingClientRect().bottom,
    };
  });
  log(
    r.cta && r.cta <= 800,
    `hero fold 1280x800 ${path} — CTA bottom ${Math.round(r.cta ?? -1)}px`,
  );
}

// --- mega menu opens on click, closes on Escape
await p.goto("http://localhost:3111/", { waitUntil: "networkidle0" });
await p.setViewport({ width: 1280, height: 800 });
await p.click('button[aria-controls="mega-leistungen"]');
let open = await p.evaluate(() =>
  document.querySelector("#mega-leistungen")?.classList.contains("is-open"),
);
log(open, "mega-menu opens on click");
const links = await p.evaluate(
  () => document.querySelectorAll("#mega-leistungen a").length,
);
log(links === 10, `mega-menu lists all 10 services (found ${links})`);
await p.keyboard.press("Escape");
open = await p.evaluate(() =>
  document.querySelector("#mega-leistungen")?.classList.contains("is-open"),
);
log(!open, "mega-menu closes on Escape");

// --- FAQ accordion
const faqOpen = await p.evaluate(() => {
  const d = document.querySelector(".faq__item");
  d.querySelector("summary").click();
  return d.open;
});
log(faqOpen, "FAQ accordion toggles");

// --- form validation blocks an empty submit and reports errors
await p.goto("http://localhost:3111/angebot", { waitUntil: "networkidle0" });
await p.click('button[type="submit"]');
const errs = await p.evaluate(() =>
  [...document.querySelectorAll(".field__error")].map((e) =>
    e.textContent.trim().slice(0, 40),
  ),
);
log(errs.length >= 3, `empty submit blocked with ${errs.length} field errors`);

// --- form falls back to WhatsApp when the sender is unconfigured
await p.evaluate(() => {
  document.querySelector('input[value="winterdienst"]').click();
  document.querySelector("#name").focus();
});
await p.type("#name", "Testeingabe");
await p.type("#phone", "0151 1234567");
await p.evaluate(() => {
  const boxes = document.querySelectorAll('input[type="checkbox"]');
  boxes[boxes.length - 1].click();
});
await p.click('button[type="submit"]');
await new Promise((r) => setTimeout(r, 1200));
const fallback = await p.evaluate(() => {
  const h = [...document.querySelectorAll("h3")].find((x) =>
    /Senden Sie die Anfrage direkt/.test(x.textContent),
  );
  if (!h) return null;
  const a = [...document.querySelectorAll("a")].find(
    (x) => x.href.includes("wa.me") && x.href.includes("Leistung"),
  );
  return a
    ? decodeURIComponent(a.href).slice(0, 110)
    : "fallback shown, no prefill";
});
log(
  Boolean(fallback),
  `unconfigured sender falls back to WhatsApp: ${fallback ?? "none"}`,
);

// --- mobile drawer
await p.setViewport({
  width: 390,
  height: 800,
  isMobile: true,
  hasTouch: true,
});
await p.goto("http://localhost:3111/", { waitUntil: "networkidle0" });
await p.click(".nav__toggle");
const drawer = await p.evaluate(() =>
  Boolean(document.querySelector("#nav-drawer")),
);
log(drawer, "mobile drawer opens");

// --- structured data parses
await p.goto("http://localhost:3111/leistungen/winterdienst/koblenz", {
  waitUntil: "networkidle0",
});
const ld = await p.evaluate(() =>
  [...document.querySelectorAll('script[type="application/ld+json"]')].map(
    (s) => {
      try {
        return JSON.parse(s.textContent)["@type"];
      } catch {
        return "INVALID";
      }
    },
  ),
);
log(
  !ld.includes("INVALID") && ld.length >= 4,
  `JSON-LD valid on combo page: ${ld.join(", ")}`,
);
await b.close();
