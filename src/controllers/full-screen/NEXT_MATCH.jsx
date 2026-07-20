import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { nextMatchConfig } from "../../FullScreen/config/nextMatch.config.js";

/**
 * NextMatch — full-screen upcoming matchup (Full Screen).
 * Same UI as ThisMatch; status pill reads NEXT MATCH.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NextMatch({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={nextMatchConfig}
      config={config}
    />
  );
}
