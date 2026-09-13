import Link from "next/link";
import {
  EMAIL_PLACEHOLDER,
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  PHONE_PLACEHOLDER,
  SITE_NAME,
} from "@/lib/siteConfig";
import ReviewsPlaceholder from "@/components/ui/ReviewsPlaceholder";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-h3 font-semibold text-text-primary">{SITE_NAME}</p>
          <p className="mt-3 text-body text-text-secondary">
            Mold inspection, remediation, and prevention — done thoroughly, start to finish.
          </p>
          <div className="mt-4">
            <ReviewsPlaceholder />
          </div>
        </div>

        <div>
          <p className="text-meta font-semibold uppercase tracking-wide text-text-tertiary">Services</p>
          <ul className="mt-4 space-y-2">
            {FOOTER_SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-body text-text-secondary hover:text-text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-meta font-semibold uppercase tracking-wide text-text-tertiary">Company</p>
          <ul className="mt-4 space-y-2">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-body text-text-secondary hover:text-text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-meta font-semibold uppercase tracking-wide text-text-tertiary">Contact</p>
          <ul className="mt-4 space-y-2 text-body text-text-secondary">
            <li>{PHONE_PLACEHOLDER}</li>
            <li>{EMAIL_PLACEHOLDER}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-meta text-text-tertiary md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://vilas.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline underline-offset-2 hover:text-text-primary"
            >
              vilas.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
