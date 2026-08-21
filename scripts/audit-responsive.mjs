import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:3111";
const PAGES = process.argv[2]
  ? [process.argv[2]]
  : [
      "/",
      "/leistungen",
      "/leistungen/winterdienst",
      "/leistungen/treppenhausreinigung/koblenz",
      "/hausmeisterservice/braubach",
      "/einsatzgebiet",
      "/preise",
      "/angebot",
      "/ratgeber/raeum-und-streupflicht",
      "/impressum",
      "/kontakt",
      "/ueber-uns",
    ];
const WIDTHS = [320, 375, 414, 768, 1440];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
let problems = 0;

for (const w of WIDTHS) {
  await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
  for (const path of PAGES) {
    await page.goto(BASE + path, { waitUntil: "networkidle0" });
    const res = await page.evaluate((vw) => {
      const out = {
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
        wide: [],
        wrapped: [],
        cramped: [],
        overlap: [],
      };
      const desc = (el) => {
        const id = el.id ? `#${el.id}` : "";
        const cls =
          typeof el.className === "string" && el.className
            ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".")
            : "";
        return `${el.tagName.toLowerCase()}${id}${cls}`;
      };
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0) continue;
        // element visibly extends past the right edge of the viewport
        if (r.right > vw + 1.5 && getComputedStyle(el).position !== "fixed") {
          // Ignore things an ancestor deliberately clips (the ticker track).
          let clipped = false;
          for (let a = el.parentElement; a; a = a.parentElement) {
            const ox = getComputedStyle(a).overflowX;
            if (ox === "clip" || ox === "hidden") {
              clipped = true;
              break;
            }
          }
          if (clipped) continue;
          const p = el.parentElement;
          const pr = p ? p.getBoundingClientRect().right : Infinity;
          if (r.right > pr + 1.5 || !p)
            out.wide.push(
              `${desc(el)} right=${Math.round(r.right)} w=${Math.round(r.width)}`,
            );
        }
      }
      // clickable text must never wrap to two lines
      for (const el of document.querySelectorAll(
        "a.btn, button.btn, .nav__link, .callbar__btn, .foot__link, .crumbs a, .tlink, .chip",
      )) {
        // Count actual rendered text lines via Range rects — element height is
        // useless here because these all carry a min-height.
        const range = document.createRange();
        range.selectNodeContents(el);
        el.querySelectorAll(
          ".nav__caret, .nav__burger, .choice__box, .period, .stars",
        ).forEach((x) => x.setAttribute("data-x", "1"));
        const marks = [...el.querySelectorAll("[data-x]")].map((x) =>
          Math.round(x.getBoundingClientRect().top),
        );
        const tops = new Set(
          [...range.getClientRects()]
            .filter((r) => r.height > 2 && !marks.includes(Math.round(r.top)))
            .map((r) => Math.round(r.top)),
        );
        if (tops.size > 1)
          out.wrapped.push(
            `${desc(el)} lines=${tops.size} "${el.textContent.trim().slice(0, 32)}"`,
          );
      }
      // --- cramped columns -------------------------------------------------
      // A grid helper defined only in a desktop media query falls back to
      // `grid-column: auto`, lands in one ~8px track, and shreds its text to
      // one word per line. That does not overflow, so the checks above miss
      // it entirely. Real prose in a very narrow box is the signature.
      const textEls = [];
      for (const el of document.querySelectorAll(
        "p, h1, h2, h3, h4, li, td, th, blockquote, figcaption, dd",
      )) {
        const t = [...el.childNodes]
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent)
          .join("")
          .trim();
        if (t.length < 45) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const cs = getComputedStyle(el);
        if (cs.visibility === "hidden") continue;
        // Collapsed <details> content still reports a rect in Chrome; every
        // closed FAQ answer would then "overlap" every other one.
        if (el.closest("details:not([open])")) continue;
        if (
          el.checkVisibility &&
          !el.checkVisibility({
            contentVisibilityAuto: true,
            opacityProperty: true,
            visibilityProperty: true,
          })
        )
          continue;
        textEls.push({ el, r, t });
        const chars = r.width / (parseFloat(cs.fontSize) * 0.5);
        if (chars < 14)
          out.cramped.push(
            `${desc(el)} ~${chars.toFixed(0)}ch wide (${Math.round(r.width)}px) "${t.slice(0, 30)}"`,
          );
      }

      // --- overlapping text ------------------------------------------------
      for (let i = 0; i < textEls.length; i++) {
        for (let j = i + 1; j < textEls.length; j++) {
          const a = textEls[i],
            b2 = textEls[j];
          if (a.el.contains(b2.el) || b2.el.contains(a.el)) continue;
          if (
            a.el.closest("[aria-hidden=true]") ||
            b2.el.closest("[aria-hidden=true]")
          )
            continue;
          const ox =
            Math.min(a.r.right, b2.r.right) - Math.max(a.r.left, b2.r.left);
          const oy =
            Math.min(a.r.bottom, b2.r.bottom) - Math.max(a.r.top, b2.r.top);
          if (ox <= 2 || oy <= 2) continue;
          const area = ox * oy;
          const smaller = Math.min(
            a.r.width * a.r.height,
            b2.r.width * b2.r.height,
          );
          if (area > smaller * 0.3)
            out.overlap.push(
              `${desc(a.el)} over ${desc(b2.el)} "${a.t.slice(0, 20)}" / "${b2.t.slice(0, 20)}"`,
            );
        }
      }
      return out;
    }, w);
    const overflow = res.scrollW > res.clientW + 1;
    if (
      overflow ||
      res.wide.length ||
      res.wrapped.length ||
      res.cramped.length ||
      res.overlap.length
    ) {
      problems++;
      console.log(`\n[${w}px] ${path}`);
      if (overflow)
        console.log(
          `  ! doc scrollWidth ${res.scrollW} > clientWidth ${res.clientW}`,
        );
      [...new Set(res.wide)]
        .slice(0, 6)
        .forEach((x) => console.log(`  wide:    ${x}`));
      [...new Set(res.wrapped)]
        .slice(0, 6)
        .forEach((x) => console.log(`  wraps:   ${x}`));
      [...new Set(res.cramped)]
        .slice(0, 8)
        .forEach((x) => console.log(`  cramped: ${x}`));
      [...new Set(res.overlap)]
        .slice(0, 8)
        .forEach((x) => console.log(`  overlap: ${x}`));
    }
  }
}
console.log(
  problems === 0
    ? "\nCLEAN — no overflow, no cramped columns, no overlap, no wrapped affordances."
    : `\n${problems} page/width combinations with findings.`,
);
await browser.close();
