"use client";

import { motion } from "motion/react";
import { Shield, Users, FileText, TrendingUp } from "lucide-react";
import { container, item } from "@/lib/motion";

const solutions = [
  {
    icon: <Shield size={24} />,
    title: "Flat Monthly Fee",
    description:
      "One predictable cost. No hourly billing. Call, email, or meet as often as you need — your fee stays the same.",
  },
  {
    icon: <Users size={24} />,
    title: "Dedicated Legal Team",
    description:
      "A lead attorney and paralegal assigned to your business. They learn your operations, your contracts, your risks.",
  },
  {
    icon: <FileText size={24} />,
    title: "Proactive Prevention",
    description:
      "Regular huddles, priority reports, and a Document Vault. Stop legal problems before they start.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Measurable ROI",
    description:
      "Proprietary ROI tracker and Utilization Score ensure your legal investment delivers documented 10x returns.",
  },
];

export function Solution() {
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
        The InPrime Model
      </motion.div>

      <motion.h2
        variants={item}
        className="mb-4 font-serif"
        style={{
          fontSize: "clamp(36px, 4.5vw, 58px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Your legal team,{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
          reimagined
        </em>
      </motion.h2>

      <motion.p
        variants={item}
        className="mb-10 max-w-[560px] font-sans"
        style={{
          fontSize: 16,
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--muted)",
        }}
      >
        InPrime 2.0 replaces the outdated billable-hour model with a dedicated
        legal department that operates as an extension of your business.
      </motion.p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {solutions.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex gap-4 rounded-2xl p-5"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "var(--accent-dim)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              {s.icon}
            </div>
            <div>
              <h3
                className="mb-1 font-serif text-lg"
                style={{ color: "var(--text)" }}
              >
                {s.title}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
