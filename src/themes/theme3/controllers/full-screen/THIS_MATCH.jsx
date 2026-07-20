import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { thisMatchConfig } from "../../FullScreen/config/thisMatch.config.js";

/**
 * ThisMatch — full-screen matchup graphic (Full Screen).
 * Same UI as InningsBreak; status pill reads THIS MATCH.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function ThisMatch({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={thisMatchConfig}
      config={config}
    />
  );
}
