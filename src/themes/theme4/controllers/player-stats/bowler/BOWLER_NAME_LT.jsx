import React from "react";
import NameLTCore from "../../../PlayerStats/core/NameLTCore.jsx";
import { bowlerNameLtConfig } from "../../../PlayerStats/config/bowlerNameLt.config.js";

/** Theme 4 bowler Name LT. */
export default function BowlerNameLT({ match, config }) {
  return (
    <NameLTCore
      match={match}
      baseConfig={bowlerNameLtConfig}
      config={config}
      variant="bowler"
    />
  );
}
