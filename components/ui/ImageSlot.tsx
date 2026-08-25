import Image from "next/image";
import { ImageRef } from "@/types/product";
import { cx } from "@/lib/utils";

interface ImageSlotProps extends ImageRef {
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}

/**
 * Renders real photography once `src` exists. Until then, renders a
 * deliberate placeholder (grain + gradient + caption) at the correct
 * aspect ratio, so swapping in real assets is a one-line prop change.
 */
export function ImageSlot({
  src,
  alt,
  aspect = 4 / 5,
  className,
  sizes = "100vw",
  priority = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <div
        className={cx("relative overflow-hidden bg-ink-soft", className)}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cx(
        "relative overflow-hidden bg-ink-soft border border-border @container",
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <div className="placeholder-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/40" />
      <span className="hidden @[9rem]:block absolute left-4 bottom-4 right-4 text-[0.65rem] uppercase tracking-[0.18em] text-stone/70 font-sans">
        {alt}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="opacity-20 @max-[6rem]:w-5 @max-[6rem]:h-5"
          aria-hidden="true"
        >
          <path
            d="M4 24.5L12.5 14l6 6.5L23 12l7 12.5"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="10" cy="9" r="2.2" stroke="currentColor" strokeWidth="1" />
          <rect
            x="1.5"
            y="1.5"
            width="31"
            height="31"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
    </div>
  );
}
