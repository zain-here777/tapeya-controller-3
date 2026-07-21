import { createFstConfig, FST_ACTION_ACCENTS, FST_ANIMATION_VARIANTS } from "./shared.config.js";

/** Full Screen Transition REPLAY — scorecard + centered overlay. */
export const fstReplayConfig = createFstConfig({
  id: "fst-replay",
  actionLabel: "REPLAY",
  actionAccent: FST_ACTION_ACCENTS["replay"],
  animationVariant: FST_ANIMATION_VARIANTS["replay"],
});
