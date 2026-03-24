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

export function CTA() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
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
              Get Started
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
              Ready to{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                protect
              </em>{" "}
              your business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-8 font-sans"
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--muted)",
              }}
            >
              Schedule a consultation to learn how InPrime Legal can become your
              dedicated legal department — for a predictable, flat monthly fee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="tel:7702828967"
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
                href="mailto:info@inprimelegal.com"
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
                Email Us
              </motion.a>
            </motion.div>
          </div>

          {/* Right — what's included card */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-3xl p-8"
            style={{
              background: "var(--card)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <motion.div
              variants={item}
              className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Your Membership Includes
            </motion.div>
            <motion.div variants={item} className="mb-6">
              <span
                className="font-serif text-lg"
                style={{ color: "var(--text)" }}
              >
                Full outsourced general counsel services
              </span>
            </motion.div>

            <ul className="space-y-3">
              {included.map((text, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-3"
                >
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
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
