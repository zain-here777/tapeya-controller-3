import React from "react";
import WagonWheelCore from "../../Charts/core/WagonWheelCore.jsx";
import { wagonWheelConfig } from "../../Charts/config/wagonWheel.config.js";

/** WagonWheel — shot map wagon wheel chart. */
export default function WagonWheel({ match, config }) {
  return (
    <WagonWheelCore
      match={match}
      baseConfig={wagonWheelConfig}
      config={config}
    />
  );
}
