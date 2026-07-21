import React from "react";
import IntroLTLowerThird from "../../LowerThird/core/IntroLTLowerThird.jsx";
import { introLtConfig } from "../../LowerThird/config/introLt.config.js";

/**
 * Theme 4 IntroLT lower-third controller.
 * Matchup intro bar (teams + tournament).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function IntroLT({ match, config }) {
  return (
    <IntroLTLowerThird match={match} baseConfig={introLtConfig} config={config} />
  );
}
