import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstFiftyConfig } from "../../FullScreenTransition/config/fifty.config.js";

/**
 * Full Screen Transition Fifty — Default scorecard + centered 50 overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Fifty({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstFiftyConfig}
      config={config}
    />
  );
}
