"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: { children: ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" | "none"; className?: string }) {
  const directions = { up: { y: 30, x: 0 }, down: { y: -30, x: 0 }, left: { y: 0, x: 30 }, right: { y: 0, x: -30 }, none: { y: 0, x: 0 } };
  return (
    <motion.div initial={{ opacity: 0, ...directions[direction] }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}