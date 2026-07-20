import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { strategicTimeoutConfig } from "../../Breaks/config/strategicTimeout.config.js";

/**
 * StrategicTimeout — full-page break graphic.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function StrategicTimeout({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={strategicTimeoutConfig}
      config={config}
    />
  );
}
