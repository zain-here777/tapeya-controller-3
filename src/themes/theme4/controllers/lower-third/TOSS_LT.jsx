import React from "react";
import TossLTLowerThird from "../../LowerThird/core/TossLTLowerThird.jsx";
import { tossLtConfig } from "../../LowerThird/config/tossLt.config.js";

/**
 * Theme 4 TossLT lower-third controller.
 * Matchup bar with toss result (same UI as IntroLT).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function TossLT({ match, config }) {
  return (
    <TossLTLowerThird match={match} baseConfig={tossLtConfig} config={config} />
  );
}
