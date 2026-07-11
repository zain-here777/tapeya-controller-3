import React from "react";
import NameFSCore from "../../../PlayerStats/core/NameFSCore.jsx";
import { nameFsConfig } from "../../../PlayerStats/config/nameFs.config.js";

/**
 * NameFS — full-screen batsman name graphic (Player Stats / Batsman).
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function NameFS({ match, config }) {
  return (
    <NameFSCore match={match} baseConfig={nameFsConfig} config={config} />
  );
}
