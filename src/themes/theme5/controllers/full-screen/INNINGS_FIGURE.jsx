import React from "react";
import InningsFigureCore from "../../FullScreen/core/InningsFigureCore.jsx";
import { inningsFigureConfig } from "../../FullScreen/config/inningsFigure.config.js";

export default function InningsFigure({ match, config }) {
  return <InningsFigureCore match={match} baseConfig={inningsFigureConfig} config={config} />;
}
