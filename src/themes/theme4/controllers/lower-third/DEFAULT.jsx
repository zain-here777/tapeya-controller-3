import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { defaultConfig } from "../../LowerThird/config/default.config.js";

/**
 * Theme 4 Default lower-third controller.
 *
 * @param {import('../../../../shared/types/match.types.js').MatchData} match
 * @param {Object} [config]
 */
export default function Default({ match, config }) {
  return (
    <ScorecardLowerThird match={match} baseConfig={defaultConfig} config={config} />
  );
}
