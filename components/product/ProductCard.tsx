import Link from "next/link";
import { Product } from "@/types/product";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const [front, back] = product.gallery;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden">
        <ImageSlot {...front} className="w-full" />
        {back && (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <ImageSlot {...back} className="h-full w-full" />
          </div>
        )}
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-bg/90 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-fg">
            New
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm text-fg">{product.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.08em] text-fg-muted">
            {product.colors.map((c) => c.name).join(" / ")}
          </p>
        </div>
        <p className="whitespace-nowrap text-sm text-fg">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
