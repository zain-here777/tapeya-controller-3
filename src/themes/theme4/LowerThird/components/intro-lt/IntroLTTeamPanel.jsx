import React from "react";

/**
 * Colored team half — name only, facing the VS center (IntroLT matchup).
 *
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchTeam} props.team
 * @param {string} props.backgroundColor
 * @param {"start"|"end"} props.side
 */
export default function IntroLTTeamPanel({ team, backgroundColor, side }) {
  if (!team) return null;

  const isStart = side === "start";
  const name = team.name || team.code || "";

  return (
    <div
      className="flex min-w-0 flex-1 items-center px-[calc(28px*var(--t4-scale))]"
      style={{ backgroundColor }}
    >
      <span
        className={`min-w-0 flex-1 truncate text-[calc(28px*var(--t4-scale))] font-bold uppercase leading-none text-white ${
          isStart ? "text-right" : "text-left"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
