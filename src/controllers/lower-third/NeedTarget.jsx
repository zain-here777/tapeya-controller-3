import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { needTargetConfig } from "../../LowerThird/config/needTarget.config.js";

/**
 * NeedTarget — isolated lower-third controller.
 * Same full scorecard UI as Default; stat slot shows To Win | Balls.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto needTargetConfig
 */
export default function NeedTarget({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={needTargetConfig} config={config} />
  );
}
