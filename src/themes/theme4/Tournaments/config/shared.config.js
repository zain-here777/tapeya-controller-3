import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/** Shared defaults for Theme 4 Tournament controllers. */
export const tournamentSharedConfig = {
  category: "tournaments",
};

/** @param {Record<string, unknown>} overrides */
export function createTournamentConfig(overrides = {}) {
  return mergeConfig(tournamentSharedConfig, overrides);
}
