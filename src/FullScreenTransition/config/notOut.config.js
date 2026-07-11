import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition NotOut — Default scorecard + centered overlay. */
export const fstNotOutConfig = createFstConfig({
  id: "fst-not-out",
  actionLabel: "NOT OUT",
  actionAccent: FST_ACTION_ACCENTS["not-out"],
});
