import { createLowerThirdConfig } from "./shared.config.js";

/**
 * FOW (Fall of Wickets) — isolated config.
 * No CRR/stat slot or bowler panel; full bar uses batting-side team color.
 */
export const fowConfig = createLowerThirdConfig({
  id: "fow",
  defaultBattingColorKey: "teamA",
  showRightPanel: false,
});
