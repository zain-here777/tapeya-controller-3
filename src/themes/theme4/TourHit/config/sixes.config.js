import { createTourHitConfig } from "./shared.config.js";

/**
 * Tour-Hit Sixes — isolated config.
 * Main bar identical to ThisOver; mini badge shows tournament sixes count.
 */
export const tourHitSixesConfig = createTourHitConfig({
  id: "tour-hit-sixes",
  miniScorecard: {
    title: "SIXES",
  },
});
