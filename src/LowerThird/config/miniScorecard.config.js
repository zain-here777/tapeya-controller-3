import { createLowerThirdConfig } from "./shared.config.js";

/**
 * MiniScorecard — isolated config.
 * Only overrides that differ from {@link lowerThirdSharedConfig}.
 */
export const miniScorecardConfig = createLowerThirdConfig({
  id: "mini-scorecard",
});
