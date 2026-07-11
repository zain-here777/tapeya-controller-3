import { createLowerThirdConfig } from "./shared.config.js";

/**
 * PreviousOver — isolated config.
 * Same as ThisOver shell, but bowler row shows "Last over X runs" instead of balls.
 */
export const previousOverConfig = createLowerThirdConfig({
  id: "previous-over",
  bowlerPanel: {
    showLastOverSummary: true,
  },
});
