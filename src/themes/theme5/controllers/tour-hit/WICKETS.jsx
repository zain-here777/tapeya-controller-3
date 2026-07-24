import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitWicketsConfig } from "../../TourHit/config/wickets.config.js";

/**
 * Theme 5 Tour-Hit Wickets — tournament wickets count badge above a ThisOver main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Wickets({ match, config }) {
  return (
    <TourHitController
      match={match}
      baseConfig={tourHitWicketsConfig}
      config={config}
    />
  );
}
