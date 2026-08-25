"use client";

import { useMemo, useState } from "react";
import { Product, ProductCategory } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { cx } from "@/lib/utils";

const CATEGORIES: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "shirts", label: "Shirts" },
  { value: "shorts", label: "Shorts" },
  { value: "tanks", label: "Tanks" },
  { value: "trousers", label: "Trousers" },
  { value: "outerwear", label: "Outerwear" },
  { value: "swim", label: "Swim" },
  { value: "accessories", label: "Accessories" },
];

type SortKey = "newest" | "price-asc" | "price-desc";

export function ProductGrid({
  products,
  initialCategory = "all",
}: {
  products: Product[];
  initialCategory?: ProductCategory | "all";
}) {
  const [category, setCategory] = useState<ProductCategory | "all">(initialCategory);
  const [sort, setSort] = useState<SortKey>("newest");

  const filtered = useMemo(() => {
    const list =
      category === "all" ? products : products.filter((p) => p.category === category);
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "newest") sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return sorted;
  }, [products, category, sort]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              aria-pressed={category === c.value}
              className={cx(
                "text-xs uppercase tracking-[0.14em] transition-colors",
                category === c.value ? "text-fg" : "text-fg-muted hover:text-fg"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-fg-muted">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-border-strong bg-transparent px-3 py-2 text-fg"
          >
            <option value="newest" className="bg-bg">
              Newest
            </option>
            <option value="price-asc" className="bg-bg">
              Price: Low to High
            </option>
            <option value="price-desc" className="bg-bg">
              Price: High to Low
            </option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-fg-muted">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
