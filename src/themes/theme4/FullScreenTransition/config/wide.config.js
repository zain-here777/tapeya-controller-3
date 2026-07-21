import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition WIDE — scorecard + centered overlay. */
export const fstWideConfig = createFstConfig({
  id: "fst-wide",
  actionLabel: "WIDE",
  actionAccent: FST_ACTION_ACCENTS["wide"],
  animationVariant: FST_ANIMATION_VARIANTS["wide"],
});
