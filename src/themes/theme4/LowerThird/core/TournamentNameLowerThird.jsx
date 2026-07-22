import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import DefaultTeamEndCap from "../components/default/DefaultTeamEndCap.jsx";
import TournamentNameContent from "../components/tournament-name/TournamentNameContent.jsx";

/**
 * Theme 4 Tournament Name lower third — crest | tournament + venue | crest.
 * Spacing matches Match Summary / Intro LT (210px / 45px).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function TournamentNameLowerThird({
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

  const tournament =
    match.tournament ?? config.defaultTournament ?? "ICC WORLD TEST CHAMPIONSHIP";
  const venue = match.venue ?? config.defaultVenue ?? "";

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="mb-[calc(45px*var(--t4-scale))] w-full px-[calc(210px*var(--t4-scale))]">
        <div className="relative flex h-[var(--t4-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2"
            style={{ backgroundColor: teamAColor }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2"
            style={{ backgroundColor: teamBColor }}
            aria-hidden="true"
          />

          <DefaultTeamEndCap
            team={match.teamA}
            barSide="left"
            fallbackColorKey={teamAFallback}
          />

          <TournamentNameContent tournament={tournament} venue={venue} />

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
