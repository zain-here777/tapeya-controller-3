import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { last30BallsConfig } from "../../LowerThird/config/last30Balls.config.js";

/**
 * Last30Balls — isolated lower-third controller.
 * Default shell without CRR; bowler side shows last-30-balls summary stats.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto last30BallsConfig
 */
export default function Last30Balls({ match, config }) {
  return (
    <ScorecardLowerThird
      match={match}
      baseConfig={last30BallsConfig}
      config={config}
    />
  );
}
