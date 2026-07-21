import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import DefaultTeamEndCap from "../components/default/DefaultTeamEndCap.jsx";
import DefaultBattingPanel from "../components/default/DefaultBattingPanel.jsx";
import DefaultScoreCenter from "../components/default/DefaultScoreCenter.jsx";
import CurrentPartnershipRightPanel from "../components/current-partnership/CurrentPartnershipRightPanel.jsx";

/**
 * Theme 4 Current Partnership lower third — Default shell without CRR;
 * right panel shows partnership title + RUNS/BALLS (batting-side color, Theme 3 behavior).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function CurrentPartnershipLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const battingFallback = config.defaultBattingColorKey ?? "teamA";
  const bowlingFallback = config.defaultBowlingColorKey ?? "teamB";

  const battingColor = resolveTeamColor(match.teamA.colorKey, battingFallback);
  const bowlingColor = resolveTeamColor(match.teamB.colorKey, bowlingFallback);

  const rightPanelColor =
    config.rightPanelUsesBattingColor === false ? bowlingColor : battingColor;

  const teamName = match.teamA.name || match.teamA.code;

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="grid h-[var(--t4-bar-height)] w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]">
        <div className="flex min-w-0 items-stretch">
          <DefaultTeamEndCap
            team={match.teamA}
            barSide="left"
            fallbackColorKey={battingFallback}
          />
          <DefaultBattingPanel
            team={match.teamA}
            batters={match.batters}
            backgroundColor={battingColor}
          />
        </div>

        <DefaultScoreCenter
          runs={match.teamA.runs}
          wickets={match.teamA.wickets}
          teamName={teamName}
          scoreColor={battingColor}
        />

        <div className="flex min-w-0 items-stretch justify-end">
          <CurrentPartnershipRightPanel
            currentPartnership={match.currentPartnership}
            teamCode={match.teamB.code}
            backgroundColor={rightPanelColor}
          />
          <DefaultTeamEndCap
            team={match.teamB}
            barSide="right"
            fallbackColorKey={bowlingFallback}
          />
        </div>
      </div>
    </div>
  );
}
