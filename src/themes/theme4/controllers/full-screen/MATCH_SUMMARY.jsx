import React from "react";
import MatchSummaryFsCore from "../../FullScreen/core/MatchSummaryFsCore.jsx";
import { matchSummaryFsConfig } from "../../FullScreen/config/matchSummary.config.js";

export default function MatchSummaryFs({ match, config }) {
  return <MatchSummaryFsCore match={match} baseConfig={matchSummaryFsConfig} config={config} />;
}
