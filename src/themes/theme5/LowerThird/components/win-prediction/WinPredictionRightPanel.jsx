import React from "react";
import Last30BallsCard from "../last-30-balls/Last30BallsCard.jsx";

const DEFAULT_STATS = [
  { label: "—", value: "0%" },
  { label: "—", value: "0%" },
];

function PanelDivider() {
  return (
    <div
      className="t5-lt-vrule"
      aria-hidden="true"
    />
  );
}

/**
 * Theme 5 right panel for Win Prediction — title/stat columns + bowling-side team code.
 * Reuses Last30BallsCard (same approach as Theme 3 / CurrentPartnership).
 *
 * @param {Object} props
 * @param {Object} props.winPrediction
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 */
export default function WinPredictionRightPanel({
  winPrediction,
  teamCode,
  backgroundColor,
}) {
  if (!winPrediction) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  const stats = winPrediction.stats?.length
    ? winPrediction.stats
    : DEFAULT_STATS;

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(8px*var(--t5-scale))] overflow-hidden pl-[calc(10px*var(--t5-scale))] pr-[calc(12px*var(--t5-scale))] text-white"
      style={{ backgroundColor }}
    >
      <Last30BallsCard
        titleLine1={winPrediction.titleLine1 ?? "WIN"}
        titleLine2={winPrediction.titleLine2 ?? "PREDICTION"}
        stats={stats}
        statLabelClassName="whitespace-nowrap text-[calc(28px*var(--t5-scale))] font-bold uppercase tracking-wide"
        statValueClassName="animate-score-pop whitespace-nowrap text-[calc(36px*var(--t5-scale))] font-bold tabular-nums"
      />

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
