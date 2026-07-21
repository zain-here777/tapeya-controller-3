import { createLowerThirdConfig } from "./shared.config.js";

/**
 * MatchSummary — isolated config.
 */
export const matchSummaryConfig = createLowerThirdConfig({
  id: "match-summary",
  defaultTeamAColorKey: "teamA",
  defaultTeamBColorKey: "teamB",
});
