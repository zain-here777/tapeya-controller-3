import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { matchScorecardBConfig } from "../../LowerThird/config/matchScorecardB.config.js";

/**
 * MatchScorecardB — isolated lower-third controller.
 * Uses shared lower-third shell + its own config only (avatar pop-out).
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto matchScorecardBConfig
 */
export default function MatchScorecardB({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={matchScorecardBConfig} config={config} />
  );
}
