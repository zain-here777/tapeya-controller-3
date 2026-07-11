import React from "react";
import FowLowerThird from "../../LowerThird/core/FowLowerThird.jsx";
import { fowConfig } from "../../LowerThird/config/fow.config.js";

/**
 * FOW (Fall of Wickets) — isolated lower-third controller.
 * Team left, title right, wicket stacks centered on the full bar.
 *
 * @param {import("../../LowerThird/data/match.types.js").MatchData} match
 * @param {Object} [config] - Runtime overrides merged onto fowConfig
 */
export default function FOW({ match, config }) {
  return (
    <FowLowerThird match={match} baseConfig={fowConfig} config={config} />
  );
}
