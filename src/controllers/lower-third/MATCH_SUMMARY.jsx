import React from "react";
import MatchSummaryLowerThird from "../../LowerThird/core/MatchSummaryLowerThird.jsx";
import { matchSummaryConfig } from "../../LowerThird/config/matchSummary.config.js";

/**
 * MatchSummary — isolated lower-third controller.
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto matchSummaryConfig
 */
export default function MatchSummary({ match, config }) {
  return (
    <MatchSummaryLowerThird
      match={match}
      baseConfig={matchSummaryConfig}
      config={config}
    />
  );
}
