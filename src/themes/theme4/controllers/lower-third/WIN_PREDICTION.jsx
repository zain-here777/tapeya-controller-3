import React from "react";
import WinPredictionLowerThird from "../../LowerThird/core/WinPredictionLowerThird.jsx";
import { winPredictionConfig } from "../../LowerThird/config/winPrediction.config.js";

/**
 * Theme 4 WinPrediction lower-third controller.
 * Same shell as CurrentPartnership; right panel shows win-prediction percentages.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function WinPrediction({ match, config }) {
  return (
    <WinPredictionLowerThird
      match={match}
      baseConfig={winPredictionConfig}
      config={config}
    />
  );
}
