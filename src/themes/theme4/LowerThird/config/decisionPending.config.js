import { createActionBannerConfig } from "./actionBanner.shared.js";

/** Decision Pending — same broadcast action banner as Four. */
export const decisionPendingConfig = createActionBannerConfig({
  id: "decision-pending",
  fallbackLabel: "Decision Pending",
});
