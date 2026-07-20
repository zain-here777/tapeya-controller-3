import React from "react";
import MiniScorecardLowerThird from "../../LowerThird/core/MiniScorecardLowerThird.jsx";
import { miniScorecardConfig } from "../../LowerThird/config/miniScorecard.config.js";

/**
 * MiniScorecard — isolated lower-third controller.
 * Compact bar: team code, overs, and score only.
 *
 * @param {{ team?: { code?: string, runs?: number, wickets?: number, overs?: string } }} match
 * @param {Object} [config] - Runtime overrides merged onto miniScorecardConfig
 */
export default function MiniScorecard({ match, config }) {
  return (
    <MiniScorecardLowerThird
      match={match}
      baseConfig={miniScorecardConfig}
      config={config}
    />
  );
}
