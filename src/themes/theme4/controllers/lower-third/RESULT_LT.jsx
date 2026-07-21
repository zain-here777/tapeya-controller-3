import React from "react";
import ResultLTLowerThird from "../../LowerThird/core/ResultLTLowerThird.jsx";
import { resultLtConfig } from "../../LowerThird/config/resultLt.config.js";

/**
 * Theme 4 ResultLT lower-third controller.
 * Matchup bar with result caption (same UI as IntroLT).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function ResultLT({ match, config }) {
  return (
    <ResultLTLowerThird
      match={match}
      baseConfig={resultLtConfig}
      config={config}
    />
  );
}
