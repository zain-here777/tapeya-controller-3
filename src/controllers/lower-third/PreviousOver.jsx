import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { previousOverConfig } from "../../LowerThird/config/previousOver.config.js";

/**
 * PreviousOver — isolated lower-third controller.
 * Same UI as ThisOver, with "Last over X runs" instead of the ball strip.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto previousOverConfig
 */
export default function PreviousOver({ match, config }) {
  return (
    <ScorecardLowerThird
      match={match}
      baseConfig={previousOverConfig}
      config={config}
    />
  );
}
