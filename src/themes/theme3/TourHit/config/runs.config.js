import { createTourHitConfig } from "./shared.config.js";

/** Tour-Hit Runs — mini badge shows tournament runs count. */
export const tourHitRunsConfig = createTourHitConfig({
  id: "tour-hit-runs",
  miniScorecard: {
    title: "RUNS",
  },
});
