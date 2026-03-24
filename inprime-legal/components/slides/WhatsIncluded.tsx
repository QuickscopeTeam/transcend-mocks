"use client";

import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Briefcase,
  FileCheck,
  Gavel,
  Building2,
  Handshake,
  Lock,
  BadgeCheck,
  Scale,
  FileSignature,
} from "lucide-react";
import { container, item } from "@/lib/motion";

const services = [
  {
    icon: <Briefcase size={20} />,
    title: "Corporate & Business Transactions",
    description: "Formation, governance, compliance, and strategic advisory",
  },
  {
    icon: <Lock size={20} />,
    title: "Intellectual Property",
    description: "Trademarks, patents, trade secrets, and IP strategy",
  },
  {
    icon: <Handshake size={20} />,
    title: "Mergers & Acquisitions",
    description: "Due diligence, deal structuring, and closing support",
  },
  {
    icon: <FileCheck size={20} />,
    title: "Contracts & Agreements",
    description: "Drafting, review, and negotiation of all business contracts",
  },
  {
    icon: <Gavel size={20} />,
    title: "Employment Law",
    description:
      "Management-side employment, HR operations, and EEO compliance",
  },
  {
    icon: <Building2 size={20} />,
    title: "Commercial Real Estate",
    description: "Leases, acquisitions, and real estate transactions",
  },
  {
    icon: <Scale size={20} />,
    title: "Joint Ventures & Alliances",
    description: "Partnership agreements and strategic alliance structuring",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "Private Equity",
    description: "Securities, fund formation, and investor relations",
  },
  {
    icon: <FileSignature size={20} />,
    title: "Member Portal & Document Vault",
    description:
      "Priority reports, utilization scoring, and centralized documents",
  },
];

export function WhatsIncluded() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full max-w-[950px] flex-col justify-center"
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
        Practice Areas
      </motion.div>

      <motion.h2
        variants={item}
        className="mb-8 font-serif"
        style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Everything your business{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>needs</em>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s, i) => (
          <motion.div key={i} variants={item}>
            <div className="relative rounded-[1.25rem] border border-[var(--border)] p-1.5">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative flex items-start gap-3 overflow-hidden rounded-xl bg-[var(--card)] p-4">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
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
                    className="mb-1 font-serif text-base"
                    style={{ color: "var(--text)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-sans text-xs leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.description}
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
