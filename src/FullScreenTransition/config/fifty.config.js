import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Fifty — Default scorecard + centered overlay. */
export const fstFiftyConfig = createFstConfig({
  id: "fst-fifty",
  actionLabel: "50",
  actionAccent: FST_ACTION_ACCENTS["fifty"],
});
