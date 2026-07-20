import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import TourHitMiniScorecard from "../components/TourHitMiniScorecard.jsx";

/**
 * Shared Tour-Hit shell — Mini Scorecard badge above a ThisOver-identical main bar.
 *
 * @param {Object} props
 * @param {Object} props.match - Match feed + optional `tourHit` mini fields
 * @param {Object} props.baseConfig - Isolated Tour-Hit config
 * @param {Object} [props.config] - Runtime overrides
 */
export default function TourHitController({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const miniDefaults = config.miniScorecard ?? {};
  const mini = match.tourHit ?? {};
  const battingTeam = match.teamA ?? {};

  return (
    <div className="controller-scaled relative flex w-full flex-col items-stretch font-controller select-none">
      <div className="tour-hit-mini-offset flex w-full justify-start">
        <TourHitMiniScorecard
          logoUrl={mini.logoUrl ?? battingTeam.logoUrl ?? miniDefaults.logoUrl}
          logoText={battingTeam.code ?? mini.logoText ?? miniDefaults.logoText}
          eyebrow={mini.eyebrow ?? miniDefaults.eyebrow}
          title={mini.title ?? miniDefaults.title}
          value={mini.value ?? miniDefaults.value}
        />
      </div>

      <ScorecardLowerThird
        match={match}
        baseConfig={baseConfig}
        config={configOverride}
      />
    </div>
  );
}
