import React from "react";
import WagonWheelCore from "../../Charts/core/WagonWheelCore.jsx";
import { wagonWheelConfig } from "../../Charts/config/wagonWheel.config.js";

/** Theme 5 Wagon Wheel — shot map chart. */
export default function WagonWheel({ match, config }) {
  return (
    <WagonWheelCore
      match={match}
      baseConfig={wagonWheelConfig}
      config={config}
    />
  );
}
