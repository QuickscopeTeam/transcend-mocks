"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PitchNavProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export function PitchNav({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
}: PitchNavProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[999] h-[2px] bg-[var(--border)]">
        <motion.div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-light))",
            boxShadow: "0 0 8px var(--accent-glow)",
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Bottom nav pill */}
      <div
        className="fixed bottom-8 left-1/2 z-[1000] flex -translate-x-1/2 items-center gap-3"
        style={{
          background: "rgba(22,22,22,0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid var(--border)",
          borderRadius: 100,
          padding: "8px 8px 8px 20px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
        }}
      >
        <motion.button
          onClick={onPrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </motion.button>

        <span
          className="min-w-[48px] text-center font-sans text-[13px] font-medium tracking-wider"
          style={{ color: "var(--muted)" }}
        >
          {String(currentSlide + 1).padStart(2, "0")}/
          {String(totalSlides).padStart(2, "0")}
        </span>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-black"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </>
  );
}
