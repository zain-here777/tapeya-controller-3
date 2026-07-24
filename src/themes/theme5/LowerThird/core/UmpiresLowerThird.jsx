import React from "react";
import CompactLabelLowerThird from "./CompactLabelLowerThird.jsx";

/**
 * Theme 5 Umpires lower third — compact label bar with "Umpires" text.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function UmpiresLowerThird(props) {
  return <CompactLabelLowerThird {...props} fallbackLabel="Umpires" />;
}
