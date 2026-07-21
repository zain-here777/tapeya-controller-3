import React from "react";
import DefaultOverBalls from "./DefaultOverBalls.jsx";

function PanelDivider() {
  return (
    <div
      className="h-[calc(68px*var(--t4-scale))] w-px shrink-0 self-center bg-white/25"
      aria-hidden="true"
    />
  );
}

/**
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchBowler} [props.bowler]
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 */
export default function DefaultBowlingPanel({ bowler, teamCode, backgroundColor }) {
  if (!bowler) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  const { name, wickets = 0, runs = 0, overs, overBalls = [] } = bowler;

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(20px*var(--t4-scale))] pl-[calc(32px*var(--t4-scale))] pr-[calc(18px*var(--t4-scale))] text-white"
      style={{ backgroundColor }}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-[calc(8px*var(--t4-scale))]">
        <div className="flex min-w-0 items-center justify-start gap-[calc(40px*var(--t4-scale))] leading-none">
          <span className="min-w-0 truncate text-[calc(30px*var(--t4-scale))] font-medium">
            {name}
          </span>
          <span
            key={`${wickets}-${runs}-${overs}`}
            className="shrink-0 animate-score-pop whitespace-nowrap text-[calc(30px*var(--t4-scale))] font-medium tabular-nums"
          >
            {wickets}-{runs}
            {overs != null && overs !== "" ? (
              <span className="text-[calc(22px*var(--t4-scale))] font-medium"> ({overs})</span>
            ) : null}
          </span>
        </div>
        <DefaultOverBalls balls={overBalls} />
      </div>

      <PanelDivider />

      {teamCode ? (
        <div className="flex shrink-0 items-center justify-center px-[calc(8px*var(--t4-scale))]">
          <span className="whitespace-nowrap text-[calc(36px*var(--t4-scale))] font-bold uppercase leading-none">
            {teamCode}
          </span>
        </div>
      ) : null}
    </div>
  );
}
