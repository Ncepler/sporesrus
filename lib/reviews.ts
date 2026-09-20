// Reviews are off until a real Google Business Profile rating/count exists.
// Never emit aggregateRating/review JSON-LD or a star row while disabled.
export const reviews = {
  enabled: false,
  rating: null as number | null,
  count: null as number | null,
};
