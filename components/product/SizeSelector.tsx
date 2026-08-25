"use client";

import { cx } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  selected: string | null;
  onSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[0.68rem] uppercase tracking-[0.16em] text-fg-muted">
          Size
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.16em] text-fg-muted underline underline-offset-2">
          Size Guide
        </span>
      </div>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Size">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            role="radio"
            aria-checked={selected === size}
            onClick={() => onSelect(size)}
            className={cx(
              "min-w-[3rem] border px-3 py-2.5 text-xs uppercase tracking-[0.06em] transition-colors",
              selected === size
                ? "border-fg bg-fg text-bg"
                : "border-border-strong text-fg hover:border-fg"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
