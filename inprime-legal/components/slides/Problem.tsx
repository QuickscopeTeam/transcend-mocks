"use client";

import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Clock, DollarSign, AlertTriangle, Shuffle } from "lucide-react";
import { container, item } from "@/lib/motion";

const problems = [
  {
    icon: <Clock size={22} />,
    title: "Billable Hour Anxiety",
    description:
      "Business owners avoid calling their attorney because every call costs money. Legal issues grow unchecked.",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Unpredictable Costs",
    description:
      "Traditional firms bill by the minute. Business owners never know what their legal spend will be month to month.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Reactive, Not Proactive",
    description:
      "Most businesses only call a lawyer after something goes wrong. By then, the damage is done and the cost is 10x higher.",
  },
  {
    icon: <Shuffle size={22} />,
    title: "No Continuity",
    description:
      "Hiring different firms for different issues means no one attorney understands the full picture of your business.",
  },
];

export function Problem() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full max-w-[900px] flex-col justify-center"
    >
      <motion.div
        variants={item}
        className="mb-3 inline-flex items-center gap-3"
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
        The Problem
      </motion.div>

      <motion.h2
        variants={item}
        className="mb-10 font-serif"
        style={{
          fontSize: "clamp(36px, 4.5vw, 58px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        The traditional legal model is{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>broken</em>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {problems.map((p, i) => (
          <motion.div key={i} variants={item}>
            <div className="relative rounded-[1.25rem] border border-[var(--border)] p-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl bg-[var(--card)] p-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--accent)",
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    className="mb-2 font-serif text-lg"
                    style={{ color: "var(--text)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
