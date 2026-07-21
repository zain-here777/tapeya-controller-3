import { createLowerThirdConfig } from "./shared.config.js";

/**
 * WinPrediction — isolated config.
 * Same shell as CurrentPartnership; right panel uses batting-side team color.
 */
export const winPredictionConfig = createLowerThirdConfig({
  id: "win-prediction",
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
  rightPanelUsesBattingColor: true,
  bowlerPanel: {
    showWinPrediction: true,
  },
});
