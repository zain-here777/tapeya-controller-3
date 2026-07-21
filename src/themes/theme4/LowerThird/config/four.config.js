import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Four — isolated config.
 * Boundary celebration lower third on batting-side team color.
 */
export const fourConfig = createLowerThirdConfig({
  id: "four",
  defaultTeamColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
  fallbackLabel: "Four",
  actionBannerLayout: "broadcast",
});
