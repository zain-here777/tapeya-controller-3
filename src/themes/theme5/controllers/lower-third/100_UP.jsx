import React from "react";
import ActionBannerLowerThird from "../../LowerThird/core/ActionBannerLowerThird.jsx";
import { hundredUpConfig } from "../../LowerThird/config/hundredUp.config.js";

/**
 * Theme 5 100 Up lower-third controller.
 * Reuses the shared broadcast action-banner animation with "100 Up" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
