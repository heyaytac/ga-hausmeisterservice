import { NextResponse } from "next/server";
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

  const chosen = (Array.isArray(body.services) ? body.services : [])
    .map((s) => services.find((x) => x.slug === s)?.name)
    .filter(Boolean) as string[];

  const lines = [
    `Name:      ${name}`,
    `Telefon:   ${phone}`,
    `E-Mail:    ${clean(body.email, 160) || "—"}`,
    `Ort:       ${clean(body.ort, 80) || "—"}`,
    `Objekt:    ${clean(body.objectType, 80) || "—"}`,
    `Leistung:  ${chosen.join(", ") || "—"}`,
    "",
    "Nachricht:",
    clean(body.message) || "—",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || business.email;
  const from = process.env.LEAD_FROM_EMAIL;

  // Not wired up yet — tell the client so it can offer WhatsApp instead of
  // swallowing the lead.
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, reason: "unconfigured" },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: clean(body.email, 160) || undefined,
      subject: `Angebotsanfrage: ${chosen[0] ?? "Allgemein"}${
        clean(body.ort, 80) ? ` — ${clean(body.ort, 80)}` : ""
      }`,
      text: lines,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { ok: false, reason: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
