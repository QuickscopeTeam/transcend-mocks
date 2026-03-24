"use client";

import { motion } from "motion/react";
import { Award, Star, Trophy, TrendingUp, Quote } from "lucide-react";
import { container, item } from "@/lib/motion";

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
  {
    quote:
      "We have been clients of InPrime Legal for 2.5 years and absolutely trust in their work. They are timely, knowledgeable and friendly.",
    author: "Business Owner",
  },
];

export function Proof() {
  return (
    <section id="proof" className="relative px-6 py-24 md:px-10" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-12 font-serif"
          style={{
            fontSize: "clamp(36px, 4.5vw, 58px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Trusted by businesses across{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Georgia</em>
        </motion.h2>

        {/* Awards Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {accolades.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-center gap-3 rounded-2xl p-5"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <span style={{ color: "var(--accent)", flexShrink: 0 }}>{a.icon}</span>
              <span
                className="font-sans text-sm"
                style={{ color: "var(--text)" }}
              >
                {a.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <Quote size={24} style={{ color: "var(--accent-glow)", marginBottom: 16 }} />
              <p
                className="mb-4 flex-1 font-sans text-sm italic leading-relaxed"
                style={{ color: "var(--text)", fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <span
                className="font-sans text-xs font-semibold"
                style={{ color: "var(--accent)" }}
              >
                — {t.author}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
