import React from "react";
import PreviousOverLowerThird from "../../LowerThird/core/PreviousOverLowerThird.jsx";
import { previousOverConfig } from "../../LowerThird/config/previousOver.config.js";

/**
 * Theme 5 PreviousOver lower-third controller.
 * Same UI as ThisOver, with "Last over X runs" instead of the ball strip.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function PreviousOver({ match, config }) {
  return (
    <PreviousOverLowerThird
      match={match}
      baseConfig={previousOverConfig}
      config={config}
    />
  );
}
