import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Four — Default scorecard + centered overlay. */
export const fstFourConfig = createFstConfig({
  id: "fst-four",
  actionLabel: "FOUR",
  actionAccent: FST_ACTION_ACCENTS["four"],
});
