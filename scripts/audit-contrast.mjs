import puppeteer from "puppeteer-core";
const PAGES = [
  "/",
  "/leistungen/winterdienst",
  "/leistungen/treppenhausreinigung/koblenz",
  "/hausmeisterservice/braubach",
  "/einsatzgebiet",
  "/preise",
  "/angebot",
  "/kontakt",
  "/ratgeber/raeum-und-streupflicht",
  "/impressum",
  "/ueber-uns",
];
const b = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox"],
});
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900 });
const seen = new Set();
let fails = 0;
for (const path of PAGES) {
  await p.goto("http://localhost:3111" + path, { waitUntil: "networkidle0" });
  const out = await p.evaluate(() => {
    // Chrome returns computed colours in their authored space (oklch(...)),
    // so rasterise through a 1x1 canvas to get real sRGB bytes.
    const cv = document.createElement("canvas");
    cv.width = cv.height = 1;
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    const parse = (c) => {
      if (!c || c === "transparent") return null;
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = "#000";
      try {
        ctx.fillStyle = c;
      } catch {
        return null;
      }
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lin = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const lum = ([r, g, bl]) =>
      0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(bl);
    const bgOf = (el) => {
      for (let a = el; a; a = a.parentElement) {
        const v = parse(getComputedStyle(a).backgroundColor);
        if (v && v[3] > 0.95) return v;
      }
      return [255, 255, 255, 1];
    };
    const res = [];
    for (const el of document.querySelectorAll("body *")) {
      if (el.getAttribute("aria-hidden") === "true") continue;
      const hasText = [...el.childNodes].some(
        (n) => n.nodeType === 3 && n.textContent.trim().length > 1,
      );
      if (!hasText) continue;
      const cs = getComputedStyle(el);
      if (
        cs.visibility === "hidden" ||
        cs.display === "none" ||
        +cs.opacity < 0.9
      )
        continue;
      const fg = parse(cs.color);
      if (!fg || fg[3] < 0.95) continue;
      const bg = bgOf(el);
      const L1 = Math.max(lum(fg), lum(bg)),
        L2 = Math.min(lum(fg), lum(bg));
      const ratio = (L1 + 0.05) / (L2 + 0.05);
      const size = parseFloat(cs.fontSize),
        wt = parseInt(cs.fontWeight) || 400;
      const large = size >= 24 || (size >= 18.66 && wt >= 700);
      const need = large ? 3 : 4.5;
      if (ratio < need - 0.01) {
        const cls =
          typeof el.className === "string"
            ? el.className.trim().split(/\s+/).slice(0, 2).join(".")
            : "";
        res.push(
          `${el.tagName.toLowerCase()}.${cls} ${size}px/${wt} ratio=${ratio.toFixed(2)} need=${need} "${el.textContent.trim().slice(0, 26)}"`,
        );
      }
    }
    return res;
  });
  for (const r of out) {
    if (!seen.has(r)) {
      seen.add(r);
      fails++;
      console.log(`[${path}] ${r}`);
    }
  }
}
console.log(
  fails === 0
    ? "\nCONTRAST CLEAN (WCAG AA across 11 pages)"
    : `\n${fails} contrast findings`,
);
await b.close();
