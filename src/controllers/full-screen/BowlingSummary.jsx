import React from "react";
import BowlingSummaryCore from "../../FullScreen/core/BowlingSummaryCore.jsx";
import { bowlingSummaryConfig } from "../../FullScreen/config/bowlingSummary.config.js";

/**
 * BowlingSummary — full-screen bowling card summary.
 * Same UI shell as BattingSummary.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function BowlingSummary({ match, config }) {
  return (
    <BowlingSummaryCore
      match={match}
      baseConfig={bowlingSummaryConfig}
      config={config}
    />
  );
}
