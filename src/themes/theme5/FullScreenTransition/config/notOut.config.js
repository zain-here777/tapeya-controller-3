import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition NOT OUT — scorecard + centered overlay. */
export const fstNotOutConfig = createFstConfig({
  id: "fst-not-out",
  actionLabel: "NOT OUT",
  actionAccent: FST_ACTION_ACCENTS["not-out"],
  animationVariant: FST_ANIMATION_VARIANTS["not-out"],
});
