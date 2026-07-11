import React from "react";
import BattingSquadCore from "../../FullScreen/core/BattingSquadCore.jsx";
import { bowlingSquadConfig } from "../../FullScreen/config/bowlingSquad.config.js";

/**
 * BowlingSquad — full-screen single-team bowling squad grid (bowler theme).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function BowlingSquad({ match, config }) {
  return (
    <BattingSquadCore
      match={match}
      baseConfig={bowlingSquadConfig}
      config={config}
      tone="bowler"
    />
  );
}
