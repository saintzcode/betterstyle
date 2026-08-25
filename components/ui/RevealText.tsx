"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, viewportOnce, editorialTransition } from "@/lib/motion";
import { cx } from "@/lib/utils";

const TAGS = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

interface RevealTextProps {
  children: ReactNode;
  as?: keyof typeof TAGS;
  className?: string;
  delay?: number;
}

export function RevealText({
  children,
  as = "div",
  className,
  delay = 0,
}: RevealTextProps) {
  const MotionTag = TAGS[as];
  return (
    <MotionTag
      className={cx(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ ...editorialTransition, delay }}
    >
      {children}
    </MotionTag>
  );
}
