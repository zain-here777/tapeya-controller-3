import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstFourConfig } from "../../FullScreenTransition/config/four.config.js";

/**
 * Full Screen Transition Four — Default scorecard + centered FOUR overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Four({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstFourConfig}
      config={config}
    />
  );
}
