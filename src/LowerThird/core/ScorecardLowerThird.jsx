import React from "react";
import LowerThirdController from "./LowerThirdController";
import { buildScorecardColumns } from "../columns/buildColumns";
import BowlerPanel from "../columns/BowlerPanel";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

/**
 * Shared cricket scorecard lower third — team, batters, stats, bowler.
 * Shared shell for all lower-third controllers; each controller passes its own
 * isolated `baseConfig` (built via createLowerThirdConfig) and live `match` data.
 */
export default function ScorecardLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const columns = buildScorecardColumns(match, config.columns);
  const showRightPanel = config.showRightPanel !== false;

  return (
    <LowerThirdController
      config={config}
      columns={columns}
      rightPanel={
        showRightPanel ? (
          <BowlerPanel
            featuredPlayer={match.featuredPlayer}
            team={match.teamB}
            last12Balls={match.last12Balls}
            last30Balls={match.last30Balls}
            currentPartnership={match.currentPartnership}
            winPrediction={match.winPrediction}
            {...config.bowlerPanel}
          />
        ) : null
      }
    />
  );
}
