import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { matchFsConfig } from "../../../PlayerStats/config/matchFs.config.js";

/**
 * MatchFS — full-screen batsman match graphic (Player Stats / Batsman).
 * Same UI shell as NameFS.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function MatchFS({ match, config }) {
  return (
    <MatchFSCore match={match} baseConfig={matchFsConfig} config={config} />
  );
}
