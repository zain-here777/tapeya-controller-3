import { createLowerThirdConfig } from "./shared.config.js";

/**
 * CurrentPartnership — isolated config.
 * Same shell as Last30Balls; right panel uses batting-side team color.
 */
export const currentPartnershipConfig = createLowerThirdConfig({
  id: "current-partnership",
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
  rightPanelUsesBattingColor: true,
  bowlerPanel: {
    showCurrentPartnership: true,
  },
});
