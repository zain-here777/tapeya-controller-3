import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import DefaultTeamEndCap from "../components/default/DefaultTeamEndCap.jsx";
import DefaultBattingPanel from "../components/default/DefaultBattingPanel.jsx";
import DefaultScoreCenter from "../components/default/DefaultScoreCenter.jsx";
import Last30BallsRightPanel from "../components/last-30-balls/Last30BallsRightPanel.jsx";

/**
 * Theme 5 Last 30 Balls lower third — Default shell without CRR; summary stats on the right.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function Last30BallsLowerThird({
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

  const teamName = match.teamA.name || match.teamA.code;

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="grid h-[var(--t5-bar-height)] w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]">
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
          <Last30BallsRightPanel
            last30Balls={match.last30Balls}
            teamCode={match.teamB.code}
            backgroundColor={bowlingColor}
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
