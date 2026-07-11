import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { winPredictionConfig } from "../../LowerThird/config/winPrediction.config.js";

/**
 * WinPrediction — isolated lower-third controller.
 * Same UI as CurrentPartnership; right panel shows win-prediction percentages.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto winPredictionConfig
 */
export default function WinPrediction({ match, config }) {
  return (
    <ScorecardLowerThird
      match={match}
      baseConfig={winPredictionConfig}
      config={config}
    />
  );
}
