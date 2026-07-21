import { createLowerThirdConfig } from "./shared.config.js";

/**
 * TournamentName — isolated config.
 * Crest | tournament + venue | crest (IntroLT-adjacent shell).
 */
export const tournamentNameConfig = createLowerThirdConfig({
  id: "tournament-name",
  defaultTeamAColorKey: "teamA",
  defaultTeamBColorKey: "teamB",
  defaultTournament: "LAHORE SUMMER CUP",
  defaultVenue: "LIVE FROM GADDAFI STADIUM LAHORE",
});
