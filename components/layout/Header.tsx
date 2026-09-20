"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/siteConfig";
import { PHONE_SET } from "@/lib/phone";
import CallButton from "@/components/ui/CallButton";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Fallback CTA when no real number is configured yet — a plain internal link, never a dead tel:. */
function ContactFallback({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`press-scale inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-body font-semibold text-ink transition-colors duration-150 hover:bg-canvas-deep ${className}`}
    >
      Contact
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(pathname === "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuEntered, setMenuEntered] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Two-state nav: transparent over the hero, solid+material after it.
  // Driven by an IntersectionObserver on the hero section, not a scroll-Y
  // pixel value, so it holds correctly across viewport sizes.
  useIsomorphicLayoutEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const rect = hero.getBoundingClientRect();
    setOverHero(rect.bottom > 0 && rect.top < window.innerHeight);

    let skippedFirstCallback = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!skippedFirstCallback) {
          skippedFirstCallback = true;
          return;
        }
        setOverHero(entry.isIntersecting || window.scrollY < 50);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
    setMenuEntered(false);
  }, [pathname]);

  const openMenu = () => {
    setMenuOpen(true);
    dialogRef.current?.showModal();
    window.dispatchEvent(new CustomEvent("sporesrus:menu", { detail: true }));
    requestAnimationFrame(() => setMenuEntered(true));
  };

  const closeMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMenuEntered(false);
    window.dispatchEvent(new CustomEvent("sporesrus:menu", { detail: false }));
    closeTimeoutRef.current = setTimeout(() => {
      dialogRef.current?.close();
      setMenuOpen(false);
      menuTriggerRef.current?.focus();
    }, 200);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      closeMenu();
    };
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) closeMenu();
    };
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const solid = !overHero;

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-2 text-small font-semibold text-on-accent transition-transform duration-150 focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-200 ${
          solid ? "nav-material border-b border-line" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-full items-center justify-between">
          <Link href="/" className="press-scale font-display text-h3 font-semibold tracking-tight text-ink">
            {SITE_NAME}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body text-ink-soft transition-colors duration-150 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            {PHONE_SET ? <CallButton compact size="sm" showNumber /> : <ContactFallback />}
          </div>

          <button
            ref={menuTriggerRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={openMenu}
            className="press-scale flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/40"
      >
        <div
          data-state={menuEntered ? "open" : "closed"}
          className="menu-panel ml-auto flex h-full w-full max-w-sm flex-col gap-8 bg-canvas p-6 pt-24 shadow-lift"
          style={{
            transform: menuEntered ? "translateX(0)" : "translateX(100%)",
            opacity: menuEntered ? 1 : 0,
          }}
        >
          <button
            type="button"
            onClick={closeMenu}
            className="press-scale absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>

          <nav aria-label="Primary" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-input px-2 py-3 text-h3 font-display font-medium text-ink hover:bg-canvas-deep"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-input px-2 py-3 text-h3 font-display font-medium text-ink hover:bg-canvas-deep"
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto">
            {PHONE_SET ? (
              <CallButton size="lg" showNumber className="w-full" />
            ) : (
              <ContactFallback className="w-full" />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
