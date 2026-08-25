"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { CartLineItem } from "./CartLineItem";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { easeEditorial, easeStandard } from "@/lib/motion";

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart"
            className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeStandard }}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-bg-soft border-l border-border"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: easeEditorial }}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="font-display text-lg tracking-wide">
                Bag ({lines.reduce((n, l) => n + l.quantity, 0)})
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close bag"
                className="text-2xl leading-none text-fg"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-20 text-center">
                  <p className="text-sm text-fg-muted">Your bag is empty.</p>
                  <Button href="/store" variant="secondary" onClick={closeCart}>
                    Browse the Store
                  </Button>
                </div>
              ) : (
                lines.map((line) => (
                  <CartLineItem key={`${line.productSlug}-${line.color}-${line.size}`} line={line} />
                ))
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-border px-6 py-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="uppercase tracking-[0.14em] text-fg-muted">
                    Subtotal
                  </span>
                  <span className="font-display text-lg">{formatPrice(subtotal)}</span>
                </div>
                <Button variant="primary" className="w-full">
                  Checkout — Coming Soon
                </Button>
                <p className="mt-3 text-center text-xs text-fg-muted">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
