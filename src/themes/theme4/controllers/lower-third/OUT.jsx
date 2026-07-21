import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { outConfig } from "../../LowerThird/config/out.config.js";

/**
 * Theme 4 Out lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Out" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Out({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={outConfig}
      config={config}
      fallbackLabel="Out"
    />
  );
}
