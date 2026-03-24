"use client";

import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { container, item } from "@/lib/motion";

const included = [
  "Dedicated lead attorney and paralegal",
  "Unlimited consultations and legal counsel",
  "Contract drafting, review, and negotiation",
  "Regular strategy huddles",
  "Member portal with Document Vault",
  "Priority report and Utilization Score tracking",
  "Proactive risk identification and prevention",
  "Access to full practice area coverage",
];

export function Pricing() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full max-w-[800px] flex-col items-center justify-center text-center"
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
        Next Steps
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
        Ready to{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
          transform
        </em>{" "}
        your digital presence?
      </motion.h2>

      <motion.p
        variants={item}
        className="mb-10 max-w-[520px] font-sans"
        style={{
          fontSize: 16,
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--muted)",
        }}
      >
        This redesign concept showcases how InPrime Legal can communicate its
        unique value proposition through a modern, conversion-optimized web
        experience.
      </motion.p>

      {/* Pricing card */}
      <motion.div
        variants={item}
        className="w-full max-w-[500px] rounded-3xl p-8 text-left"
        style={{
          background: "var(--card)",
          border: "1px solid var(--accent-border)",
        }}
      >
        <div
          className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--accent)" }}
        >
          Website Redesign Includes
        </div>
        <div className="mb-6">
          <span
            className="font-serif text-lg"
            style={{ color: "var(--text)" }}
          >
            Full production site with all features shown
          </span>
        </div>

        <ul className="mb-8 space-y-3">
          {included.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                size={16}
                className="mt-0.5 shrink-0"
                style={{ color: "var(--accent)" }}
              />
              <span
                className="font-sans text-sm"
                style={{ color: "var(--text)", fontWeight: 300 }}
              >
                {text}
              </span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex w-full items-center justify-center gap-2 font-sans"
          style={{
            background:
              "linear-gradient(135deg, var(--accent), var(--accent-light))",
            color: "#000",
            border: "none",
            borderRadius: 100,
            padding: "16px 32px",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.03em",
            cursor: "pointer",
          }}
        >
          Schedule a Consultation
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
