import React from "react";

/**
 * Top row — dismissed batter name / how-out + runs (balls).
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} [props.howOut]
 * @param {number} [props.runs]
 * @param {number} [props.balls]
 */
export default function LastWicketHeader({
  name = "",
  howOut = "",
  runs = 0,
  balls = 0,
}) {
  return (
    <div className="flex h-[var(--t5-bar-row-short)] shrink-0 items-center justify-between gap-x-[calc(24px*var(--t5-scale))] px-[calc(28px*var(--t5-scale))]">
      <div className="flex min-w-0 items-baseline gap-[calc(16px*var(--t5-scale))]">
        <span className="flex-none whitespace-nowrap text-[calc(28px*var(--t5-scale))] font-bold uppercase leading-none tracking-wide text-white">
          {name}
        </span>
        {howOut ? (
          <span className="whitespace-nowrap text-[calc(20px*var(--t5-scale))] font-semibold uppercase leading-none text-white/90">
            {howOut}
          </span>
        ) : null}
      </div>

      <div className="flex shrink-0 items-baseline gap-[calc(6px*var(--t5-scale))] leading-none tabular-nums text-white">
        <span
          key={runs}
          className="animate-score-pop text-[calc(40px*var(--t5-scale))] font-bold"
        >
          {runs}
        </span>
        <span className="text-[calc(24px*var(--t5-scale))] font-medium">
          ({balls})
        </span>
      </div>
    </div>
  );
}
