import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import ThisOverLowerThird from "../../LowerThird/core/ThisOverLowerThird.jsx";
import TourHitMiniScorecard from "../components/TourHitMiniScorecard.jsx";

/**
 * Shared Theme 5 Tour-Hit shell — mini badge above a ThisOver-identical main bar.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function TourHitController({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const miniDefaults = config.miniScorecard ?? {};
  const mini = match.tourHit ?? {};
  const battingTeam = match.teamA ?? {};
  const battingFallback = config.defaultBattingColorKey ?? "teamA";
  const badgeColor = resolveTeamColor(battingTeam.colorKey, battingFallback);

  return (
    <div className="relative flex w-full flex-col items-stretch select-none font-montserrat">
      <div className="t5-tour-hit-mini-offset flex w-full justify-start">
        <TourHitMiniScorecard
          logoUrl={mini.logoUrl ?? battingTeam.logoUrl ?? miniDefaults.logoUrl}
          logoText={battingTeam.code ?? mini.logoText ?? miniDefaults.logoText}
          eyebrow={mini.eyebrow ?? miniDefaults.eyebrow}
          title={mini.title ?? miniDefaults.title}
          value={mini.value ?? miniDefaults.value}
          backgroundColor={badgeColor}
        />
      </div>

      <ThisOverLowerThird
        match={match}
        baseConfig={baseConfig}
        config={configOverride}
      />
    </div>
  );
}
