import React from "react";
import WormChartCore from "../../Charts/core/WormChartCore.jsx";
import { wormConfig } from "../../Charts/config/worm.config.js";

/** Theme 5 Worm — score comparison chart. */
export default function Worm({ match, config }) {
  return (
    <WormChartCore match={match} baseConfig={wormConfig} config={config} />
  );
}
