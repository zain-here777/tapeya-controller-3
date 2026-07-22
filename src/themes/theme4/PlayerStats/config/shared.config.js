import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/** Shared defaults for Theme 4 Player Stats controllers. */
export const playerStatsSharedConfig = {
  category: "player-stats",
  role: "batsman",
  /** Batting side default — matches Default LT teamA. */
  defaultTeamColorKey: "teamA",
};

/** @param {Record<string, unknown>} overrides */
export function createPlayerStatsConfig(overrides = {}) {
  return mergeConfig(playerStatsSharedConfig, overrides);
}
