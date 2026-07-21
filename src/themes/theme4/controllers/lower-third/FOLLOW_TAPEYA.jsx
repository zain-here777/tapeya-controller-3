import React from "react";
import FollowTapeyaLowerThird from "../../LowerThird/core/FollowTapeyaLowerThird.jsx";
import { followTapeyaConfig } from "../../LowerThird/config/followTapeya.config.js";

/**
 * Theme 4 FollowTapeya lower-third controller.
 * Tapeya logo + follow CTA for ball-by-ball updates.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function FollowTapeya({ match, config }) {
  return (
    <FollowTapeyaLowerThird
      match={match}
      baseConfig={followTapeyaConfig}
      config={config}
    />
  );
}
