import React from "react";
import UmpiresLowerThird from "../../LowerThird/core/UmpiresLowerThird.jsx";
import { umpiresConfig } from "../../LowerThird/config/umpires.config.js";

/**
 * Theme 4 Umpires lower-third controller.
 * Compact bar with "Umpires" label (MiniScorecard shell).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Umpires({ match, config }) {
  return (
    <UmpiresLowerThird
      match={match}
      baseConfig={umpiresConfig}
      config={config}
    />
  );
}
