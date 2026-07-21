import React from "react";
import DefaultLowerThird from "../../LowerThird/core/DefaultLowerThird.jsx";
import { runRateConfig } from "../../LowerThird/config/runRate.config.js";

/**
 * Theme 4 RunRate lower-third controller.
 * Same UI as Default; batting aside shows CRR + RRR under overs.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function RunRate({ match, config }) {
  return (
    <DefaultLowerThird match={match} baseConfig={runRateConfig} config={config} />
  );
}
