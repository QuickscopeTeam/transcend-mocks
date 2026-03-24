"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/CountUp";
import { Award, Star, Trophy, TrendingUp } from "lucide-react";
import { container, item } from "@/lib/motion";

const stats = [
  { value: 13, suffix: "+", label: "Years Serving Georgia Businesses" },
  { value: 10, suffix: "x", label: "Average Client ROI" },
  { value: 2568, prefix: "#", suffix: "", label: "Inc. 5000 Ranking (2020)" },
  { value: 6, suffix: "+", label: "Attorneys & Advisors" },
];

const accolades = [
  {
    icon: <Trophy size={20} />,
    text: "Inc. 5000 — Fastest Growing Private Companies",
  },
  {
    icon: <Award size={20} />,
    text: "GEDA Rock Star Small Business of the Year",
  },
  {
    icon: <Star size={20} />,
    text: "Cobb Chamber Top 25 Small Businesses",
  },
  {
    icon: <TrendingUp size={20} />,
    text: "Super Lawyers / Rising Stars Recognized",
  },
];

const testimonials = [
  {
    quote:
      "Jonathan and his team really spent the time to get to know my business and prevent legal issues on the front end. They act more like business partners than typical attorneys.",
    author: "InPrime Client",
  },
  {
    quote:
      "I've used InPrime Legal services for many years and I have absolutely zero doubt that they provide more value at a more fair price than I've ever had with a prior legal firm.",
    author: "Long-Term Member",
  },
];

export function Proof() {
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
        Proven Results
      </motion.div>

      <motion.h2
        variants={item}
        className="mb-8 font-serif"
        style={{
          fontSize: "clamp(36px, 4.5vw, 58px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Numbers that{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>speak</em>
      </motion.h2>

      {/* Stats row */}
      <motion.div
        variants={item}
        className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 text-center"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="font-serif text-3xl md:text-4xl"
              style={{ color: "var(--accent)", letterSpacing: "-0.02em" }}
            >
              <CountUp
                value={s.value}
                prefix={s.prefix || ""}
                suffix={s.suffix}
              />
            </div>
            <div
              className="mt-2 font-sans text-xs font-medium"
              style={{ color: "var(--muted)", letterSpacing: "0.03em" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Accolades + Testimonials */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <motion.div
          variants={item}
          className="rounded-2xl p-5"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="space-y-3">
            {accolades.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <span style={{ color: "var(--accent)" }}>{a.icon}</span>
                <span
                  className="font-sans text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {a.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-5"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="mb-2 font-sans text-sm italic leading-relaxed"
                style={{ color: "var(--text)", fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <span
                className="font-sans text-xs font-medium"
                style={{ color: "var(--accent)" }}
              >
                — {t.author}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
