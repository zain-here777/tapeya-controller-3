import React from "react";
import MatchLTCore from "../../../PlayerStats/core/MatchLTCore.jsx";
import { bowlerMatchLtConfig } from "../../../PlayerStats/config/bowlerMatchLt.config.js";

/**
 * MatchLT — bowler match stats lower third (Player Stats / Bowler).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function MatchLT({ match, config }) {
  return (
    <MatchLTCore
      match={match}
      baseConfig={bowlerMatchLtConfig}
      config={config}
      panelBg="bg-bowler-panel"
    />
  );
}
