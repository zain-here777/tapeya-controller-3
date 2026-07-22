import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { topBowlerConfig } from "../../FullScreen/config/topBowler.config.js";

/**
 * TopBowler — full-screen top bowler leaderboard.
 * Same UI as TopBatter.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TopBowler({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={topBowlerConfig}
      config={config}
      layout="center"
    />
  );
}
