import React from "react";
import Last30BallsCard from "../last-30-balls/Last30BallsCard.jsx";

const DEFAULT_STATS = [
  { label: "RUNS", value: 0 },
  { label: "BALLS", value: 0 },
];

function PanelDivider() {
  return (
    <div
      className="t4-lt-vrule"
      aria-hidden="true"
    />
  );
}

/**
 * Theme 4 right panel for Current Partnership — title/stat columns + bowling-side team code.
 * Reuses Last30BallsCard (same approach as Theme 3).
 *
 * @param {Object} props
 * @param {Object} props.currentPartnership
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 */
export default function CurrentPartnershipRightPanel({
  currentPartnership,
  teamCode,
  backgroundColor,
}) {
  if (!currentPartnership) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  const stats = currentPartnership.stats?.length
    ? currentPartnership.stats
    : DEFAULT_STATS;

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(8px*var(--t4-scale))] overflow-hidden pl-[calc(10px*var(--t4-scale))] pr-[calc(12px*var(--t4-scale))] text-white"
      style={{ backgroundColor }}
    >
      <Last30BallsCard
        titleLine1={currentPartnership.titleLine1 ?? "CURRENT"}
        titleLine2={currentPartnership.titleLine2 ?? "PARTNERSHIP"}
        stats={stats}
        statLabelClassName="whitespace-nowrap text-[calc(18px*var(--t4-scale))] font-bold uppercase tracking-wide"
        statValueClassName="animate-score-pop whitespace-nowrap text-[calc(36px*var(--t4-scale))] font-bold tabular-nums"
      />

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
