import { featuredReviews } from "@/content/reviews";
import { business } from "@/content/business";
import { Stars } from "@/components/Marks";

export function Reviews({ limit = 4 }: { limit?: number }) {
  return (
    <div className="reviews">
      {featuredReviews.slice(0, limit).map((r) => (
        <figure className="review" key={r.author}>
          <Stars />
          <blockquote className="review__text">„{r.text}“</blockquote>
          <figcaption className="review__meta">
            <div style={{ fontWeight: 700, fontSize: "0.875rem" }}>
              {r.author}
            </div>
            {r.credential && <div className="label">{r.credential}</div>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function RatingLine() {
  return (
    <span
      className="label label--ink"
      style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}
    >
      <Stars />
      {business.rating.value.toFixed(1).replace(".", ",")} aus{" "}
      {business.rating.count} {business.rating.source}-Bewertungen
    </span>
  );
}
