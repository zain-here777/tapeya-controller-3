import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { fiftyUpConfig } from "../../LowerThird/config/fiftyUp.config.js";

/**
 * Theme 5 50 Up lower-third controller.
 * Reuses the shared broadcast action-banner animation with "50 Up" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
