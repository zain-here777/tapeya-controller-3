import React from "react";
import NameLTCore from "../../../PlayerStats/core/NameLTCore.jsx";
import { nameLtConfig } from "../../../PlayerStats/config/nameLt.config.js";

/**
 * NameLT — batsman name + role lower third (Player Stats / Batsman).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NameLT({ match, config }) {
  return (
    <NameLTCore match={match} baseConfig={nameLtConfig} config={config} />
  );
}
