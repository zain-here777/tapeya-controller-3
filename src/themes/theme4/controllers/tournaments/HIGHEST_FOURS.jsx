import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestFoursConfig } from "../../Tournaments/config/highestFours.config.js";

/** Theme 4 Highest Fours tournament controller. */
export default function HighestFours({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestFoursConfig}
      config={config}
      layout="center"
    />
  );
}
