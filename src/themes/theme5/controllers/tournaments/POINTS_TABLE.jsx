import React from "react";
import PointsTableCore from "../../Tournaments/core/PointsTableCore.jsx";
import { pointsTableConfig } from "../../Tournaments/config/pointsTable.config.js";

/** Theme 5 Points Table tournament controller. */
export default function PointsTable({ match, config }) {
  return (
    <PointsTableCore match={match} baseConfig={pointsTableConfig} config={config} />
  );
}
