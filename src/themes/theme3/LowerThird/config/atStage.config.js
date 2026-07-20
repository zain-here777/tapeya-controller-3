import { createLowerThirdConfig } from "./shared.config.js";

/**
 * AtStage — isolated config.
 * Same UI as CurrentPartnership (widened batsman-panel right side).
 */
export const atStageConfig = createLowerThirdConfig({
  id: "at-stage",
  bowlerPanelWidthPercent: 56,
  bowlerPanelMaxWidth: 860,
  rightPanelBg: "bg-panel-player",
  bowlerPanel: {
    showAtStage: true,
  },
});
