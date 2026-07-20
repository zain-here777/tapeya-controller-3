import React from "react";
import MatchSummaryFsCore from "../../FullScreen/core/MatchSummaryFsCore.jsx";
import { matchSummaryFsConfig } from "../../FullScreen/config/matchSummary.config.js";

/**
 * MatchSummary — full-screen dual-innings match summary.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function MatchSummaryFs({ match, config }) {
  return (
    <MatchSummaryFsCore
      match={match}
      baseConfig={matchSummaryFsConfig}
      config={config}
    />
  );
}
