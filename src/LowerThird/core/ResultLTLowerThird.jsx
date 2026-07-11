import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";
import TeamCrest from "../components/TeamCrest.jsx";

/**
 * ResultLT lower third — TournamentName shell with matchup + result.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function ResultLTLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const { result = "TIE", teamA, teamB } = match;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div className="match-summary-shell relative flex h-bar w-full items-stretch overflow-hidden">
          <ResultLogoSlot team={teamA} separator="right" />

          <div className="relative z-[1] flex min-w-0 flex-1 flex-col bg-transparent">
            <div className="grid min-h-0 flex-1 grid-cols-[1fr_auto_1fr] items-center gap-x-[calc(24px*var(--cs))] bg-transparent px-[calc(28px*var(--cs))]">
              <span className="ctrl-t-summary-team flex-none justify-self-end whitespace-nowrap uppercase text-white">
                {teamA.name}
              </span>
              <span className="ctrl-t-summary-vs lowercase text-white">vs</span>
              <span className="ctrl-t-summary-team flex-none justify-self-start whitespace-nowrap uppercase text-white">
                {teamB.name}
              </span>
            </div>

            {result ? (
              <div className="flex h-[calc(56px*var(--cs))] shrink-0 items-center justify-center border-t border-divider bg-transparent px-[calc(28px*var(--cs))]">
                <span className="ctrl-t-summary-title uppercase text-white">
                  {result}
                </span>
              </div>
            ) : null}
          </div>

          <ResultLogoSlot team={teamB} separator="left" />
        </div>
      </div>
    </div>
  );
}

function ResultLogoSlot({ team, separator }) {
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
