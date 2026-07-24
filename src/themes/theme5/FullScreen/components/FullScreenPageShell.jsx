import React from "react";
import BreakBackground from "../../Breaks/components/BreakBackground.jsx";

/** Theme 5 full-screen page shell — Tailwind layout + soft content enter. */
export default function FullScreenPageShell({ children, className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[var(--t5-surface)] select-none font-montserrat ${className}`.trim()}
    >
      <BreakBackground />
      <div className="relative z-[1] box-border h-full w-full motion-safe:animate-t5-fade-in motion-reduce:animate-none">
        {children}
      </div>
    </div>
  );
}
