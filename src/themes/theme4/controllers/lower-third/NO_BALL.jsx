import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { noBallConfig } from "../../LowerThird/config/noBall.config.js";

/**
 * Theme 4 No Ball lower-third controller.
 * Reuses the shared broadcast action-banner animation with "No Ball" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function NoBall({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={noBallConfig}
      config={config}
      fallbackLabel="No Ball"
    />
  );
}
