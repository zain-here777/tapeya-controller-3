import { createPlayerStatsConfig } from "./shared.config.js";

/**
 * TournamentLT — batsman tournament stats lower third.
 * Same UI shell as MatchLT.
 */
export const tournamentLtConfig = createPlayerStatsConfig({
  id: "tournament-lt",
  role: "batsman",
});
