import React from "react";
import NeedTargetFsCore from "../../FullScreen/core/NeedTargetFsCore.jsx";
import { needTargetFsConfig } from "../../FullScreen/config/needTarget.config.js";

/**
 * NeedTarget — full-screen chase / target graphic (Full Screen).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NeedTargetFs({ match, config }) {
  return (
    <NeedTargetFsCore
      match={match}
      baseConfig={needTargetFsConfig}
      config={config}
    />
  );
}
