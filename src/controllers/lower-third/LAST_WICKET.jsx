import React from "react";
import LastWicketLowerThird from "../../LowerThird/core/LastWicketLowerThird.jsx";
import { lastWicketConfig } from "../../LowerThird/config/lastWicket.config.js";

/**
 * LastWicket — isolated lower-third controller.
 * Same UI as IntroLT (matchup bar + tournament subtitle).
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto lastWicketConfig
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
