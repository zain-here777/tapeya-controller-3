import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { rainStoppedConfig } from "../../Breaks/config/rainStopped.config.js";

/** Theme 5 Rain Stopped. */
export default function RainStopped({ match, config }) {
  return (
    <BreakController match={match} baseConfig={rainStoppedConfig} config={config} />
  );
}
