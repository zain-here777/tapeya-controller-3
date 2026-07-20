import { createLowerThirdConfig } from "../../LowerThird/config/shared.config.js";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * Shared defaults for every Tour-Hit controller.
 * Main bar matches ThisOver (full over-ball strip); mini badge sits above.
 */
export const tourHitSharedConfig = {
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
 * @param {Record<string, unknown>} overrides
 */
export function createTourHitConfig(overrides = {}) {
  return createLowerThirdConfig(
    mergeControllerConfig(tourHitSharedConfig, overrides)
  );
}
