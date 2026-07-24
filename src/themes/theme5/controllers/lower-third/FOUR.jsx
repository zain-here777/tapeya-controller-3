import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { fourConfig } from "../../LowerThird/config/four.config.js";

/**
 * Theme 5 Four lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Four" text.
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
