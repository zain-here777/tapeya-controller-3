import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstDecisionPendingConfig } from "../../FullScreenTransition/config/decisionPending.config.js";

/**
 * Full Screen Transition DecisionPending — Default scorecard + centered DECISION PENDING overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function DecisionPending({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstDecisionPendingConfig}
      config={config}
    />
  );
}
