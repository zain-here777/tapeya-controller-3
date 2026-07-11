import { createLowerThirdConfig } from "./shared.config.js";

/**
 * TournamentName — isolated config.
 * Same shell as IntroLT; do not import other controller configs.
 */
export const tournamentNameConfig = createLowerThirdConfig({
  id: "tournament-name",
});
