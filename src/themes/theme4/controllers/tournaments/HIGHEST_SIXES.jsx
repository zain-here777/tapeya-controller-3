import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestSixesConfig } from "../../Tournaments/config/highestSixes.config.js";

/** Theme 4 Highest Sixes tournament controller. */
export default function HighestSixes({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestSixesConfig}
      config={config}
      layout="center"
    />
  );
}
