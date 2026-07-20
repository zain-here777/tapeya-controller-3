import React from "react";
import LowerThirdBar from "./LowerThirdBar.jsx";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";

/**
 * Theme 4 scorecard lower third — same `match` API contract as theme 3.
 */
export default function ScorecardLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeConfig(baseConfig, configOverride);

  return <LowerThirdBar match={match} config={config} />;
}
