import React from "react";
import TeamScore from "../../components/TeamScore";
import { DEFAULT_COLUMN_CLASS } from "../columnTypes";

/**
 * Team score column — crest, code, runs, overs.
 */
export function createTeamColumn({
  team,
  bg = "bg-panel-player",
  className = DEFAULT_COLUMN_CLASS.team,
  align = "left",
}) {
  return {
    key: "team",
    bg,
    layout: "content",
    className,
    content: (
      <TeamScore team={{ ...team, theme: team.theme || "gold" }} align={align} />
    ),
  };
}
