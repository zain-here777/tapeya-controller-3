import React from "react";
import FowLowerThird from "../../LowerThird/core/FowLowerThird.jsx";
import { fowConfig } from "../../LowerThird/config/fow.config.js";

/**
 * Theme 4 FOW (Fall of Wickets) lower-third controller.
 * Team left, title right, wicket stacks centered on the full bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function FOW({ match, config }) {
  return <FowLowerThird match={match} baseConfig={fowConfig} config={config} />;
}
