import { createLowerThirdConfig } from "../../LowerThird/config/shared.config.js";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import {
  T4_ACTION_PLATE,
  resolveActionPlateColor,
} from "../../config/actionAccents.js";

/** @deprecated Prefer T4_ACTION_PLATE — kept for existing FST imports. */
export const FST_ACTION_ACCENTS = T4_ACTION_PLATE;

/**
 * Animation identity per controller — shared stinger motion, unique plate tint.
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
  actionAccent: resolveActionPlateColor("four"),
  animationVariant: FST_ANIMATION_VARIANTS.four,
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
};

/** @param {Record<string, unknown>} overrides */
export function createFstConfig(overrides = {}) {
  return createLowerThirdConfig(mergeConfig(fstSharedConfig, overrides));
}
