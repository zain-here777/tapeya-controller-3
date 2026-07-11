import { createLowerThirdConfig } from "./shared.config.js";

/**
 * WinPrediction — isolated config.
 * Same UI as CurrentPartnership; do not import other controller configs.
 */
export const winPredictionConfig = createLowerThirdConfig({
  id: "win-prediction",
  bowlerPanelWidthPercent: 56,
  bowlerPanelMaxWidth: 860,
  rightPanelBg: "bg-panel-player",
  bowlerPanel: {
    showWinPrediction: true,
  },
});
