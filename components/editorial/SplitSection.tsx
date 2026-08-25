import { ReactNode } from "react";
import { ImageRef } from "@/types/product";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealText } from "@/components/ui/RevealText";
import { cx } from "@/lib/utils";

interface SplitSectionProps {
  image: ImageRef;
  eyebrow?: string;
  title: string;
  body: string;
  cta?: ReactNode;
  reverse?: boolean;
  inverse?: boolean;
}

export function SplitSection({
  image,
  eyebrow,
  title,
  body,
  cta,
  reverse = false,
  inverse = false,
}: SplitSectionProps) {
  return (
    <section className={cx("grid md:grid-cols-2", inverse && "section-inverse")}>
      <div className={cx(reverse && "md:order-2")}>
        <ImageSlot {...image} className="h-full w-full min-h-[420px] md:min-h-[640px]" />
      </div>
      <div className="flex items-center px-6 py-16 md:px-16 md:py-0">
        <div className="max-w-md">
          {eyebrow && (
            <RevealText
              as="p"
              className={cx(
                "mb-4 text-[0.68rem] uppercase tracking-[0.24em]",
                inverse ? "text-ink/50" : "text-fg-muted"
              )}
            >
              {eyebrow}
            </RevealText>
          )}
          <RevealText
            as="h2"
            delay={0.1}
            className="font-display text-display-3 leading-[1.05]"
          >
            {title}
          </RevealText>
          <RevealText
            as="p"
            delay={0.2}
            className={cx(
              "mt-6 text-sm leading-relaxed",
              inverse ? "text-ink/70" : "text-fg-muted"
            )}
          >
            {body}
          </RevealText>
          {cta && (
            <RevealText delay={0.3} className="mt-8">
              {cta}
            </RevealText>
          )}
        </div>
      </div>
    </section>
  );
}
