import React from "react";

/** Staggered rain pieces — delays/durations inspired by celebration confetti behavior. */
const CONFETTI_PIECES = [
  { left: "7%", rotate: -40, delayMs: 182, durationMs: 1116, tone: "accent" },
  { left: "14%", rotate: 4, delayMs: 161, durationMs: 1076, tone: "sky" },
  { left: "21%", rotate: -51, delayMs: 481, durationMs: 1103, tone: "white" },
  { left: "28%", rotate: 61, delayMs: 334, durationMs: 708, tone: "gold" },
  { left: "35%", rotate: -52, delayMs: 302, durationMs: 776, tone: "accent" },
  { left: "42%", rotate: 38, delayMs: 180, durationMs: 1168, tone: "sky" },
  { left: "49%", rotate: 11, delayMs: 395, durationMs: 1200, tone: "white" },
  { left: "56%", rotate: 49, delayMs: 14, durationMs: 887, tone: "accent" },
  { left: "63%", rotate: -72, delayMs: 149, durationMs: 805, tone: "gold" },
  { left: "70%", rotate: 10, delayMs: 351, durationMs: 1059, tone: "sky" },
  { left: "77%", rotate: 4, delayMs: 307, durationMs: 1132, tone: "white" },
  { left: "84%", rotate: 42, delayMs: 464, durationMs: 776, tone: "accent" },
  { left: "91%", rotate: -72, delayMs: 429, durationMs: 818, tone: "sky" },
];

const TONE_COLORS = {
  accent: "var(--t5-broadcast-accent, #0ea5e9)",
  sky: "var(--t5-broadcast-highlight, #7dd3fc)",
  white: "#f8fafc",
  gold: "#fbbf24",
};

/**
 * Theme 5 celebration confetti — rain behavior adapted into Theme 5 palette.
 * Scoped to the action-banner bar; does not copy reference UI/colors.
 */
export default function ActionBannerConfetti() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {CONFETTI_PIECES.map((piece, index) => {
        const sizeClass =
          index % 4 === 0
            ? "h-[calc(12px*var(--t5-scale))] w-[calc(5px*var(--t5-scale))]"
            : index % 3 === 0
              ? "h-[calc(10px*var(--t5-scale))] w-[calc(3px*var(--t5-scale))]"
              : "h-[calc(16px*var(--t5-scale))] w-[calc(8px*var(--t5-scale))]";

        const durationMs =
          index % 4 === 0 ? 2000 : index % 3 === 0 ? 2500 : piece.durationMs;
        const delayMs = index % 3 === 0 ? 1000 : piece.delayMs;

        return (
          <span
            key={`${piece.left}-${index}`}
            className={`t5-action-confetti-piece absolute top-0 opacity-0 ${sizeClass}`}
            style={{
              left: piece.left,
              backgroundColor: TONE_COLORS[piece.tone],
              ["--t5-confetti-rotate"]: `${piece.rotate}deg`,
              animationDelay: `${delayMs}ms`,
              animationDuration: `${durationMs}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
