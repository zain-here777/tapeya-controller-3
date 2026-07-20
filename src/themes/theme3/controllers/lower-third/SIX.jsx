import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { sixConfig } from "../../LowerThird/config/six.config.js";

/**
 * Six — isolated lower-third controller.
 * Same UI as Four; action text is "Six".
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Six({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={sixConfig}
      config={config}
      fallbackLabel="Six"
    />
  );
}
