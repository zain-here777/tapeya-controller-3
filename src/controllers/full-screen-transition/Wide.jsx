import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstWideConfig } from "../../FullScreenTransition/config/wide.config.js";

/**
 * Full Screen Transition Wide — Default scorecard + centered WIDE overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Wide({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstWideConfig}
      config={config}
    />
  );
}
