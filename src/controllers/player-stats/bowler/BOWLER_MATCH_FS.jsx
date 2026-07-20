import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { bowlerMatchFsConfig } from "../../../PlayerStats/config/bowlerMatchFs.config.js";
import { bowlerFsPanelProps } from "../../../PlayerStats/config/bowlerNameFs.config.js";

/**
 * MatchFS — full-screen bowler match graphic (Player Stats / Bowler).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function MatchFS({ match, config }) {
  return (
    <MatchFSCore
      match={match}
      baseConfig={bowlerMatchFsConfig}
      config={config}
      {...bowlerFsPanelProps}
    />
  );
}
