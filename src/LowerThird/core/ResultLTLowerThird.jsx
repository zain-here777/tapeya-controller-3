import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";
import TeamCrest from "../components/TeamCrest.jsx";

/**
 * ResultLT lower third — result pill above bar; team matchup with VS below.
 * Same UI shell as IntroLT / TossLT / MatchSummary.
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
      <div className="match-summary-stack mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        {result ? (
          <div className="match-summary-caption">
            <span className="ctrl-t-summary-title uppercase text-white">
              {result}
            </span>
          </div>
        ) : null}

        <div className="match-summary-shell relative flex h-bar w-full items-stretch overflow-hidden">
          <ResultLogoSlot team={teamA} separator="right" />

          <div className="match-summary-mid match-summary-mid--intro">
            <span className="ctrl-t-summary-team match-summary-team-a min-w-0 truncate text-right uppercase text-white">
              {teamA.name}
            </span>

            <span className="summary-vs-box">
              <span className="ctrl-t-summary-vs uppercase text-white">VS</span>
            </span>

            <span className="ctrl-t-summary-team match-summary-team-b min-w-0 truncate uppercase text-white">
              {teamB.name}
            </span>
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
