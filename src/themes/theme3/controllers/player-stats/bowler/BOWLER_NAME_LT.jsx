import React from "react";
import NameLTCore from "../../../PlayerStats/core/NameLTCore.jsx";
import { bowlerNameLtConfig } from "../../../PlayerStats/config/bowlerNameLt.config.js";

/**
 * NameLT — bowler name + role lower third (Player Stats / Bowler).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NameLT({ match, config }) {
  return (
    <NameLTCore
      match={match}
      baseConfig={bowlerNameLtConfig}
      config={config}
      panelBg="bg-bowler-panel"
    />
  );
}
