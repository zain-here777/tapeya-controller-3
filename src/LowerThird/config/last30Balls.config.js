import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Last30Balls — isolated config.
 * No CRR; widened bowler panel shows last-30-balls summary stats.
 */
export const last30BallsConfig = createLowerThirdConfig({
  id: "last-30-balls",
  bowlerPanelWidthPercent: 56,
  bowlerPanelMaxWidth: 860,
  bowlerPanel: {
    showLast30Balls: true,
  },
});
