import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { bowlerTournamentFsConfig } from "../../../PlayerStats/config/bowlerTournamentFs.config.js";
import { bowlerFsPanelProps } from "../../../PlayerStats/config/bowlerNameFs.config.js";

/** Theme 4 bowler Tournament FS. */
export default function BowlerTournamentFS({ match, config }) {
  return (
    <MatchFSCore
      match={match}
      baseConfig={bowlerTournamentFsConfig}
      config={config}
      {...bowlerFsPanelProps}
    />
  );
}
