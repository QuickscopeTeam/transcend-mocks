"use client";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: -200,
          right: -200,
          background:
            "radial-gradient(circle, rgba(59,93,167,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -100,
          background:
            "radial-gradient(circle, rgba(59,93,167,0.05) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
