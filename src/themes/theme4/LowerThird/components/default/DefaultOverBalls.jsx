import React from "react";

function formatBallLabel(result) {
  if (result === 0 || result === "0" || result === "dot") return "dot";
  return String(result).toUpperCase().replace(/\s+/g, "");
}

const SIZE_STYLES = {
  md: {
    ball: "h-[calc(42px*var(--t4-scale))] min-w-[calc(42px*var(--t4-scale))] px-[calc(6px*var(--t4-scale))] text-[calc(14px*var(--t4-scale))]",
    fixed: "w-[calc(42px*var(--t4-scale))]",
    wide: "min-w-[calc(52px*var(--t4-scale))] text-[calc(12px*var(--t4-scale))]",
    dot: "h-[calc(8px*var(--t4-scale))] w-[calc(8px*var(--t4-scale))]",
    gap: "gap-[calc(8px*var(--t4-scale))]",
  },
  sm: {
    ball: "h-[calc(32px*var(--t4-scale))] min-w-[calc(32px*var(--t4-scale))] px-[calc(4px*var(--t4-scale))] text-[calc(12px*var(--t4-scale))]",
    fixed: "w-[calc(32px*var(--t4-scale))]",
    wide: "min-w-[calc(40px*var(--t4-scale))] text-[calc(11px*var(--t4-scale))]",
    dot: "h-[calc(7px*var(--t4-scale))] w-[calc(7px*var(--t4-scale))]",
    gap: "gap-[calc(5px*var(--t4-scale))]",
  },
};

function DefaultOverBall({ result, index, size = "md" }) {
  const styles = SIZE_STYLES[size] ?? SIZE_STYLES.md;
  const ballBase = `inline-flex shrink-0 items-center justify-center rounded-full border border-white/45 font-bold leading-none text-white ${styles.ball}`;

  if (result == null || result === "") {
    return <span className={`${ballBase} ${styles.fixed} bg-white/[0.08]`} />;
  }

  const normalized = formatBallLabel(result);
  const delayStyle = { animationDelay: `${index * 55}ms` };
  const filledClass = `${ballBase} animate-ball-pop`;

  if (normalized === "dot") {
    return (
      <span className={`${filledClass} ${styles.fixed} bg-transparent`} style={delayStyle}>
        <span className={`block rounded-full bg-white ${styles.dot}`} aria-hidden="true" />
      </span>
    );
  }

  const isWide = normalized.length > 2;

  return (
    <span
      className={`${filledClass} bg-white/12 ${isWide ? styles.wide : styles.fixed}`}
      style={delayStyle}
    >
      {normalized}
    </span>
  );
}

/**
 * Current-over / last-balls strip.
 *
 * @param {Object} props
 * @param {Array<string|number|null>} [props.balls]
 * @param {number} [props.minSlots]
 * @param {"md"|"sm"} [props.size]
 * @param {boolean} [props.wrap] - Allow balls to wrap onto additional rows
 */
export default function DefaultOverBalls({
  balls = [],
  minSlots = 6,
  size = "md",
  wrap = false,
}) {
  const count = Math.max(minSlots, balls.length);
  if (count === 0) return null;

  const styles = SIZE_STYLES[size] ?? SIZE_STYLES.md;
  const slots = Array.from({ length: count }, (_, i) => balls[i] ?? null);

  return (
    <div
      className={`flex min-w-0 items-center justify-start ${
        wrap ? "flex-wrap content-center overflow-visible" : "flex-nowrap overflow-hidden"
      } ${styles.gap}`}
    >
      {slots.map((result, index) => (
        <DefaultOverBall
          key={`${index}-${result == null ? "empty" : String(result)}`}
          result={result}
          index={index}
          size={size}
        />
      ))}
    </div>
  );
}
