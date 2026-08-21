import { business, contact } from "@/content/business";

/**
 * C4 · sticky bottom bar. Mobile only — on desktop the phone number sits in
 * the nav, so a second persistent bar would be noise.
 */
export function StickyCallBar() {
  return (
    <aside className="callbar" aria-label="Schnellkontakt">
      <a href={contact.tel} className="callbar__btn callbar__btn--call">
        {business.phoneDisplay}
      </a>
      <a
        href={contact.whatsapp(
          "Guten Tag, ich möchte ein Angebot für folgende Arbeiten:",
        )}
        className="callbar__btn"
        rel="noopener"
      >
        WhatsApp
      </a>
    </aside>
  );
}
