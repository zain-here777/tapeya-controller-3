import React from "react";
import TournamentLTCore from "../../../PlayerStats/core/TournamentLTCore.jsx";
import { tournamentLtConfig } from "../../../PlayerStats/config/tournamentLt.config.js";

/** Theme 4 batsman Tournament LT. */
export default function TournamentLT({ match, config }) {
  return (
    <TournamentLTCore
      match={match}
      baseConfig={tournamentLtConfig}
      config={config}
    />
  );
}
