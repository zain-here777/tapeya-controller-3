import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { strategicTimeoutConfig } from "../../Breaks/config/strategicTimeout.config.js";

/** Theme 5 Strategic Timeout — includes center countdown. */
export default function StrategicTimeout({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={strategicTimeoutConfig}
      config={config}
    />
  );
}
