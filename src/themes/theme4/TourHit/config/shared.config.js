import { createLowerThirdConfig } from "../../LowerThird/config/shared.config.js";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/**
 * Shared defaults for every Theme 4 Tour-Hit controller.
 * Main bar matches ThisOver; mini badge sits above.
 */
export const tourHitSharedConfig = {
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
  bowlerPanel: {
    showFullOverBalls: true,
  },
  miniScorecard: {
    eyebrow: "TOURNAMENT",
    value: 0,
  },
};

/**
 * Build an isolated Tour-Hit config from shared defaults + overrides.
 *
 * @param {Record<string, unknown>} overrides
 */
export function createTourHitConfig(overrides = {}) {
  return createLowerThirdConfig(mergeConfig(tourHitSharedConfig, overrides));
}
