import { reviews } from "@/lib/reviews";

/**
 * Star rating + review count widget. Renders nothing until reviews.enabled
 * is flipped on with a real Google Business Profile rating/count — never a
 * placeholder star row or bracketed dev note.
 */
export default function Reviews() {
  if (!reviews.enabled || reviews.rating === null || reviews.count === null) return null;

  return (
    <div className="flex items-center gap-2 text-small text-ink-soft">
      <span aria-hidden className="tracking-wide text-accent">
        {"★".repeat(Math.round(reviews.rating))}
        {"☆".repeat(5 - Math.round(reviews.rating))}
      </span>
      <span className="tabular-nums">
        {reviews.rating.toFixed(1)} ({reviews.count} reviews)
      </span>
    </div>
  );
}
