import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Last30Balls — isolated config.
 * No CRR; bowler side shows last-30-balls summary stats.
 */
export const last30BallsConfig = createLowerThirdConfig({
  id: "last-30-balls",
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
  bowlerPanel: {
    showLast30Balls: true,
  },
});
