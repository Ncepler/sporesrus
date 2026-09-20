// Single source of truth for the site's phone number. The real number does
// not exist in the repo — it is read from NEXT_PUBLIC_PHONE at build time
// (Vercel env var), digits only, e.g. "15165550123". Never hardcode a real
// or fake number anywhere else in the codebase; import from here instead.

function tenDigitNumber(raw: string | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  if (digits.length === 10) return digits;
  return null;
}

const tenDigit = tenDigitNumber(process.env.NEXT_PUBLIC_PHONE);

if (!tenDigit) {
  // eslint-disable-next-line no-console
  console.warn("NEXT_PUBLIC_PHONE is not set");
}

/** True once a valid number is configured — gate any call UI on this. */
export const PHONE_SET = tenDigit !== null;

/** `tel:` href, e.g. "tel:+15165550123". Null when unset. */
export const PHONE_TEL: string | null = tenDigit ? `tel:+1${tenDigit}` : null;

/** Display format, e.g. "516.555.0123". Null when unset. */
export const PHONE_DISPLAY: string | null = tenDigit
  ? `${tenDigit.slice(0, 3)}.${tenDigit.slice(3, 6)}.${tenDigit.slice(6)}`
  : null;
