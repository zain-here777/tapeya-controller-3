import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { BOWLER_PANEL_MAX_WIDTH, BOWLER_PANEL_WIDTH_PERCENT } from "../../config/layout.js";

/** Shared defaults for every theme 4 lower-third controller. */
export const lowerThirdSharedConfig = {
  id: "shared",
  bowlerPanelWidthPercent: BOWLER_PANEL_WIDTH_PERCENT,
  bowlerPanelMaxWidth: BOWLER_PANEL_MAX_WIDTH,
  showRightPanel: true,
  columns: {
    playerBg: "t4-bg-panel-primary",
    statBg: "t4-bg-panel-stat",
  },
  bowlerPanel: {},
};

/** @param {Record<string, unknown>} overrides */
export function createLowerThirdConfig(overrides = {}) {
  return mergeConfig(lowerThirdSharedConfig, overrides);
}
