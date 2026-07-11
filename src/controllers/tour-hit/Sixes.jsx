import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitSixesConfig } from "../../TourHit/config/sixes.config.js";

/**
 * Tour-Hit Sixes — tournament sixes count badge above a ThisOver main bar.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Sixes({ match, config }) {
  return (
    <TourHitController
      match={match}
      baseConfig={tourHitSixesConfig}
      config={config}
    />
  );
}
