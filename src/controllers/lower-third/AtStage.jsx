import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { atStageConfig } from "../../LowerThird/config/atStage.config.js";

/**
 * AtStage — isolated lower-third controller.
 * Same full scorecard UI as Default, without the CRR/stat section.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto atStageConfig
 */
export default function AtStage({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={atStageConfig} config={config} />
  );
}
