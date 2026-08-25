import { ImageRef } from "./product";

/**
 * A "receipt" — a customer photo of a BetterStyle garment worn in the wild.
 * Deliberately unretouched phone photography, in contrast to the studio
 * imagery used everywhere else on the site.
 */
export interface Receipt {
  id: string;
  image: ImageRef;
  /** Social handle without the leading @. Omit until the customer has confirmed the credit. */
  handle?: string;
  /** Free-form place label, e.g. "Lagos". */
  location?: string;
  /** Slug of the product being worn — renders a link through to the PDP. */
  productSlug?: string;
  /** Garment label for pieces that aren't in the catalogue (archive, one-offs). Ignored when `productSlug` is set. */
  wearing?: string;
}
