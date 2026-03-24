"use client";

import { motion } from "motion/react";
import { ArrowRight, Scale } from "lucide-react";
import { container, item } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24 md:px-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-[1100px] flex-col items-center text-center"
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
          className="mb-5 inline-flex items-center gap-3"
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
          Outsourced General Counsel
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
          Your Legal Team,{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            Reimagined
          </em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-[580px] font-sans"
          style={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--muted)",
          }}
        >
          InPrime Legal delivers predictable, flat-fee outsourced general
          counsel to growing businesses across Georgia. Prevention over
          reaction. Partnership over billable hours.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-2 font-sans"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-light))",
              color: "#fff",
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
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="font-sans"
            style={{
              border: "1px solid var(--faint)",
              color: "var(--text)",
              borderRadius: 100,
              padding: "16px 32px",
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.03em",
              cursor: "pointer",
            }}
          >
            View Services
          </motion.a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-sans"
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "var(--faint)",
          }}
        >
          Serving Marietta, Alpharetta &amp; Metro Atlanta since 2013
        </motion.p>
      </motion.div>
    </section>
  );
}
