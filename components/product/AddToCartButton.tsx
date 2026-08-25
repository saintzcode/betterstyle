"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/lib/cart-context";
import { SizeSelector } from "./SizeSelector";
import { Button } from "@/components/ui/Button";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    if (!size) {
      setError(true);
      return;
    }
    addItem(product, color, size);
    setJustAdded(true);
    setError(false);
    window.setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      {product.colors.length > 1 && (
        <div>
          <span className="mb-3 block text-[0.68rem] uppercase tracking-[0.16em] text-fg-muted">
            Color — {color}
          </span>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                aria-pressed={color === c.name}
                onClick={() => setColor(c.name)}
                className={`h-8 w-8 rounded-full border-2 transition-colors ${
                  color === c.name ? "border-fg" : "border-transparent"
                }`}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
          </div>
        </div>
      )}

      <SizeSelector
        sizes={product.sizes}
        selected={size}
        onSelect={(s) => {
          setSize(s);
          setError(false);
        }}
      />
      {error && (
        <p className="text-xs text-accent" role="alert">
          Please select a size.
        </p>
      )}

      <Button variant="primary" className="w-full" onClick={handleAdd}>
        {justAdded ? "Added to Bag" : "Add to Bag"}
      </Button>
    </div>
  );
}
