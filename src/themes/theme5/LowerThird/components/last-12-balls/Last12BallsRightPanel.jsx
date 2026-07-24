import React from "react";
import Last12BallsCard from "./Last12BallsCard.jsx";

function PanelDivider() {
  return (
    <div
      className="t5-lt-vrule"
      aria-hidden="true"
    />
  );
}

/**
 * Theme 5 right panel for Last 12 Balls — strip + bowling-side team code.
 *
 * @param {Object} props
 * @param {Object} props.last12Balls
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 */
export default function Last12BallsRightPanel({
  last12Balls,
  teamCode,
  backgroundColor,
}) {
  if (!last12Balls) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(8px*var(--t5-scale))] overflow-hidden pl-[calc(12px*var(--t5-scale))] pr-[calc(12px*var(--t5-scale))] text-white"
      style={{ backgroundColor }}
    >
      <Last12BallsCard
        title={last12Balls.title}
        runs={last12Balls.runs}
        balls={last12Balls.balls}
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
