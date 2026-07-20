import React from "react";
import FollowTapeyaLowerThird from "../../LowerThird/core/FollowTapeyaLowerThird.jsx";
import { followTapeyaConfig } from "../../LowerThird/config/followTapeya.config.js";

/**
 * FollowTapeya — isolated lower-third controller.
 * Same UI as IntroLT (matchup bar + tournament subtitle).
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto followTapeyaConfig
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
