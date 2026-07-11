import { createTourHitConfig } from "./shared.config.js";

/** Tour-Hit Sixes — mini badge shows tournament sixes count. */
export const tourHitSixesConfig = createTourHitConfig({
  id: "tour-hit-sixes",
  miniScorecard: {
    title: "SIXES",
  },
});
