import React from "react";
import DownloadTapeyaLowerThird from "../../LowerThird/core/DownloadTapeyaLowerThird.jsx";
import { downloadTapeyaConfig } from "../../LowerThird/config/downloadTapeya.config.js";

/**
 * Theme 4 DownloadTapeya lower-third controller.
 * Same shell as FollowTapeya; download CTA copy.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
