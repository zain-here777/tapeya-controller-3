import { createTourHitConfig } from "./shared.config.js";

/**
 * Tour-Hit Fifties — isolated config.
 * Main bar identical to ThisOver; mini badge shows tournament fifties count.
 */
export const tourHitFiftiesConfig = createTourHitConfig({
  id: "tour-hit-fifties",
  miniScorecard: {
    title: "FIFTIES",
  },
});
