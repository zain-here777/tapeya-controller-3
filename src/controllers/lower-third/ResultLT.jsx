import React from "react";
import ResultLTLowerThird from "../../LowerThird/core/ResultLTLowerThird.jsx";
import { resultLtConfig } from "../../LowerThird/config/resultLt.config.js";

/**
 * ResultLT — isolated lower-third controller.
 * TournamentName shell with team matchup + result (e.g. TIE).
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto resultLtConfig
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
