import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { wideConfig } from "../../LowerThird/config/wide.config.js";

/**
 * Theme 5 Wide lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Wide" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Wide({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={wideConfig}
      config={config}
      fallbackLabel="Wide"
    />
  );
}
