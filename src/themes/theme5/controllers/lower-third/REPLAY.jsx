import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { replayConfig } from "../../LowerThird/config/replay.config.js";

/**
 * Theme 5 Replay lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Replay" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
