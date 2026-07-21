import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstSixConfig } from "../../FullScreenTransition/config/six.config.js";

/** Full Screen Transition Six — scorecard + SIX overlay. */
export default function Six({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstSixConfig}
      config={config}
    />
  );
}
