"use client";

import { useState } from "react";
import { ImageRef } from "@/types/product";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { cx } from "@/lib/utils";

const THUMB_COLUMNS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function ProductGallery({ images }: { images: ImageRef[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ImageSlot {...images[active]} className="w-full" priority />
      {images.length > 1 && (
        <div
          className={cx(
            "mt-3 grid max-w-xs gap-3",
            THUMB_COLUMNS[Math.min(images.length, 4)]
          )}
        >
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${img.alt}`}
              aria-current={active === i}
              className={cx(
                "border transition-colors",
                active === i ? "border-fg" : "border-transparent hover:border-border-strong"
              )}
            >
              <ImageSlot {...img} className="w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
