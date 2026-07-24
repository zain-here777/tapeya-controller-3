import React from "react";
import NameFSCore from "../../../PlayerStats/core/NameFSCore.jsx";
import {
  bowlerFsPanelProps,
  bowlerNameFsConfig,
} from "../../../PlayerStats/config/bowlerNameFs.config.js";

/** Theme 5 bowler Name FS. */
export default function BowlerNameFS({ match, config }) {
  return (
    <NameFSCore
      match={match}
      baseConfig={bowlerNameFsConfig}
      config={config}
      {...bowlerFsPanelProps}
    />
  );
}
