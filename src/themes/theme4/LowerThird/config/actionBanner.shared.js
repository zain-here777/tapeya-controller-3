import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Shared broadcast action-banner config (Four / Six / Replay / …).
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {string} options.fallbackLabel
 */
export function createActionBannerConfig({ id, fallbackLabel }) {
  return createLowerThirdConfig({
    id,
    defaultTeamColorKey: "teamA",
    defaultBowlingColorKey: "teamB",
    fallbackLabel,
    actionBannerLayout: "broadcast",
  });
}

/**
 * Sample match payload for Theme 4 action-banner controllers.
 *
 * @param {string} label
 */
export function createActionBannerSample(label) {
  return {
    labels: [label, label, label, label],
    colorKey: "teamA",
    secondaryColorKey: "teamB",
    teamA: { colorKey: "teamA" },
    teamB: { colorKey: "teamB" },
  };
}
