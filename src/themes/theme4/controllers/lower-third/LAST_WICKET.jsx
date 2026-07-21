import React from "react";
import LastWicketLowerThird from "../../LowerThird/core/LastWicketLowerThird.jsx";
import { lastWicketConfig } from "../../LowerThird/config/lastWicket.config.js";

/**
 * Theme 4 LastWicket lower-third controller.
 * Dismissed batter header + breakdown stats bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function LastWicket({ match, config }) {
  return (
    <LastWicketLowerThird
      match={match}
      baseConfig={lastWicketConfig}
      config={config}
    />
  );
}
