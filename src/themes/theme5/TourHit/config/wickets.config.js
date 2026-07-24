import { createTourHitConfig } from "./shared.config.js";

/**
 * Tour-Hit Wickets — isolated config.
 * Main bar identical to ThisOver; mini badge shows tournament wickets count.
 */
export const tourHitWicketsConfig = createTourHitConfig({
  id: "tour-hit-wickets",
  miniScorecard: {
    title: "WICKETS",
  },
});
