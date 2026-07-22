import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/** Shared defaults for Theme 4 Full Screen controllers. */
export const fullScreenSharedConfig = {
  category: "full-screen",
};

/** @param {Record<string, unknown>} overrides */
export function createFullScreenConfig(overrides = {}) {
  return mergeConfig(fullScreenSharedConfig, overrides);
}
