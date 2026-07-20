import React from "react";
import ScorersLowerThird from "../../LowerThird/core/ScorersLowerThird.jsx";
import { scorersConfig } from "../../LowerThird/config/scorers.config.js";

/**
 * Scorers — isolated lower-third controller.
 * Same UI as Umpires; shows "Scorers" text only.
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto scorersConfig
 */
export default function Scorers({ match, config }) {
  return (
    <ScorersLowerThird match={match} baseConfig={scorersConfig} config={config} />
  );
}
