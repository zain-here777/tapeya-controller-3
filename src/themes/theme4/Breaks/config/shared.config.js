import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/** Shared defaults for Theme 4 full-page Break controllers. */
export const breakSharedConfig = {
  statusLabel: "BREAK",
  showTimer: false,
  timerSeconds: 300,
};

/** @param {Record<string, unknown>} overrides */
export function createBreakConfig(overrides = {}) {
  return mergeConfig(breakSharedConfig, overrides);
}
