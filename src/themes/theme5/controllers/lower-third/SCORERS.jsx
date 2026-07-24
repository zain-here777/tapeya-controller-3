import React from "react";
import ScorersLowerThird from "../../LowerThird/core/ScorersLowerThird.jsx";
import { scorersConfig } from "../../LowerThird/config/scorers.config.js";

/**
 * Theme 5 Scorers lower-third controller.
 * Compact bar with "Scorers" label (same shell as Umpires).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Scorers({ match, config }) {
  return (
    <ScorersLowerThird
      match={match}
      baseConfig={scorersConfig}
      config={config}
    />
  );
}
