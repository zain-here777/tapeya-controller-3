import React from "react";
import Last30BallsLowerThird from "../../LowerThird/core/Last30BallsLowerThird.jsx";
import { last30BallsConfig } from "../../LowerThird/config/last30Balls.config.js";

/**
 * Theme 4 Last30Balls lower-third controller.
 * Default shell without CRR; bowler side shows last-30-balls summary stats.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Last30Balls({ match, config }) {
  return (
    <Last30BallsLowerThird
      match={match}
      baseConfig={last30BallsConfig}
      config={config}
    />
  );
}
