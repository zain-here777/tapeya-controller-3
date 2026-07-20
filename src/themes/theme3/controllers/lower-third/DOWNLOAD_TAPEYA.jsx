import React from "react";
import DownloadTapeyaLowerThird from "../../LowerThird/core/DownloadTapeyaLowerThird.jsx";
import { downloadTapeyaConfig } from "../../LowerThird/config/downloadTapeya.config.js";

/**
 * DownloadTapeya — isolated lower-third controller.
 * Same UI as FollowTapeya.
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto downloadTapeyaConfig
 */
export default function DownloadTapeya({ match, config }) {
  return (
    <DownloadTapeyaLowerThird
      match={match}
      baseConfig={downloadTapeyaConfig}
      config={config}
    />
  );
}
