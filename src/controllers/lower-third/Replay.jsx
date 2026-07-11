import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { replayConfig } from "../../LowerThird/config/replay.config.js";

/**
 * Replay — isolated lower-third controller.
 * Same UI as Four; action text is "Replay".
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Replay({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={replayConfig}
      config={config}
      fallbackLabel="Replay"
    />
  );
}
