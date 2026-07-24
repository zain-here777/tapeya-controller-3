import React from "react";
import MiniScorecardLowerThird from "../../LowerThird/core/MiniScorecardLowerThird.jsx";
import { miniScorecardConfig } from "../../LowerThird/config/miniScorecard.config.js";

/**
 * Theme 5 MiniScorecard lower-third controller.
 * Compact bar: team code, score, and overs only.
 *
 * @param {Object} props
 * @param {{ team?: { code?: string, runs?: number, wickets?: number, overs?: string, oversLimit?: number|string, colorKey?: string } }} props.match
 * @param {Object} [props.config]
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
