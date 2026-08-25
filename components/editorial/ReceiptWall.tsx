import Link from "next/link";
import { Receipt } from "@/types/receipt";
import { getProduct } from "@/data/products";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealText } from "@/components/ui/RevealText";

/**
 * Customer photo wall. A single scroll strip of equal-height photos: phone
 * photography arrives at wildly different aspect ratios, and matching on
 * height instead of width lets every shot stay uncropped without a grid
 * ever leaving a hole in itself.
 */
export function ReceiptWall({ receipts }: { receipts: Receipt[] }) {
  return (
    <section id="receipts" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-8">
        <div className="max-w-xl">
          <RevealText
            as="p"
            className="mb-4 text-[0.68rem] uppercase tracking-[0.28em] text-fg-muted"
          >
            Receipts
          </RevealText>
          <RevealText
            as="h2"
            delay={0.08}
            className="font-display text-display-3 leading-[1.05]"
          >
            Proof of purchase.
          </RevealText>
          <RevealText
            as="p"
            delay={0.16}
            className="mt-5 text-sm leading-relaxed text-fg-muted"
          >
            Studio lights off. Every photo below is a customer in the real thing —
            shot on their own phone, posted as it came. Tag us in your fits and
            you&apos;ll end up on this wall.
          </RevealText>
        </div>
        <RevealText delay={0.24}>
          <Link
            href="/store"
            className="hidden shrink-0 text-[0.72rem] uppercase tracking-[0.16em] text-fg-muted hover:text-fg md:inline"
          >
            Shop These Fits →
          </Link>
        </RevealText>
      </div>

      {/*
        Negative margin bleeds the strip to the viewport edge so it reads as
        continuing off-screen; the matching padding keeps the first photo on the
        headline's left edge. scroll-pl has to match that padding or snap-start
        aligns items to the scrollport edge and the strip self-scrolls on load.
        tabIndex makes the overflow region keyboard-scrollable in Chrome.
      */}
      <div
        role="region"
        aria-label="Customer photos"
        tabIndex={0}
        className="scroll-strip -mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 md:-mx-10 md:scroll-pl-10 md:gap-5 md:px-10"
      >
        {receipts.map((receipt, i) => (
          <div key={receipt.id} className="flex-none snap-start">
            <RevealText delay={Math.min(i, 3) * 0.08}>
              <ReceiptCard receipt={receipt} />
            </RevealText>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReceiptCard({ receipt }: { receipt: Receipt }) {
  const product = receipt.productSlug ? getProduct(receipt.productSlug) : undefined;
  const credit = receipt.handle
    ? `@${receipt.handle}${receipt.location ? ` · ${receipt.location}` : ""}`
    : receipt.location;
  const garment = product?.name ?? receipt.wearing;

  return (
    <figure className="group relative">
      {/* Height is the fixed dimension — width falls out of each photo's own aspect ratio. */}
      <div className="h-[56vh] max-h-[560px] min-h-[320px]">
        <ImageSlot
          {...receipt.image}
          sizes="(min-width: 768px) 40vw, 80vw"
          className="h-full transition-[filter] duration-700 group-hover:brightness-[1.08]"
        />
      </div>
      {(credit || garment) && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-3 border-t border-border pt-3">
          <span className="min-w-0">
            {credit && (
              <span className="block truncate text-[0.62rem] uppercase tracking-[0.2em] text-fg-muted">
                {credit}
              </span>
            )}
            {garment &&
              (product ? (
                // Stretched link — keeps the label meaningful while making the
                // whole card a click target.
                <Link
                  href={`/product/${product.slug}`}
                  className="block truncate text-[0.8rem] text-fg-muted transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-fg"
                >
                  {garment}
                </Link>
              ) : (
                <span className="block truncate text-[0.8rem] text-fg-muted">
                  {garment}
                </span>
              ))}
          </span>
          {product && (
            <span
              aria-hidden="true"
              className="shrink-0 text-fg-muted transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
