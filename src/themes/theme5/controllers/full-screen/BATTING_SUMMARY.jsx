import React from "react";
import BattingSummaryCore from "../../FullScreen/core/BattingSummaryCore.jsx";
import { battingSummaryConfig } from "../../FullScreen/config/battingSummary.config.js";

/**
 * BattingSummary — full-screen batting card summary.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function BattingSummary({ match, config }) {
  return (
    <BattingSummaryCore
      match={match}
      baseConfig={battingSummaryConfig}
      config={config}
    />
  );
}
