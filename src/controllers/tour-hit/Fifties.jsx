import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitFiftiesConfig } from "../../TourHit/config/fifties.config.js";

/**
 * Tour-Hit Fifties — tournament fifties count badge above a ThisOver main bar.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Fifties({ match, config }) {
  return (
    <TourHitController
      match={match}
      baseConfig={tourHitFiftiesConfig}
      config={config}
    />
  );
}
