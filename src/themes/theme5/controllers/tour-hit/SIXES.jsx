import React from "react";
import TourHitController from "../../TourHit/core/TourHitController.jsx";
import { tourHitSixesConfig } from "../../TourHit/config/sixes.config.js";

/**
 * Theme 5 Tour-Hit Sixes — tournament sixes count badge above a ThisOver main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
