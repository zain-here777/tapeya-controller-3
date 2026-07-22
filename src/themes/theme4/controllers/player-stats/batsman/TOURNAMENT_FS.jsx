import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { tournamentFsConfig } from "../../../PlayerStats/config/tournamentFs.config.js";

/** Theme 4 batsman Tournament FS. */
export default function TournamentFS({ match, config }) {
  return (
    <MatchFSCore
      match={match}
      baseConfig={tournamentFsConfig}
      config={config}
    />
  );
}
