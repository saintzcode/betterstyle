import { Receipt } from "@/types/receipt";

/**
 * Customer photography. Unlike the studio galleries in `products.ts`, these are
 * phone photos — keep them uncropped and unretouched, that contrast is the point.
 *
 * `handle` and `location` are intentionally blank: fill them in only once the
 * customer has confirmed the credit, so the wall never shows attribution we
 * haven't actually been given.
 */
export const receipts: Receipt[] = [
  {
    id: "rugby-pair-fitting",
    // Drop the photo at public/receipts/rugby-pair-fitting.jpg, then add:
    //   src: "/receipts/rugby-pair-fitting.jpg",
    image: {
      alt: "Two customers in the Rider Rugby Shirt — jet with the 69 back print, and the red rider colourway",
      aspect: 5 / 7,
    },
    productSlug: "short-button-shirt",
  },
  {
    id: "tanks-and-totes",
    image: {
      src: "/receipts/tanks-and-totes.jpg",
      alt: "Two customers in jet Ribbed Logo Tanks carrying BetterStyle tote bags",
      aspect: 9 / 16,
    },
    productSlug: "ribbed-logo-tank-jet",
  },
  {
    id: "rider-shirt-held",
    // Drop the photo at public/receipts/rider-shirt-held.jpg, then add:
    //   src: "/receipts/rider-shirt-held.jpg",
    image: {
      alt: "Customer holding up the red Rider Rugby Shirt, rider graphic facing out",
      aspect: 5 / 7,
    },
    productSlug: "short-button-shirt",
  },
  {
    id: "track-jacket-back",
    image: {
      src: "/receipts/track-jacket-back.jpg",
      alt: "Customer in the BetterStyle track jacket, back view, worn with light-wash denim",
      aspect: 5 / 7,
    },
    wearing: "BetterStyle Track Jacket",
  },
  {
    id: "track-jacket-front",
    // Drop the photo at public/receipts/track-jacket-front.jpg, then add:
    //   src: "/receipts/track-jacket-front.jpg",
    image: {
      alt: "Customer in the BetterStyle track jacket, worn with light-wash denim and black sneakers",
      aspect: 3 / 4,
    },
    wearing: "BetterStyle Track Jacket",
  },
];
