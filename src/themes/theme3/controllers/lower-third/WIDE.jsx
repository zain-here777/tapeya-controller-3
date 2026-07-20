import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { wideConfig } from "../../LowerThird/config/wide.config.js";

/**
 * Wide — isolated lower-third controller.
 * Same UI as Four; action text is "Wide".
 *
 * @param {Object} match
 * @param {Object} [config]
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
