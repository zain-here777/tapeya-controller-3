import { createLowerThirdConfig } from "../../LowerThird/config/shared.config.js";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";

/**
 * Accent colors per match action — used by the center overlay glow/ring.
 * Aligned with broadcast theme tokens where possible.
 */
export const FST_ACTION_ACCENTS = {
  four: "#3dcc4a",
  six: "#7c3aed",
  "not-out": "#3dcc4a",
  out: "#dc2626",
  "no-ball": "#f59e0b",
  wide: "#fbbf24",
  fifty: "#eab308",
  hundred: "#facc15",
  replay: "#38bdf8",
  "decision-pending": "#fb923c",
};

/**
 * Shared defaults for Full Screen Transition controllers.
 * Scorecard foundation matches Default; overlay label/accent are per-controller.
 */
export const fstSharedConfig = {
  actionLabel: "FOUR",
  actionAccent: FST_ACTION_ACCENTS.four,
};

/**
 * Build an isolated Full Screen Transition config.
 * @param {Record<string, unknown>} overrides
 */
export function createFstConfig(overrides = {}) {
  return createLowerThirdConfig(
    mergeControllerConfig(fstSharedConfig, overrides)
  );
}
