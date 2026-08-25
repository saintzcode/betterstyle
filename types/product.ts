export interface ImageRef {
  /** Path under /public once real photography exists; undefined renders the placeholder treatment. */
  src?: string;
  alt: string;
  /** width / height, e.g. 4/5, 3/4, 1/1, 16/9 */
  aspect?: number;
}

export interface ProductVariantColor {
  name: string;
  swatch: string; // hex used for the swatch dot only
}

export type ProductCategory =
  | "shirts"
  | "shorts"
  | "tanks"
  | "trousers"
  | "outerwear"
  | "swim"
  | "accessories";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  currency: "NGN";
  collectionSlug?: string;
  colors: ProductVariantColor[];
  sizes: string[];
  description: string;
  details: string[];
  materials: string;
  fit: string;
  shippingReturns: string;
  gallery: ImageRef[];
  isNew?: boolean;
  isFeatured?: boolean;
}
