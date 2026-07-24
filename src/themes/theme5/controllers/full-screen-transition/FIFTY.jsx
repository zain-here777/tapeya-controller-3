import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstFiftyConfig } from "../../FullScreenTransition/config/fifty.config.js";

/** Full Screen Transition Fifty — scorecard + 50 overlay. */
export default function Fifty({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstFiftyConfig}
      config={config}
    />
  );
}
