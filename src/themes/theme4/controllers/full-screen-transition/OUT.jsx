import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstOutConfig } from "../../FullScreenTransition/config/out.config.js";

/** Full Screen Transition Out — scorecard + OUT overlay. */
export default function Out({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstOutConfig}
      config={config}
    />
  );
}
