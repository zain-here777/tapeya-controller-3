import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitFourConfig } from "../../TourHit/config/four.config.js";

/**
 * Tour-Hit Four — tournament fours count badge above a ThisOver main bar.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function Four({ match, config }) {
  return (
    <TourHitController
      match={match}
      baseConfig={tourHitFourConfig}
      config={config}
    />
  );
}
