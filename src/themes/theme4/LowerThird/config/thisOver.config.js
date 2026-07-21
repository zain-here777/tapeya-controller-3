import { createLowerThirdConfig } from "./shared.config.js";

/**
 * ThisOver — isolated config.
 * Same Default shell (no CRR required); full this-over ball strip always visible.
 */
export const thisOverConfig = createLowerThirdConfig({
  id: "this-over",
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
  bowlerPanel: {
    showFullOverBalls: true,
  },
});
