"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { MobileNav } from "./MobileNav";
import { cx } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/collections", label: "Collections" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-bg/95 backdrop-blur border-b border-border"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
          <Link
            href="/"
            className="font-display text-lg tracking-[0.08em] text-fg"
            aria-label="BetterStyle — home"
          >
            BETTERSTYLE
          </Link>

          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.72rem] uppercase tracking-[0.16em] text-fg/80 hover:text-fg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={openCart}
              className="text-[0.72rem] uppercase tracking-[0.16em] text-fg/90 hover:text-fg transition-colors"
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              Bag ({itemCount})
            </button>
            <button
              type="button"
              className="md:hidden text-fg"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                <path d="M0 1H22" stroke="currentColor" />
                <path d="M0 13H22" stroke="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
