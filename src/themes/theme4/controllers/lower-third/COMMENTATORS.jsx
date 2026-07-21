import React from "react";
import CommentatorsLowerThird from "../../LowerThird/core/CommentatorsLowerThird.jsx";
import { commentatorsConfig } from "../../LowerThird/config/commentators.config.js";

/**
 * Theme 4 Commentators lower-third controller.
 * Compact bar with "Commentators" label (same shell as Umpires).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function Commentators({ match, config }) {
  return (
    <CommentatorsLowerThird
      match={match}
      baseConfig={commentatorsConfig}
      config={config}
    />
  );
}
