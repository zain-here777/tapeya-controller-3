import {
  BOWLER_PANEL_MAX_WIDTH,
  BOWLER_PANEL_WIDTH_PERCENT,
} from "../../theme/layout.js";
import { mergeControllerConfig } from "./mergeControllerConfig.js";

/**
 * Shared defaults for every lower-third controller.
 * Per-controller configs extend this — they never import each other.
 */
export const lowerThirdSharedConfig = {
  bowlerPanelWidthPercent: BOWLER_PANEL_WIDTH_PERCENT,
  bowlerPanelMaxWidth: BOWLER_PANEL_MAX_WIDTH,
  rightPanelBg: "bg-bowler-panel",
  showRightPanel: true,
  columns: {
    playerBg: "bg-panel-player",
    statBg: "bg-black",
  },
  bowlerPanel: {},
};

/**
 * Build an isolated lower-third controller config from shared defaults + overrides.
 * @param {Record<string, unknown>} overrides - Controller-specific settings only
 */
export function createLowerThirdConfig(overrides = {}) {
  return mergeControllerConfig(lowerThirdSharedConfig, overrides);
}
