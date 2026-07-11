import React from "react";
import TournamentLeaderboardCore from "../../Tournaments/core/TournamentLeaderboardCore.jsx";
import { highestSixesConfig } from "../../Tournaments/config/highestSixes.config.js";

/**
 * HighestSixes — full-screen tournament highest sixes leaderboard.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function HighestSixes({ match, config }) {
  return (
    <TournamentLeaderboardCore
      match={match}
      baseConfig={highestSixesConfig}
      config={config}
      layout="top"
    />
  );
}
