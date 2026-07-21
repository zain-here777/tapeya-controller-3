import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition 50 — scorecard + centered overlay. */
export const fstFiftyConfig = createFstConfig({
  id: "fst-fifty",
  actionLabel: "50",
  actionAccent: FST_ACTION_ACCENTS["fifty"],
  animationVariant: FST_ANIMATION_VARIANTS["fifty"],
});
