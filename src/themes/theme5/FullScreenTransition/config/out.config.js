import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition OUT — scorecard + centered overlay. */
export const fstOutConfig = createFstConfig({
  id: "fst-out",
  actionLabel: "OUT",
  actionAccent: FST_ACTION_ACCENTS["out"],
  animationVariant: FST_ANIMATION_VARIANTS["out"],
});
