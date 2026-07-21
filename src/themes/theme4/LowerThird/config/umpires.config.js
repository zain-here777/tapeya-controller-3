import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Umpires — isolated config.
 * Compact MiniScorecard-style bar with label text only.
 */
export const umpiresConfig = createLowerThirdConfig({
  id: "umpires",
  defaultTeamColorKey: "teamA",
  fallbackLabel: "Umpires",
});
