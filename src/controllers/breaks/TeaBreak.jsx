import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { teaBreakConfig } from "../../Breaks/config/teaBreak.config.js";

/**
 * TeaBreak — full-page break graphic.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function TeaBreak({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={teaBreakConfig}
      config={config}
    />
  );
}
