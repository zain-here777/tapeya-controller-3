import React from "react";
import FullScreenTransitionController from "../../FullScreenTransition/core/FullScreenTransitionController.jsx";
import { fstReplayConfig } from "../../FullScreenTransition/config/replay.config.js";

/**
 * Full Screen Transition Replay — Default scorecard + centered REPLAY overlay.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Replay({ match, config }) {
  return (
    <FullScreenTransitionController
      match={match}
      baseConfig={fstReplayConfig}
      config={config}
    />
  );
}
