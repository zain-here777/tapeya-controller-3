import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

/**
 * Compact lower-third scorecard — team code, score, and overs only.
 * Score/overs column matches {@link TeamScore} structure and typography.
 *
 * @param {Object} props
 * @param {{ team?: { code?: string, runs?: number, wickets?: number, overs?: string, oversLimit?: number|string } }} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function MiniScorecardLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.team) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const { code, runs = 0, wickets = 0, overs, oversLimit } = match.team;

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="flex h-bar w-full items-stretch">
        <div className="mini-scorecard-panel">
          {code ? (
            <span className="ctrl-t-team-code ctrl-tracking-tight shrink-0 font-bold uppercase text-white">
              {code}
            </span>
          ) : null}

          <div className="flex w-max shrink-0 flex-col items-end leading-none">
            <span
              key={`${runs}-${wickets}`}
              className="ctrl-t-team-score animate-score-pop shrink-0 leading-none tabular-nums text-white"
            >
              {runs}-{wickets}
            </span>

            {overs ? (
              <span className="ctrl-gap-10 flex shrink-0 items-baseline leading-none tabular-nums text-white">
                <span className="ctrl-t-overs">{overs}</span>
                {oversLimit ? (
                  <span className="ctrl-t-overs-limit">({oversLimit})</span>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
