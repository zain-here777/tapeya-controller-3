import React from "react";
import LastWicketFsCore from "../../FullScreen/core/LastWicketFsCore.jsx";
import { lastWicketFsConfig } from "../../FullScreen/config/lastWicket.config.js";

/**
 * LastWicket — full-screen dismissed batter graphic (Full Screen).
 * Same UI shell as batsman MatchFS.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function LastWicket({ match, config }) {
  return (
    <LastWicketFsCore
      match={match}
      baseConfig={lastWicketFsConfig}
      config={config}
    />
  );
}
