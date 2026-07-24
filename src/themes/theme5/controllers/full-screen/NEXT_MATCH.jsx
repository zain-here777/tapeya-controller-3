import React from "react";
import BreakController from "../../Breaks/core/BreakController.jsx";
import { nextMatchConfig } from "../../FullScreen/config/nextMatch.config.js";

export default function NextMatch({ match, config }) {
  return (
    <BreakController match={match} baseConfig={nextMatchConfig} config={config} />
  );
}
