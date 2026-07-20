import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { currentPartnershipConfig } from "../../LowerThird/config/currentPartnership.config.js";

/**
 * CurrentPartnership — isolated lower-third controller.
 * Same UI as Last30Balls (widened panel + title/stat columns).
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto currentPartnershipConfig
 */
export default function CurrentPartnership({ match, config }) {
  return (
    <ScorecardLowerThird
      match={match}
      baseConfig={currentPartnershipConfig}
      config={config}
    />
  );
}
