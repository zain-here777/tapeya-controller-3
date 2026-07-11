import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { runRateConfig } from "../../LowerThird/config/runRate.config.js";

/**
 * RunRate — isolated lower-third controller.
 * Same full scorecard UI as Default.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto runRateConfig
 */
export default function RunRate({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={runRateConfig} config={config} />
  );
}
