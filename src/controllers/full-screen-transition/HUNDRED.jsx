import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstHundredConfig } from "../../FullScreenTransition/config/hundred.config.js";

/**
 * Full Screen Transition Hundred — Default scorecard + centered 100 overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Hundred({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstHundredConfig}
      config={config}
    />
  );
}
