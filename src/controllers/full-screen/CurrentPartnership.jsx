import React from "react";
import CurrentPartnershipFsCore from "../../FullScreen/core/CurrentPartnershipFsCore.jsx";
import { currentPartnershipFsConfig } from "../../FullScreen/config/currentPartnership.config.js";

/**
 * CurrentPartnership — full-screen partnership graphic (Full Screen).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function CurrentPartnershipFs({ match, config }) {
  return (
    <CurrentPartnershipFsCore
      match={match}
      baseConfig={currentPartnershipFsConfig}
      config={config}
    />
  );
}
