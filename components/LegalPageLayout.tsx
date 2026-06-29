"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-sm text-muted"
      >
        Last updated: {lastUpdated}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="legal-prose mt-10 rounded-3xl border border-border bg-section p-6 shadow-sm sm:p-10"
      >
        {children}
      </motion.div>
    </article>
  );
}
