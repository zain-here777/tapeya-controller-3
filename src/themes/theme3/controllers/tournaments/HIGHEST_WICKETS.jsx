import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestWicketsConfig } from "../../Tournaments/config/highestWickets.config.js";

/**
 * HighestWickets — full-screen tournament highest wickets leaderboard.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function HighestWickets({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestWicketsConfig}
      config={config}
      layout="top"
    />
  );
}
