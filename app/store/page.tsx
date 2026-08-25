import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { RevealText } from "@/components/ui/RevealText";
import { products } from "@/data/products";
import { ProductCategory } from "@/types/product";

export const metadata: Metadata = {
  title: "Store",
  description: "Shop the full BetterStyle catalog — denim, shirting, tanks, and outerwear.",
};

const VALID_CATEGORIES: ProductCategory[] = [
  "shirts",
  "shorts",
  "tanks",
  "trousers",
  "outerwear",
  "swim",
  "accessories",
];

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory =
    category && VALID_CATEGORIES.includes(category as ProductCategory)
      ? (category as ProductCategory)
      : "all";

  return (
    <div className="px-5 pb-24 pt-32 md:px-10 md:pt-36">
      <div className="mb-14 max-w-2xl">
        <RevealText
          as="p"
          className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-fg-muted"
        >
          The Store
        </RevealText>
        <RevealText as="h1" className="font-display text-display-2 leading-[1]">
          Everything, in one place.
        </RevealText>
      </div>
      <ProductGrid products={products} initialCategory={initialCategory} />
    </div>
  );
}
