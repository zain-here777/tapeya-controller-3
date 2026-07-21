import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition NO BALL — scorecard + centered overlay. */
export const fstNoBallConfig = createFstConfig({
  id: "fst-no-ball",
  actionLabel: "NO BALL",
  actionAccent: FST_ACTION_ACCENTS["no-ball"],
  animationVariant: FST_ANIMATION_VARIANTS["no-ball"],
});
