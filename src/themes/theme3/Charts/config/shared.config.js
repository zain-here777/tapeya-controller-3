import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/** Shared defaults for Charts controllers. */
export const chartsSharedConfig = {
  category: "charts",
};

/**
 * @param {Record<string, unknown>} overrides
 */
export function createChartsConfig(overrides = {}) {
  return mergeControllerConfig(chartsSharedConfig, overrides);
}
