import { createFstConfig, FST_ACTION_ACCENTS } from "./shared.config.js";

/** Full Screen Transition DecisionPending — Default scorecard + centered overlay. */
export const fstDecisionPendingConfig = createFstConfig({
  id: "fst-decision-pending",
  actionLabel: "DECISION PENDING",
  actionAccent: FST_ACTION_ACCENTS["decision-pending"],
});
