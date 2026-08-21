"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { services } from "@/content/services";
import { cities } from "@/content/cities";
import { contact } from "@/content/business";
import { Period } from "@/components/Marks";

const OBJECT_TYPES = [
  "Einfamilienhaus",
  "Mehrfamilienhaus",
  "WEG / Hausverwaltung",
  "Gewerbeobjekt",
  "Wohnung",
  "Grundstück",
] as const;

type Errors = Partial<
  Record<"name" | "phone" | "consent" | "leistung", string>
>;

export function QuoteForm({ presetService }: { presetService?: string }) {
  const router = useRouter();
  const [chosen, setChosen] = useState<string[]>(
    presetService ? [presetService] : [],
  );
  const [objectType, setObjectType] = useState("");
  const [ort, setOrt] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState(""); // honeypot
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "unconfigured">(
    "idle",
  );

  const toggle = (slug: string) =>
    setChosen((c) =>
      c.includes(slug) ? c.filter((x) => x !== slug) : [...c, slug],
    );

  /** Same payload the API would have mailed — used for the WhatsApp fallback. */
  const summary = useMemo(() => {
    const labels = chosen
      .map((s) => services.find((x) => x.slug === s)?.name)
      .filter(Boolean)
      .join(", ");
    return [
      "Anfrage über die Website:",
      labels && `Leistung: ${labels}`,
      ort && `Ort: ${ort}`,
      objectType && `Objekt: ${objectType}`,
      name && `Name: ${name}`,
      phone && `Telefon: ${phone}`,
      message && `Nachricht: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [chosen, ort, objectType, name, phone, message]);

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) next.name = "Bitte tragen Sie Ihren Namen ein.";
    if (!phone.trim())
      next.phone =
        "Bitte tragen Sie eine Telefonnummer ein — wir melden uns telefonisch zurück.";
    if (chosen.length === 0)
      next.leistung = "Wählen Sie mindestens eine Leistung aus.";
    if (!consent)
      next.consent =
        "Ohne Ihre Einwilligung dürfen wir die Daten nicht verarbeiten.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setState("sending");
    try {
      const res = await fetch("/api/angebot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: chosen,
          objectType,
          ort,
          name,
          phone,
          email,
          message,
          company,
        }),
      });
      if (res.ok) {
        router.push("/danke");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as {
        reason?: string;
      };
      // The sender is not configured yet — hand the visitor a working path
      // instead of an apology.
      setState(data.reason === "unconfigured" ? "unconfigured" : "idle");
      if (data.reason !== "unconfigured") {
        setErrors({
          consent:
            "Das Formular konnte nicht gesendet werden. Rufen Sie uns an oder schreiben Sie über WhatsApp.",
        });
      }
    } catch {
      setState("unconfigured");
    }
  }

  if (state === "unconfigured") {
    return (
      <div className="stack stack--lg">
        <h3>Senden Sie die Anfrage direkt</h3>
        <p style={{ maxWidth: "52ch", color: "var(--color-muted)" }}>
          Ihre Angaben sind vorbereitet. Ein Tippen öffnet WhatsApp mit der
          fertigen Nachricht — oder rufen Sie an.
        </p>
        <div className="actions">
          <a
            href={contact.whatsapp(summary)}
            className="btn btn--primary"
            rel="noopener"
          >
            Über WhatsApp senden
          </a>
          <a href={contact.tel} className="btn">
            Anrufen
          </a>
        </div>
      </div>
    );
  }

  const sending = state === "sending";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
        <legend className="field__label" style={{ padding: 0 }}>
          Worum geht es?
        </legend>
        <p
          className="field__hint"
          style={{ marginBlockEnd: "var(--space-xs)" }}
        >
          Mehrfachauswahl möglich.
        </p>
        <div className="choices">
          {services.map((s) => (
            <label className="choice" key={s.slug}>
              <input
                type="checkbox"
                name="services"
                value={s.slug}
                checked={chosen.includes(s.slug)}
                onChange={() => toggle(s.slug)}
                disabled={sending}
              />
              <span className="choice__box" aria-hidden="true" />
              {s.short}
            </label>
          ))}
        </div>
        {errors.leistung && (
          <p
            className="field__error"
            style={{ marginBlockStart: "var(--space-xs)" }}
          >
            <Period />
            {errors.leistung}
          </p>
        )}
      </fieldset>

      <div
        style={{
          display: "grid",
          gap: "var(--space-lg)",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 15rem), 1fr))",
        }}
      >
        <div className="field">
          <label className="field__label" htmlFor="ort">
            Ort
          </label>
          <select
            id="ort"
            name="ort"
            className="field__control"
            value={ort}
            onChange={(e) => setOrt(e.target.value)}
            disabled={sending}
          >
            <option value="">Bitte wählen</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Anderer Ort">Anderer Ort</option>
          </select>
        </div>

        <div className="field">
          <label className="field__label" htmlFor="objekt">
            Objektart
          </label>
          <select
            id="objekt"
            name="objectType"
            className="field__control"
            value={objectType}
            onChange={(e) => setObjectType(e.target.value)}
            disabled={sending}
          >
            <option value="">Bitte wählen</option>
            {OBJECT_TYPES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "var(--space-lg)",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 15rem), 1fr))",
        }}
      >
        <div className="field">
          <label className="field__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="field__control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "err-name" : undefined}
            autoComplete="name"
            disabled={sending}
          />
          {errors.name && (
            <p className="field__error" id="err-name">
              <Period />
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            className="field__control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            autoComplete="tel"
            disabled={sending}
          />
          {errors.phone && (
            <p className="field__error" id="err-phone">
              <Period />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="email">
          E-Mail <span className="field__hint">— optional</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="field__control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          disabled={sending}
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="message">
          Was soll gemacht werden?
        </label>
        <p className="field__hint">
          Je konkreter, desto belastbarer das Angebot — Größe, Etage, Zugang,
          Wunschtermin.
        </p>
        <textarea
          id="message"
          name="message"
          className="field__control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={sending}
        />
      </div>

      {/* Honeypot — off-screen, never display:none. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Firma</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="field">
        <label
          className="choice"
          style={{ borderInline: 0, borderBlockEnd: 0 }}
        >
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            disabled={sending}
          />
          <span className="choice__box" aria-hidden="true" />
          <span style={{ fontWeight: 400, whiteSpace: "normal" }}>
            Meine Angaben dürfen zur Bearbeitung der Anfrage gespeichert und
            verwendet werden.
          </span>
        </label>
        {errors.consent && (
          <p className="field__error">
            <Period />
            {errors.consent}
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "var(--space-md)",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button
          type="submit"
          className="btn btn--primary"
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? "Wird gesendet …" : "Angebot anfordern"}
        </button>
        <span className="label">Kostenlos · unverbindlich</span>
      </div>
    </form>
  );
}
