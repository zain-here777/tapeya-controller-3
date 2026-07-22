import { createLowerThirdConfig } from "./shared.config.js";

/**
 * TournamentName — isolated config.
 * Crest | tournament + venue | crest (IntroLT-adjacent shell).
 */
export const tournamentNameConfig = createLowerThirdConfig({
  id: "tournament-name",
  defaultTeamAColorKey: "teamA",
  defaultTeamBColorKey: "teamB",
  defaultTournament: "ICC WORLD TEST CHAMPIONSHIP",
  defaultVenue: "LIVE FROM LORD'S CRICKET GROUND",
});
