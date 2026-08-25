import { Product } from "@/types/product";

const gallery4 = (alt: string) => [
  { alt: `${alt} — front`, aspect: 4 / 5 },
  { alt: `${alt} — back`, aspect: 4 / 5 },
  { alt: `${alt} — detail`, aspect: 4 / 5 },
  { alt: `${alt} — worn`, aspect: 4 / 5 },
];

const SHIPPING =
  "Complimentary shipping on all domestic orders. Dispatched within 2 business days. Returns accepted within 30 days in original condition.";

export const products: Product[] = [
  {
    slug: "jet-denim-overshirt",
    name: "Jet Denim Overshirt",
    category: "shirts",
    price: 120000,
    currency: "NGN",
    collectionSlug: "since-ninety-four",
    colors: [{ name: "Jet", swatch: "#0b0b0a" }],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A garment-dyed denim shirt cut with a full body and a single chest pocket, finished with a tonal embroidered wordmark. Wears like a jacket, layers like a shirt.",
    details: [
      "Garment-dyed 100% cotton denim",
      "Embroidered wordmark at chest pocket",
      "Corozo buttons, box-pleated back yoke",
      "Relaxed, boxy fit — true to size",
    ],
    materials: "100% cotton denim, 6.5oz",
    fit: "Relaxed fit. Model is 6'1\" wearing a size M.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/jet-denim-overshirt/casual.jpeg",
        alt: "Jet Denim Overshirt — worn with wide-leg denim shorts, front and back",
        aspect: 3 / 4,
      },
      {
        src: "/products/jet-denim-overshirt/formal.jpeg",
        alt: "Jet Denim Overshirt — styled with black trousers and belt",
        aspect: 4 / 5,
      },
    ],
    isFeatured: true,
  },
  {
    slug: "oxblood-denim-shirt",
    name: "Oxblood Denim Shirt",
    category: "shirts",
    price: 120000,
    currency: "NGN",
    collectionSlug: "the-oxford-edit",
    colors: [{ name: "Oxblood", swatch: "#5c1a1b" }],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Oxblood-dyed denim shirting with a soft hand and a slightly tapered body. The wordmark is embroidered, not printed — it ages with the garment.",
    details: [
      "Pigment-dyed 100% cotton denim",
      "Embroidered script wordmark at chest",
      "Button-down collar, single chest pocket",
      "Tapered fit through the body",
    ],
    materials: "100% cotton denim, 6oz",
    fit: "Tapered fit. Model is 6'0\" wearing a size M.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/oxblood-denim-shirt/formal.jpeg",
        alt: "Oxblood Denim Shirt — styled with navy trousers, front and back",
        aspect: 4 / 5,
      },
    ],
    isFeatured: true,
  },
  {
    slug: "short-button-shirt",
    name: "Rider Rugby Shirt",
    category: "shirts",
    price: 90000,
    currency: "NGN",
    collectionSlug: "since-ninety-four",
    colors: [{ name: "Jet", swatch: "#0b0b0a" }],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An oversized short-sleeve rugby shirt in heavyweight cotton, finished with a woven collar, a script wordmark and rider graphic at the chest, and a bold numeral at the back.",
    details: [
      "Heavyweight cotton pique",
      "Contrast woven collar, two-button placket",
      "Screen-printed script wordmark and rider graphic at chest",
      "Oversized numeral print at back",
      "Oversized, boxy fit",
    ],
    materials: "100% cotton pique, 280gsm",
    fit: "Oversized fit. Model is 6'1\" wearing a size M.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/short-button-shirt/lookbook.jpeg",
        alt: "Rider Rugby Shirt — front chest graphic and back numeral print",
        aspect: 5 / 4,
      },
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    slug: "wide-leg-denim-short-indigo",
    name: "Wide-Leg Denim Short — Indigo",
    category: "shorts",
    price: 100000,
    currency: "NGN",
    collectionSlug: "since-ninety-four",
    colors: [{ name: "Indigo", swatch: "#3a5075" }],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "A dropped, wide-leg short in rigid indigo denim, finished with a hand-embroidered rider motif on the back pocket. Sits at the natural waist.",
    details: [
      "Rigid 100% cotton denim",
      "Hand-embroidered back-pocket motif",
      "Corozo shank button, twin-needle stitching",
      "Wide, dropped leg — hits above the knee",
    ],
    materials: "100% cotton denim, 13oz",
    fit: "Relaxed, dropped fit. Model is 6'1\" wearing a size 32.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/wide-leg-denim-short-indigo/menswear.jpeg",
        alt: "Wide-Leg Denim Short — Indigo, menswear styling front and back",
        aspect: 3 / 4,
      },
      {
        src: "/products/wide-leg-denim-short-indigo/womenswear.jpeg",
        alt: "Wide-Leg Denim Short — Indigo, womenswear styling front and back",
        aspect: 4 / 5,
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    slug: "wide-leg-denim-short-stone",
    name: "Wide-Leg Denim Short — Stonewash",
    category: "shorts",
    price: 100000,
    currency: "NGN",
    collectionSlug: "sunbleached",
    colors: [{ name: "Stonewash", swatch: "#9fb1c4" }],
    sizes: ["26", "28", "30", "32", "34"],
    description:
      "The same architecture as our signature short, garment-washed to a soft, sun-worn stone finish. Cut for warm-weather rotation.",
    details: [
      "Stonewashed 100% cotton denim",
      "Hand-embroidered back-pocket motif",
      "Corozo shank button, twin-needle stitching",
      "Wide, dropped leg — hits above the knee",
    ],
    materials: "100% cotton denim, 11oz",
    fit: "Relaxed, dropped fit. Model is 5'9\" wearing a size 30.",
    shippingReturns: SHIPPING,
    gallery: gallery4("Wide-Leg Denim Short — Stonewash"),
    isNew: true,
  },
  {
    slug: "ribbed-logo-tank-ivory",
    name: "Ribbed Logo Tank — Ivory",
    category: "tanks",
    price: 70000,
    currency: "NGN",
    collectionSlug: "sunbleached",
    colors: [{ name: "Ivory", swatch: "#f3eee6" }],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A high-neck ribbed tank in fine cotton, cropped and compact, with the wordmark printed small at the chest. Layers under everything, stands on its own.",
    details: [
      "Ribbed cotton-elastane jersey",
      "High racer neckline",
      "Fine-print wordmark at chest",
      "Cropped, body-hugging fit",
    ],
    materials: "95% cotton, 5% elastane",
    fit: "Fitted, cropped. Model is 5'8\" wearing a size S.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/ribbed-logo-tank-ivory/lookbook.jpeg",
        alt: "Ribbed Logo Tank — Ivory, styled with wide-leg denim shorts",
        aspect: 4 / 5,
      },
    ],
  },
  {
    slug: "ribbed-logo-tank-jet",
    name: "Ribbed Logo Tank — Jet",
    category: "tanks",
    price: 70000,
    currency: "NGN",
    collectionSlug: "since-ninety-four",
    colors: [{ name: "Jet", swatch: "#0b0b0a" }],
    sizes: ["XS", "S", "M", "L"],
    description:
      "The ivory tank in jet black. Same fine-ribbed jersey, same compact fit, finished with a tonal-on-black wordmark.",
    details: [
      "Ribbed cotton-elastane jersey",
      "High racer neckline",
      "Fine-print wordmark at chest",
      "Cropped, body-hugging fit",
    ],
    materials: "95% cotton, 5% elastane",
    fit: "Fitted, cropped. Model is 5'8\" wearing a size S.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/ribbed-logo-tank-jet/lookbook.jpeg",
        alt: "Ribbed Logo Tank — Jet, styled with wide-leg denim shorts",
        aspect: 4 / 5,
      },
    ],
  },
  {
    slug: "ribbed-logo-tank-marigold",
    name: "Ribbed Logo Tank — Marigold",
    category: "tanks",
    price: 70000,
    currency: "NGN",
    collectionSlug: "sunbleached",
    colors: [{ name: "Marigold", swatch: "#d9a441" }],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A single warm colorway added each resort season. This year: marigold, mineral-dyed for depth rather than saturation.",
    details: [
      "Ribbed cotton-elastane jersey, mineral dye",
      "High racer neckline",
      "Fine-print wordmark at chest",
      "Cropped, body-hugging fit",
    ],
    materials: "95% cotton, 5% elastane",
    fit: "Fitted, cropped. Model is 5'8\" wearing a size S.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/ribbed-logo-tank-marigold/lookbook.jpeg",
        alt: "Ribbed Logo Tank — Marigold, styled with wide-leg denim shorts",
        aspect: 4 / 5,
      },
    ],
    isNew: true,
  },
  {
    slug: "signature-bikini",
    name: "Signature Tie Bikini",
    category: "swim",
    price: 50000,
    currency: "NGN",
    collectionSlug: "sunbleached",
    colors: [{ name: "Jet", swatch: "#0b0b0a" }],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A tie-side triangle bikini in matte jet nylon, finished with a monogrammed clasp at the hip. Cut minimal, built to hold its shape in and out of the water.",
    details: [
      "Matte-finish recycled nylon-elastane",
      "Adjustable tie sides and halter straps",
      "Monogrammed hardware at hip",
      "Lined cups, minimal coverage",
    ],
    materials: "78% recycled nylon, 22% elastane",
    fit: "True to size. Model is 5'6\" wearing a size S.",
    shippingReturns: SHIPPING,
    gallery: [
      {
        src: "/products/bikini/front.jpeg",
        alt: "Signature Tie Bikini — poolside, front",
        aspect: 16 / 9,
      },
      {
        src: "/products/bikini/back.jpeg",
        alt: "Signature Tie Bikini — poolside, back",
        aspect: 16 / 9,
      },
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    slug: "tailored-trouser-navy",
    name: "Tailored Trouser — Navy",
    category: "trousers",
    price: 85000,
    currency: "NGN",
    collectionSlug: "the-oxford-edit",
    colors: [{ name: "Navy", swatch: "#1c2333" }],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "A slim, tapered trouser in fine cotton twill, built to sit under the Oxford shirts. Clean front, hidden hem loop, no unnecessary hardware.",
    details: [
      "Cotton twill with a two-way stretch",
      "Slim, tapered leg",
      "Hidden interior hem loop",
      "Welt back pockets",
    ],
    materials: "97% cotton, 3% elastane",
    fit: "Slim, tapered fit. Model is 6'0\" wearing a size 32.",
    shippingReturns: SHIPPING,
    gallery: gallery4("Tailored Trouser — Navy"),
  },
  {
    slug: "signature-leather-belt",
    name: "Signature Leather Belt",
    category: "accessories",
    price: 45000,
    currency: "NGN",
    collectionSlug: "since-ninety-four",
    colors: [{ name: "Chestnut", swatch: "#6b4a34" }],
    sizes: ["S/M", "L/XL"],
    description:
      "Full-grain leather, hand-cut and edge-painted, finished with a solid brass buckle stamped with the house mark.",
    details: [
      "Full-grain vegetable-tanned leather",
      "Solid brass buckle, house mark",
      "Hand edge-painted finish",
      "1.25\" width",
    ],
    materials: "Full-grain leather, solid brass hardware",
    fit: "Sized to waist — see size guide.",
    shippingReturns: SHIPPING,
    gallery: gallery4("Signature Leather Belt"),
  },
  {
    slug: "wool-blend-overcoat",
    name: "Wool-Blend Overcoat",
    category: "outerwear",
    price: 180000,
    currency: "NGN",
    collectionSlug: "since-ninety-four",
    colors: [{ name: "Ink", swatch: "#171614" }],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An unlined overcoat in a heavy wool-cashmere blend, cut long and lean. Notch lapel, single-button closure, no compromise on drape.",
    details: [
      "80% wool, 15% cashmere, 5% nylon",
      "Notch lapel, single-button closure",
      "Interior utility pocket",
      "Long, lean silhouette",
    ],
    materials: "80% wool, 15% cashmere, 5% nylon",
    fit: "Long, lean fit. Model is 6'1\" wearing a size M.",
    shippingReturns: SHIPPING,
    gallery: gallery4("Wool-Blend Overcoat"),
    isFeatured: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string) {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.category === product.category || p.collectionSlug === product.collectionSlug)
    )
    .slice(0, count);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.isFeatured);
}
