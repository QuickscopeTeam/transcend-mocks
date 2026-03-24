"use client";

import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative px-6 py-12 md:px-10"
      style={{
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <Scale size={18} style={{ color: "var(--accent)" }} />
          </div>
          <span
            className="font-serif text-lg"
            style={{ color: "var(--text)" }}
          >
            InPrime{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Legal
            </em>
          </span>
        </div>

        <div className="flex flex-col items-center gap-1 md:items-end">
          <span
            className="font-sans text-sm"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            1640 Powers Ferry Rd, Bldg 23, Suite 100 — Marietta, GA 30067
          </span>
          <span
            className="font-sans text-sm"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            (770) 282-8967
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1100px] text-center">
        <span
          className="font-sans text-xs"
          style={{ color: "var(--faint)" }}
        >
          &copy; {new Date().getFullYear()} InPrime Legal. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
