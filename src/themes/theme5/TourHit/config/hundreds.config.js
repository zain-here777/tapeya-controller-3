import { createTourHitConfig } from "./shared.config.js";

/**
 * Tour-Hit Hundreds — isolated config.
 * Main bar identical to ThisOver; mini badge shows tournament hundreds count.
 */
export const tourHitHundredsConfig = createTourHitConfig({
  id: "tour-hit-hundreds",
  miniScorecard: {
    title: "HUNDREDS",
  },
});
