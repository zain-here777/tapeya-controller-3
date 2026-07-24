import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitFiftiesConfig } from "../../TourHit/config/fifties.config.js";

/**
 * Theme 5 Tour-Hit Fifties — tournament fifties count badge above a ThisOver main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
