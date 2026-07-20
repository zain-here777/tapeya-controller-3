import React from "react";
import NameFSCore from "../../../PlayerStats/core/NameFSCore.jsx";
import {
  bowlerFsPanelProps,
  bowlerNameFsConfig,
} from "../../../PlayerStats/config/bowlerNameFs.config.js";

/**
 * NameFS — full-screen bowler name graphic (Player Stats / Bowler).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NameFS({ match, config }) {
  return (
    <NameFSCore
      match={match}
      baseConfig={bowlerNameFsConfig}
      config={config}
      {...bowlerFsPanelProps}
    />
  );
}
