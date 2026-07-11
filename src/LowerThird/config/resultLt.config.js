import { createLowerThirdConfig } from "./shared.config.js";

/**
 * ResultLT — isolated config.
 * Same UI as TournamentName; do not import other controller configs.
 */
export const resultLtConfig = createLowerThirdConfig({
  id: "result-lt",
});
