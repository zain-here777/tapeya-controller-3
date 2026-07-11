import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitHundredsConfig } from "../../TourHit/config/hundreds.config.js";

/**
 * Tour-Hit Hundreds — tournament hundreds count badge above a ThisOver main bar.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Hundreds({ match, config }) {
  return (
    <TourHitController
      match={match}
      baseConfig={tourHitHundredsConfig}
      config={config}
    />
  );
}
