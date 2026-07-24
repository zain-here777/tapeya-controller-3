import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstNoBallConfig } from "../../FullScreenTransition/config/noBall.config.js";

/** Full Screen Transition No Ball — scorecard + NO BALL overlay. */
export default function NoBall({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstNoBallConfig}
      config={config}
    />
  );
}
