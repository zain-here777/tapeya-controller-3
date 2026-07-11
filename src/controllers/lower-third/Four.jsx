import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { fourConfig } from "../../LowerThird/config/four.config.js";

/**
 * Four — isolated lower-third controller.
 * Boundary celebration with three looping "Four" labels.
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto fourConfig
 */
export default function Four({ match, config }) {
  return (
    <ActionBannerLowerThird
      match={match}
      baseConfig={fourConfig}
      config={config}
      fallbackLabel="Four"
    />
  );
}
