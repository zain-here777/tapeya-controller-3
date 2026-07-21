import React from "react";
import ThisOverLowerThird from "../../LowerThird/core/ThisOverLowerThird.jsx";
import { thisOverConfig } from "../../LowerThird/config/thisOver.config.js";

/**
 * Theme 4 ThisOver lower-third controller.
 * Default shell without CRR; full this-over ball strip always shown.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function ThisOver({ match, config }) {
  return (
    <ThisOverLowerThird
      match={match}
      baseConfig={thisOverConfig}
      config={config}
    />
  );
}
