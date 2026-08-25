import type { Metadata } from "next";
import { SplitSection } from "@/components/editorial/SplitSection";
import { StatementBlock } from "@/components/editorial/StatementBlock";
import { RevealText } from "@/components/ui/RevealText";

export const metadata: Metadata = {
  title: "About",
  description:
    "BetterStyle is a small-run house of denim, shirting, and knitwear. Our story, our craft, and how we work.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-28 md:pt-32">
      <div className="mb-16 px-5 md:px-10">
        <RevealText as="p" className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-fg-muted">
          About
        </RevealText>
        <RevealText as="h1" className="max-w-3xl font-display text-display-2 leading-[1]">
          A house built on fewer, better things.
        </RevealText>
      </div>

      <SplitSection
        image={{ alt: "BetterStyle — the studio, since ninety-four", aspect: 4 / 5 }}
        eyebrow="Heritage"
        title="Started in a single room, since ninety-four."
        body="BetterStyle began as a pattern table and a single sewing machine. Three decades on, the process hasn't changed much — we still cut in small batches, still finish by hand, and still refuse to chase a season we don't believe in."
      />

      <div id="craft">
        <SplitSection
          reverse
          inverse
          image={{ alt: "BetterStyle — hand-finishing detail", aspect: 4 / 5 }}
          eyebrow="Craft"
          title="Every stitch is a decision, not a default."
          body="From the weight of the denim to the shank of the button, nothing in a BetterStyle garment is stock. Patterns are cut in-house, dyed in small lots, and finished by hand in runs small enough to check by eye."
        />
      </div>

      <StatementBlock
        eyebrow="Philosophy"
        statement="We are not interested in trend cycles. We are interested in the twelfth wear, the fortieth wash, the jacket you still reach for a decade in."
      />

      <div className="grid gap-px bg-border md:grid-cols-3">
        <div id="sizing" className="bg-bg px-6 py-14 md:px-12">
          <h2 className="font-display text-xl">Size Guide</h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Our fits run true to size across shirting and denim. When between sizes,
            we recommend sizing down for a tailored fit or up for the relaxed,
            dropped silhouette shown on our models. Full measurements are listed on
            every product page.
          </p>
        </div>
        <div id="shipping" className="bg-bg px-6 py-14 md:px-12">
          <h2 className="font-display text-xl">Shipping &amp; Returns</h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Complimentary shipping on all domestic orders, dispatched within two
            business days. Returns are accepted within 30 days in original,
            unworn condition with tags attached.
          </p>
        </div>
        <div id="contact" className="bg-bg px-6 py-14 md:px-12">
          <h2 className="font-display text-xl">Contact</h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            For press, wholesale, or client services, write to us at
            studio@betterstyle.example — we respond within two business days.
          </p>
        </div>
      </div>
    </div>
  );
}
