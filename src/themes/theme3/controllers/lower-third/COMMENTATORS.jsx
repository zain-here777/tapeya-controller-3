import React from "react";
import CommentatorsLowerThird from "../../LowerThird/core/CommentatorsLowerThird.jsx";
import { commentatorsConfig } from "../../LowerThird/config/commentators.config.js";

/**
 * Commentators — isolated lower-third controller.
 * Same UI as Umpires; shows "Commentators" text only.
 *
 * @param {Object} match
 * @param {Object} [config]
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
