import { createLowerThirdConfig } from "./shared.config.js";
import {
  T4_ACTION_INK,
  resolveActionPlateColor,
  resolveActionPlateKey,
} from "../../config/actionAccents.js";

/**
 * Shared action-banner config (Four / Six / Replay / …).
 * Uses the same plate colors as Full Screen Transition.
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {string} options.fallbackLabel
 * @param {string} [options.accentKey] — T4_ACTION_PLATE key when id differs (e.g. 50-up → fifty)
 * @param {boolean} [options.showConfetti=false]
 */
export function createActionBannerConfig({
  id,
  fallbackLabel,
  accentKey,
  showConfetti = false,
}) {
  const plateKey = resolveActionPlateKey(accentKey ?? id);
  return createLowerThirdConfig({
    id,
    defaultTeamColorKey: "teamA",
    defaultBowlingColorKey: "teamB",
    fallbackLabel,
    actionBannerLayout: "broadcast",
    actionAccent: resolveActionPlateColor(plateKey),
    actionInk: T4_ACTION_INK,
    actionPlateKey: plateKey,
    showConfetti: Boolean(showConfetti),
  });
}

/**
 * Sample match payload for Theme 5 action-banner controllers.
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
