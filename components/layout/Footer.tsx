import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/store", label: "All Products" },
      { href: "/collections", label: "Collections" },
      { href: "/store?category=shirts", label: "Shirts" },
      { href: "/store?category=shorts", label: "Shorts" },
    ],
  },
  {
    title: "House",
    links: [
      { href: "/about", label: "About" },
      { href: "/journal", label: "Journal" },
      { href: "/about#craft", label: "Craft" },
    ],
  },
  {
    title: "Client Services",
    links: [
      { href: "/about#shipping", label: "Shipping & Returns" },
      { href: "/about#sizing", label: "Size Guide" },
      { href: "/about#contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-inverse border-t border-border-inverse">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <span className="font-display text-2xl tracking-[0.06em]">BETTERSTYLE</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
              Denim, shirting, and knitwear cut for permanence — built in small runs,
              worn for seasons.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.68rem] uppercase tracking-[0.16em] text-ink/50">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-border-inverse pt-8 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
            © {new Date().getFullYear()} BetterStyle. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "TikTok"].map((s) => (
              <span
                key={s}
                className="text-xs uppercase tracking-[0.14em] text-ink/50"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
