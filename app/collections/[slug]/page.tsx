import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealText } from "@/components/ui/RevealText";
import { ProductCard } from "@/components/product/ProductCard";
import { collections, getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.intro,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const collectionProducts = getProductsByCollection(collection.slug);

  return (
    <div className="pb-24">
      <section className="relative flex h-[80svh] min-h-[520px] w-full items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageSlot {...collection.cover} className="h-full w-full" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/50" />
        </div>
        <div className="relative z-10 px-5 pb-14 md:px-10 md:pb-20">
          <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-paper/80">
            {collection.season}
          </p>
          <h1 className="max-w-3xl font-display text-display-1 leading-[0.95] text-paper">
            {collection.title}
          </h1>
          <p className="mt-6 font-display italic text-editorial text-paper/85">
            {collection.statement}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <RevealText as="p" className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-fg-muted">
          {collection.intro}
        </RevealText>
      </section>

      {collectionProducts.length > 0 && (
        <section className="px-5 pb-8 md:px-10">
          <RevealText as="h2" className="mb-10 font-display text-display-3">
            The Pieces
          </RevealText>
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
            {collectionProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
