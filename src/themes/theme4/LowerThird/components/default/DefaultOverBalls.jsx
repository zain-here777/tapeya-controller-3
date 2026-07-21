import React from "react";

function formatBallLabel(result) {
  if (result === 0 || result === "0" || result === "dot") return "dot";
  return String(result).toUpperCase().replace(/\s+/g, "");
}

function DefaultOverBall({ result, index }) {
  const ballBase =
    "inline-flex h-[calc(42px*var(--t4-scale))] min-w-[calc(42px*var(--t4-scale))] shrink-0 items-center justify-center rounded-full border border-white/45 px-[calc(6px*var(--t4-scale))] text-[calc(14px*var(--t4-scale))] font-bold leading-none text-white";

  if (result == null || result === "") {
    return <span className={`${ballBase} w-[calc(42px*var(--t4-scale))] bg-white/[0.08]`} />;
  }

  const normalized = formatBallLabel(result);
  const delayStyle = { animationDelay: `${index * 55}ms` };
  const filledClass = `${ballBase} animate-ball-pop`;

  if (normalized === "dot") {
    return (
      <span
        className={`${filledClass} w-[calc(42px*var(--t4-scale))] bg-transparent`}
        style={delayStyle}
      >
        <span
          className="block h-[calc(8px*var(--t4-scale))] w-[calc(8px*var(--t4-scale))] rounded-full bg-white"
          aria-hidden="true"
        />
      </span>
    );
  }

  const isWide = normalized.length > 2;

  return (
    <span
      className={`${filledClass} bg-white/12${isWide ? " min-w-[calc(52px*var(--t4-scale))] text-[calc(12px*var(--t4-scale))]" : " w-[calc(42px*var(--t4-scale))]"}`}
      style={delayStyle}
    >
      {normalized}
    </span>
  );
}

/** Current-over strip for the Default controller bowling panel. */
export default function DefaultOverBalls({ balls = [], minSlots = 6 }) {
  const count = Math.max(minSlots, balls.length);
  const slots = Array.from({ length: count }, (_, i) => balls[i] ?? null);

  return (
    <div className="flex flex-nowrap items-center justify-start gap-[calc(8px*var(--t4-scale))] overflow-visible">
      {slots.map((result, index) => (
        <DefaultOverBall
          key={`${index}-${result == null ? "empty" : String(result)}`}
          result={result}
          index={index}
        />
      ))}
    </div>
  );
}
