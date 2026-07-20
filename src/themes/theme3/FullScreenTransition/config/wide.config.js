import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Wide — Default scorecard + centered overlay. */
export const fstWideConfig = createFstConfig({
  id: "fst-wide",
  actionLabel: "WIDE",
  actionAccent: FST_ACTION_ACCENTS["wide"],
});
