import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { defaultConfig } from "../../LowerThird/config/default.config.js";

/**
 * Default — isolated lower-third controller.
 * Full scorecard UI with CRR in the stat slot (instead of Partnership).
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto defaultConfig
 */
export default function Default({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={defaultConfig} config={config} />
  );
}
