import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealText } from "@/components/ui/RevealText";
import { journalPosts, getJournalPost } from "@/data/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 md:px-0">
        <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-fg-muted">
          {post.category} · {formatDate(post.date)}
        </p>
        <RevealText as="h1" className="font-display text-display-2 leading-[1.02]">
          {post.title}
        </RevealText>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-5 md:px-0">
        <ImageSlot {...post.cover} className="w-full" priority />
      </div>

      <div className="mx-auto mt-14 max-w-2xl px-5 md:px-0">
        {post.body.map((paragraph, i) => (
          <p key={i} className="mb-6 text-[1.05rem] leading-[1.8] text-fg/90">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
