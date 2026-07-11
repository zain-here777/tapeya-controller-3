import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { decisionPendingConfig } from "../../LowerThird/config/decisionPending.config.js";

/**
 * Decision Pending — isolated lower-third controller.
 * Same UI as Four; action text is "Decision Pending".
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function DecisionPending({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={decisionPendingConfig}
      config={config}
      fallbackLabel="Decision Pending"
    />
  );
}
