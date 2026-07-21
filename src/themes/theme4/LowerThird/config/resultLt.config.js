import { createLowerThirdConfig } from "./shared.config.js";

/**
 * ResultLT — isolated config.
 */
export const resultLtConfig = createLowerThirdConfig({
  id: "result-lt",
  defaultTeamAColorKey: "teamA",
  defaultTeamBColorKey: "teamB",
  defaultResult: "TIE",
});
