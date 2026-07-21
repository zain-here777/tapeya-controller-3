import React from "react";
import AtStageCard from "../at-stage/AtStageCard.jsx";

function PanelDivider() {
  return (
    <div
      className="h-[calc(68px*var(--t4-scale))] w-px shrink-0 self-center bg-white/25"
      aria-hidden="true"
    />
  );
}

/**
 * Theme 4 right panel for At Stage — comparison card + bowling-side team code.
 *
 * @param {Object} props
 * @param {Object} props.atStage
 * @param {string} [props.teamCode]
 * @param {string} props.backgroundColor
 */
export default function AtStageRightPanel({ atStage, teamCode, backgroundColor }) {
  if (!atStage) {
    return (
      <div className="min-w-0 flex-1" style={{ backgroundColor }} aria-hidden="true" />
    );
  }

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(8px*var(--t4-scale))] pl-[calc(10px*var(--t4-scale))] pr-[calc(12px*var(--t4-scale))] text-white"
      style={{ backgroundColor }}
    >
      <AtStageCard
        titleLine1={atStage.titleLine1}
        titleLine2={atStage.titleLine2}
        teams={atStage.teams}
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
