import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product/ProductGallery";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: { title: product.name, description: product.description },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="px-5 pb-24 pt-28 md:px-10 md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.12em] text-fg-muted">
        <Link href="/store" className="hover:text-fg">
          Store
        </Link>
        <span className="mx-2">/</span>
        <span className="text-fg">{product.name}</span>
      </nav>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <ProductGallery images={product.gallery} />

        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-fg-muted">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-display-3 leading-[1.05]">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-fg">{formatPrice(product.price)}</p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-fg-muted">
            {product.description}
          </p>

          <div className="mt-10">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-12">
            <Accordion>
              <AccordionItem title="Details" defaultOpen>
                <ul className="flex flex-col gap-1.5">
                  {product.details.map((d) => (
                    <li key={d}>— {d}</li>
                  ))}
                </ul>
              </AccordionItem>
              <AccordionItem title="Materials & Fit">
                <p>{product.materials}</p>
                <p className="mt-2">{product.fit}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shippingReturns}</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <RelatedProducts products={related} />
      </div>
    </div>
  );
}
