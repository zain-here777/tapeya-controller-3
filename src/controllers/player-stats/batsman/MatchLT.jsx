import React from "react";
import MatchLTCore from "../../../PlayerStats/core/MatchLTCore.jsx";
import { matchLtConfig } from "../../../PlayerStats/config/matchLt.config.js";

/**
 * MatchLT — batsman match stats lower third (Player Stats / Batsman).
 * LastWicket shell; name + runs/balls top, stats right-aligned bottom.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function MatchLT({ match, config }) {
  return (
    <MatchLTCore match={match} baseConfig={matchLtConfig} config={config} />
  );
}
