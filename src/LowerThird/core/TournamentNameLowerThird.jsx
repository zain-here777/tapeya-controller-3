import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";
import TeamCrest from "../components/TeamCrest.jsx";

/**
 * TournamentName lower third — IntroLT shell with logos + tournament + venue.
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

  mergeControllerConfig(baseConfig, configOverride);

  const {
    tournament = "LAHORE SUMMER CUP",
    venue = "LIVE FROM GADDAFI STADIUM LAHORE",
    teamA,
    teamB,
  } = match;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div className="match-summary-shell relative flex h-bar w-full items-stretch overflow-hidden">
          <TournamentLogoSlot team={teamA} separator="right" />

          <div className="relative z-[1] flex min-w-0 flex-1 flex-col bg-transparent">
            <div className="flex min-h-0 flex-1 items-center justify-center bg-transparent px-[calc(28px*var(--cs))]">
              <span className="ctrl-t-tournament-name uppercase text-white">
                {tournament}
              </span>
            </div>

            {venue ? (
              <div className="flex h-[calc(56px*var(--cs))] shrink-0 items-center justify-center border-t border-divider bg-transparent px-[calc(28px*var(--cs))]">
                <span className="ctrl-t-summary-title uppercase text-white">
                  {venue}
                </span>
              </div>
            ) : null}
          </div>

          <TournamentLogoSlot team={teamB} separator="left" />
        </div>
      </div>
    </div>
  );
}

function TournamentLogoSlot({ team, separator }) {
  return (
    <div className="relative z-[1] flex h-full shrink-0 items-stretch">
      {separator === "left" ? (
        <div className="w-px shrink-0 self-stretch bg-divider" aria-hidden="true" />
      ) : null}
      <div className="flex w-[calc(96px*var(--cs))] shrink-0 items-center justify-center bg-transparent p-[calc(12px*var(--cs))]">
        <TeamCrest
          code={team.code}
          name={team.name}
          logoUrl={team.logoUrl}
          theme={team.theme ?? "gold"}
          size="md"
        />
      </div>
      {separator === "right" ? (
        <div className="w-px shrink-0 self-stretch bg-divider" aria-hidden="true" />
      ) : null}
    </div>
  );
}
