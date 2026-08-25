"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-bg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeEditorial }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-display text-lg tracking-[0.08em] text-fg">
              BETTERSTYLE
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="text-fg text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-10" aria-label="Mobile primary">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5, ease: easeEditorial }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-border py-5 font-display text-3xl text-fg"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
