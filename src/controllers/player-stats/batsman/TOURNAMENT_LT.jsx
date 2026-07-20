import React from "react";
import TournamentLTCore from "../../../PlayerStats/core/TournamentLTCore.jsx";
import { tournamentLtConfig } from "../../../PlayerStats/config/tournamentLt.config.js";

/**
 * TournamentLT — batsman tournament stats lower third (Player Stats / Batsman).
 * MatchLT shell; name + tournament top, stats centered bottom.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TournamentLT({ match, config }) {
  return (
    <TournamentLTCore
      match={match}
      baseConfig={tournamentLtConfig}
      config={config}
    />
  );
}
