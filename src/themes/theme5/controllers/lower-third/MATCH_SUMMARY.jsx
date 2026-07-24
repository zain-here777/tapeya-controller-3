import React from "react";
import MatchSummaryLowerThird from "../../LowerThird/core/MatchSummaryLowerThird.jsx";
import { matchSummaryConfig } from "../../LowerThird/config/matchSummary.config.js";

/**
 * Theme 5 Match Summary lower-third controller.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
