import React from "react";
import PhaseChartCore from "../../Charts/core/PhaseChartCore.jsx";
import { runRateChartConfig } from "../../Charts/config/runRate.config.js";

/** Theme 4 Run Rate Chart — phase run-rate bar chart. */
export default function RunRateChart({ match, config }) {
  return (
    <PhaseChartCore
      match={match}
      baseConfig={runRateChartConfig}
      config={config}
      defaultTitle="RUN RATE GRAPH"
      defaultYLabel="RUN RATE"
      showWicketBadges={false}
    />
  );
}
