import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * Shared defaults for every Break (full-page) controller.
 */
export const breakSharedConfig = {
  statusLabel: "BREAK",
};

/**
 * Build an isolated Break config from shared defaults + overrides.
 * @param {Record<string, unknown>} overrides
 */
export function createBreakConfig(overrides = {}) {
  return mergeControllerConfig(breakSharedConfig, overrides);
}
