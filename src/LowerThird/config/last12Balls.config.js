import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Last12Balls — isolated config.
 * Default shell without CRR; bowler side shows last-12-balls strip.
 */
export const last12BallsConfig = createLowerThirdConfig({
  id: "last-12-balls",
  bowlerPanel: {
    showLast12Balls: true,
  },
});
