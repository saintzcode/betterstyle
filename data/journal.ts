import { JournalPost } from "@/types/journal";

export const journalPosts: JournalPost[] = [
  {
    slug: "on-raw-denim",
    title: "The Second Skin: On Raw Denim",
    category: "Craft",
    date: "2026-06-02",
    excerpt:
      "Why we still cut from rigid, unwashed denim in an age of pre-distressed everything — and what happens to the cloth after the first hundred wears.",
    cover: { alt: "The Second Skin — cover image", aspect: 16 / 9 },
    body: [
      "Raw denim is unforgiving in the store and honest on the body. It does not flatter on the hanger; it flatters after a season of wear, once the fibers have folded to the shape of a life.",
      "We use a 13oz rigid cotton for the wide-leg short and a lighter 6–6.5oz for shirting — different weights, same principle: let the wearer finish the garment.",
      "Every crease you put into it is one nobody else will ever have.",
    ],
  },
  {
    slug: "building-the-oxford-edit",
    title: "Studio Notes — Building the Oxford Edit",
    category: "Studio",
    date: "2026-04-18",
    excerpt:
      "Nine fit sessions, two failed collars, and the reasoning behind an embroidered mark instead of a printed one.",
    cover: { alt: "Building the Oxford Edit — cover image", aspect: 16 / 9 },
    body: [
      "The brief was simple: a shirt structured enough to wear buttoned to the collar, soft enough to wear open over a tank. Denim solved the tension — it holds shape without holding you.",
      "We rejected two collar rolls before landing on the current button-down — too stiff read corporate, too soft read undone.",
      "The mark is embroidered because print cracks and fades unevenly. Thread ages the way the denim does — together.",
    ],
  },
  {
    slug: "history-of-the-ribbed-tank",
    title: "A Short History of the Ribbed Tank",
    category: "Archive",
    date: "2026-02-27",
    excerpt:
      "From workwear undershirt to the foundation of a warm-weather wardrobe — tracing the garment we rebuilt for Sunbleached.",
    cover: { alt: "A Short History of the Ribbed Tank — cover image", aspect: 16 / 9 },
    body: [
      "The ribbed tank has never really left — it just moves between being underwear and outerwear once a generation.",
      "Our version tightens the rib gauge for structure and raises the neckline half an inch so it holds its shape through a full day of heat.",
      "Three colors this season, one added and one retired every cycle. Marigold is new.",
    ],
  },
  {
    slug: "care-and-provenance",
    title: "Care & Provenance: How We Source Our Cotton",
    category: "Sourcing",
    date: "2026-01-09",
    excerpt:
      "A look at the mills behind the denim, and the wash-and-wear notes we send with every order.",
    cover: { alt: "Care & Provenance — cover image", aspect: 16 / 9 },
    body: [
      "Every bolt of denim we cut from is traceable to a single mill relationship — no spot-market cotton, no season-to-season swaps.",
      "We ask customers to wash cold, inside out, and sparingly. Raw denim rewards patience; the first wash is the only one that matters.",
      "Provenance is not a marketing word here. It is the reason two shirts from different years still match.",
    ],
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
