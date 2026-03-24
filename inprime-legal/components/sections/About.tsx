"use client";

import { motion } from "motion/react";
import { Shield, Users, FileText, TrendingUp } from "lucide-react";
import { container, item } from "@/lib/motion";

const pillars = [
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

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — narrative */}
          <div>
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
              The InPrime Model
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-6 font-serif"
              style={{
                fontSize: "clamp(36px, 4.5vw, 58px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              Built different,{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                on purpose
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-4 font-sans"
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--muted)",
              }}
            >
              Founded in 2013 by Jonathan Page after leaving a midsized Atlanta
              firm, InPrime Legal was built on a simple conviction: the
              traditional legal model — inefficient, slow, costly, and lacking
              accountability — needed to be replaced entirely.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-sans"
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--muted)",
              }}
            >
              InPrime 2.0 is a premier full-service outsourced law department.
              Your dedicated legal team operates as an extension of your
              business — learning your operations, anticipating your risks, and
              delivering proactive counsel on a flat monthly fee.
            </motion.p>
          </div>

          {/* Right — pillars */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex flex-col gap-4 rounded-2xl p-6"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
