import React from "react";
import NeedTargetLowerThird from "../../LowerThird/core/NeedTargetLowerThird.jsx";
import { needTargetConfig } from "../../LowerThird/config/needTarget.config.js";

/**
 * Theme 4 NeedTarget lower-third controller.
 * Same Default UI shell; batting aside shows To Win | Balls.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function NeedTarget({ match, config }) {
  return (
    <NeedTargetLowerThird
      match={match}
      baseConfig={needTargetConfig}
      config={config}
    />
  );
}
