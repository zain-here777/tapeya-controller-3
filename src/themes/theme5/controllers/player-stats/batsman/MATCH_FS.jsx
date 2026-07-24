import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { matchFsConfig } from "../../../PlayerStats/config/matchFs.config.js";

/** Theme 5 batsman Match FS. */
export default function MatchFS({ match, config }) {
  return (
    <MatchFSCore match={match} baseConfig={matchFsConfig} config={config} />
  );
}
