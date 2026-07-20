import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { notOutConfig } from "../../LowerThird/config/notOut.config.js";

/**
 * NotOut — isolated lower-third controller.
 * Same UI as Four; action text is "Not Out".
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NotOut({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={notOutConfig}
      config={config}
      fallbackLabel="Not Out"
    />
  );
}
