import React from "react";
import TeamCrest from "../TeamCrest.jsx";
import { resolveTeamColor } from "../../../config/teamColors.js";

const WHITE_PANEL =
  "bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_58%,#f4f8fd_82%,#e3eef9_100%)]";

/**
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchTeam} props.team
 * @param {"left"|"right"} props.barSide
 * @param {string} [props.fallbackColorKey]
 */
export default function DefaultTeamEndCap({ team, barSide, fallbackColorKey = "teamA" }) {
  if (!team) return null;

  const color = resolveTeamColor(team.colorKey, fallbackColorKey);

  return (
    <div className={`flex h-full shrink-0 items-stretch ${WHITE_PANEL}`}>
      {barSide === "left" ? (
        <div
          className="w-[calc(12px*var(--t5-scale))] shrink-0 self-stretch"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      ) : null}

      <div className="flex w-[calc(148px*var(--t5-scale))] shrink-0 items-center justify-center p-[calc(12px*var(--t5-scale))]">
        <TeamCrest
          code={team.code}
          name={team.name}
          logoUrl={team.logoUrl}
          theme={team.theme || "gold"}
          size="lg"
        />
      </div>

      {barSide === "right" ? (
        <div
          className="w-[calc(12px*var(--t5-scale))] shrink-0 self-stretch"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
