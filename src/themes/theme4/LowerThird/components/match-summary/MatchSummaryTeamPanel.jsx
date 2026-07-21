import React from "react";
import MatchSummaryScoreBlock from "./MatchSummaryScoreBlock.jsx";

/**
 * Colored team half — name + score for one side of the Match Summary bar.
 *
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchTeam} props.team
 * @param {string} props.backgroundColor
 * @param {"start"|"end"} props.side
 */
export default function MatchSummaryTeamPanel({ team, backgroundColor, side }) {
  if (!team) return null;

  const isStart = side === "start";
  const name = team.name || team.code || "";

  return (
    <div
      className={`flex min-w-0 flex-1 items-center gap-[calc(24px*var(--t4-scale))] px-[calc(28px*var(--t4-scale))] ${
        isStart ? "" : "flex-row-reverse"
      }`}
      style={{ backgroundColor }}
    >
      <span
        className={`min-w-0 flex-1 truncate text-[calc(28px*var(--t4-scale))] font-bold uppercase leading-none text-white ${
          isStart ? "text-left" : "text-right"
        }`}
      >
        {name}
      </span>

      <MatchSummaryScoreBlock
        runs={team.runs}
        wickets={team.wickets}
        overs={team.overs}
        align="center"
      />
    </div>
  );
}
