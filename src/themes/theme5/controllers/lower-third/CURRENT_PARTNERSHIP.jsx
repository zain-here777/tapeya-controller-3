import React from "react";
import CurrentPartnershipLowerThird from "../../LowerThird/core/CurrentPartnershipLowerThird.jsx";
import { currentPartnershipConfig } from "../../LowerThird/config/currentPartnership.config.js";

/**
 * Theme 5 CurrentPartnership lower-third controller.
 * Same shell as Last30Balls; right panel shows CURRENT PARTNERSHIP + RUNS/BALLS.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function CurrentPartnership({ match, config }) {
  return (
    <CurrentPartnershipLowerThird
      match={match}
      baseConfig={currentPartnershipConfig}
      config={config}
    />
  );
}
