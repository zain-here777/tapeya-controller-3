import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/** Shared defaults for Theme 5 Chart controllers. */
export const chartsSharedConfig = {
  category: "charts",
};

/** @param {Record<string, unknown>} overrides */
export function createChartsConfig(overrides = {}) {
  return mergeConfig(chartsSharedConfig, overrides);
}
