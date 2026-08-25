import { Hero } from "@/components/editorial/Hero";
import { StatementBlock } from "@/components/editorial/StatementBlock";
import { CollectionStrip } from "@/components/editorial/CollectionStrip";
import { SplitSection } from "@/components/editorial/SplitSection";
import { JournalCard } from "@/components/editorial/JournalCard";
import { ReceiptWall } from "@/components/editorial/ReceiptWall";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";
import { RevealText } from "@/components/ui/RevealText";
import { Button } from "@/components/ui/Button";
import { collections } from "@/data/collections";
import { journalPosts } from "@/data/journal";
import { receipts } from "@/data/receipts";

export default function HomePage() {
  return (
    <>
      <Hero />

      <StatementBlock
        eyebrow="Our Philosophy"
        statement="We build a small number of garments extremely well, and let the rest of the wardrobe fall away — denim with weight, shirting with structure, knitwear that holds its shape after the hundredth wash."
      />

      <div className="border-y border-border py-6">
        <Marquee
          items={[
            "Garment-Dyed Denim",
            "Small Production Runs",
            "Since Ninety-Four",
            "Embroidered, Not Printed",
          ]}
        />
      </div>

      <CollectionStrip collections={collections} />

      <SplitSection
        inverse
        image={{ alt: "BetterStyle — hand-finishing detail", aspect: 4 / 5 }}
        eyebrow="Craft"
        title="Every stitch is a decision, not a default."
        body="From the weight of the denim to the shank of the button, nothing in a BetterStyle garment is stock. Our patterns are cut in-house and finished by hand in runs small enough to check by eye, not by algorithm."
        cta={<Button href="/about" variant="secondary">The Full Story</Button>}
      />

      <ReceiptWall receipts={receipts} />

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex items-end justify-between">
          <RevealText as="h2" className="font-display text-display-3">
            From the Journal
          </RevealText>
          <RevealText delay={0.1}>
            <Link
              href="/journal"
              className="hidden text-[0.72rem] uppercase tracking-[0.16em] text-fg-muted hover:text-fg md:inline"
            >
              Read More →
            </Link>
          </RevealText>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {journalPosts.slice(0, 3).map((post, i) => (
            <RevealText key={post.slug} delay={i * 0.1}>
              <JournalCard post={post} />
            </RevealText>
          ))}
        </div>
      </section>
    </>
  );
}
