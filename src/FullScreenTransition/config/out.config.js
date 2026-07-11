import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Out — Default scorecard + centered overlay. */
export const fstOutConfig = createFstConfig({
  id: "fst-out",
  actionLabel: "OUT",
  actionAccent: FST_ACTION_ACCENTS["out"],
});
