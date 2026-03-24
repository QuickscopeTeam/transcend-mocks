"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/CountUp";
import { container, item } from "@/lib/motion";

const stats = [
  { value: 13, suffix: "+", label: "Years Serving Georgia Businesses" },
  { value: 10, suffix: "x", label: "Average Client ROI" },
  { value: 2568, prefix: "#", suffix: "", label: "Inc. 5000 Ranking (2020)" },
  { value: 6, suffix: "+", label: "Attorneys & Advisors" },
];

export function Stats() {
  return (
    <section className="relative px-6 py-24 md:px-10" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl p-6 text-center"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
