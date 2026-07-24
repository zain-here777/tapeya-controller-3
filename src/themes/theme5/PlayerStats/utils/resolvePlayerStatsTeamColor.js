import { resolveTeamColor } from "../../config/teamColors.js";

/**
 * Resolve Player Stats team panel color.
 * Batsman → batting team (teamA). Bowler → bowling team (teamB).
 *
 * @param {Object} [match]
 * @param {"batsman"|"bowler"} [variant]
 * @param {Object} [config]
 */
export function resolvePlayerStatsTeamColor(
  match,
  variant = "batsman",
  config = {}
) {
  const fallbackKey =
    config.defaultTeamColorKey ??
    (variant === "bowler" ? "teamB" : "teamA");

  return resolveTeamColor(match?.team?.colorKey, fallbackKey);
}

/**
 * @param {"batsman"|"bowler"} [variant]
 * @param {Object} [config]
 */
export function resolvePlayerStatsColorFallback(variant = "batsman", config = {}) {
  return (
    config.defaultTeamColorKey ??
    (variant === "bowler" ? "teamB" : "teamA")
  );
}
