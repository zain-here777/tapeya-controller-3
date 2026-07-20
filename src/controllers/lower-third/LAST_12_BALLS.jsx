import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { last12BallsConfig } from "../../LowerThird/config/last12Balls.config.js";

/**
 * Last12Balls — isolated lower-third controller.
 * Default scorecard shell without CRR; bowler side shows last-12-balls strip.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto last12BallsConfig
 */
export default function Last12Balls({ match, config }) {
  return (
    <ScorecardLowerThird
      match={match}
      baseConfig={last12BallsConfig}
      config={config}
    />
  );
}
