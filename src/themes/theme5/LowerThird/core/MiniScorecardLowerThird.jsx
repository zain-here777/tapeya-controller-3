import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";

/**
 * Theme 5 compact lower-third scorecard — team code, score, and overs only.
 * Structure and width match Theme 3 MiniScorecard; colors/typography use Theme 5.
 *
 * @param {Object} props
 * @param {{ team?: { code?: string, runs?: number, wickets?: number, overs?: string, oversLimit?: number|string, colorKey?: string } }} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function MiniScorecardLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.team) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const colorFallback = config.defaultTeamColorKey ?? "teamA";
  const backgroundColor = resolveTeamColor(match.team.colorKey, colorFallback);

  const { code, runs = 0, wickets = 0, overs, oversLimit } = match.team;

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="flex h-[var(--t5-bar-height)] w-full items-stretch">
        <div
          className="flex h-full shrink-0 items-center gap-[calc(48px*var(--t5-scale))] pl-[calc(20px*var(--t5-scale))] pr-[calc(48px*var(--t5-scale))] text-white shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor }}
        >
          {code ? (
            <span className="shrink-0 text-[calc(36px*var(--t5-scale))] font-bold uppercase leading-none tracking-tight">
              {code}
            </span>
          ) : null}

          <div className="flex w-max shrink-0 flex-col items-end leading-none">
            <span
              key={`${runs}-${wickets}`}
              className="animate-score-pop shrink-0 text-[calc(60px*var(--t5-scale))] font-bold leading-none tabular-nums"
            >
              {runs}-{wickets}
            </span>

            {overs ? (
              <span className="flex shrink-0 items-baseline gap-[calc(10px*var(--t5-scale))] leading-none tabular-nums">
                <span className="text-[calc(27px*var(--t5-scale))] font-bold">
                  {overs}
                </span>
                {oversLimit != null && oversLimit !== "" ? (
                  <span className="text-[calc(20px*var(--t5-scale))] font-bold text-white/85">
                    ({oversLimit})
                  </span>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
