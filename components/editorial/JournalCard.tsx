import Link from "next/link";
import { JournalPost } from "@/types/journal";
import { ImageSlot } from "@/components/ui/ImageSlot";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function JournalCard({ post }: { post: JournalPost }) {
  return (
    <Link href={`/journal/${post.slug}`} className="group block">
      <ImageSlot {...post.cover} className="w-full" />
      <div className="mt-5">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-fg-muted">
          {post.category} · {formatDate(post.date)}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}
