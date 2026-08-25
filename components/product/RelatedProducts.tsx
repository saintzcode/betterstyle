import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { RevealText } from "@/components/ui/RevealText";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <RevealText as="h2" className="mb-10 font-display text-display-3">
        You May Also Like
      </RevealText>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
