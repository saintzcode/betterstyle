import Link from "next/link";
import { Collection } from "@/types/collection";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealText } from "@/components/ui/RevealText";
import { cx } from "@/lib/utils";

export function CollectionStrip({ collections }: { collections: Collection[] }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex items-end justify-between">
        <RevealText as="h2" className="font-display text-display-3">
          Current Collections
        </RevealText>
        <RevealText delay={0.1}>
          <Link
            href="/collections"
            className="hidden text-[0.72rem] uppercase tracking-[0.16em] text-fg-muted hover:text-fg md:inline"
          >
            View All →
          </Link>
        </RevealText>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((collection, i) => (
          <RevealText
            key={collection.slug}
            delay={i * 0.1}
            className={cx(i === 0 && "md:col-span-2 md:row-span-1")}
          >
            <Link href={`/collections/${collection.slug}`} className="group block">
              <ImageSlot
                {...collection.cover}
                className="w-full transition-[filter] duration-700 group-hover:brightness-[1.08]"
              />
              <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-fg-muted">
                    {collection.season}
                  </p>
                  <h3 className="mt-1 font-display text-xl">{collection.title}</h3>
                </div>
                <span className="text-lg text-fg-muted transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
