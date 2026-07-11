import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Hundred — Default scorecard + centered overlay. */
export const fstHundredConfig = createFstConfig({
  id: "fst-hundred",
  actionLabel: "100",
  actionAccent: FST_ACTION_ACCENTS["hundred"],
});
