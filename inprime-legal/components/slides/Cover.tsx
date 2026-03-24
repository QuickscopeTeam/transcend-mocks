"use client";

import { motion } from "motion/react";
import { Scale } from "lucide-react";
import { container, item } from "@/lib/motion";

export function Cover() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full max-w-[900px] flex-col items-center justify-center text-center"
    >
      <motion.div variants={item} className="mb-8">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: "var(--accent-dim)",
            border: "1px solid var(--accent-border)",
          }}
        >
          <Scale size={28} style={{ color: "var(--accent)" }} />
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="mb-4 inline-flex items-center gap-3"
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase" as const,
          color: "var(--accent)",
        }}
      >
        <span
          style={{
            width: 24,
            height: 1,
            background: "var(--accent)",
            flexShrink: 0,
          }}
        />
        Website Redesign Concept
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif"
        style={{
          fontSize: "clamp(52px, 8vw, 102px)",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          color: "var(--text)",
        }}
      >
        InPrime{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Legal</em>
      </motion.h1>

      <motion.p
        variants={item}
        className="mx-auto mt-6 max-w-[520px] font-sans"
        style={{
          fontSize: 17,
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--muted)",
        }}
      >
        A modern digital presence for Georgia&apos;s premier outsourced general
        counsel firm. Built to convert business owners into long-term legal
        partners.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-10 font-sans"
        style={{
          fontSize: 13,
          fontWeight: 400,
          color: "var(--faint)",
          letterSpacing: "0.03em",
        }}
      >
        Prepared for InPrime Legal — Marietta, GA
      </motion.div>
    </motion.div>
  );
}
