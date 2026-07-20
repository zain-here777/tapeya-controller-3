import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { bowlerTournamentFsConfig } from "../../../PlayerStats/config/bowlerTournamentFs.config.js";
import { bowlerFsPanelProps } from "../../../PlayerStats/config/bowlerNameFs.config.js";

/**
 * TournamentFS — full-screen bowler tournament career (Player Stats / Bowler).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TournamentFS({ match, config }) {
  return (
    <MatchFSCore
      match={match}
      baseConfig={bowlerTournamentFsConfig}
      config={config}
      {...bowlerFsPanelProps}
    />
  );
}
