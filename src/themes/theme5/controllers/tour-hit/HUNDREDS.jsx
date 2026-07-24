import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitHundredsConfig } from "../../TourHit/config/hundreds.config.js";

/**
 * Theme 5 Tour-Hit Hundreds — tournament hundreds count badge above a ThisOver main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
