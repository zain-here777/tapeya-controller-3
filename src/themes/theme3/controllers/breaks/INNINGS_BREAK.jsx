import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { inningsBreakConfig } from "../../Breaks/config/inningsBreak.config.js";

/**
 * InningsBreak — full-page break graphic.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function InningsBreak({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={inningsBreakConfig}
      config={config}
    />
  );
}
