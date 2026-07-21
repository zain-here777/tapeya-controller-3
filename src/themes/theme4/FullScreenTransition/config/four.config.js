import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition FOUR — scorecard + centered overlay. */
export const fstFourConfig = createFstConfig({
  id: "fst-four",
  actionLabel: "FOUR",
  actionAccent: FST_ACTION_ACCENTS["four"],
  animationVariant: FST_ANIMATION_VARIANTS["four"],
});
