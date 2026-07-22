import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestWicketsConfig } from "../../Tournaments/config/highestWickets.config.js";

/** Theme 4 Highest Wickets tournament controller. */
export default function HighestWickets({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestWicketsConfig}
      config={config}
      layout="center"
    />
  );
}
