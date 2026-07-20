import { createTourHitConfig } from "./shared.config.js";

/**
 * Tour-Hit Four — isolated config.
 * Main bar identical to ThisOver; mini badge shows tournament fours count.
 */
export const tourHitFourConfig = createTourHitConfig({
  id: "tour-hit-four",
  miniScorecard: {
    title: "FOURS",
  },
});
