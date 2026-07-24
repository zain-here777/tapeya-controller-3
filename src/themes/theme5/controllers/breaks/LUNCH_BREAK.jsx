import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { lunchBreakConfig } from "../../Breaks/config/lunchBreak.config.js";

/** Theme 5 Lunch Break. */
export default function LunchBreak({ match, config }) {
  return (
    <BreakController match={match} baseConfig={lunchBreakConfig} config={config} />
  );
}
