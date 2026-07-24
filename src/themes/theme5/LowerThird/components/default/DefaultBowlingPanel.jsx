import React from "react";
import DefaultOverBalls from "./DefaultOverBalls.jsx";

function PanelDivider() {
  return (
    <div className="t5-lt-vrule" aria-hidden="true" />
  );
}

/**
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchBowler} [props.bowler]
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 * @param {boolean} [props.showFullOverBalls] - Always show the padded over strip
 * @param {boolean} [props.showLastOverSummary] - Show "Last over X runs" instead of balls
 */
export default function DefaultBowlingPanel({
  bowler,
  teamCode,
  backgroundColor,
  showFullOverBalls = true,
  showLastOverSummary = false,
}) {
  if (!bowler) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  const { name, wickets = 0, runs = 0, overs, overBalls = [], lastOverRuns } = bowler;
  const showOverBalls =
    !showLastOverSummary && (showFullOverBalls || overBalls.length > 0);
  const lastOverValue = lastOverRuns ?? (showLastOverSummary ? 0 : null);

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(20px*var(--t5-scale))] pl-[calc(32px*var(--t5-scale))] pr-[calc(18px*var(--t5-scale))] text-white"
      style={{ backgroundColor }}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-[calc(8px*var(--t5-scale))]">
        <div className="flex min-w-0 items-center justify-start gap-[calc(40px*var(--t5-scale))] leading-none">
          <span className="min-w-0 truncate text-[calc(30px*var(--t5-scale))] font-medium">
            {name}
          </span>
          <span
            key={`${wickets}-${runs}-${overs}`}
            className="shrink-0 animate-score-pop whitespace-nowrap text-[calc(30px*var(--t5-scale))] font-medium tabular-nums"
          >
            {wickets}-{runs}
            {overs != null && overs !== "" ? (
              <span className="text-[calc(22px*var(--t5-scale))] font-medium"> ({overs})</span>
            ) : null}
          </span>
        </div>

        {showLastOverSummary ? (
          <p className="m-0 mt-[calc(10px*var(--t5-scale))] whitespace-nowrap text-[calc(28px*var(--t5-scale))] font-medium leading-none text-white">
            Last over{" "}
            <span
              key={lastOverValue}
              className="animate-score-pop font-bold tabular-nums"
            >
              {lastOverValue}
            </span>
            {" runs"}
          </p>
        ) : null}

        {showOverBalls ? <DefaultOverBalls balls={overBalls} /> : null}
      </div>

      <PanelDivider />

      {teamCode ? (
        <div className="flex shrink-0 items-center justify-center px-[calc(8px*var(--t5-scale))]">
          <span className="whitespace-nowrap text-[calc(36px*var(--t5-scale))] font-bold uppercase leading-none">
            {teamCode}
          </span>
        </div>
      ) : null}
    </div>
  );
}
