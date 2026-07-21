import React from "react";
import CompactLabelLowerThird from "./CompactLabelLowerThird.jsx";

/**
 * Theme 4 Scorers lower third — same shell as Umpires; label text only.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function ScorersLowerThird(props) {
  return <CompactLabelLowerThird {...props} fallbackLabel="Scorers" />;
}
