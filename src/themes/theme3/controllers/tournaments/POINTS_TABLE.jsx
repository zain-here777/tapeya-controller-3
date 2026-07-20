import React from "react";
import PointsTableCore from "../../Tournaments/core/PointsTableCore.jsx";
import { pointsTableConfig } from "../../Tournaments/config/pointsTable.config.js";

/**
 * PointsTable — full-screen tournament points table.
 *
 * @param {Object} match
 * @param {Object} [config]
 */
export default function PointsTable({ match, config }) {
  return (
    <PointsTableCore
      match={match}
      baseConfig={pointsTableConfig}
      config={config}
    />
  );
}
