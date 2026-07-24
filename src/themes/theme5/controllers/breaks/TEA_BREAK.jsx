import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { teaBreakConfig } from "../../Breaks/config/teaBreak.config.js";

/** Theme 5 Tea Break. */
export default function TeaBreak({ match, config }) {
  return (
    <BreakController match={match} baseConfig={teaBreakConfig} config={config} />
  );
}
