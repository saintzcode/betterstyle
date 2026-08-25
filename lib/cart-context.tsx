"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Product } from "@/types/product";

export interface CartLine {
  productSlug: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image?: string;
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, color: string, size: string, quantity?: number) => void;
  removeItem: (productSlug: string, color: string, size: string) => void;
  updateQuantity: (productSlug: string, color: string, size: string, quantity: number) => void;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "betterstyle:cart";

function lineKey(slug: string, color: string, size: string) {
  return `${slug}__${color}__${size}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time hydration from localStorage: must run post-mount (not in a lazy
    // useState initializer) so the client's first render matches the SSR
    // output, then reconciles — avoiding a hydration mismatch.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback(
    (product: Product, color: string, size: string, quantity = 1) => {
      setLines((prev) => {
        const key = lineKey(product.slug, color, size);
        const existing = prev.find(
          (l) => lineKey(l.productSlug, l.color, l.size) === key
        );
        if (existing) {
          return prev.map((l) =>
            lineKey(l.productSlug, l.color, l.size) === key
              ? { ...l, quantity: l.quantity + quantity }
              : l
          );
        }
        return [
          ...prev,
          {
            productSlug: product.slug,
            name: product.name,
            price: product.price,
            color,
            size,
            quantity,
            image: product.gallery[0]?.src,
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((productSlug: string, color: string, size: string) => {
    const key = lineKey(productSlug, color, size);
    setLines((prev) => prev.filter((l) => lineKey(l.productSlug, l.color, l.size) !== key));
  }, []);

  const updateQuantity = useCallback(
    (productSlug: string, color: string, size: string, quantity: number) => {
      const key = lineKey(productSlug, color, size);
      setLines((prev) =>
        quantity <= 0
          ? prev.filter((l) => lineKey(l.productSlug, l.color, l.size) !== key)
          : prev.map((l) =>
              lineKey(l.productSlug, l.color, l.size) === key ? { ...l, quantity } : l
            )
      );
    },
    []
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [lines]
  );
  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
