import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstNotOutConfig } from "../../FullScreenTransition/config/notOut.config.js";

/**
 * Full Screen Transition NotOut — Default scorecard + centered NOT OUT overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NotOut({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstNotOutConfig}
      config={config}
    />
  );
}
