import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition NoBall — Default scorecard + centered overlay. */
export const fstNoBallConfig = createFstConfig({
  id: "fst-no-ball",
  actionLabel: "NO BALL",
  actionAccent: FST_ACTION_ACCENTS["no-ball"],
});
