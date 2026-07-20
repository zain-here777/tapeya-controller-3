import React from "react";
import TournamentLTCore from "../../../PlayerStats/core/TournamentLTCore.jsx";
import { bowlerTournamentLtConfig } from "../../../PlayerStats/config/bowlerTournamentLt.config.js";

/**
 * TournamentLT — bowler tournament stats lower third (Player Stats / Bowler).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TournamentLT({ match, config }) {
  return (
    <TournamentLTCore
      match={match}
      baseConfig={bowlerTournamentLtConfig}
      config={config}
      panelBg="bg-bowler-panel"
    />
  );
}
