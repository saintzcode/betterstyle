import { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    slug: "since-ninety-four",
    title: "Since Ninety-Four",
    season: "Core Collection",
    statement: "Built on a year, worn for a lifetime.",
    intro:
      "The foundational wardrobe — denim, weight, and proportion engineered once and refined every season since. Nothing here is seasonal. Everything here is intentional.",
    cover: {
      src: "/products/jet-denim-overshirt/formal.jpeg",
      alt: "Since Ninety-Four — lead editorial image",
      aspect: 4 / 5,
    },
    secondaryImage: {
      src: "/products/jet-denim-overshirt/casual.jpeg",
      alt: "Since Ninety-Four — detail image",
      aspect: 3 / 4,
    },
  },
  {
    slug: "the-oxford-edit",
    title: "The Oxford Edit",
    season: "Shirting",
    statement: "Structure, undone.",
    intro:
      "A study in shirting — garment-dyed denim oxfords cut for movement, finished with a single embroidered mark. Worn open, buttoned, or layered under wool.",
    cover: {
      src: "/products/oxblood-denim-shirt/formal.jpeg",
      alt: "The Oxford Edit — lead editorial image",
      aspect: 4 / 5,
    },
    secondaryImage: { alt: "The Oxford Edit — detail image", aspect: 3 / 4 },
  },
  {
    slug: "sunbleached",
    title: "Sunbleached",
    season: "Resort",
    statement: "Faded on purpose.",
    intro:
      "Warm-wash denim, ribbed knits, and swim developed for heat — stonewashed shorts, sun-toned tanks, and the palette of a coastline in late August.",
    cover: {
      src: "/products/bikini/front.jpeg",
      alt: "Sunbleached — lead editorial image",
      aspect: 16 / 9,
    },
    secondaryImage: { alt: "Sunbleached — detail image", aspect: 3 / 4 },
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
