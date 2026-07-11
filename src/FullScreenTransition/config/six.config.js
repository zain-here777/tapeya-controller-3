import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Six — Default scorecard + centered overlay. */
export const fstSixConfig = createFstConfig({
  id: "fst-six",
  actionLabel: "SIX",
  actionAccent: FST_ACTION_ACCENTS["six"],
});
