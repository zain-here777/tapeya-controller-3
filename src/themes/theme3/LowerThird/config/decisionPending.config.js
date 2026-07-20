import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Decision Pending — isolated config.
 * Same action-banner UI as Four; do not import other controller configs.
 */
export const decisionPendingConfig = createLowerThirdConfig({
  id: "decision-pending",
});
