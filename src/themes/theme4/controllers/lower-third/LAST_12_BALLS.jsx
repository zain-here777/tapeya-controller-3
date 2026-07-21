import React from "react";
import Last12BallsLowerThird from "../../LowerThird/core/Last12BallsLowerThird.jsx";
import { last12BallsConfig } from "../../LowerThird/config/last12Balls.config.js";

/**
 * Theme 4 Last12Balls lower-third controller.
 * Default scorecard shell without CRR; bowler side shows last-12-balls strip.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Last12Balls({ match, config }) {
  return (
    <Last12BallsLowerThird
      match={match}
      baseConfig={last12BallsConfig}
      config={config}
    />
  );
}
