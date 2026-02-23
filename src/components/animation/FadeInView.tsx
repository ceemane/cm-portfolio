"use client";

import { motion } from "motion/react";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInView({
  children,
  className = "",
  delay = 0,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
