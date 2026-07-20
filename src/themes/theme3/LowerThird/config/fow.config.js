import { createLowerThirdConfig } from "./shared.config.js";

/**
 * FOW (Fall of Wickets) — isolated config.
 * No CRR/stat slot or bowler panel; full bar uses batsman-side panel color.
 */
export const fowConfig = createLowerThirdConfig({
  id: "fow",
  showRightPanel: false,
});
