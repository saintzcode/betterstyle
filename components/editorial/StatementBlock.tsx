import { RevealText } from "@/components/ui/RevealText";
import { cx } from "@/lib/utils";

interface StatementBlockProps {
  eyebrow?: string;
  statement: string;
  className?: string;
}

export function StatementBlock({ eyebrow, statement, className }: StatementBlockProps) {
  return (
    <section className={cx("px-6 py-24 md:px-10 md:py-36", className)}>
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <RevealText
            as="p"
            className="mb-6 text-[0.68rem] uppercase tracking-[0.28em] text-fg-muted"
          >
            {eyebrow}
          </RevealText>
        )}
        <RevealText
          as="p"
          delay={0.1}
          className="font-display text-editorial leading-snug tracking-[-0.01em]"
        >
          {statement}
        </RevealText>
      </div>
    </section>
  );
}
