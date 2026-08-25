import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-paper text-ink hover:bg-accent hover:text-paper border border-paper hover:border-accent",
  secondary:
    "bg-transparent text-fg border border-border-strong hover:border-fg hover:bg-fg hover:text-bg",
  ghost: "bg-transparent text-fg border-b border-fg/40 hover:border-accent px-0",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.72rem] font-sans uppercase tracking-[0.18em] transition-colors duration-300";

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...rest
}: BaseProps & { href?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cx(baseClasses, variantClasses[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
