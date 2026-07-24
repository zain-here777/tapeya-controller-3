import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { inningsBreakConfig } from "../../Breaks/config/inningsBreak.config.js";

/** Theme 5 Innings Break — full-page break graphic. */
export default function InningsBreak({ match, config }) {
  return (
    <BreakController
      match={match}
      baseConfig={inningsBreakConfig}
      config={config}
    />
  );
}
