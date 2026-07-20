import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { lunchBreakConfig } from "../../Breaks/config/lunchBreak.config.js";

/**
 * LunchBreak — full-page break graphic.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function LunchBreak({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={lunchBreakConfig}
      config={config}
    />
  );
}
