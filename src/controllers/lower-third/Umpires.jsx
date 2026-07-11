import React from "react";
import UmpiresLowerThird from "../../LowerThird/core/UmpiresLowerThird.jsx";
import { umpiresConfig } from "../../LowerThird/config/umpires.config.js";

/**
 * Umpires — isolated lower-third controller.
 * Same UI shell as MiniScorecard; shows "Umpires" text only.
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto umpiresConfig
 */
export default function Umpires({ match, config }) {
  return (
    <UmpiresLowerThird match={match} baseConfig={umpiresConfig} config={config} />
  );
}
