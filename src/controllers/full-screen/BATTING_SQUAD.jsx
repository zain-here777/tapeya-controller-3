import React from "react";
import BattingSquadCore from "../../FullScreen/core/BattingSquadCore.jsx";
import { battingSquadConfig } from "../../FullScreen/config/battingSquad.config.js";

/**
 * BattingSquad — full-screen single-team batting squad grid.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function BattingSquad({ match, config }) {
  return (
    <BattingSquadCore
      match={match}
      baseConfig={battingSquadConfig}
      config={config}
    />
  );
}
