import React from "react";
import IntroLTLowerThird from "../../LowerThird/core/IntroLTLowerThird.jsx";
import { introLtConfig } from "../../LowerThird/config/introLt.config.js";

/**
 * IntroLT — isolated lower-third controller.
 * Matchup intro bar (teams + tournament + badge).
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto introLtConfig
 */
export default function IntroLT({ match, config }) {
  return (
    <IntroLTLowerThird match={match} baseConfig={introLtConfig} config={config} />
  );
}
