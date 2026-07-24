import React from "react";

/**
 * Runs-wickets stack with optional overs line.
 *
 * @param {Object} props
 * @param {number} [props.runs]
 * @param {number} [props.wickets]
 * @param {string|number} [props.overs]
 * @param {"left"|"right"|"center"} [props.align]
 */
export default function MatchSummaryScoreBlock({
  runs = 0,
  wickets = 0,
  overs,
  align = "center",
}) {
  const alignClass =
    align === "left"
      ? "items-start"
      : align === "right"
        ? "items-end"
        : "items-center";

  return (
    <div className={`flex flex-col leading-none ${alignClass}`}>
      <span
        key={`${runs}-${wickets}`}
        className="animate-score-pop text-[calc(40px*var(--t5-scale))] font-bold tabular-nums text-white"
      >
        {runs}-{wickets}
      </span>
      {overs != null && overs !== "" ? (
        <span className="mt-[calc(6px*var(--t5-scale))] text-[calc(18px*var(--t5-scale))] font-medium uppercase tracking-wide text-white">
          {overs} OVER
        </span>
      ) : null}
    </div>
  );
}
