import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealText } from "@/components/ui/RevealText";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description: "Curated, editorial collections from BetterStyle.",
};

export default function CollectionsPage() {
  return (
    <div className="pb-24 pt-28 md:pt-32">
      <div className="mb-16 px-5 md:px-10">
        <RevealText
          as="p"
          className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-fg-muted"
        >
          Collections
        </RevealText>
        <RevealText as="h1" className="max-w-2xl font-display text-display-2 leading-[1]">
          Stories told in denim.
        </RevealText>
      </div>

      <div className="flex flex-col">
        {collections.map((collection, i) => (
          <Link
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="group grid border-t border-border last:border-b md:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <ImageSlot
                {...collection.cover}
                className="w-full transition-[filter] duration-700 group-hover:brightness-[1.08]"
              />
            </div>
            <div className="flex items-center px-6 py-14 md:px-16">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-fg-muted">
                  {collection.season}
                </p>
                <h2 className="mt-3 font-display text-display-3 leading-[1.02]">
                  {collection.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
                  {collection.intro}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-fg">
                  View Collection
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
