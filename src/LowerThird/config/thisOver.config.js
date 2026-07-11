import { createLowerThirdConfig } from "./shared.config.js";

/**
 * ThisOver — isolated config.
 * Same as AtStage (no CRR), with full this-over ball strip always visible.
 */
export const thisOverConfig = createLowerThirdConfig({
  id: "this-over",
  bowlerPanel: {
    showFullOverBalls: true,
  },
});
