import type { Metadata } from "next";
import { JournalCard } from "@/components/editorial/JournalCard";
import { RevealText } from "@/components/ui/RevealText";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Studio notes, craft essays, and archive stories from BetterStyle.",
};

export default function JournalPage() {
  return (
    <div className="px-5 pb-24 pt-28 md:px-10 md:pt-32">
      <div className="mb-16 max-w-2xl">
        <RevealText as="p" className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-fg-muted">
          Journal
        </RevealText>
        <RevealText as="h1" className="font-display text-display-2 leading-[1]">
          Notes from the studio.
        </RevealText>
      </div>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {journalPosts.map((post, i) => (
          <RevealText key={post.slug} delay={(i % 2) * 0.1}>
            <JournalCard post={post} />
          </RevealText>
        ))}
      </div>
    </div>
  );
}
