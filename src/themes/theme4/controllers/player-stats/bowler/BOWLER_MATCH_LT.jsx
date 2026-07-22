import React from "react";
import MatchLTCore from "../../../PlayerStats/core/MatchLTCore.jsx";
import { bowlerMatchLtConfig } from "../../../PlayerStats/config/bowlerMatchLt.config.js";

/** Theme 4 bowler Match LT. */
export default function BowlerMatchLT({ match, config }) {
  return (
    <MatchLTCore
      match={match}
      baseConfig={bowlerMatchLtConfig}
      config={config}
      variant="bowler"
    />
  );
}
