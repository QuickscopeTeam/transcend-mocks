"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Scale } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export function PillNav() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div
        className="flex items-center gap-1 rounded-full px-2 py-2"
        style={{
          background: "rgba(9,9,15,0.7)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid var(--accent-border)",
        }}
      >
        {/* Logo mark */}
        <a
          href="#"
          className="mr-2 flex h-9 w-9 items-center justify-center rounded-full"
          style={{
            background: "var(--accent-dim)",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Scale size={16} style={{ color: "var(--accent)" }} />
        </a>

        {/* Links */}
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 font-sans text-sm transition-colors hover:bg-white/5"
            style={{
              color: "var(--muted)",
              fontWeight: 400,
              fontSize: 13,
              letterSpacing: "0.01em",
            }}
          >
            {link.label}
          </a>
        ))}

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="ml-1 rounded-full px-5 py-2 font-sans text-sm font-semibold"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontSize: 13,
            letterSpacing: "0.03em",
          }}
        >
          Get Started
        </motion.a>
      </div>
    </motion.nav>
  );
}
