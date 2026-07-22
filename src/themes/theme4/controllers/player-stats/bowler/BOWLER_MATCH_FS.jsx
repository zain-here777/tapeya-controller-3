import React from "react";
import MatchFSCore from "../../../PlayerStats/core/MatchFSCore.jsx";
import { bowlerMatchFsConfig } from "../../../PlayerStats/config/bowlerMatchFs.config.js";
import { bowlerFsPanelProps } from "../../../PlayerStats/config/bowlerNameFs.config.js";

/** Theme 4 bowler Match FS. */
export default function BowlerMatchFS({ match, config }) {
  return (
    <MatchFSCore
      match={match}
      baseConfig={bowlerMatchFsConfig}
      config={config}
      {...bowlerFsPanelProps}
    />
  );
}
