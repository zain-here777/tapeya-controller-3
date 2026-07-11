import { createLowerThirdConfig } from "./shared.config.js";

/**
 * MatchScorecard — isolated config.
 * Only overrides that differ from {@link lowerThirdSharedConfig}.
 * Do not import other controller configs here.
 */
export const matchScorecardConfig = createLowerThirdConfig({
  id: "match-scorecard",
});
