import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { noBallConfig } from "../../LowerThird/config/noBall.config.js";

/**
 * NoBall — isolated lower-third controller.
 * Same UI as Four; action text is "No Ball".
 *
 * @param {Object} match
 * @param {Object} [config]
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
