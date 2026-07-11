import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { fiftyUpConfig } from "../../LowerThird/config/fiftyUp.config.js";

/**
 * 50Up — isolated lower-third controller.
 * Same UI as Four; action text is "50 Up".
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function FiftyUp({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={fiftyUpConfig}
      config={config}
      fallbackLabel="50 Up"
    />
  );
}
