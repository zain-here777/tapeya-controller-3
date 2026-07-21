import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition 100 — scorecard + centered overlay. */
export const fstHundredConfig = createFstConfig({
  id: "fst-hundred",
  actionLabel: "100",
  actionAccent: FST_ACTION_ACCENTS["hundred"],
  animationVariant: FST_ANIMATION_VARIANTS["hundred"],
});
