import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { thisMatchConfig } from "../../FullScreen/config/thisMatch.config.js";

export default function ThisMatch({ match, config }) {
  return (
    <BreakController match={match} baseConfig={thisMatchConfig} config={config} />
  );
}
