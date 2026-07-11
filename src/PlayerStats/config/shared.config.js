import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * Shared defaults for Player Stats controllers (batsman + bowler).
 */
export const playerStatsSharedConfig = {
  role: "batsman",
};

/**
 * Build an isolated Player Stats config.
 * @param {Record<string, unknown>} overrides
 */
export function createPlayerStatsConfig(overrides = {}) {
  return mergeControllerConfig(playerStatsSharedConfig, overrides);
}
