import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { notOutConfig } from "../../LowerThird/config/notOut.config.js";

/**
 * Theme 4 Not Out lower-third controller.
 * Reuses the shared broadcast action-banner animation with "Not Out" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
