import React from "react";
import InningsFigureCore from "../../FullScreen/core/InningsFigureCore.jsx";
import { inningsFigureConfig } from "../../FullScreen/config/inningsFigure.config.js";

/**
 * InningsFigure — full-screen innings figures (Full Screen).
 * Same UI shell as NeedTarget.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function InningsFigure({ match, config }) {
  return (
    <InningsFigureCore
      match={match}
      baseConfig={inningsFigureConfig}
      config={config}
    />
  );
}
