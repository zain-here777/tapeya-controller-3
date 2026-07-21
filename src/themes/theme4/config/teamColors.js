/** Scalable team accent palette — add teams here only; controllers resolve by key. */
export const TEAM_COLORS = {
  teamA: "#070E35",
  teamB: "#2760B3",
  teamC: "#E53935",
  teamD: "#2E7D32",
  teamE: "#FF9800",
};

/**
 * @param {string} [colorKey]
 * @param {string} [fallbackKey]
 */
export function resolveTeamColor(colorKey, fallbackKey = "teamA") {
  const key = colorKey || fallbackKey;
  return TEAM_COLORS[key] ?? TEAM_COLORS[fallbackKey] ?? TEAM_COLORS.teamA;
}
