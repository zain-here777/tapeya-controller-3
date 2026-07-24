import React from "react";
import DefaultLowerThird from "../../LowerThird/core/DefaultLowerThird.jsx";
import { defaultConfig } from "../../LowerThird/config/default.config.js";

/**
 * Theme 5 Default lower-third controller.
 *
 * @param {import('../../../../shared/types/match.types.js').MatchData} match
 * @param {Object} [config]
 */
export default function Default({ match, config }) {
  return (
    <DefaultLowerThird match={match} baseConfig={defaultConfig} config={config} />
  );
}
