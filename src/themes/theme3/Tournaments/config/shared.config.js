import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * Shared defaults for Tournament controllers.
 */
export const tournamentSharedConfig = {
  category: "tournaments",
};

/**
 * Build an isolated Tournament config.
 * @param {Record<string, unknown>} overrides
 */
export function createTournamentConfig(overrides = {}) {
  return mergeControllerConfig(tournamentSharedConfig, overrides);
}
