import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitFourConfig } from "../../TourHit/config/four.config.js";

/**
 * Theme 4 Tour-Hit Four — tournament fours count badge above a ThisOver main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
