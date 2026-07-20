import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { topBatterConfig } from "../../FullScreen/config/topBatter.config.js";

/**
 * TopBatter — full-screen top batter leaderboard.
 * Same UI as HighestRuns.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TopBatter({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={topBatterConfig}
      config={config}
      layout="top"
    />
  );
}
