import React from "react";
import DefaultOverBalls from "../default/DefaultOverBalls.jsx";

/**
 * Theme 4 Last 12 Balls card — title, total runs, wrapping circular ball strip.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {number} [props.runs]
 * @param {Array<string|number>} [props.balls]
 */
export default function Last12BallsCard({
  title = "LAST 12 BALLS",
  runs = 0,
  balls = [],
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center gap-[calc(12px*var(--t4-scale))] overflow-hidden pr-[calc(4px*var(--t4-scale))]">
      <span className="whitespace-nowrap text-[calc(22px*var(--t4-scale))] font-bold uppercase tracking-wide text-white">
        {title}
      </span>

      <div className="flex min-w-0 flex-wrap items-center gap-x-[calc(10px*var(--t4-scale))] gap-y-[calc(6px*var(--t4-scale))]">
        <span
          key={runs}
          className="animate-score-pop shrink-0 text-[calc(32px*var(--t4-scale))] font-bold tabular-nums leading-none text-white"
        >
          {runs}
        </span>

        <div className="min-w-0 flex-1 basis-[calc(160px*var(--t4-scale))]">
          <DefaultOverBalls balls={balls} minSlots={0} size="sm" wrap />
        </div>
      </div>
    </div>
  );
}
