import { createLowerThirdConfig } from "./shared.config.js";

/**
 * TossLT — isolated config.
 */
export const tossLtConfig = createLowerThirdConfig({
  id: "toss-lt",
  defaultTeamAColorKey: "teamA",
  defaultTeamBColorKey: "teamB",
  defaultTossResult:
    "ENGLAND WON THE TOSS AND ELECTED TO BAT FIRST",
});
