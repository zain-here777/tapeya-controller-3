import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * Shared defaults for Full Screen controllers.
 */
export const fullScreenSharedConfig = {
  category: "full-screen",
};

/**
 * Build an isolated Full Screen config.
 * @param {Record<string, unknown>} overrides
 */
export function createFullScreenConfig(overrides = {}) {
  return mergeControllerConfig(fullScreenSharedConfig, overrides);
}
