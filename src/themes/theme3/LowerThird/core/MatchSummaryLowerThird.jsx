import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";
import TeamCrest from "../components/TeamCrest.jsx";

/**
 * Match summary lower third — title pill above bar; teams, scores, and VS below.
 * Layout uses Tailwind v3 utilities; scaled sizes use --cs via arbitrary values.
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

  mergeControllerConfig(baseConfig, configOverride);

  const { title = "MATCH SUMMARY", teamA, teamB } = match;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="match-summary-stack mb-[calc(45px*var(--cs))] w-full px-[calc(210px*var(--cs))]">
        <div className="match-summary-caption">
          <span className="ctrl-t-summary-title uppercase text-white">{title}</span>
        </div>

        <div className="match-summary-shell relative flex h-bar w-full items-stretch overflow-hidden">
          <SummaryLogoSlot team={teamA} separator="right" />

          <div className="match-summary-mid">
            <span className="ctrl-t-summary-team match-summary-team-a min-w-0 truncate uppercase text-white">
              {teamA.name}
            </span>

            <div className="match-summary-score-a">
              <SummaryScoreBlock
                runs={teamA.runs}
                wickets={teamA.wickets}
                overs={teamA.overs}
              />
            </div>

            <span className="summary-vs-box">
              <span className="ctrl-t-summary-vs uppercase text-white">VS</span>
            </span>

            <div className="match-summary-score-b">
              <SummaryScoreBlock
                runs={teamB.runs}
                wickets={teamB.wickets}
                overs={teamB.overs}
              />
            </div>

            <span className="ctrl-t-summary-team match-summary-team-b min-w-0 truncate text-right uppercase text-white">
              {teamB.name}
            </span>
          </div>

          <SummaryLogoSlot team={teamB} separator="left" />
        </div>
      </div>
    </div>
  );
}

function SummaryLogoSlot({ team, separator }) {
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

function SummaryScoreBlock({ runs = 0, wickets = 0, overs }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span
        key={`${runs}-${wickets}`}
        className="ctrl-t-score-md animate-score-pop tabular-nums text-white"
      >
        {runs}-{wickets}
      </span>
      {overs ? (
        <span className="ctrl-t-overs-sm ctrl-mt-2 uppercase text-white">
          {overs} OVER
        </span>
      ) : null}
    </div>
  );
}
