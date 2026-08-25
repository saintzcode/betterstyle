"use client";

import { CartLine, useCart } from "@/lib/cart-context";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { formatPrice } from "@/lib/utils";

export function CartLineItem({ line }: { line: CartLine }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-border py-5">
      <ImageSlot
        src={line.image}
        alt={line.name}
        aspect={4 / 5}
        className="w-20 shrink-0"
      />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm text-fg">{line.name}</p>
          <p className="text-sm text-fg">{formatPrice(line.price * line.quantity)}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.1em] text-fg-muted">
          {line.color} · {line.size}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center border border-border-strong">
            <button
              type="button"
              className="px-2.5 py-1 text-sm text-fg hover:text-accent"
              onClick={() =>
                updateQuantity(line.productSlug, line.color, line.size, line.quantity - 1)
              }
              aria-label={`Decrease quantity of ${line.name}`}
            >
              −
            </button>
            <span className="min-w-[1.5rem] text-center text-sm text-fg">
              {line.quantity}
            </span>
            <button
              type="button"
              className="px-2.5 py-1 text-sm text-fg hover:text-accent"
              onClick={() =>
                updateQuantity(line.productSlug, line.color, line.size, line.quantity + 1)
              }
              aria-label={`Increase quantity of ${line.name}`}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="text-xs uppercase tracking-[0.1em] text-fg-muted hover:text-accent"
            onClick={() => removeItem(line.productSlug, line.color, line.size)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
