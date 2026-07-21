import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition DECISION PENDING — scorecard + centered overlay. */
export const fstDecisionPendingConfig = createFstConfig({
  id: "fst-decision-pending",
  actionLabel: "DECISION PENDING",
  actionAccent: FST_ACTION_ACCENTS["decision-pending"],
  animationVariant: FST_ANIMATION_VARIANTS["decision-pending"],
});
