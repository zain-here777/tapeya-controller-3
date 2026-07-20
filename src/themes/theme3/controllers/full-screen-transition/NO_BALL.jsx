import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstNoBallConfig } from "../../FullScreenTransition/config/noBall.config.js";

/**
 * Full Screen Transition NoBall — Default scorecard + centered NO BALL overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NoBall({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstNoBallConfig}
      config={config}
    />
  );
}
