import React from "react";
import Last30BallsCard from "./Last30BallsCard.jsx";

function PanelDivider() {
  return (
    <div
      className="t4-lt-vrule"
      aria-hidden="true"
    />
  );
}

/**
 * Theme 4 right panel for Last 30 Balls — summary stats + bowling-side team code.
 *
 * @param {Object} props
 * @param {Object} props.last30Balls
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 */
export default function Last30BallsRightPanel({
  last30Balls,
  teamCode,
  backgroundColor,
}) {
  if (!last30Balls) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(8px*var(--t4-scale))] overflow-hidden pl-[calc(10px*var(--t4-scale))] pr-[calc(12px*var(--t4-scale))] text-white"
      style={{ backgroundColor }}
    >
      <Last30BallsCard
        titleLine1={last30Balls.titleLine1}
        titleLine2={last30Balls.titleLine2}
        stats={last30Balls.stats}
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
