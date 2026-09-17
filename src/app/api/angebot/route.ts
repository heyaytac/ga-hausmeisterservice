import { NextResponse } from "next/server";
import { Resend } from "resend";
import { services } from "@/content/services";
import { business } from "@/content/business";

export const runtime = "nodejs";

type Payload = {
  services?: string[];
  objectType?: string;
  ort?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  company?: string;
};

/**
 * Sender when LEAD_FROM_EMAIL is unset. Resend's shared onboarding address
 * needs no verified domain, but only delivers to the mailbox the Resend
 * account itself was registered with. Verify ga-hausmeisterservice.de under
 * https://resend.com/domains and set LEAD_FROM_EMAIL to move off it.
 */
const DEFAULT_FROM = "onboarding@resend.dev";
const FROM_NAME = "Website G.A Hausmeisterservice";

/** Crude single-instance limiter. Enough to stop a script, not a botnet. */
const HITS = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  HITS.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ] ?? c,
  );

/** `"Name <addr>"` unless the env value already carries a display name. */
const withName = (addr: string) =>
  addr.includes("<") ? addr : `${FROM_NAME} <${addr}>`;

type Lead = {
  name: string;
  phone: string;
  email: string;
  ort: string;
  objectType: string;
  services: string[];
  message: string;
  receivedAt: string;
};

function subjectFor(lead: Lead): string {
  const [first, ...rest] = lead.services;
  const what = !first
    ? "Allgemein"
    : rest.length === 0
      ? first
      : `${first} +${rest.length} weitere`;
  return `Angebotsanfrage: ${what}${lead.ort ? ` – ${lead.ort}` : ""} (${lead.name})`;
}

function textFor(lead: Lead): string {
  return [
    "Neue Angebotsanfrage über die Website",
    `Eingegangen: ${lead.receivedAt}`,
    "",
    `Name:      ${lead.name}`,
    `Telefon:   ${lead.phone}`,
    `E-Mail:    ${lead.email || "—"}`,
    `Ort:       ${lead.ort || "—"}`,
    `Objektart: ${lead.objectType || "—"}`,
    `Leistung:  ${lead.services.join(", ") || "—"}`,
    "",
    "Nachricht:",
    lead.message || "—",
  ].join("\n");
}

function htmlFor(lead: Lead): string {
  const dash = "—";
  const row = (label: string, value: string) =>
    `<tr>` +
    `<td style="padding:6px 16px 6px 0;color:#666;white-space:nowrap;vertical-align:top">${label}</td>` +
    `<td style="padding:6px 0;vertical-align:top">${value}</td>` +
    `</tr>`;
  const link = (href: string, text: string) =>
    `<a href="${esc(href)}" style="color:#111">${esc(text)}</a>`;

  const rows = [
    row("Name", esc(lead.name)),
    row("Telefon", link(`tel:${lead.phone.replace(/[^\d+]/g, "")}`, lead.phone)),
    row("E-Mail", lead.email ? link(`mailto:${lead.email}`, lead.email) : dash),
    row("Ort", lead.ort ? esc(lead.ort) : dash),
    row("Objektart", lead.objectType ? esc(lead.objectType) : dash),
    row(
      "Leistung",
      lead.services.length ? lead.services.map(esc).join("<br>") : dash,
    ),
  ].join("");

  return (
    `<!doctype html><html lang="de"><body style="margin:0;padding:24px;background:#fff;color:#111;font:15px/1.5 -apple-system,'Segoe UI',Helvetica,Arial,sans-serif">` +
    `<h1 style="font-size:18px;margin:0 0 4px">Neue Angebotsanfrage</h1>` +
    `<p style="margin:0 0 20px;color:#666">Über das Formular auf der Website von ${esc(business.name)} · ${esc(lead.receivedAt)}</p>` +
    `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:20px">${rows}</table>` +
    `<p style="margin:0 0 6px;color:#666">Nachricht</p>` +
    `<div style="white-space:pre-wrap;padding:12px;background:#f5f5f5;border-radius:4px">${lead.message ? esc(lead.message) : dash}</div>` +
    (lead.email
      ? `<p style="margin:24px 0 0;color:#999;font-size:13px">„Antworten“ geht direkt an ${esc(lead.email)}.</p>`
      : "") +
    `</body></html>`
  );
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, reason: "rate_limited" },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, reason: "bad_json" },
      { status: 400 },
    );
  }

  // Honeypot: accept and drop, so the bot sees success and stops retrying.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 60);
  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, reason: "missing_fields" },
      { status: 400 },
    );
  }

  const email = clean(body.email, 160);
  const lead: Lead = {
    name,
    phone,
    email,
    ort: clean(body.ort, 80),
    objectType: clean(body.objectType, 80),
    services: (Array.isArray(body.services) ? body.services : [])
      .map((s) => services.find((x) => x.slug === s)?.name)
      .filter((n): n is string => Boolean(n)),
    message: clean(body.message),
    receivedAt: new Intl.DateTimeFormat("de-DE", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Berlin",
    }).format(new Date()),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || business.email;
  const from = withName(process.env.LEAD_FROM_EMAIL || DEFAULT_FROM);

  // Not wired up yet — tell the client so it can offer WhatsApp instead of
  // swallowing the lead.
  if (!apiKey || !to) {
    console.warn(
      "[angebot] Lead delivery unconfigured — set RESEND_API_KEY and LEAD_TO_EMAIL.",
    );
    return NextResponse.json(
      { ok: false, reason: "unconfigured" },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      // A malformed reply-to makes Resend reject the whole mail, so only
      // pass it when it looks like an address.
      replyTo: EMAIL_RE.test(email) ? email : undefined,
      subject: subjectFor(lead),
      text: textFor(lead),
      html: htmlFor(lead),
    });

    if (error) {
      console.error(
        `[angebot] Resend rejected the lead: ${error.name} — ${error.message}`,
      );
      return NextResponse.json(
        { ok: false, reason: "send_failed" },
        { status: 502 },
      );
    }

    console.info(`[angebot] Lead delivered to ${to} (Resend id ${data?.id})`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[angebot] Resend call failed:", err);
    return NextResponse.json(
      { ok: false, reason: "send_failed" },
      { status: 502 },
    );
  }
}
