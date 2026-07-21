import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitRunsConfig } from "../../TourHit/config/runs.config.js";

/**
 * Theme 4 Tour-Hit Runs — tournament runs count badge above a ThisOver main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Runs({ match, config }) {
  return (
    <TourHitController
      match={match}
      baseConfig={tourHitRunsConfig}
      config={config}
    />
  );
}
