import React from "react";
import TapeyaPromoLowerThird from "./TapeyaPromoLowerThird.jsx";

/**
 * Theme 4 DownloadTapeya — same shell as FollowTapeya; download CTA copy.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function DownloadTapeyaLowerThird(props) {
  return (
    <TapeyaPromoLowerThird
      {...props}
      fallbackHeadline="FOR BALL BY BALL UPDATES DOWNLOAD"
      fallbackSite="Tapeya App"
    />
  );
}
