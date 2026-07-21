import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { fourConfig } from "../../LowerThird/config/four.config.js";

/**
 * Theme 4 Four lower-third controller.
 * Boundary celebration with four looping "Four" labels + confetti.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
