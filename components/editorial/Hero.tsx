"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { editorialTransition } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <ImageSlot
          src="/brand/hero-wordmark.png"
          alt="BetterStyle — Since Ninety-Four, lead campaign image"
          aspect={16 / 9}
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />
      </div>

      <div className="relative z-10 w-full px-5 pb-14 md:px-10 md:pb-20">
        <div className="mb-6 overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ ...editorialTransition, delay: 0.2 }}
            className="text-[0.72rem] uppercase tracking-[0.3em] text-paper/80"
          >
            Since Ninety-Four
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ ...editorialTransition, delay: 0.32 }}
            className="max-w-4xl font-display text-display-1 leading-[0.95] tracking-[-0.01em] text-paper"
          >
            Built to be worn,
            <br />
            <span className="italic text-stone">not just seen.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...editorialTransition, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 border border-paper/70 px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:border-accent hover:bg-accent"
          >
            Explore the Collections
          </Link>
          <Link
            href="/store"
            className="text-[0.72rem] uppercase tracking-[0.18em] text-paper/80 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper"
          >
            Shop the Store
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 right-5 hidden md:right-10 md:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px bg-paper/40" />
      </motion.div>
    </section>
  );
}
