import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstSixConfig } from "../../FullScreenTransition/config/six.config.js";

/**
 * Full Screen Transition Six — Default scorecard + centered SIX overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Six({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstSixConfig}
      config={config}
    />
  );
}
