import React from "react";
import PartnershipListCore from "../../FullScreen/core/PartnershipListCore.jsx";
import { partnershipListConfig } from "../../FullScreen/config/partnershipList.config.js";

/**
 * PartnershipList — full-screen partnership contribution list.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function PartnershipList({ match, config }) {
  return (
    <PartnershipListCore
      match={match}
      baseConfig={partnershipListConfig}
      config={config}
    />
  );
}
