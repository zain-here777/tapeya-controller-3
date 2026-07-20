import { createLowerThirdConfig } from "./shared.config.js";

/**
 * CurrentPartnership — isolated config.
 * Same shell as Last30Balls; right panel uses batsman panel color.
 */
export const currentPartnershipConfig = createLowerThirdConfig({
  id: "current-partnership",
  bowlerPanelWidthPercent: 56,
  bowlerPanelMaxWidth: 860,
  rightPanelBg: "bg-panel-player",
  bowlerPanel: {
    showCurrentPartnership: true,
  },
});
