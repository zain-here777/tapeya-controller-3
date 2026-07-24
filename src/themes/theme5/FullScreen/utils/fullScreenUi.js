import { resolveTeamColor } from "../../config/teamColors.js";
import { T4_LOGO_TILE } from "../../utils/ui.js";

export { T4_LOGO_TILE };

/**
 * @param {Object} [team]
 * @param {"batsman"|"bowler"} [tone]
 */
export function resolveFullScreenTeamColor(team, tone = "batsman") {
  const fallback = tone === "bowler" ? "teamB" : "teamA";
  return resolveTeamColor(team?.colorKey, fallback);
}

/** Panel fill for list rows / cards. */
export function panelStyle(team, tone = "batsman") {
  const bg = resolveFullScreenTeamColor(team, tone);
  return {
    backgroundColor: bg,
    borderColor: "var(--t5-divider)",
  };
}
