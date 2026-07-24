import React from "react";
import TapeyaPromoLowerThird from "./TapeyaPromoLowerThird.jsx";

/**
 * Theme 5 FollowTapeya — Tapeya logo + follow CTA.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function FollowTapeyaLowerThird(props) {
  return (
    <TapeyaPromoLowerThird
      {...props}
      fallbackHeadline="FOR BALL BY BALL UPDATES FOLLOW"
      fallbackSite="tapeya.com"
      siteLowercase
    />
  );
}
