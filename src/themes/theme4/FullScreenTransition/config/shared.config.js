import { createLowerThirdConfig } from "../../LowerThird/config/shared.config.js";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/** Accent colors per action — drives overlay mesh, ripples, and label glow. */
export const FST_ACTION_ACCENTS = {
  four: "#22c55e",
  six: "#8b5cf6",
  "not-out": "#34d399",
  out: "#ef4444",
  "no-ball": "#f59e0b",
  wide: "#fbbf24",
  fifty: "#eab308",
  hundred: "#fde047",
  replay: "#38bdf8",
  "decision-pending": "#fb923c",
};

/**
 * Animation identity per controller — unique motion, shared visual language.
 * @type {Record<string, string>}
 */
export const FST_ANIMATION_VARIANTS = {
  four: "four",
  six: "six",
  "not-out": "not-out",
  out: "out",
  "no-ball": "no-ball",
  wide: "wide",
  fifty: "fifty",
  hundred: "hundred",
  replay: "replay",
  "decision-pending": "decision-pending",
};

export const fstSharedConfig = {
  actionLabel: "FOUR",
  actionAccent: FST_ACTION_ACCENTS.four,
  animationVariant: FST_ANIMATION_VARIANTS.four,
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
};

/** @param {Record<string, unknown>} overrides */
export function createFstConfig(overrides = {}) {
  return createLowerThirdConfig(mergeConfig(fstSharedConfig, overrides));
}
