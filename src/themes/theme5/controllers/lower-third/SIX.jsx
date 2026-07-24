import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { sixConfig } from "../../LowerThird/config/six.config.js";

/**
 * Theme 5 Six lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Six" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
