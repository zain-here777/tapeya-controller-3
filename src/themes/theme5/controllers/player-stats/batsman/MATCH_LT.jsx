import React from "react";
import MatchLTCore from "../../../PlayerStats/core/MatchLTCore.jsx";
import { matchLtConfig } from "../../../PlayerStats/config/matchLt.config.js";

/** Theme 5 batsman Match LT. */
export default function MatchLT({ match, config }) {
  return (
    <MatchLTCore match={match} baseConfig={matchLtConfig} config={config} />
  );
}
