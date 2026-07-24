import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition SIX — scorecard + centered overlay. */
export const fstSixConfig = createFstConfig({
  id: "fst-six",
  actionLabel: "SIX",
  actionAccent: FST_ACTION_ACCENTS["six"],
  animationVariant: FST_ANIMATION_VARIANTS["six"],
});
