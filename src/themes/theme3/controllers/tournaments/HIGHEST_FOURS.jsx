import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestFoursConfig } from "../../Tournaments/config/highestFours.config.js";

/**
 * HighestFours — full-screen tournament highest fours leaderboard.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function HighestFours({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestFoursConfig}
      config={config}
      layout="top"
    />
  );
}
