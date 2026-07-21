import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { decisionPendingConfig } from "../../LowerThird/config/decisionPending.config.js";

/**
 * Theme 4 Decision Pending lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Decision Pending" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
