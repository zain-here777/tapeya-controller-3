import React from "react";
import PhaseChartCore from "../../Charts/core/PhaseChartCore.jsx";
import { manhattanConfig } from "../../Charts/config/manhattan.config.js";

/** Theme 4 Manhattan — phase runs bar chart. */
export default function Manhattan({ match, config }) {
  return (
    <PhaseChartCore
      match={match}
      baseConfig={manhattanConfig}
      config={config}
      defaultTitle="MANHATTAN"
      defaultYLabel="RUNS PER OVER"
      showWicketBadges
    />
  );
}
