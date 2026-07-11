import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { matchScorecardConfig } from "../../LowerThird/config/matchScorecard.config.js";

/**
 * MatchScorecard — isolated lower-third controller.
 * Uses shared lower-third shell + its own config only.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto matchScorecardConfig
 */
export default function MatchScorecard({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={matchScorecardConfig} config={config} />
  );
}
