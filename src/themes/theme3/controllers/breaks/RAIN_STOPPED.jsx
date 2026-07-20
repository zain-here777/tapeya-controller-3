import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { rainStoppedConfig } from "../../Breaks/config/rainStopped.config.js";

/**
 * RainStopped — full-page break graphic.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function RainStopped({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={rainStoppedConfig}
      config={config}
    />
  );
}
