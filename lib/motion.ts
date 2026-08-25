import { Variants } from "framer-motion";

export const easeEditorial = [0.16, 1, 0.3, 1] as const;
export const easeStandard = [0.4, 0, 0.2, 1] as const;

export const editorialTransition = { duration: 0.8, ease: easeEditorial };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: easeEditorial },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" };
