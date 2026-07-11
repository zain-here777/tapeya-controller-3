import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { hundredUpConfig } from "../../LowerThird/config/hundredUp.config.js";

/**
 * 100Up — isolated lower-third controller.
 * Same UI as Four; action text is "100 Up".
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function HundredUp({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={hundredUpConfig}
      config={config}
      fallbackLabel="100 Up"
    />
  );
}
