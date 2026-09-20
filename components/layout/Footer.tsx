import Link from "next/link";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  SITE_NAME,
} from "@/lib/siteConfig";
import { PHONE_DISPLAY, PHONE_SET, PHONE_TEL } from "@/lib/phone";
import Reviews from "@/components/ui/Reviews";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-deep">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-h3 font-semibold text-ink">{SITE_NAME}</p>
          <p className="mt-3 text-body text-ink-soft">
            Mold inspection, remediation, and prevention — done thoroughly, start to finish.
          </p>
          <Reviews />
        </div>

        <div>
          <p className="text-small font-semibold text-ink-soft">Services</p>
          <ul className="mt-4 space-y-2">
            {FOOTER_SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-body text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-small font-semibold text-ink-soft">Company</p>
          <ul className="mt-4 space-y-2">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-body text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {PHONE_SET && (
          <div>
            <p className="text-small font-semibold text-ink-soft">Call Us</p>
            <a
              href={PHONE_TEL!}
              className="mt-4 inline-block font-display text-h3 font-semibold tabular-nums text-accent hover:text-accent-hover"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-small text-ink-soft md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://vilas.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline underline-offset-2 hover:text-ink"
            >
              vilas.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
