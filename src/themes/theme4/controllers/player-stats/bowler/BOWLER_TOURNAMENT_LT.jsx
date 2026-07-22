import React from "react";
import TournamentLTCore from "../../../PlayerStats/core/TournamentLTCore.jsx";
import { bowlerTournamentLtConfig } from "../../../PlayerStats/config/bowlerTournamentLt.config.js";

/** Theme 4 bowler Tournament LT. */
export default function BowlerTournamentLT({ match, config }) {
  return (
    <TournamentLTCore
      match={match}
      baseConfig={bowlerTournamentLtConfig}
      config={config}
      variant="bowler"
    />
  );
}
