import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { thisOverConfig } from "../../LowerThird/config/thisOver.config.js";

/**
 * ThisOver — isolated lower-third controller.
 * Same UI as AtStage (no CRR), with the full this-over ball strip always shown.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto thisOverConfig
 */
export default function ThisOver({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={thisOverConfig} config={config} />
  );
}
