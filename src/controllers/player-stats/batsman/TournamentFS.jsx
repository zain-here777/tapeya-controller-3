import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { tournamentFsConfig } from "../../../PlayerStats/config/tournamentFs.config.js";

/**
 * TournamentFS — full-screen batsman tournament career (Player Stats / Batsman).
 * Same UI as MatchFS; tournament career stats content.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TournamentFS({ match, config }) {
  return (
    <MatchFSCore
      match={match}
      baseConfig={tournamentFsConfig}
      config={config}
    />
  );
}
