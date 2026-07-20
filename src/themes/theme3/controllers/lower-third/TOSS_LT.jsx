import React from "react";
import TossLTLowerThird from "../../LowerThird/core/TossLTLowerThird.jsx";
import { tossLtConfig } from "../../LowerThird/config/tossLt.config.js";

/**
 * TossLT — isolated lower-third controller.
 * Matchup bar with toss result (same UI as IntroLT).
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto tossLtConfig
 */
export default function TossLT({ match, config }) {
  return (
    <TossLTLowerThird match={match} baseConfig={tossLtConfig} config={config} />
  );
}
