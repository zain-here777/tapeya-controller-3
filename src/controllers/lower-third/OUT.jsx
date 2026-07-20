import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { outConfig } from "../../LowerThird/config/out.config.js";

/**
 * Out — isolated lower-third controller.
 * Same UI as Four; action text is "Out".
 *
 * @param {Object} match
 * @param {Object} [config]
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
