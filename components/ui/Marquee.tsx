interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 font-display text-[clamp(1.1rem,3.5vw,2rem)] italic text-fg-muted"
          >
            {item}
            <span className="ml-6 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
