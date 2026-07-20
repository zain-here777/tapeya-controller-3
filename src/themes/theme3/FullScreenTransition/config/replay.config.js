import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition Replay — Default scorecard + centered overlay. */
export const fstReplayConfig = createFstConfig({
  id: "fst-replay",
  actionLabel: "REPLAY",
  actionAccent: FST_ACTION_ACCENTS["replay"],
});
