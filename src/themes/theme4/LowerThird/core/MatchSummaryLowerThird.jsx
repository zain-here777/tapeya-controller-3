import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import DefaultTeamEndCap from "../components/default/DefaultTeamEndCap.jsx";
import MatchSummaryTitle from "../components/match-summary/MatchSummaryTitle.jsx";
import MatchSummaryTeamPanel from "../components/match-summary/MatchSummaryTeamPanel.jsx";
import MatchSummaryVs from "../components/match-summary/MatchSummaryVs.jsx";

/**
 * Theme 4 Match Summary lower third — title above bar; crests, teams, scores, and VS.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function MatchSummaryLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const teamAFallback = config.defaultTeamAColorKey ?? "teamA";
  const teamBFallback = config.defaultTeamBColorKey ?? "teamB";

  const teamAColor = resolveTeamColor(match.teamA.colorKey, teamAFallback);
  const teamBColor = resolveTeamColor(match.teamB.colorKey, teamBFallback);

  const title = match.title ?? config.title ?? "MATCH SUMMARY";

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="mb-[calc(45px*var(--t4-scale))] flex w-full flex-col items-center gap-[calc(8px*var(--t4-scale))] px-[calc(210px*var(--t4-scale))]">
        <MatchSummaryTitle title={title} />

        <div className="flex h-[var(--t4-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]">
          <DefaultTeamEndCap
            team={match.teamA}
            barSide="left"
            fallbackColorKey={teamAFallback}
          />

          <div className="flex min-w-0 flex-1 items-stretch">
            <MatchSummaryTeamPanel
              team={match.teamA}
              backgroundColor={teamAColor}
              side="start"
            />
            <MatchSummaryVs />
            <MatchSummaryTeamPanel
              team={match.teamB}
              backgroundColor={teamBColor}
              side="end"
            />
          </div>

          <DefaultTeamEndCap
            team={match.teamB}
            barSide="right"
            fallbackColorKey={teamBFallback}
          />
        </div>
      </div>
    </div>
  );
}
