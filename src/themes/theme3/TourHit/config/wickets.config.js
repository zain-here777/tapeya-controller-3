import { createTourHitConfig } from "./shared.config.js";

/** Tour-Hit Wickets — mini badge shows tournament wickets count. */
export const tourHitWicketsConfig = createTourHitConfig({
  id: "tour-hit-wickets",
  miniScorecard: {
    title: "WICKETS",
  },
});
