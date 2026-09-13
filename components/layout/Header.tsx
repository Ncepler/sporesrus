import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-h3 font-semibold tracking-tight text-text-primary">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-text-secondary transition-colors duration-150 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-body font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover"
        >
          Contact
        </Link>
      </div>

      {/* Mobile nav — simple wrapped list, no JS menu needed for a 5-link nav */}
      <nav className="container-page flex flex-wrap gap-x-6 gap-y-2 pb-4 lg:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-meta text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
