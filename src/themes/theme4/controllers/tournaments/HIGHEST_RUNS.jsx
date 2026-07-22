import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestRunsConfig } from "../../Tournaments/config/highestRuns.config.js";

/** Theme 4 Highest Runs tournament controller. */
export default function HighestRuns({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestRunsConfig}
      config={config}
      layout="center"
    />
  );
}
